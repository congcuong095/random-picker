/* ============================================
   Random Color Generator
   ============================================ */

(function () {
  let history = [];

  document.getElementById('generate-color-btn').addEventListener('click', generateColor);
  document.getElementById('clear-colors').addEventListener('click', clearHistory);

  // Keyboard shortcut: Space to generate
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
      generateColor();
    }
  });

  function generateColor() {
    window.sound.click();

    const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Update preview
    const preview = document.getElementById('color-preview');
    preview.style.backgroundColor = hex;

    // Text contrast
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const textColor = luminance > 0.5 ? '#000000' : '#ffffff';
    preview.style.color = textColor;
    document.getElementById('preview-text').textContent = hex;
    document.getElementById('rgb-value').textContent = `rgb(${r}, ${g}, ${b})`;

    // Update hidden hex value for copy
    document.getElementById('hex-value').textContent = hex;

    // Animate
    preview.classList.add('animate__animated', 'animate__pulse');
    setTimeout(() => preview.classList.remove('animate__animated', 'animate__pulse'), 600);

    // Add to history
    history.unshift(hex);
    if (history.length > 8) history.pop();
    renderHistory();

    window.sound.success();
  }

  function renderHistory() {
    const container = document.getElementById('color-history');
    if (history.length === 0) {
      container.innerHTML = '';
      return;
    }

    container.innerHTML = history.map((hex, i) => `
      <button class="color-dot ${i === 0 ? 'animate__animated animate__bounceIn' : ''}"
              style="background-color: ${hex}; width: 32px; height: 32px;"
              title="${hex}"
              onclick="copyToClipboard('${hex}')">
      </button>
    `).join('');
  }

  function clearHistory() {
    history = [];
    renderHistory();
    window.sound.click();
  }
})();
