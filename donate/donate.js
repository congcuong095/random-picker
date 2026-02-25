/* ============================================
   Donate Feature JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Constants ---
  const POPUP_STORAGE_KEY = 'donate_popup_closed_at';
  const POPUP_INTERVAL_MS = 60 * 60 * 1000; // 1 hour in milliseconds

  // --- Links ---
  const PAYPAL_LINK = 'https://paypal.me/PhungCongCuong';
  const KOFI_LINK = 'https://ko-fi.com/congcuong';

  // --- Get base path for donate folder ---
  function getDonateBasePath() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    const toolFolders = ['card', 'number', 'spinner', 'dice', 'coin', 'name'];
    
    // If in a tool subfolder, go up one level
    if (segments.length > 0 && toolFolders.includes(segments[segments.length - 1])) {
      return '../donate/';
    }
    if (segments.length > 0 && segments[segments.length - 1] === 'index.html') {
      const parent = segments[segments.length - 2];
      if (toolFolders.includes(parent)) {
        return '../donate/';
      }
    }
    return 'donate/';
  }

  // --- Translation helper ---
  function t(key) {
    if (typeof window.t === 'function') {
      return window.t(key);
    }
    // Fallback translations
    const fallbacks = {
      'donate.title': 'Buy me a coffee',
      'donate.message': 'Enjoying this tool? Support its development with a coffee! ☕',
      'donate.momo': 'Momo',
      'donate.momo_desc': 'Vietnamese bank',
      'donate.paypal': 'PayPal',
      'donate.paypal_desc': 'Visa, Mastercard',
      'donate.kofi': 'Ko-fi',
      'donate.kofi_desc': 'Other methods',
      'donate.popup_text': 'Donate',
      'donate.footer_link': '☕ Donate',
      'donate.scan_qr': 'Scan QR code to donate',
      'donate.open_link': 'Open to donate',
      'donate.menu_btn': 'Donate'
    };
    return fallbacks[key] || key;
  }

  // --- Check if popup should be shown ---
  function shouldShowPopup() {
    const closedAt = localStorage.getItem(POPUP_STORAGE_KEY);
    if (!closedAt) return true;
    
    const elapsed = Date.now() - parseInt(closedAt, 10);
    return elapsed >= POPUP_INTERVAL_MS;
  }

  // --- Save popup closed timestamp ---
  function savePopupClosedTime() {
    localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString());
  }

  // --- Create Donate Popup ---
  function createDonatePopup() {
    const popup = document.createElement('div');
    popup.className = 'donate-popup';
    popup.id = 'donate-popup';
    popup.innerHTML = `
      <span class="donate-popup-icon">☕</span>
      <span class="donate-popup-text">${t('donate.popup_text')}</span>
      <button class="donate-popup-close" id="donate-popup-close" title="Close">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
    return popup;
  }

  // --- Create Donate Modal ---
  function createDonateModal() {
    const donatePath = getDonateBasePath();
    
    const modal = document.createElement('div');
    modal.className = 'donate-modal-overlay';
    modal.id = 'donate-modal-overlay';
    modal.innerHTML = `
      <div class="donate-modal">
        <button class="donate-modal-close" id="donate-modal-close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="donate-modal-header">
          <h2 class="donate-modal-title">${t('donate.title')}</h2>
          <p class="donate-modal-message">${t('donate.message')}</p>
        </div>
        <div class="donate-modal-body">
          <!-- Method Tabs with Logo -->
          <div class="donate-method-tabs">
            <button class="donate-method-tab active" data-method="momo">
              <img src="${donatePath}momo-logo.svg" alt="Momo" class="method-logo" onerror="this.style.display='none'">
              <span class="method-name">${t('donate.momo')}</span>
              <span class="method-desc">${t('donate.momo_desc')}</span>
            </button>
            <button class="donate-method-tab" data-method="paypal">
              <img src="${donatePath}paypal-logo.svg" alt="PayPal" class="method-logo" onerror="this.style.display='none'">
              <span class="method-name">${t('donate.paypal')}</span>
              <span class="method-desc">${t('donate.paypal_desc')}</span>
            </button>
            <button class="donate-method-tab" data-method="kofi">
              <img src="${donatePath}kofi-logo.png" alt="Ko-fi" class="method-logo" onerror="this.style.display='none'">
              <span class="method-name">${t('donate.kofi')}</span>
              <span class="method-desc">${t('donate.kofi_desc')}</span>
            </button>
          </div>

          <!-- Momo Panel -->
          <div class="donate-content-panel active" id="panel-momo">
            <div class="donate-qr-container">
              <img src="${donatePath}momo-qrcode.jpg" alt="Momo QR Code" class="donate-qr-image">
            </div>
          </div>

          <!-- PayPal Panel -->
          <div class="donate-content-panel" id="panel-paypal">
            <div class="donate-link-container">
              <a href="${PAYPAL_LINK}" target="_blank" rel="noopener noreferrer" class="donate-link-btn paypal">
                <img src="${donatePath}paypal-logo.svg" alt="PayPal" class="btn-logo" onerror="this.outerHTML='<i class=\\'fa-brands fa-paypal\\'></i>'">
                ${t('donate.open_link')}
              </a>
            </div>
          </div>

          <!-- Ko-fi Panel -->
          <div class="donate-content-panel" id="panel-kofi">
            <div class="donate-link-container">
              <a href="${KOFI_LINK}" target="_blank" rel="noopener noreferrer" class="donate-link-btn kofi">
                <img src="${donatePath}kofi-logo.png" alt="Ko-fi" class="btn-logo" onerror="this.outerHTML='<i class=\\'fa-solid fa-mug-hot\\'></i>'">
                ${t('donate.open_link')}
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    return modal;
  }

  // --- Show Donate Modal ---
  function showDonateModal() {
    const overlay = document.getElementById('donate-modal-overlay');
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  // --- Close Donate Modal ---
  function closeDonateModal() {
    const overlay = document.getElementById('donate-modal-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --- Close Donate Popup ---
  function closeDonatePopup() {
    const popup = document.getElementById('donate-popup');
    if (popup) {
      popup.style.animation = 'popupSlideOut 0.3s ease-out forwards';
      setTimeout(() => {
        popup.remove();
      }, 300);
    }
    savePopupClosedTime();
  }

  // --- Switch Donate Method Tab ---
  function switchDonateTab(method) {
    // Update tabs
    document.querySelectorAll('.donate-method-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.method === method);
    });
    
    // Update panels with transition (CSS handles animation)
    document.querySelectorAll('.donate-content-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `panel-${method}`);
    });
  }

  // --- Add Donate Button to Header ---
  function addDonateButtonToHeader() {
    // Desktop/iPad: Add after Home link (visible on md+)
    const desktopMenu = document.querySelector('#header-root nav > div.hidden.md\\:flex');
    if (desktopMenu) {
      const donateBtn = document.createElement('button');
      donateBtn.className = 'donate-menu-btn';
      donateBtn.id = 'donate-header-btn';
      // Show text on iPad (md) and desktop (lg+)
      donateBtn.innerHTML = `<span class="coffee-icon">☕</span><span>${t('donate.menu_btn')}</span>`;
      donateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showDonateModal();
      });
      
      // Insert after Home link (first child)
      const homeLink = desktopMenu.querySelector('a');
      if (homeLink && homeLink.nextSibling) {
        desktopMenu.insertBefore(donateBtn, homeLink.nextSibling);
      } else {
        desktopMenu.appendChild(donateBtn);
      }
    }

    // Mobile: Add to mobile menu after language selection
    const mobileMenu = document.querySelector('#mobile-menu .px-4.py-3');
    if (mobileMenu) {
      const mobileDonateBtn = document.createElement('button');
      mobileDonateBtn.className = 'donate-mobile-btn';
      mobileDonateBtn.id = 'donate-mobile-btn';
      mobileDonateBtn.innerHTML = `<span class="coffee-icon">☕</span>${t('donate.menu_btn')}`;
      mobileDonateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showDonateModal();
        // Close mobile menu
        const mobileMenuEl = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        if (mobileMenuEl) mobileMenuEl.classList.remove('active');
        if (hamburgerIcon) {
          hamburgerIcon.classList.remove('fa-xmark');
          hamburgerIcon.classList.add('fa-bars');
        }
      });
      
      mobileMenu.appendChild(mobileDonateBtn);
    }
  }

  // --- Initialize Donate Feature ---
  function initDonateFeature() {
    // Create and append modal
    const modal = createDonateModal();
    document.body.appendChild(modal);

    // Create and append popup (if should show)
    if (shouldShowPopup()) {
      const popup = createDonatePopup();
      document.body.appendChild(popup);

      // Popup click handler (open modal)
      popup.addEventListener('click', (e) => {
        if (!e.target.closest('#donate-popup-close')) {
          showDonateModal();
          closeDonatePopup();
        }
      });

      // Popup close button handler
      const popupCloseBtn = document.getElementById('donate-popup-close');
      if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeDonatePopup();
        });
      }
    }

    // Modal close button handler
    const modalCloseBtn = document.getElementById('donate-modal-close');
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeDonateModal);
    }

    // Modal overlay click handler (close on backdrop click)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeDonateModal();
      }
    });

    // Tab switch handlers
    document.querySelectorAll('.donate-method-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        switchDonateTab(tab.dataset.method);
      });
    });

    // Escape key handler
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDonateModal();
      }
    });

    // Footer link click handler
    const footerLink = document.getElementById('donate-footer-link');
    if (footerLink) {
      footerLink.addEventListener('click', (e) => {
        e.preventDefault();
        showDonateModal();
      });
    }

    // Add donate button to header (delayed to ensure header is rendered)
    setTimeout(addDonateButtonToHeader, 100);
  }

  // --- Initialize on DOM ready ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDonateFeature);
  } else {
    initDonateFeature();
  }

  // --- Expose global functions ---
  window.showDonateModal = showDonateModal;
  window.closeDonateModal = closeDonateModal;

})();
