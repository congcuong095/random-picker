/* ============================================
   Random Coin Flip
   ============================================ */

(function () {
  let flipping = false;
  let history = [];
  let headsCount = 0;
  let tailsCount = 0;

  const coin = document.getElementById('coin');

  document.getElementById('flip-btn').addEventListener('click', flipCoin);
  document.getElementById('clear-history').addEventListener('click', clearHistory);

  function flipCoin() {
    if (flipping) return;
    flipping = true;

    window.sound.click();
    document.getElementById('coin-result').textContent = '';

    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    const finalRotation = result === 'heads' ? 3600 : 3780; // Multiple full rotations + final position

    // Reset
    coin.style.transition = 'none';
    coin.style.transform = 'rotateX(0deg)';

    // Force reflow
    coin.offsetHeight;

    // Animate
    coin.style.transition = 'transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    coin.style.transform = `rotateX(${finalRotation}deg)`;

    setTimeout(() => {
      flipping = false;
      window.sound.success();

      // Show result
      const resultEl = document.getElementById('coin-result');
      resultEl.textContent = window.t(result === 'heads' ? 'coin.result_heads' : 'coin.result_tails');
      resultEl.className = `text-2xl font-bold mb-6 h-10 animate__animated animate__bounceIn ${result === 'heads' ? 'text-amber-400' : 'text-slate-300'}`;

      // Update counts
      if (result === 'heads') headsCount++;
      else tailsCount++;

      // Add to history
      history.unshift(result);
      if (history.length > 10) history.pop();

      renderHistory();
    }, 1500);
  }

  function renderHistory() {
    const container = document.getElementById('coin-history');
    document.getElementById('heads-count').textContent = headsCount;
    document.getElementById('tails-count').textContent = tailsCount;

    if (history.length === 0) {
      container.innerHTML = `<p class="text-slate-500 text-sm">${window.t('coin.no_flips')}</p>`;
      return;
    }

    container.innerHTML = history.map((h, i) => {
      const chipLabel = h === 'heads' ? window.t('coin.heads') : window.t('coin.tails');
      return `
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
        h === 'heads'
          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
          : 'bg-slate-500/20 text-slate-300 border border-slate-500/30'
      } ${i === 0 ? 'animate__animated animate__bounceIn' : ''}">
        ${h === 'heads' ? '👑' : '🛡️'} ${chipLabel}
      </span>
    `;
    }).join('');
  }

  function clearHistory() {
    history = [];
    headsCount = 0;
    tailsCount = 0;
    renderHistory();
    document.getElementById('coin-result').textContent = '';
    window.sound.click();
  }
})();
