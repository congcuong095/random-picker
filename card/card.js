/* ============================================
   Random Card - Card Drawing Tool
   ============================================ */

(function () {
  const SUITS = ['H', 'D', 'C', 'S'];
  const SUIT_I18N = { H: 'card.suit_hearts', D: 'card.suit_diamonds', C: 'card.suit_clubs', S: 'card.suit_spades' };
  const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const IMG_BASE = '../assets/images/cards/';

  let cardCount = 1;
  let deck = [];

  // Build deck
  function createDeck(includeJokers) {
    const d = [];
    for (const suit of SUITS) {
      for (const val of VALUES) {
        d.push({
          code: val + suit,
          value: val,
          suitKey: SUIT_I18N[suit],
          img: `${IMG_BASE}${val}${suit}.svg`
        });
      }
    }
    if (includeJokers) {
      d.push({ code: 'Joker1', nameKey: 'card.joker_red', img: `${IMG_BASE}Joker1.svg` });
      d.push({ code: 'Joker2', nameKey: 'card.joker_black', img: `${IMG_BASE}Joker2.svg` });
    }
    return d;
  }

  // Shuffle deck (Fisher-Yates)
  function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  function getCardName(card) {
    if (card.nameKey) return window.t(card.nameKey);
    return `${card.value} ${window.t(card.suitKey)}`;
  }

  // Card count buttons
  document.getElementById('card-count-btns').addEventListener('click', (e) => {
    const btn = e.target.closest('.card-count-btn');
    if (!btn) return;
    window.sound.click();
    cardCount = parseInt(btn.dataset.count);
    document.querySelectorAll('.card-count-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

  // Draw cards (always no-duplicate)
  document.getElementById('draw-btn').addEventListener('click', () => {
    const includeJoker = document.getElementById('include-joker').checked;

    deck = createDeck(includeJoker);
    shuffleDeck();

    const drawn = deck.slice(0, cardCount);

    window.sound.click();
    renderCards(drawn);
  });

  // Render cards with flip animation
  function renderCards(cards) {
    const results = document.getElementById('card-results');
    results.innerHTML = '';

    cards.forEach((card, index) => {
      const container = document.createElement('div');
      container.className = 'card-container playing-card';
      container.style.animationDelay = `${index * 0.15}s`;

      container.innerHTML = `
        <div class="card-inner" style="width: 100%; height: 100%;">
          <div class="card-front flex items-center justify-center">
            <img src="${IMG_BASE}card_back.svg" alt="Card Back" class="w-full h-full object-contain rounded">
          </div>
          <div class="card-back flex items-center justify-center bg-white">
            <img src="${card.img}" alt="${getCardName(card)}" class="w-full h-full object-contain rounded">
          </div>
        </div>
      `;

      container.classList.add('animate__animated', 'animate__fadeInUp');
      results.appendChild(container);

      // Flip after staggered delay
      setTimeout(() => {
        container.querySelector('.card-inner').classList.add('flipped');
        window.sound.success();
      }, 500 + index * 300);
    });

    // Show result popup after all cards flipped
    setTimeout(() => {
      const names = cards.map(c => getCardName(c)).join('<br>');
      Swal.fire({
        title: `<span style="color:#a78bfa">${window.t('card.result_title')}</span>`,
        html: `<div style="font-size: 1.1rem; line-height: 2;">${names}</div>`,
        background: '#1e293b',
        color: '#f1f5f9',
        confirmButtonColor: '#6366f1',
        confirmButtonText: window.t('card.result_ok'),
        showClass: { popup: 'animate__animated animate__fadeInUp' }
      });
    }, 500 + cards.length * 300 + 400);
  }
})();
