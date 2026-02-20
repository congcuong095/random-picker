/* ============================================
   i18n — EN / VI / ZH
   ============================================ */

(function () {
  const TRANSLATIONS = {
    en: {
      'nav.home':'Home','nav.card':'Card','nav.number':'Number','nav.spinner':'Spinner',
      'nav.more':'More','nav.dice':'Dice','nav.coin':'Coin','nav.name':'Name','nav.color':'Color',
      'home.badge':'Free & Open Source Tools','home.title':'Random Picker','home.subtitle':'',
      'home.desc':'A collection of beautifully crafted random generator tools. Cards, numbers, spinners, and more — all in one place.',
      'home.explore':'Explore Tools','home.all_tools':'All Tools','home.choose':'Choose a tool and start generating',
      'tool.card.name':'Random Card','tool.card.desc':'Draw random cards from a standard deck. Flip animation with realistic card designs.',
      'tool.number.name':'Random Number','tool.number.desc':'Generate random numbers with custom range, count, and elimination mode.',
      'tool.spinner.name':'Random Spinner','tool.spinner.desc':'Spin the wheel with custom items. Smooth easing animation with sound effects.',
      'tool.dice.name':'Random Dice','tool.dice.desc':'Roll up to 6 dice with shake animation and total calculation.',
      'tool.coin.name':'Random Coin','tool.coin.desc':'Flip a coin with realistic toss animation. Track your heads and tails history.',
      'tool.name.name':'Name Picker','tool.name.desc':'Pick a random name from your list. Auto-save with elimination mode.',
      'tool.color.name':'Random Color','tool.color.desc':'Generate random colors with HEX & RGB values. Copy with one click.',
      'try_now':'Try Now',
      'card.placeholder':'Click "Draw Cards" to start','card.cards_label':'Cards:','card.no_dup':'No duplicates','card.jokers':'Jokers','card.draw':'Draw Cards','card.shuffle':'Shuffle',
      'number.placeholder':'No numbers generated yet','number.min':'Min','number.max':'Max','number.count':'Count','number.no_repeat':'No repeats','number.generate':'Generate',
      'spinner.winner':'Winner:','spinner.spin':'SPIN!','spinner.add_items':'Add items to spin',
      'dice.placeholder':'Click "Roll Dice" to start','dice.label':'Dice:','dice.total':'Total:','dice.roll':'Roll Dice',
      'coin.heads':'HEADS','coin.tails':'TAILS','coin.flip':'Flip Coin','coin.no_flips':'No flips yet','coin.clear':'Clear','coin.result_heads':'👑 HEADS','coin.result_tails':'🛡️ TAILS',
      'name.selected':'Selected Name','name.available':'available','name.no_names':'No names added yet','name.pick':'Pick Random','name.remove':'Remove picked names',
      'color.generate':'Generate',
    },
    vi: {
      'nav.home':'Trang chủ','nav.card':'Bài','nav.number':'Số','nav.spinner':'Quay số',
      'nav.more':'Thêm','nav.dice':'Xúc xắc','nav.coin':'Đồng xu','nav.name':'Tên','nav.color':'Màu sắc',
      'home.badge':'Công cụ miễn phí & mã nguồn mở','home.title':'Random Picker','home.subtitle':'',
      'home.desc':'Bộ sưu tập các công cụ tạo ngẫu nhiên được thiết kế đẹp mắt. Bài, số, vòng quay và nhiều hơn — tất cả trong một nơi.',
      'home.explore':'Khám phá công cụ','home.all_tools':'Tất cả công cụ','home.choose':'Chọn một công cụ và bắt đầu',
      'tool.card.name':'Rút bài ngẫu nhiên','tool.card.desc':'Rút bài ngẫu nhiên từ bộ bài tiêu chuẩn. Hiệu ứng lật bài với thiết kế thực tế.',
      'tool.number.name':'Số ngẫu nhiên','tool.number.desc':'Tạo số ngẫu nhiên với phạm vi, số lượng và chế độ loại trừ tuỳ chỉnh.',
      'tool.spinner.name':'Vòng quay may mắn','tool.spinner.desc':'Quay vòng với các mục tuỳ chỉnh. Hiệu ứng mượt mà cùng âm thanh.',
      'tool.dice.name':'Xúc xắc ngẫu nhiên','tool.dice.desc':'Lăn tối đa 6 xúc xắc với hiệu ứng lắc và tính tổng.',
      'tool.coin.name':'Tung đồng xu','tool.coin.desc':'Tung đồng xu với hiệu ứng thực tế. Theo dõi lịch sử sấp ngửa.',
      'tool.name.name':'Chọn tên ngẫu nhiên','tool.name.desc':'Chọn ngẫu nhiên một tên từ danh sách. Tự lưu với chế độ loại trừ.',
      'tool.color.name':'Màu sắc ngẫu nhiên','tool.color.desc':'Tạo màu ngẫu nhiên với giá trị HEX & RGB. Sao chép chỉ một cú nhấp.',
      'try_now':'Thử ngay',
      'card.placeholder':'Nhấn "Rút bài" để bắt đầu','card.cards_label':'Bài:','card.no_dup':'Không trùng lặp','card.jokers':'Joker','card.draw':'Rút bài','card.shuffle':'Xáo bài',
      'number.placeholder':'Chưa có số nào được tạo','number.min':'Min','number.max':'Max','number.count':'Số lượng','number.no_repeat':'Không lặp lại','number.generate':'Tạo số',
      'spinner.winner':'Người thắng:','spinner.spin':'QUAY!','spinner.add_items':'Thêm mục để quay',
      'dice.placeholder':'Nhấn "Lăn xúc xắc" để bắt đầu','dice.label':'Xúc xắc:','dice.total':'Tổng:','dice.roll':'Lăn xúc xắc',
      'coin.heads':'SẤP','coin.tails':'NGỬA','coin.flip':'Tung xu','coin.no_flips':'Chưa tung lần nào','coin.clear':'Xoá','coin.result_heads':'👑 SẤP','coin.result_tails':'🛡️ NGỬA',
      'name.selected':'Tên được chọn','name.available':'khả dụng','name.no_names':'Chưa có tên nào','name.pick':'Chọn ngẫu nhiên','name.remove':'Loại bỏ tên đã chọn',
      'color.generate':'Tạo màu',
    },
    zh: {
      'nav.home':'首页','nav.card':'牌','nav.number':'数字','nav.spinner':'转盘',
      'nav.more':'更多','nav.dice':'骰子','nav.coin':'硬币','nav.name':'名字','nav.color':'颜色',
      'home.badge':'免费开源工具','home.title':'Random Picker','home.subtitle':'',
      'home.desc':'精心设计的随机生成器工具合集。牌、数字、转盘等——尽在一处。',
      'home.explore':'探索工具','home.all_tools':'所有工具','home.choose':'选择工具开始生成',
      'tool.card.name':'随机牌','tool.card.desc':'从标准牌组中随机抽牌，带翻牌动画与逼真牌面设计。',
      'tool.number.name':'随机数字','tool.number.desc':'生成自定义范围、数量和去重模式的随机数字。',
      'tool.spinner.name':'随机转盘','tool.spinner.desc':'使用自定义选项旋转转盘，流畅缓动动画配音效。',
      'tool.dice.name':'随机骰子','tool.dice.desc':'掷最多6个骰子，带摇晃动画和总数计算。',
      'tool.coin.name':'随机硬币','tool.coin.desc':'抛硬币，带真实投掷动画，追踪正反面历史。',
      'tool.name.name':'名字抽取器','tool.name.desc':'从列表中随机选取名字，自动保存并支持淘汰模式。',
      'tool.color.name':'随机颜色','tool.color.desc':'生成带HEX和RGB值的随机颜色，一键复制。',
      'try_now':'立即使用',
      'card.placeholder':'点击"抽牌"开始','card.cards_label':'牌数:','card.no_dup':'不重复','card.jokers':'含鬼牌','card.draw':'抽牌','card.shuffle':'洗牌',
      'number.placeholder':'尚未生成数字','number.min':'最小值','number.max':'最大值','number.count':'数量','number.no_repeat':'不重复','number.generate':'生成',
      'spinner.winner':'获胜者:','spinner.spin':'旋转!','spinner.add_items':'添加选项以开始旋转',
      'dice.placeholder':'点击"掷骰子"开始','dice.label':'骰子:','dice.total':'总计:','dice.roll':'掷骰子',
      'coin.heads':'正面','coin.tails':'反面','coin.flip':'抛硬币','coin.no_flips':'尚未抛过','coin.clear':'清除','coin.result_heads':'👑 正面','coin.result_tails':'🛡️ 反面',
      'name.selected':'已选名字','name.available':'可用','name.no_names':'尚未添加名字','name.pick':'随机选取','name.remove':'移除已选名字',
      'color.generate':'生成',
    }
  };

  window.t = function (key) {
    const lang = localStorage.getItem('randomhub_lang') || 'en';
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['en'][key] || key;
  };

  window.setLang = function (lang) {
    if (!TRANSLATIONS[lang]) return;
    localStorage.setItem('randomhub_lang', lang);
    window.applyTranslations();
    _updateLangDisplay();
  };

  window.applyTranslations = function () {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = window.t(key);
      if (val) el.textContent = val;
    });
  };

  function _updateLangDisplay() {
    const lang = localStorage.getItem('randomhub_lang') || 'en';
    const LABELS = { en: 'EN (English)', vi: 'VI (Việt Nam)', zh: 'ZH (中文)' };
    const labelEl = document.getElementById('lang-label');
    if (labelEl) labelEl.textContent = LABELS[lang] || 'EN (English)';
    document.querySelectorAll('[data-lang]').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('text-white',   active);
      btn.classList.toggle('lang-active',  active);
      btn.classList.toggle('text-slate-400', !active);
    });
    const menu = document.getElementById('lang-dropdown-menu');
    if (menu) menu.classList.remove('active');
  }
})();

/* ============================================
   Random Picker - Shared JavaScript
   ============================================ */

// --- Sound Engine (Web Audio API) ---
class SoundEngine {
  constructor() {
    this.enabled = localStorage.getItem('soundEnabled') !== 'false';
    this.ctx = null;
  }

  _getCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('soundEnabled', this.enabled);
    updateSoundIcon();
    return this.enabled;
  }

  click() {
    if (!this.enabled) return;
    const ctx = this._getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  }

  spin() {
    if (!this.enabled) return;
    const ctx = this._getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.8);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 1.2);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1.2);
  }

  success() {
    if (!this.enabled) return;
    const ctx = this._getCtx();
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);
      gain.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.12 + 0.3);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.3);
    });
  }

  roll() {
    if (!this.enabled) return;
    const ctx = this._getCtx();
    // White noise burst for dice roll
    const bufferSize = ctx.sampleRate * 0.3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.3);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    source.start(ctx.currentTime);
  }
}

window.sound = new SoundEngine();

// --- Utility Functions ---
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Copied!',
      showConfirmButton: false,
      timer: 1500,
      background: '#1e293b',
      color: '#f1f5f9',
      customClass: { popup: 'rounded-xl' }
    });
  });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Determine base path for links ---
function getBasePath() {
  const path = window.location.pathname;
  // Check if we're in a subdirectory on GitHub Pages
  const segments = path.split('/').filter(Boolean);
  // If in a tool subfolder (card/, number/, etc.), go up one level
  const toolFolders = ['card', 'number', 'spinner', 'dice', 'coin', 'name', 'color'];
  if (segments.length > 0 && toolFolders.includes(segments[segments.length - 1])) {
    return '../';
  }
  if (segments.length > 0 && segments[segments.length - 1] === 'index.html') {
    const parent = segments[segments.length - 2];
    if (toolFolders.includes(parent)) {
      return '../';
    }
  }
  return './';
}

// --- Header Injection ---
function initHeader() {
  const root = document.getElementById('header-root');
  if (!root) return;

  const base = getBasePath();
  const currentPath = window.location.pathname;
  const currentLang = localStorage.getItem('randomhub_lang') || 'en';

  function isActive(page) {
    if (page === '' || page === 'index.html') {
      return currentPath.endsWith('/') || currentPath.endsWith('/index.html') ||
             currentPath === '/' ? true : false;
    }
    return currentPath.includes('/' + page);
  }

  const mainLinks = [
    { key: 'nav.home',    href: base,              page: '',        icon: 'fa-house' },
    { key: 'nav.card',    href: base + 'card/',    page: 'card',    icon: 'fa-clone' },
    { key: 'nav.number',  href: base + 'number/',  page: 'number',  icon: 'fa-hashtag' },
    { key: 'nav.spinner', href: base + 'spinner/', page: 'spinner', icon: 'fa-circle-notch' },
  ];

  const moreLinks = [
    { key: 'nav.dice',  href: base + 'dice/',  page: 'dice',  icon: 'fa-dice' },
    { key: 'nav.coin',  href: base + 'coin/',  page: 'coin',  icon: 'fa-coins' },
    { key: 'nav.name',  href: base + 'name/',  page: 'name',  icon: 'fa-user-tag' },
    { key: 'nav.color', href: base + 'color/', page: 'color', icon: 'fa-palette' },
  ];

  const allLinks = [...mainLinks, ...moreLinks];

  const soundIcon = window.sound.enabled ? 'fa-volume-high' : 'fa-volume-xmark';

  const LABELS = { en: 'EN (English)', vi: 'VI (Việt Nam)', zh: 'ZH (中文)' };

  root.innerHTML = `
    <header class="fixed top-0 w-full z-50 header-nav" style="background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255,255,255,0.05);">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <!-- Logo -->
        <a href="${base}" class="text-xl font-bold gradient-text flex items-center gap-2">
          <i class="fa-solid fa-shuffle text-indigo-400"></i>
          Random Picker
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1">
          ${mainLinks.map(l => `
            <a href="${l.href}" class="nav-link px-3 py-2 rounded-lg text-sm font-medium ${isActive(l.page) ? 'text-white active' : 'text-slate-400 hover:text-white'}">
              <i class="fa-solid ${l.icon} mr-1.5"></i><span data-i18n="${l.key}">${window.t(l.key)}</span>
            </a>
          `).join('')}

          <!-- More Dropdown -->
          <div class="relative" id="dropdown-container">
            <button id="dropdown-btn" class="nav-link px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white flex items-center gap-1.5">
              <span data-i18n="nav.more">${window.t('nav.more')}</span> <i class="fa-solid fa-chevron-down text-xs transition-transform" id="dropdown-arrow"></i>
            </button>
            <div class="dropdown-menu absolute right-0 top-full mt-2 w-48 py-2 rounded-xl" id="dropdown-menu"
                 style="background: rgba(30, 41, 59, 0.95); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1);">
              ${moreLinks.map(l => `
                <a href="${l.href}" class="flex items-center gap-3 px-4 py-2.5 text-sm ${isActive(l.page) ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'} transition-colors">
                  <i class="fa-solid ${l.icon} w-4 text-center"></i><span data-i18n="${l.key}">${window.t(l.key)}</span>
                </a>
              `).join('')}
            </div>
          </div>

          <!-- Sound Toggle -->
          <button id="sound-toggle" class="ml-3 w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" title="Toggle Sound">
            <i class="fa-solid ${soundIcon}"></i>
          </button>

          <!-- Language Dropdown -->
          <div class="relative ml-1" id="lang-dropdown-container">
            <button id="lang-dropdown-btn" class="h-9 px-2.5 rounded-lg flex items-center gap-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
              <span id="lang-label" class="text-xs">${LABELS[currentLang] || 'EN (English)'}</span>
              <i class="fa-solid fa-chevron-down text-xs transition-transform" id="lang-dropdown-arrow"></i>
            </button>
            <div class="dropdown-menu absolute right-0 top-full mt-2 w-40 py-1 rounded-xl" id="lang-dropdown-menu"
                 style="background: rgba(30, 41, 59, 0.95); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1);">
              <button data-lang="en" class="lang-item w-full flex items-center gap-2.5 px-4 py-2.5 text-sm ${currentLang === 'en' ? 'text-white lang-active' : 'text-slate-400 hover:text-white hover:bg-white/5'} transition-colors">
                EN (English)
              </button>
              <button data-lang="vi" class="lang-item w-full flex items-center gap-2.5 px-4 py-2.5 text-sm ${currentLang === 'vi' ? 'text-white lang-active' : 'text-slate-400 hover:text-white hover:bg-white/5'} transition-colors">
                VI (Việt Nam)
              </button>
              <button data-lang="zh" class="lang-item w-full flex items-center gap-2.5 px-4 py-2.5 text-sm ${currentLang === 'zh' ? 'text-white lang-active' : 'text-slate-400 hover:text-white hover:bg-white/5'} transition-colors">
                ZH (中文)
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Hamburger -->
        <div class="flex items-center gap-2 md:hidden">
          <button id="sound-toggle-mobile" class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" title="Toggle Sound">
            <i class="fa-solid ${soundIcon}"></i>
          </button>
          <button id="hamburger" class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
            <i class="fa-solid fa-bars text-lg" id="hamburger-icon"></i>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div class="mobile-menu md:hidden" id="mobile-menu" style="border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="px-4 py-3 space-y-1">
          ${allLinks.map(l => `
            <a href="${l.href}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${isActive(l.page) ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'} transition-colors">
              <i class="fa-solid ${l.icon} w-4 text-center"></i><span data-i18n="${l.key}">${window.t(l.key)}</span>
            </a>
          `).join('')}
          <!-- Language selection (mobile) -->
          <div class="pt-2 mt-1 border-t border-white/5">
            <div class="flex gap-2 px-1">
              <button data-lang="en" class="lang-item flex-1 py-2 rounded-lg text-sm font-medium ${currentLang === 'en' ? 'text-white lang-active' : 'text-slate-400 hover:text-white hover:bg-white/5'} transition-colors">EN</button>
              <button data-lang="vi" class="lang-item flex-1 py-2 rounded-lg text-sm font-medium ${currentLang === 'vi' ? 'text-white lang-active' : 'text-slate-400 hover:text-white hover:bg-white/5'} transition-colors">VI</button>
              <button data-lang="zh" class="lang-item flex-1 py-2 rounded-lg text-sm font-medium ${currentLang === 'zh' ? 'text-white lang-active' : 'text-slate-400 hover:text-white hover:bg-white/5'} transition-colors">ZH</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;

  // Event Listeners
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburgerIcon.classList.toggle('fa-bars');
    hamburgerIcon.classList.toggle('fa-xmark');
  });

  // More Dropdown
  const dropdownBtn = document.getElementById('dropdown-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const dropdownArrow = document.getElementById('dropdown-arrow');

  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('active');
    dropdownArrow.style.transform = dropdownMenu.classList.contains('active') ? 'rotate(180deg)' : '';
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#dropdown-container')) {
      dropdownMenu.classList.remove('active');
      dropdownArrow.style.transform = '';
    }
  });

  // Language Dropdown
  const langBtn   = document.getElementById('lang-dropdown-btn');
  const langMenu  = document.getElementById('lang-dropdown-menu');
  const langArrow = document.getElementById('lang-dropdown-arrow');

  if (langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('active');
      langArrow.style.transform = langMenu.classList.contains('active') ? 'rotate(180deg)' : '';
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#lang-dropdown-container') && langMenu) {
      langMenu.classList.remove('active');
      if (langArrow) langArrow.style.transform = '';
    }
  });

  // Language selection buttons (desktop + mobile)
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => window.setLang(btn.dataset.lang));
  });

  // Sound toggles
  document.getElementById('sound-toggle').addEventListener('click', () => window.sound.toggle());
  document.getElementById('sound-toggle-mobile').addEventListener('click', () => window.sound.toggle());

  // Scroll effect
  window.addEventListener('scroll', () => {
    const header = root.querySelector('header');
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function updateSoundIcon() {
  const icon = window.sound.enabled ? 'fa-volume-high' : 'fa-volume-xmark';
  document.querySelectorAll('#sound-toggle i, #sound-toggle-mobile i').forEach(el => {
    el.className = `fa-solid ${icon}`;
  });
}

// --- Scroll Reveal Observer ---
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initReveal();
  window.applyTranslations();
});
