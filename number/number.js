/* ============================================
   Random Number Generator
   ============================================ */

(function () {
  let results = [];

  document.getElementById('generate-btn').addEventListener('click', generate);
  document.getElementById('copy-btn').addEventListener('click', copyResults);
  document.getElementById('reset-btn').addEventListener('click', reset);

  function generate() {
    const min = parseInt(document.getElementById('num-min').value);
    const max = parseInt(document.getElementById('num-max').value);

    if (isNaN(min) || isNaN(max)) {
      Swal.fire({ icon: 'error', title: 'Invalid Input', text: 'Please enter valid numbers.',
        background: '#1e293b', color: '#f1f5f9' });
      return;
    }

    if (min > max) {
      Swal.fire({ icon: 'error', title: 'Invalid Range', text: 'Min must be less than or equal to Max.',
        background: '#1e293b', color: '#f1f5f9' });
      return;
    }

    let count = parseInt(document.getElementById('num-count').value);
    if (isNaN(count) || count < 1) count = 1;
    if (count > 50) count = 50;

    const maxPossible = max - min + 1;
    if (count > maxPossible) {
      count = maxPossible;
    }
    document.getElementById('num-count').value = count;

    window.sound.click();

    // Always no-repeat: draw from pool
    const pool = [];
    for (let i = min; i <= max; i++) pool.push(i);
    results = shuffle(pool).slice(0, count);

    renderResults();
    window.sound.success();
  }

  function renderResults() {
    const container = document.getElementById('number-results');
    container.innerHTML = '';

    results.forEach((num, i) => {
      const badge = document.createElement('span');
      badge.className = 'result-badge animate__animated animate__bounceIn';
      badge.style.animationDelay = `${i * 0.05}s`;
      badge.textContent = num;
      container.appendChild(badge);
    });
  }

  function copyResults() {
    if (results.length === 0) return;
    copyToClipboard(results.join(', '));
  }

  function reset() {
    results = [];
    document.getElementById('number-results').innerHTML =
      `<p class="text-slate-500">${window.t('number.placeholder')}</p>`;
    document.getElementById('num-min').value = 1;
    document.getElementById('num-max').value = 100;
    document.getElementById('num-count').value = 1;
    window.sound.click();
  }
})();
