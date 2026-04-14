/* ============================================
   Vị Thần Quyết Định — Decision Oracle
   oracle.js — All feature logic
   ============================================ */

(function () {
  'use strict';

  // ── Constants ────────────────────────────────────────────────────────────────
  const MAX_HISTORY       = 20;  // FIX: BUG-005 — spec requires 20, not 10
  const MAX_QUESTION_LEN  = 200; // FIX: BUG-001 — spec requires 200, not 120
  const STORAGE_KEY       = 'oracle_history';
  const ANIM_SUMMON_MS    = 1800;  // Phase 1: summoning
  const ANIM_REVEAL_MS    = 600;   // Phase 2: reveal
  const ANIM_CARD_DELAY   = 300;   // ms after REVEAL start before card appears

  // ── Answer Pool ──────────────────────────────────────────────────────────────
  // Each entry: { key: i18n key, weight: relative probability }
  // Category probabilities: YES 38%, NO 32%, MAYBE 22%, OMINOUS 8%

  const ANSWER_POOL = {
    YES: [
      { key: 'oracle.yes_1',  weight: 1 },
      { key: 'oracle.yes_2',  weight: 1 },
      { key: 'oracle.yes_3',  weight: 1 },
      { key: 'oracle.yes_4',  weight: 1 },
      { key: 'oracle.yes_5',  weight: 1 },
      { key: 'oracle.yes_6',  weight: 1 },
      { key: 'oracle.yes_7',  weight: 1 },
      { key: 'oracle.yes_8',  weight: 2 },  // slightly favored — most dramatic
      { key: 'oracle.yes_9',  weight: 1 },
      { key: 'oracle.yes_10', weight: 1 },
      { key: 'oracle.yes_11', weight: 1 },
      { key: 'oracle.yes_12', weight: 1 },
      { key: 'oracle.yes_13', weight: 1 },
      { key: 'oracle.yes_14', weight: 1 },
      { key: 'oracle.yes_15', weight: 1 },
      { key: 'oracle.yes_16', weight: 2 },  // dramatic — favored
      { key: 'oracle.yes_17', weight: 1 },
      { key: 'oracle.yes_18', weight: 1 },
      { key: 'oracle.yes_19', weight: 1 },
      { key: 'oracle.yes_20', weight: 1 },
    ],
    NO: [
      { key: 'oracle.no_1',   weight: 1 },
      { key: 'oracle.no_2',   weight: 1 },
      { key: 'oracle.no_3',   weight: 1 },
      { key: 'oracle.no_4',   weight: 1 },
      { key: 'oracle.no_5',   weight: 1 },
      { key: 'oracle.no_6',   weight: 1 },
      { key: 'oracle.no_7',   weight: 1 },
      { key: 'oracle.no_8',   weight: 2 },
      { key: 'oracle.no_9',   weight: 1 },
      { key: 'oracle.no_10',  weight: 1 },
      { key: 'oracle.no_11',  weight: 1 },
      { key: 'oracle.no_12',  weight: 1 },
      { key: 'oracle.no_13',  weight: 1 },
      { key: 'oracle.no_14',  weight: 1 },
      { key: 'oracle.no_15',  weight: 1 },
      { key: 'oracle.no_16',  weight: 1 },
      { key: 'oracle.no_17',  weight: 1 },
      { key: 'oracle.no_18',  weight: 1 },
      { key: 'oracle.no_19',  weight: 2 },  // dramatic — favored
      { key: 'oracle.no_20',  weight: 1 },
    ],
    MAYBE: [
      { key: 'oracle.maybe_1',  weight: 1 },
      { key: 'oracle.maybe_2',  weight: 1 },
      { key: 'oracle.maybe_3',  weight: 1 },
      { key: 'oracle.maybe_4',  weight: 1 },
      { key: 'oracle.maybe_5',  weight: 1 },
      { key: 'oracle.maybe_6',  weight: 1 },
      { key: 'oracle.maybe_7',  weight: 1 },
      { key: 'oracle.maybe_8',  weight: 1 },
      { key: 'oracle.maybe_9',  weight: 1 },
      { key: 'oracle.maybe_10', weight: 1 },
      { key: 'oracle.maybe_11', weight: 1 },
      { key: 'oracle.maybe_12', weight: 1 },
      { key: 'oracle.maybe_13', weight: 1 },
      { key: 'oracle.maybe_14', weight: 1 },
      { key: 'oracle.maybe_15', weight: 1 },
    ],
    OMINOUS: [
      { key: 'oracle.ominous_1',  weight: 1 },
      { key: 'oracle.ominous_2',  weight: 1 },
      { key: 'oracle.ominous_3',  weight: 1 },
      { key: 'oracle.ominous_4',  weight: 1 },
      { key: 'oracle.ominous_5',  weight: 1 },
      { key: 'oracle.ominous_6',  weight: 1 },
      { key: 'oracle.ominous_7',  weight: 1 },
      { key: 'oracle.ominous_8',  weight: 1 },
      { key: 'oracle.ominous_9',  weight: 1 },
      { key: 'oracle.ominous_10', weight: 1 },
    ],
  };

  // Category icon mapping for chips
  const CATEGORY_ICONS = {
    YES:     'fa-check-circle',
    NO:      'fa-times-circle',
    MAYBE:   'fa-question-circle',
    OMINOUS: 'fa-skull',
  };

  // Category colors for particle bursts
  const CATEGORY_COLORS = {
    YES:     '#f59e0b',
    NO:      '#ef4444',
    MAYBE:   '#94a3b8',
    OMINOUS: '#c084fc',
  };

  // ── Module State ─────────────────────────────────────────────────────────────
  let isAnimating   = false;            // blocks re-entry during animation
  let currentResult = null;             // { category, answerKey, question } | null
  let history       = [];               // loaded from localStorage on init

  // ── Particle Engine ──────────────────────────────────────────────────────────

  class OracleParticles {
    constructor(canvas) {
      this.canvas    = canvas;
      this.ctx       = canvas.getContext('2d');
      this.particles = [];
      this._raf      = null;
      this._resize();
      window.addEventListener('resize', () => this._resize());
      // Pause when tab is hidden to save resources
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) this.pause();
        else                  this.resume();
      });
    }

    _resize() {
      this.canvas.width  = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    /**
     * Emit `count` particles from (x, y) with optional color override.
     * @param {number} x
     * @param {number} y
     * @param {number} count
     * @param {string} color — CSS color string
     */
    burst(x, y, count, color = '#f59e0b') {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 3;
        this.particles.push({
          x,
          y,
          vx:    Math.cos(angle) * speed,
          vy:    Math.sin(angle) * speed - 1,   // slight upward bias
          life:  1.0,
          decay: 0.012 + Math.random() * 0.01,
          size:  1.5 + Math.random() * 3,
          color,
          glow:  Math.random() > 0.5,
        });
      }
      // Cap at 120 live particles; drop oldest if over
      if (this.particles.length > 120) {
        this.particles.splice(0, this.particles.length - 120);
      }
      if (!this._raf) this._loop();
    }

    _loop() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles = this.particles.filter(p => p.life > 0);
      for (const p of this.particles) {
        p.x    += p.vx;
        p.y    += p.vy;
        p.vy   += 0.04;         // gravity
        p.life -= p.decay;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        if (p.glow) {
          ctx.shadowBlur  = 10;
          ctx.shadowColor = p.color;
        }
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      if (this.particles.length > 0) {
        this._raf = requestAnimationFrame(() => this._loop());
      } else {
        this._raf = null;
      }
    }

    pause()  { if (this._raf) { cancelAnimationFrame(this._raf); this._raf = null; } }
    resume() { if (this.particles.length > 0) this._loop(); }
  }

  // ── Animator State Machine ────────────────────────────────────────────────────

  class OracleAnimator {
    /**
     * @param {HTMLElement} sigilEl  — #oracle-sigil
     * @param {OracleParticles} particles
     */
    constructor(sigilEl, particles) {
      this.sigil     = sigilEl;
      this.particles = particles;
      this._phase    = 'IDLE';
    }

    /**
     * Run full SUMMONING → REVEAL → RESULT sequence.
     * @param {string}   category   — 'YES' | 'NO' | 'MAYBE' | 'OMINOUS'
     * @param {Function} onComplete — called when RESULT phase begins
     */
    run(category, onComplete) {
      this._phase = 'SUMMONING';
      this._startSummoning();

      setTimeout(() => {
        this._phase = 'REVEAL';
        this._startReveal(category);

        setTimeout(() => {
          this._phase = 'RESULT';
          this._startResult();
          onComplete();
        }, ANIM_REVEAL_MS);
      }, ANIM_SUMMON_MS);
    }

    _startSummoning() {
      // Apply summoning CSS class
      this.sigil.classList.remove('oracle-sigil--reveal', 'oracle-sigil--result');
      this.sigil.classList.add('oracle-sigil--summoning');

      // Particle burst #1 — gold sparks from sigil center
      const rect  = this.sigil.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;

      // Only burst if not reduced-motion
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.particles.burst(cx, cy, 40, '#f59e0b');
      }

      // Play summoning sound
      playSummoningSound();
    }

    _startReveal(category) {
      this.sigil.classList.remove('oracle-sigil--summoning');
      this.sigil.classList.add('oracle-sigil--reveal');

      // Particle burst #2 — category-colored sparks
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const rect = this.sigil.getBoundingClientRect();
        const cx   = rect.left + rect.width  / 2;
        const cy   = rect.top  + rect.height / 2;
        this.particles.burst(cx, cy, 20, CATEGORY_COLORS[category] || '#f59e0b');
      }

      // Reveal sound
      playRevealSound();
    }

    _startResult() {
      this.sigil.classList.remove('oracle-sigil--reveal');
      this.sigil.classList.add('oracle-sigil--result');
    }

    reset() {
      this.sigil.classList.remove('oracle-sigil--summoning', 'oracle-sigil--reveal', 'oracle-sigil--result');
      this._phase = 'IDLE';
    }
  }

  // ── Sound Functions ───────────────────────────────────────────────────────────

  /** Low drone + rising shimmer for the summoning invocation */
  function playSummoningSound() {
    if (!window.sound || !window.sound.enabled) return;
    try {
      const ctx = window.sound._getCtx();
      const t   = ctx.currentTime;

      // Low rumbling bass drone
      const drone     = ctx.createOscillator();
      const droneGain = ctx.createGain();
      drone.type = 'sawtooth';
      drone.frequency.setValueAtTime(55, t);
      drone.frequency.linearRampToValueAtTime(80, t + 1.8);
      droneGain.gain.setValueAtTime(0.0, t);
      droneGain.gain.linearRampToValueAtTime(0.12, t + 0.3);
      droneGain.gain.linearRampToValueAtTime(0.0, t + 1.8);
      drone.connect(droneGain);
      droneGain.connect(ctx.destination);
      drone.start(t);
      drone.stop(t + 1.8);

      // High rising shimmer
      const shimmer     = ctx.createOscillator();
      const shimmerGain = ctx.createGain();
      shimmer.type = 'sine';
      shimmer.frequency.setValueAtTime(400, t + 0.6);
      shimmer.frequency.exponentialRampToValueAtTime(1800, t + 1.8);
      shimmerGain.gain.setValueAtTime(0.0, t + 0.6);
      shimmerGain.gain.linearRampToValueAtTime(0.18, t + 1.2);
      shimmerGain.gain.exponentialRampToValueAtTime(0.001, t + 1.8);
      shimmer.connect(shimmerGain);
      shimmerGain.connect(ctx.destination);
      shimmer.start(t + 0.6);
      shimmer.stop(t + 1.8);
    } catch (e) {
      // Web Audio not available — fail silently
    }
  }

  /** Ascending arpeggio chord at answer reveal */
  function playRevealSound() {
    if (!window.sound || !window.sound.enabled) return;
    try {
      window.sound.success();
    } catch (e) {
      // Fail silently
    }
  }

  // ── Answer Engine ─────────────────────────────────────────────────────────────

  /**
   * Pick a category using weighted random probabilities.
   * YES 38%, NO 32%, MAYBE 22%, OMINOUS 8%
   * @returns {string}
   */
  function rollCategory() {
    const r = Math.random();
    if (r < 0.38) return 'YES';
    if (r < 0.70) return 'NO';
    if (r < 0.92) return 'MAYBE';
    return 'OMINOUS';
  }

  /**
   * Pick a weighted random entry from a pool array.
   * Avoids repeating the last answer (one re-roll).
   * @param {Array}  pool
   * @param {string} lastKey
   * @returns {{ key: string, weight: number }}
   */
  function pickFromPool(pool, lastKey) {
    const totalWeight = pool.reduce((sum, e) => sum + e.weight, 0);
    function draw() {
      let rand = Math.random() * totalWeight;
      for (const entry of pool) {
        rand -= entry.weight;
        if (rand <= 0) return entry;
      }
      return pool[pool.length - 1];
    }

    let picked = draw();
    // Avoid immediate repeat — one re-roll
    if (picked.key === lastKey && pool.length > 1) {
      picked = draw();
    }
    return picked;
  }

  /**
   * Select a category + answer from the pool.
   * @returns {{ category: string, answerKey: string }}
   */
  function selectAnswer() {
    const category = rollCategory();
    const pool     = ANSWER_POOL[category];
    // FIX: BUG-007 — guard against missing/empty pool to avoid TypeError crash
    if (!pool || pool.length === 0) {
      return { category: 'MAYBE', answerKey: 'oracle.maybe_1' };
    }
    const lastKey  = currentResult ? currentResult.answerKey : null;
    const entry    = pickFromPool(pool, lastKey);
    return { category, answerKey: entry.key };
  }

  // ── DOM Helpers ───────────────────────────────────────────────────────────────

  /** Show the answer card with the chosen result */
  function showAnswerCard(result) {
    const card     = document.getElementById('oracle-answer-card');
    const catEl    = document.getElementById('oracle-answer-category');
    const textEl   = document.getElementById('oracle-answer-text');
    const tagline  = document.getElementById('oracle-tagline');

    // Clear old state
    card.classList.remove(
      'oracle-answer-card--yes', 'oracle-answer-card--no',
      'oracle-answer-card--maybe', 'oracle-answer-card--ominous',
      'animate__animated', 'animate__zoomIn'
    );
    catEl.className = 'oracle-category-chip';

    // FIX: BUG-006 — normalise unknown categories so i18n key and icon never fall through to raw string
    const VALID_CATEGORIES = ['YES', 'NO', 'MAYBE', 'OMINOUS'];
    const safeCategory = VALID_CATEGORIES.includes(result.category) ? result.category : 'MAYBE';
    const catKey  = 'oracle.cat_' + safeCategory.toLowerCase();
    const catIcon = CATEGORY_ICONS[safeCategory] || 'fa-circle';
    catEl.classList.add('oracle-category-chip--' + safeCategory.toLowerCase());
    catEl.innerHTML = `<i class="fa-solid ${catIcon}" aria-hidden="true"></i> ${window.t(catKey)}`;

    // Set answer text
    textEl.className = 'oracle-answer-card__text';
    textEl.textContent = window.t(result.answerKey);

    // Apply category modifier
    card.classList.add('oracle-answer-card--' + safeCategory.toLowerCase());

    // Show card with Animate.css entrance
    card.classList.remove('hidden');
    void card.offsetWidth; // force reflow so animation replays
    card.classList.add('animate__animated', 'animate__zoomIn');

    // Hide tagline
    if (tagline) tagline.classList.add('hidden');
  }

  /** Hide the answer card and reset it */
  function hideAnswerCard() {
    const card    = document.getElementById('oracle-answer-card');
    const tagline = document.getElementById('oracle-tagline');

    card.classList.add('hidden');
    card.classList.remove(
      'oracle-answer-card--yes', 'oracle-answer-card--no',
      'oracle-answer-card--maybe', 'oracle-answer-card--ominous',
      'animate__animated', 'animate__zoomIn'
    );

    document.getElementById('oracle-answer-category').className = 'oracle-category-chip';
    document.getElementById('oracle-answer-category').innerHTML = '';
    document.getElementById('oracle-answer-text').textContent   = '';

    if (tagline) tagline.classList.remove('hidden');
  }

  /** Show the user's question echoed above/below the sigil */
  function showQuestionEcho(question) {
    const el = document.getElementById('oracle-question-echo');
    el.textContent = `«${question}»`;
    el.classList.remove('hidden');
  }

  /** Disable the ask button and update its label during animation */
  function disableAskButton() {
    const btn   = document.getElementById('oracle-ask-btn');
    const label = document.getElementById('oracle-ask-label');
    btn.disabled = true;
    if (label) {
      label.setAttribute('data-i18n', 'oracle.summoning');
      label.textContent = window.t('oracle.summoning');
    }
    // Change icon to spinner
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = 'fa-solid fa-spinner fa-spin';
    }
  }

  /**
   * Re-enable the ask button.
   * @param {boolean} askAgain — if true, shows "Ask Again" label
   */
  function enableAskButton(askAgain) {
    const btn   = document.getElementById('oracle-ask-btn');
    const label = document.getElementById('oracle-ask-label');
    btn.disabled = false;
    if (label) {
      const key = askAgain ? 'oracle.ask_again' : 'oracle.summon_btn';
      label.setAttribute('data-i18n', key);
      label.textContent = window.t(key);
    }
    // Restore icon
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = 'fa-solid fa-eye';
    }
    if (askAgain) {
      btn.classList.add('oracle-ask-btn--again');
    }
  }

  // ── Main Oracle Logic ─────────────────────────────────────────────────────────

  /** Called when the user clicks Ask or presses Enter */
  function askOracle() {
    if (isAnimating) return;

    const input    = document.getElementById('oracle-question-input');
    const question = input.value.trim();

    // Validate: non-empty question required
    if (!question) {
      // Shake the input and show a toast
      input.classList.add('oracle-input-shake');
      input.addEventListener('animationend', () => {
        input.classList.remove('oracle-input-shake');
      }, { once: true });

      Swal.fire({
        toast:             true,
        position:          'top-end',
        icon:              'warning',
        title:             window.t('oracle.empty_question'),
        showConfirmButton: false,
        timer:             2000,
        background:        '#1e293b',
        color:             '#f1f5f9',
        customClass:       { popup: 'rounded-xl' },
      });
      window.sound && window.sound.click();
      return;
    }

    // Begin animation sequence
    isAnimating = true;
    disableAskButton();
    hideAnswerCard();
    showQuestionEcho(question);

    // Pick the answer before animation (deterministic)
    const result    = selectAnswer();
    currentResult   = { ...result, question };

    // Run animation phases, then reveal answer
    animator.run(result.category, () => {
      // Show card after a brief card-delay inside REVEAL phase
      setTimeout(() => {
        showAnswerCard(result);
        saveToHistory({ question, ...result });
        enableAskButton(true);
        isAnimating = false;
      }, ANIM_CARD_DELAY);
    });
  }

  // ── Copy Logic ────────────────────────────────────────────────────────────────

  /** Copy just the answer to clipboard */
  function copyAnswer() {
    if (!currentResult) return;
    const question = currentResult.question;
    const answer   = window.t(currentResult.answerKey);
    const template = window.t('oracle.copy_template')
      .replace('{q}', question)
      .replace('{a}', answer);

    navigator.clipboard.writeText(template).then(() => {
      Swal.fire({
        toast:             true,
        position:          'top-end',
        icon:              'success',
        title:             window.t('oracle.copied'),
        showConfirmButton: false,
        timer:             1500,
        background:        '#1e293b',
        color:             '#f1f5f9',
        customClass:       { popup: 'rounded-xl' },
      });
    }).catch(() => {
      Swal.fire({
        toast:             true,
        position:          'top-end',
        icon:              'error',
        title:             'Copy failed',
        showConfirmButton: false,
        timer:             2000,
        background:        '#1e293b',
        color:             '#f1f5f9',
        customClass:       { popup: 'rounded-xl' },
      });
    });
  }

  // ── History Management ────────────────────────────────────────────────────────

  /** Load history array from sessionStorage */
  function loadHistory() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY); // FIX: BUG-004 — spec requires sessionStorage
      history = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(history)) history = [];
    } catch (e) {
      history = [];
    }
  }

  /**
   * Save a new entry to the top of the history stack.
   * @param {{ question: string, category: string, answerKey: string }} entry
   */
  function saveToHistory(entry) {
    const record = {
      id:        String(Date.now()),
      question:  entry.question,
      category:  entry.category,
      answerKey: entry.answerKey,
      ts:        Date.now(),
    };
    history.unshift(record);
    if (history.length > MAX_HISTORY) history.pop();
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(history)); // FIX: BUG-004 — spec requires sessionStorage
    } catch (e) {
      // Storage quota — continue with in-memory array
    }
  }

  /**
   * Format a timestamp for display.
   * < 24 h → relative ("2 hours ago"), else → locale date string
   * @param {number} ts — Unix ms
   * @returns {string}
   */
  function formatDate(ts) {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    const hrs  = Math.floor(diff / 3600000);

    if (mins < 1)   return 'just now';
    if (mins < 60)  return `${mins}m ago`;
    if (hrs  < 24)  return `${hrs}h ago`;
    return new Date(ts).toLocaleDateString();
  }

  /** Build HTML string for the history modal */
  function buildHistoryHTML() {
    if (history.length === 0) {
      return `<p class="text-slate-500 text-sm text-center py-4">${window.t('oracle.history_empty')}</p>`;
    }

    const VALID_CATS = ['YES', 'NO', 'MAYBE', 'OMINOUS'];
    // FIX: XSS — safe() now escapes &, <, >, " and ' to prevent attribute injection
    const safe = (str) => String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');

    const items = history.map(record => {
      // FIX: BUG-006 — fallback to MAYBE for unrecognised categories in history records
      const safeCat  = VALID_CATS.includes(record.category) ? record.category : 'MAYBE';
      const catLower = safeCat.toLowerCase();
      const catKey   = 'oracle.cat_' + catLower;
      const catIcon  = CATEGORY_ICONS[safeCat] || 'fa-circle';
      const answerText = window.t(record.answerKey);

      return `
        <div class="oracle-history-item">
          <div class="oracle-history-item-header">
            <span class="oracle-category-chip oracle-category-chip--${catLower}">
              <i class="fa-solid ${catIcon}" aria-hidden="true"></i>
              ${window.t(catKey)}
            </span>
            <button class="oracle-history-reask" data-question="${safe(record.question)}" aria-label="Re-ask this question">
              <i class="fa-solid fa-rotate-right" aria-hidden="true"></i>
            </button>
          </div>
          <p class="oracle-history-question">${safe(record.question)}</p>
          <p class="oracle-history-answer">${safe(answerText)}</p>
          <span class="oracle-history-ts">${formatDate(record.ts)}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="oracle-history-list">${items}</div>
      <div class="oracle-history-footer">
        <button id="oracle-clear-history-btn" class="btn-secondary text-sm py-2 px-4 mt-2">
          <i class="fa-solid fa-trash" aria-hidden="true"></i>
          <span>${window.t('oracle.history_clear')}</span>
        </button>
      </div>
    `;
  }

  /** Open the history drawer as a SweetAlert2 modal */
  function openHistoryDrawer() {
    Swal.fire({
      title:             `<span style="color:#f1f5f9;font-size:1.1rem;">${window.t('oracle.history_title')}</span>`,
      html:              buildHistoryHTML(),
      background:        '#1e293b',
      color:             '#f1f5f9',
      showConfirmButton: false,
      showCloseButton:   true,
      customClass: {
        popup:       'rounded-2xl oracle-history-popup',
        closeButton: 'oracle-history-close',
      },
      didOpen: () => {
        // Bind "re-ask" buttons inside the modal
        document.querySelectorAll('.oracle-history-reask').forEach(btn => {
          btn.addEventListener('click', () => {
            const q = btn.dataset.question;
            const input = document.getElementById('oracle-question-input');
            if (input && q) {
              input.value = q;
              renderCharCount();
              Swal.close();
            }
          });
        });

        // Bind "clear history" button inside the modal
        const clearBtn = document.getElementById('oracle-clear-history-btn');
        if (clearBtn) {
          clearBtn.addEventListener('click', confirmClearHistory);
        }
      },
    });
  }

  /** Show SweetAlert2 confirmation before clearing history */
  function confirmClearHistory() {
    Swal.fire({
      title:              `<span style="color:#f1f5f9;">${window.t('oracle.history_clear_confirm')}</span>`,
      icon:               'warning',
      iconColor:          '#f59e0b',
      background:         '#1e293b',
      color:              '#f1f5f9',
      showCancelButton:   true,
      confirmButtonText:  window.t('oracle.history_clear_yes'),
      cancelButtonText:   window.t('oracle.history_clear_no'),
      confirmButtonColor: '#ef4444',
      customClass:        { popup: 'rounded-2xl' },
    }).then(result => {
      if (result.isConfirmed) {
        history = [];
        try { sessionStorage.removeItem(STORAGE_KEY); } catch (e) {} // FIX: BUG-004 — sessionStorage
        Swal.close(); // closes confirmation dialog
        // FIX: NOTE-02 — re-open history drawer so user sees the empty state immediately
        setTimeout(openHistoryDrawer, 150);
        window.sound && window.sound.click();
      }
    });
  }

  // ── Character Counter ─────────────────────────────────────────────────────────

  function renderCharCount() {
    const input     = document.getElementById('oracle-question-input');
    const counter   = document.getElementById('oracle-char-count');
    if (!input || !counter) return;
    const len = input.value.length;
    counter.textContent = `${len} / ${MAX_QUESTION_LEN}`;
    counter.classList.toggle('oracle-char-count--limit', len >= MAX_QUESTION_LEN);
  }

  /** Set the input placeholder via JS (data-i18n doesn't cover placeholder) */
  function updateInputPlaceholder() {
    const input = document.getElementById('oracle-question-input');
    if (input) input.setAttribute('placeholder', window.t('oracle.placeholder'));
  }

  // ── Preset Chips ──────────────────────────────────────────────────────────────

  function bindPresetChips() {
    const container = document.querySelector('.oracle-presets');

    // Mouse drag-to-scroll (desktop — scrollbar is hidden so users need a grab handle)
    if (container) {
      let isDragging = false, startX = 0, scrollLeft = 0;

      container.addEventListener('mousedown', (e) => {
        isDragging  = true;
        startX      = e.pageX - container.offsetLeft;
        scrollLeft  = container.scrollLeft;
        container.style.cursor = 'grabbing';
        container.style.userSelect = 'none';
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = '';
        container.style.userSelect = '';
      });

      container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x    = e.pageX - container.offsetLeft;
        const walk = x - startX;
        container.scrollLeft = scrollLeft - walk;
      });

      // Touch drag-to-scroll fallback (for browsers where CSS alone is blocked)
      let touchStartX = 0, touchScrollLeft = 0;
      container.addEventListener('touchstart', (e) => {
        touchStartX    = e.touches[0].clientX;
        touchScrollLeft = container.scrollLeft;
      }, { passive: true });

      container.addEventListener('touchmove', (e) => {
        const dx = touchStartX - e.touches[0].clientX;
        container.scrollLeft = touchScrollLeft + dx;
      }, { passive: true });
    }

    document.querySelectorAll('.oracle-preset-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const input = document.getElementById('oracle-question-input');
        if (!input) return;
        input.value = chip.textContent.trim();
        renderCharCount();
        input.focus();
        window.sound && window.sound.click();
      });
    });
  }

  // ── Module Instances ──────────────────────────────────────────────────────────

  let particles;
  let animator;

  // ── Initialisation ────────────────────────────────────────────────────────────

  function init() {
    // Instantiate sub-systems
    const canvas = document.getElementById('oracle-particles');
    particles = new OracleParticles(canvas);

    const sigilEl = document.getElementById('oracle-sigil');
    animator = new OracleAnimator(sigilEl, particles);

    // Load persisted history
    loadHistory();

    // Set input placeholder (not covered by data-i18n)
    updateInputPlaceholder();

    // Initialise character counter display
    renderCharCount();

    // Bind preset chips
    bindPresetChips();

    // ── Event listeners ──────────────────────────────────────────────────────

    // Ask / summon button
    document.getElementById('oracle-ask-btn').addEventListener('click', askOracle);

    // Enter key in input
    document.getElementById('oracle-question-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') askOracle();
    });

    // Character counter on input
    document.getElementById('oracle-question-input').addEventListener('input', renderCharCount);

    // Copy button inside result card
    const copyBtn = document.getElementById('oracle-copy-btn');
    if (copyBtn) copyBtn.addEventListener('click', copyAnswer);

    // History button
    document.getElementById('oracle-history-btn').addEventListener('click', openHistoryDrawer);

    // Re-apply translations when language changes (main.js calls window.applyTranslations)
    // We also need to update the placeholder, which is NOT covered by data-i18n
    const origApply = window.applyTranslations;
    if (origApply) {
      window.applyTranslations = function () {
        origApply.call(window);
        updateInputPlaceholder();
        // Also update preset chip text content (handled by data-i18n)
      };
    }
  }

  document.addEventListener('DOMContentLoaded', init);

})();
