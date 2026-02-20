/* ============================================
   Random Spinner - Wheel of Fortune
   ============================================ */

(function () {
  const COLORS = [
    '#6366f1', '#8b5cf6', '#a855f7', '#ec4899',
    '#f43f5e', '#f97316', '#eab308', '#22c55e',
    '#14b8a6', '#06b6d4', '#3b82f6', '#2563eb'
  ];

  const STORAGE_KEY = 'randomhub_spinner_items';
  const canvas = document.getElementById('spinner-canvas');
  const ctx = canvas.getContext('2d');
  let items = [];
  let rotation = 0;
  let spinning = false;

  // Load items from localStorage or use defaults
  function loadItems() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        items = JSON.parse(saved);
        return;
      } catch (e) {}
    }
    items = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Tacos', 'Salad'];
  }

  function saveItems() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  // Retina support
  function setupCanvas() {
    const container = document.getElementById('canvas-container');
    const size = Math.min(container.clientWidth, container.clientHeight, 500);
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    return size;
  }

  let canvasSize = 400;

  function initCanvas() {
    canvasSize = setupCanvas();
    draw();
  }

  window.addEventListener('resize', initCanvas);

  function draw() {
    const size = canvasSize;
    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 - 5;

    ctx.clearRect(0, 0, size, size);

    if (items.length === 0) {
      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#94a3b8';
      ctx.font = '16px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(window.t('spinner.add_items'), cx, cy);
      return;
    }

    const arc = (Math.PI * 2) / items.length;

    items.forEach((item, i) => {
      const startAngle = rotation + i * arc;
      const endAngle = startAngle + arc;

      // Segment
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = COLORS[i % COLORS.length];
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Text
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.min(14, Math.max(10, radius / items.length * 1.2))}px Inter, sans-serif`;
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 3;
      const label = item.length > 14 ? item.slice(0, 14) + '…' : item;
      ctx.fillText(label, radius - 12, 5);
      ctx.restore();
    });

    // Outer ring
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Center button
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    ctx.fillStyle = '#1e293b';
    ctx.fill();
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Center dot
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#6366f1';
    ctx.fill();
  }

  function spin() {
    if (spinning || items.length < 2) {
      if (items.length < 2) {
        Swal.fire({ icon: 'info', title: window.t('spinner.need_more') || 'Need more items',
          text: window.t('spinner.need_more_text') || 'Add at least 2 items to spin.',
          background: '#1e293b', color: '#f1f5f9' });
      }
      return;
    }

    spinning = true;
    document.getElementById('spin-btn').disabled = true;
    document.getElementById('spinner-result').classList.add('hidden');
    window.sound.spin();

    const totalRotation = Math.PI * 2 * (5 + Math.random() * 5);
    const duration = 4000;
    const startRotation = rotation;
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      rotation = startRotation + totalRotation * eased;
      draw();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        spinning = false;
        document.getElementById('spin-btn').disabled = false;
        announceWinner();
      }
    }

    requestAnimationFrame(animate);
  }

  function announceWinner() {
    const arc = (Math.PI * 2) / items.length;
    const pointerAngle = Math.PI * 1.5;
    const normalizedRotation = ((rotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const adjustedAngle = (pointerAngle - normalizedRotation + Math.PI * 2) % (Math.PI * 2);
    const index = Math.floor(adjustedAngle / arc) % items.length;

    const winner = items[index];

    document.getElementById('spinner-result').classList.remove('hidden');
    document.getElementById('winner-text').textContent = winner;

    window.sound.success();
    Swal.fire({
      title: `🎉 ${window.t('spinner.winner_title')}`,
      html: `<span style="font-size: 1.5rem; font-weight: 700; background: linear-gradient(135deg, #6366f1, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${winner}</span>`,
      background: '#1e293b',
      color: '#f1f5f9',
      confirmButtonColor: '#6366f1',
      showClass: { popup: 'animate__animated animate__fadeInUp' }
    });
  }

  // Edit items via SweetAlert modal
  document.getElementById('edit-items-btn').addEventListener('click', () => {
    const currentText = items.join('\n');
    Swal.fire({
      title: window.t('spinner.edit_title'),
      html: '<textarea id="swal-items" class="swal2-textarea" style="height:200px;resize:none;background:#1e293b;color:#f1f5f9;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;width:100%;box-sizing:border-box;" placeholder="One item per line&#10;Pizza&#10;Burger&#10;Sushi"></textarea>',
      background: '#1e293b',
      color: '#f1f5f9',
      showCancelButton: true,
      confirmButtonText: window.t('spinner.update'),
      cancelButtonText: window.t('spinner.cancel'),
      confirmButtonColor: '#6366f1',
      didOpen: () => {
        document.getElementById('swal-items').value = currentText;
      },
      preConfirm: () => {
        const text = document.getElementById('swal-items').value;
        const lines = text.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        if (lines.length > 100) {
          Swal.showValidationMessage(window.t('spinner.max_items_error'));
          return false;
        }
        return text;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const text = result.value;
        items = text.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        saveItems();
        draw();
        window.sound.click();
      }
    });
  });

  // Spin button
  document.getElementById('spin-btn').addEventListener('click', spin);

  // Init
  loadItems();
  // Delay canvas setup to ensure layout is ready
  requestAnimationFrame(() => {
    initCanvas();
  });
})();
