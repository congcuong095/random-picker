/* ============================================
   Random Dice Roller
   ============================================ */

(function () {
  const IMG_BASE = '../assets/images/dice/';
  let diceCount = 1;
  let rolling = false;

  // Dice count buttons
  document.getElementById('dice-count-btns').addEventListener('click', (e) => {
    const btn = e.target.closest('.dice-count-btn');
    if (!btn) return;
    window.sound.click();
    diceCount = parseInt(btn.dataset.count);
    document.querySelectorAll('.dice-count-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

  // Roll
  document.getElementById('roll-btn').addEventListener('click', rollDice);

  function rollDice() {
    if (rolling) return;
    rolling = true;

    window.sound.roll();
    const results = document.getElementById('dice-results');
    const totalEl = document.getElementById('dice-total');

    // Generate random values
    const values = [];
    for (let i = 0; i < diceCount; i++) {
      values.push(Math.floor(Math.random() * 6) + 1);
    }

    // Create dice elements with shake animation
    results.innerHTML = '';
    values.forEach((val, i) => {
      const die = document.createElement('div');
      die.className = 'dice-shake';
      die.style.animationDelay = `${i * 0.05}s`;
      die.innerHTML = `<img src="${IMG_BASE}dice_${val}.svg" alt="Dice ${val}"
        class="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-lg rounded-xl" style="filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">`;
      results.appendChild(die);
    });

    // Show total after animation
    setTimeout(() => {
      rolling = false;
      const total = values.reduce((a, b) => a + b, 0);
      totalEl.classList.remove('hidden');
      document.getElementById('total-value').textContent = total;
      window.sound.success();
    }, 650);
  }
})();
