/* ============================================
   i18n — EN / VI / ZH
   ============================================ */

(function () {
  const TRANSLATIONS = {
    en: {
      'nav.home':'Home','nav.card':'Card','nav.number':'Number','nav.spinner':'Spinner',
      'nav.more':'More','nav.dice':'Dice','nav.coin':'Coin','nav.name':'Name',
      'home.badge':'Free & Open Source Tools','home.title':'Random Picker','home.subtitle':'',
      'home.desc':'A collection of beautifully crafted random generator tools. Cards, numbers, spinners, and more — all in one place.',
      'home.explore':'Explore Tools','home.all_tools':'All Tools','home.choose':'Choose a tool and start generating',
      'tool.card.name':'Random Card','tool.card.desc':'Draw random cards from a standard deck. Flip animation with realistic card designs.',
      'tool.number.name':'Random Number','tool.number.desc':'Generate random numbers with custom range, count, and elimination mode.',
      'tool.spinner.name':'Random Spinner','tool.spinner.desc':'Spin the wheel with custom items. Smooth easing animation with sound effects.',
      'tool.dice.name':'Random Dice','tool.dice.desc':'Roll up to 6 dice with shake animation and total calculation.',
      'tool.coin.name':'Random Coin','tool.coin.desc':'Flip a coin with realistic toss animation. Track your heads and tails history.',
      'tool.oracle.name':'Decision Oracle','tool.oracle.desc':'Ask the oracle a yes/no question and receive a mystical answer with a ritual.',
      'tool.name.name':'Name Picker','tool.name.desc':'Pick a random name from your list. Auto-save with elimination mode.',
      'try_now':'Try Now',
      'card.placeholder':'Click "Draw Cards" to start','card.cards_label':'Cards:','card.jokers':'Jokers','card.draw':'Draw Cards',
      'card.result_title':'Your Cards','card.result_ok':'Nice!',
      'card.suit_hearts':'Hearts','card.suit_diamonds':'Diamonds','card.suit_clubs':'Clubs','card.suit_spades':'Spades',
      'card.joker_red':'Joker (Red)','card.joker_black':'Joker (Black)',
      'number.placeholder':'No numbers generated yet','number.min':'Min','number.max':'Max','number.count':'Count','number.generate':'Generate',
      'spinner.winner':'Winner:','spinner.spin':'SPIN!','spinner.add_items':'Add items to spin',
      'spinner.edit_title':'Edit Items','spinner.update':'Update Wheel','spinner.cancel':'Cancel',
      'spinner.max_items_error':'Maximum 100 items allowed','spinner.winner_title':'Winner!','spinner.edit':'Edit','spinner.reset':'Reset',
      'dice.placeholder':'Click "Roll Dice" to start','dice.label':'Dice:','dice.total':'Total:','dice.roll':'Roll Dice',
      'coin.heads':'HEADS','coin.tails':'TAILS','coin.flip':'Flip Coin','coin.no_flips':'No flips yet','coin.clear':'Clear','coin.result_heads':'👑 HEADS','coin.result_tails':'🛡️ TAILS',
      'coin.max_reached':'Maximum 50 flips reached. Clear history to continue.','coin.max_msg':'Clear history to continue.',
      'name.selected':'Selected Name','name.available':'available','name.no_names':'No names added yet','name.pick':'Pick Random','name.remove':'Remove picked names',
      'name.edit_title':'Edit Names','name.save':'Save','name.cancel':'Cancel',
      'name.saved_msg':'names saved!','name.max_error':'Maximum 100 names allowed',
      'name.all_picked':'All names picked!','name.add_first':'Add names first by clicking the edit button.','name.reset_hint':'Reset the list to pick again.',
      // Oracle translations (mystical answer pool lives in oracle/oracle-i18n.js)
      'nav.oracle':'Oracle',
      'oracle.tagline':'Ask the oracle anything…','oracle.placeholder':'Ask your question, mortal...',
      'oracle.summon_btn':'Summon','oracle.ask_again':'Ask Again','oracle.ask':'Ask the Oracle',
      'oracle.summoning':'The god awakens...','oracle.thinking':'Reading the threads of fate...',
      'oracle.copy_btn':'Copy Answer',
      'oracle.history_title':'Your Questions','oracle.history':'History','oracle.history_empty':'No questions asked yet',
      'oracle.history_clear':'Clear History','oracle.history_clear_confirm':'Clear all oracle history?',
      'oracle.history_clear_yes':'Yes, clear it','oracle.history_clear_no':'Cancel',
      'oracle.empty_question':'Please ask a question first.','oracle.copied':'Copied to clipboard',
      'oracle.copy_template':'Question: {q}\nOracle: {a}',
      'oracle.cat_yes':'YES','oracle.cat_no':'NO','oracle.cat_maybe':'MAYBE','oracle.cat_ominous':'THE FATES ARE SILENT',
      'oracle.preset.eat':'Should I eat now?','oracle.preset.go_out':'Should I go out today?',
      'oracle.preset.sleep':'Should I sleep early tonight?','oracle.preset.lucky':'Is today my lucky day?',
      'oracle.preset.risk':'Should I take the risk?','oracle.preset.wait':'Should I wait or act now?',
      'oracle.preset.call':'Should I make the call?','oracle.preset.buy':'Should I buy it?',
      // Donate translations
      'donate.title':'Buy me a coffee','donate.message':'Enjoying this tool? Support its development with a coffee!',
      'donate.momo':'Momo','donate.momo_desc':'Vietnamese bank','donate.scan_qr':'Scan QR code to donate',
      'donate.paypal':'PayPal','donate.paypal_desc':'Visa, Mastercard','donate.open_link':'Open to donate',
      'donate.kofi':'Ko-fi','donate.kofi_desc':'Other methods',
      'donate.popup_text':'Donate','donate.footer_link':'☕ Donate','donate.menu_btn':'Donate','donate.download_qr':'Download QR',
    },
    vi: {
      'nav.home':'Trang chủ','nav.card':'Bài','nav.number':'Số','nav.spinner':'Quay số',
      'nav.more':'Thêm','nav.dice':'Xúc xắc','nav.coin':'Đồng xu','nav.name':'Tên',
      'home.badge':'Công cụ miễn phí & mã nguồn mở','home.title':'Random Picker','home.subtitle':'',
      'home.desc':'Bộ sưu tập các công cụ tạo ngẫu nhiên được thiết kế đẹp mắt. Bài, số, vòng quay và nhiều hơn — tất cả trong một nơi.',
      'home.explore':'Khám phá công cụ','home.all_tools':'Tất cả công cụ','home.choose':'Chọn một công cụ và bắt đầu',
      'tool.card.name':'Rút bài ngẫu nhiên','tool.card.desc':'Rút bài ngẫu nhiên từ bộ bài tiêu chuẩn. Hiệu ứng lật bài với thiết kế thực tế.',
      'tool.number.name':'Số ngẫu nhiên','tool.number.desc':'Tạo số ngẫu nhiên với phạm vi, số lượng và chế độ loại trừ tuỳ chỉnh.',
      'tool.spinner.name':'Vòng quay may mắn','tool.spinner.desc':'Quay vòng với các mục tuỳ chỉnh. Hiệu ứng mượt mà cùng âm thanh.',
      'tool.dice.name':'Xúc xắc ngẫu nhiên','tool.dice.desc':'Lăn tối đa 6 xúc xắc với hiệu ứng lắc và tính tổng.',
      'tool.coin.name':'Tung đồng xu','tool.coin.desc':'Tung đồng xu với hiệu ứng thực tế. Theo dõi lịch sử sấp ngửa.',
      'tool.oracle.name':'Vị Thần Quyết Định','tool.oracle.desc':'Hỏi vị thần một câu yes/no và nhận câu trả lời huyền bí qua nghi thức.',
      'tool.name.name':'Chọn tên ngẫu nhiên','tool.name.desc':'Chọn ngẫu nhiên một tên từ danh sách. Tự lưu với chế độ loại trừ.',
      'try_now':'Thử ngay',
      'card.placeholder':'Nhấn "Rút bài" để bắt đầu','card.cards_label':'Bài:','card.jokers':'Joker','card.draw':'Rút bài',
      'card.result_title':'Bài của bạn','card.result_ok':'Tuyệt!',
      'card.suit_hearts':'Cơ','card.suit_diamonds':'Rô','card.suit_clubs':'Chuồn','card.suit_spades':'Bích',
      'card.joker_red':'Joker (Đỏ)','card.joker_black':'Joker (Đen)',
      'number.placeholder':'Chưa có số nào được tạo','number.min':'Min','number.max':'Max','number.count':'Số lượng','number.generate':'Tạo số',
      'spinner.winner':'Người thắng:','spinner.spin':'QUAY!','spinner.add_items':'Thêm mục để quay',
      'spinner.edit_title':'Chỉnh sửa mục','spinner.update':'Cập nhật vòng quay','spinner.cancel':'Hủy',
      'spinner.max_items_error':'Tối đa 100 mục','spinner.winner_title':'Người thắng!','spinner.edit':'Sửa','spinner.reset':'Đặt lại',
      'dice.placeholder':'Nhấn "Lăn xúc xắc" để bắt đầu','dice.label':'Xúc xắc:','dice.total':'Tổng:','dice.roll':'Lăn xúc xắc',
      'coin.heads':'SẤP','coin.tails':'NGỬA','coin.flip':'Tung xu','coin.no_flips':'Chưa tung lần nào','coin.clear':'Xoá','coin.result_heads':'👑 SẤP','coin.result_tails':'🛡️ NGỬA',
      'coin.max_reached':'Đã đạt tối đa 50 lần tung. Xóa lịch sử để tiếp tục.','coin.max_msg':'Xóa lịch sử để tiếp tục.',
      'name.selected':'Tên được chọn','name.available':'khả dụng','name.no_names':'Chưa có tên nào','name.pick':'Chọn ngẫu nhiên','name.remove':'Loại bỏ tên đã chọn',
      'name.edit_title':'Chỉnh sửa tên','name.save':'Lưu','name.cancel':'Hủy',
      'name.saved_msg':'tên đã lưu!','name.max_error':'Tối đa 100 tên',
      'name.all_picked':'Đã chọn hết tên!','name.add_first':'Thêm tên bằng cách nhấn nút chỉnh sửa.','name.reset_hint':'Đặt lại danh sách để chọn lại.',
      // Oracle translations (kho câu trả lời huyền bí nằm ở oracle/oracle-i18n.js)
      'nav.oracle':'Quyết định',
      'oracle.tagline':'Hãy hỏi thần bất cứ điều gì…','oracle.placeholder':'Hãy đặt câu hỏi của ngươi...',
      'oracle.summon_btn':'Triệu Hồi','oracle.ask_again':'Hỏi lại','oracle.ask':'Hỏi Thần',
      'oracle.summoning':'Thần đang thức dậy...','oracle.thinking':'Đọc sợi chỉ số phận...',
      'oracle.copy_btn':'Sao chép',
      'oracle.history_title':'Câu hỏi của bạn','oracle.history':'Lịch sử','oracle.history_empty':'Chưa có câu hỏi nào',
      'oracle.history_clear':'Xóa lịch sử','oracle.history_clear_confirm':'Xóa toàn bộ lịch sử phán quyết?',
      'oracle.history_clear_yes':'Có, xóa đi','oracle.history_clear_no':'Hủy',
      'oracle.empty_question':'Vui lòng nhập câu hỏi trước.','oracle.copied':'Đã sao chép',
      'oracle.copy_template':'Câu hỏi: {q}\nThần phán: {a}',
      'oracle.cat_yes':'CÓ','oracle.cat_no':'KHÔNG','oracle.cat_maybe':'CÓ THỂ','oracle.cat_ominous':'VẬN MỆNH IM LẶNG',
      'oracle.preset.eat':'Tôi có nên ăn bây giờ không?','oracle.preset.go_out':'Tôi có nên ra ngoài hôm nay không?',
      'oracle.preset.sleep':'Tôi có nên ngủ sớm tối nay không?','oracle.preset.lucky':'Hôm nay có phải ngày may mắn của tôi không?',
      'oracle.preset.risk':'Tôi có nên liều không?','oracle.preset.wait':'Tôi nên chờ hay hành động ngay?',
      'oracle.preset.call':'Tôi có nên gọi điện không?','oracle.preset.buy':'Tôi có nên mua không?',
      // Donate translations
      'donate.title':'Mời tôi ly cà phê','donate.message':'Bạn thấy công cụ này hữu ích? Hãy ủng hộ tác giả một ly cà phê!',
      'donate.momo':'Momo','donate.momo_desc':'Ngân hàng Việt Nam','donate.scan_qr':'Quét mã QR để ủng hộ',
      'donate.paypal':'PayPal','donate.paypal_desc':'Visa, Mastercard','donate.open_link':'Mở để ủng hộ',
      'donate.kofi':'Ko-fi','donate.kofi_desc':'Phương thức khác',
      'donate.popup_text':'Ủng hộ','donate.footer_link':'☕ Ủng hộ','donate.menu_btn':'Ủng hộ','donate.download_qr':'Tải QR',
    },
    zh: {
      'nav.home':'首页','nav.card':'牌','nav.number':'数字','nav.spinner':'转盘',
      'nav.more':'更多','nav.dice':'骰子','nav.coin':'硬币','nav.name':'名字',
      'home.badge':'免费开源工具','home.title':'Random Picker','home.subtitle':'',
      'home.desc':'精心设计的随机生成器工具合集。牌、数字、转盘等——尽在一处。',
      'home.explore':'探索工具','home.all_tools':'所有工具','home.choose':'选择工具开始生成',
      'tool.card.name':'随机牌','tool.card.desc':'从标准牌组中随机抽牌，带翻牌动画与逼真牌面设计。',
      'tool.number.name':'随机数字','tool.number.desc':'生成自定义范围、数量和去重模式的随机数字。',
      'tool.spinner.name':'随机转盘','tool.spinner.desc':'使用自定义选项旋转转盘，流畅缓动动画配音效。',
      'tool.dice.name':'随机骰子','tool.dice.desc':'掷最多6个骰子，带摇晃动画和总数计算。',
      'tool.coin.name':'随机硬币','tool.coin.desc':'抛硬币，带真实投掷动画，追踪正反面历史。',
      'tool.oracle.name':'决策神谕','tool.oracle.desc':'向神谕提出一个是/否问题，通过动画仪式获得神秘答案。',
      'tool.name.name':'名字抽取器','tool.name.desc':'从列表中随机选取名字，自动保存并支持淘汰模式。',
      'try_now':'立即使用',
      'card.placeholder':'点击"抽牌"开始','card.cards_label':'牌数:','card.jokers':'含鬼牌','card.draw':'抽牌',
      'card.result_title':'你的牌','card.result_ok':'不错!',
      'card.suit_hearts':'红心','card.suit_diamonds':'方块','card.suit_clubs':'梅花','card.suit_spades':'黑桃',
      'card.joker_red':'小王','card.joker_black':'大王',
      'number.placeholder':'尚未生成数字','number.min':'最小值','number.max':'最大值','number.count':'数量','number.generate':'生成',
      'spinner.winner':'获胜者:','spinner.spin':'旋转!','spinner.add_items':'添加选项以开始旋转',
      'spinner.edit_title':'编辑选项','spinner.update':'更新转盘','spinner.cancel':'取消',
      'spinner.max_items_error':'最多100个选项','spinner.winner_title':'获胜者!','spinner.edit':'编辑','spinner.reset':'重置',
      'dice.placeholder':'点击"掷骰子"开始','dice.label':'骰子:','dice.total':'总计:','dice.roll':'掷骰子',
      'coin.heads':'正面','coin.tails':'反面','coin.flip':'抛硬币','coin.no_flips':'尚未抛过','coin.clear':'清除','coin.result_heads':'👑 正面','coin.result_tails':'🛡️ 反面',
      'coin.max_reached':'已达到最大50次。请清除历史记录后继续。','coin.max_msg':'请清除历史记录后继续。',
      'name.selected':'已选名字','name.available':'可用','name.no_names':'尚未添加名字','name.pick':'随机选取','name.remove':'移除已选名字',
      'name.edit_title':'编辑名字','name.save':'保存','name.cancel':'取消',
      'name.saved_msg':'个名字已保存!','name.max_error':'最多100个名字',
      'name.all_picked':'所有名字已选完!','name.add_first':'请先点击编辑按钮添加名字。','name.reset_hint':'重置列表以重新选择。',
      // Oracle translations (神秘答案库位于 oracle/oracle-i18n.js)
      'nav.oracle':'决定',
      'oracle.tagline':'向神明询问任何问题…','oracle.placeholder':'凡人，提出你的问题...',
      'oracle.summon_btn':'召唤','oracle.ask_again':'再问一次','oracle.ask':'问神谕',
      'oracle.summoning':'神正在苏醒...','oracle.thinking':'读取命运之线...',
      'oracle.copy_btn':'复制答案',
      'oracle.history_title':'你的问题','oracle.history':'历史','oracle.history_empty':'尚未提问',
      'oracle.history_clear':'清除历史','oracle.history_clear_confirm':'清除所有神谕历史？',
      'oracle.history_clear_yes':'是的，清除','oracle.history_clear_no':'取消',
      'oracle.empty_question':'请先输入问题。','oracle.copied':'已复制到剪贴板',
      'oracle.copy_template':'问题：{q}\n神谕：{a}',
      'oracle.cat_yes':'是','oracle.cat_no':'否','oracle.cat_maybe':'也许','oracle.cat_ominous':'命运沉默',
      'oracle.preset.eat':'我现在应该吃东西吗？','oracle.preset.go_out':'我今天应该出门吗？',
      'oracle.preset.sleep':'我今晚应该早睡吗？','oracle.preset.lucky':'今天是我的幸运日吗？',
      'oracle.preset.risk':'我应该冒这个险吗？','oracle.preset.wait':'我应该等待还是立即行动？',
      'oracle.preset.call':'我应该打这个电话吗？','oracle.preset.buy':'我应该买吗？',
      // Donate translations
      'donate.title':'请我喝杯咖啡','donate.message':'喜欢这个工具？请我喝杯咖啡支持开发',
      'donate.momo':'Momo','donate.momo_desc':'越南银行','donate.scan_qr':'扫描二维码捐赠',
      'donate.paypal':'PayPal','donate.paypal_desc':'Visa, Mastercard','donate.open_link':'打开捐赠',
      'donate.kofi':'Ko-fi','donate.kofi_desc':'其他方式',
      'donate.popup_text':'捐赠','donate.footer_link':'☕ 捐赠','donate.menu_btn':'捐赠','donate.download_qr':'下载二维码',
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
    const SHORT = { en: 'EN', vi: 'VI', zh: 'ZH' };
    const labelEl = document.getElementById('lang-label');
    if (labelEl) labelEl.textContent = SHORT[lang] || 'EN';
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
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.exponentialRampToValueAtTime(1200, t + 0.04);
    osc.frequency.exponentialRampToValueAtTime(600, t + 0.08);
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
    osc.start(t);
    osc.stop(t + 0.1);
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
  const toolFolders = ['card', 'number', 'spinner', 'dice', 'coin', 'name', 'oracle'];
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
      const toolFolders = ['card', 'number', 'spinner', 'dice', 'coin', 'name', 'oracle'];
      const inToolFolder = toolFolders.some(f => currentPath.includes('/' + f + '/'));
      if (inToolFolder) return false;
      return currentPath.endsWith('/') || currentPath.endsWith('/index.html') || currentPath === '/';
    }
    return currentPath.includes('/' + page);
  }

  const mainLinks = [
    { key: 'nav.home',    href: base,              page: '',        icon: 'fa-house' },
  ];

  const quickLinks = [
    { key: 'nav.card',    href: base + 'card/',    page: 'card',    icon: 'fa-clone' },
    { key: 'nav.number',  href: base + 'number/',  page: 'number',  icon: 'fa-hashtag' },
    { key: 'nav.spinner', href: base + 'spinner/', page: 'spinner', icon: 'fa-circle-notch' },
  ];

  const moreLinks = [
    { key: 'nav.dice',    href: base + 'dice/',    page: 'dice',    icon: 'fa-dice' },
    { key: 'nav.coin',    href: base + 'coin/',    page: 'coin',    icon: 'fa-coins' },
    { key: 'nav.name',    href: base + 'name/',    page: 'name',    icon: 'fa-user-tag' },
    { key: 'nav.oracle',  href: base + 'oracle/',  page: 'oracle',  icon: 'fa-eye' },
  ];

  const allLinks = [...mainLinks, ...quickLinks, ...moreLinks];

  const soundIcon = window.sound.enabled ? 'fa-volume-high' : 'fa-volume-xmark';

  const SHORT_LABELS = { en: 'EN', vi: 'VI', zh: 'ZH' };

  const isLg = window.innerWidth >= 1024;
  const isMoreActive = isLg
    ? moreLinks.some(l => isActive(l.page))
    : [...quickLinks, ...moreLinks].some(l => isActive(l.page));

  root.innerHTML = `
    <header class="fixed top-0 w-full z-50 header-nav" style="background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255,255,255,0.05);">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <!-- Logo -->
        <a href="${base}" class="text-xl font-bold gradient-text flex items-center gap-2 whitespace-nowrap">
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

          <!-- Quick links (desktop lg+) -->
          ${quickLinks.map(l => `
            <a href="${l.href}" class="nav-link hidden lg:inline-flex px-3 py-2 rounded-lg text-sm font-medium ${isActive(l.page) ? 'text-white active' : 'text-slate-400 hover:text-white'}">
              <i class="fa-solid ${l.icon} mr-1.5"></i><span data-i18n="${l.key}">${window.t(l.key)}</span>
            </a>
          `).join('')}

          <!-- More Dropdown -->
          <div class="relative" id="dropdown-container">
            <button id="dropdown-btn" class="px-3 py-2 rounded-lg text-sm font-medium ${isMoreActive ? 'text-white' : 'text-slate-400 hover:text-white'} flex items-center gap-1.5">
              <span data-i18n="nav.more">${window.t('nav.more')}</span> <i class="fa-solid fa-chevron-down text-xs transition-transform" id="dropdown-arrow"></i>
            </button>
            <div class="dropdown-menu absolute right-0 top-full mt-2 w-48 py-2 rounded-xl" id="dropdown-menu"
                 style="background: rgba(30, 41, 59, 0.95); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1);">
              ${quickLinks.map(l => `
                <a href="${l.href}" class="lg:hidden flex items-center gap-3 px-4 py-2.5 text-sm ${isActive(l.page) ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'} transition-colors">
                  <i class="fa-solid ${l.icon} w-4 text-center"></i><span data-i18n="${l.key}">${window.t(l.key)}</span>
                </a>
              `).join('')}
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
              <span id="lang-label" class="text-xs">${SHORT_LABELS[currentLang] || 'EN'}</span>
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
