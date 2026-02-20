/* ============================================
   Random Name Picker
   ============================================ */

(function () {
  const STORAGE_KEY = 'randomhub_names';
  let names = []; // { name: string, picked: boolean }

  // Load from localStorage
  function loadNames() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        names = JSON.parse(saved);
      } catch (e) {
        names = [];
      }
    }
    renderChips();
    updateCount();
  }

  function saveNames() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(names));
  }

  function updateCount() {
    const available = names.filter(n => !n.picked);
    document.getElementById('names-count').textContent = `${available.length}/${names.length}`;
  }

  // Edit list via SweetAlert modal
  document.getElementById('edit-list-btn').addEventListener('click', () => {
    const currentText = names.map(n => n.name).join('\n');
    Swal.fire({
      title: 'Edit Names',
      html: '<textarea id="swal-names" class="swal2-textarea" style="height:200px;resize:none;background:#1e293b;color:#f1f5f9;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;" placeholder="One name per line&#10;Alice&#10;Bob&#10;Charlie"></textarea>',
      background: '#1e293b',
      color: '#f1f5f9',
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      didOpen: () => {
        document.getElementById('swal-names').value = currentText;
      },
      preConfirm: () => {
        return document.getElementById('swal-names').value;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const text = result.value;
        const newNames = text.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        names = newNames.map(name => ({ name, picked: false }));
        saveNames();
        renderChips();
        updateCount();
        window.sound.click();
        Swal.fire({
          toast: true, position: 'top-end', icon: 'success',
          title: `${names.length} names saved!`,
          showConfirmButton: false, timer: 1500,
          background: '#1e293b', color: '#f1f5f9'
        });
      }
    });
  });

  // Reset
  document.getElementById('reset-names-btn').addEventListener('click', () => {
    names.forEach(n => n.picked = false);
    saveNames();
    renderChips();
    updateCount();
    document.getElementById('picked-name').textContent = '—';
    window.sound.click();
  });

  // Pick random
  document.getElementById('pick-btn').addEventListener('click', pickRandom);

  function pickRandom() {
    const available = names.filter(n => !n.picked);
    if (available.length === 0) {
      Swal.fire({
        icon: 'info', title: 'All names picked!',
        text: names.length === 0 ? 'Add names first by clicking the edit button.' : 'Reset the list to pick again.',
        background: '#1e293b', color: '#f1f5f9'
      });
      return;
    }

    window.sound.spin();
    const display = document.getElementById('picked-name');

    // Slot machine animation
    let count = 0;
    const totalCycles = 40;
    const interval = setInterval(() => {
      const random = available[Math.floor(Math.random() * available.length)];
      display.textContent = random.name;
      display.style.opacity = '0.7';
      count++;

      if (count >= totalCycles) {
        clearInterval(interval);

        // Pick winner
        const winner = available[Math.floor(Math.random() * available.length)];
        display.textContent = winner.name;
        display.style.opacity = '1';
        display.classList.add('animate__animated', 'animate__bounceIn');
        setTimeout(() => display.classList.remove('animate__animated', 'animate__bounceIn'), 600);

        const removePicked = document.getElementById('remove-picked').checked;
        if (removePicked) {
          const idx = names.findIndex(n => n.name === winner.name && !n.picked);
          if (idx !== -1) {
            names[idx].picked = true;
            saveNames();
          }
        }

        renderChips();
        updateCount();
        window.sound.success();
      }
    }, 50);
  }

  // Render names as chips
  function renderChips() {
    const container = document.getElementById('names-chips');

    if (names.length === 0) {
      container.innerHTML = `<span class="text-slate-500 text-sm">${window.t('name.no_names')}</span>`;
      return;
    }

    container.innerHTML = names.map(n => `
      <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
        n.picked
          ? 'bg-white/5 text-slate-600 line-through'
          : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
      }">
        ${n.name}
      </span>
    `).join('');
  }

  // Init
  loadNames();
})();
