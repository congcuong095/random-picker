/* ============================================
   Oracle — Mystical Answer Pool (i18n)
   Vị Thần Quyết Định (The Decision Oracle)

   This file contains ONLY the 65 mystical answers that the oracle
   can return (YES × 20, NO × 20, MAYBE × 15, OMINOUS × 10).
   All other UI text (labels, presets, categories, nav, tool name/desc)
   lives in assets/js/main.js alongside the rest of the app's i18n.

   Loaded AFTER main.js: wraps window.t so oracle.yes_*, oracle.no_*,
   oracle.maybe_*, oracle.ominous_* keys resolve here first.
   ============================================ */

(function () {
  'use strict';

  const ORACLE_ANSWERS = {
    /* ── English ─────────────────────────────── */
    en: {
      // ── YES answers (20) ──────────────────────
      'oracle.yes_1':  'The stars align in your favor. It shall be so.',
      'oracle.yes_2':  'The god sees clearly — this path leads to triumph.',
      'oracle.yes_3':  'Without doubt. The universe conspires to grant your wish.',
      'oracle.yes_4':  'YES — and sooner than you dare to hope.',
      'oracle.yes_5':  'The ancient flames whisper: proceed without fear.',
      'oracle.yes_6':  'I have spoken to the void. The void says yes.',
      'oracle.yes_7':  'A thousand threads of fate converge on this outcome.',
      'oracle.yes_8':  'It is written. Rejoice, for fortune smiles upon you.',
      'oracle.yes_9':  'The oracle does not err. Yes.',
      'oracle.yes_10': 'Darkness shall part. Light awaits you at the end of this path.',
      'oracle.yes_11': 'The divine winds blow in your direction.',
      'oracle.yes_12': 'Go forward. The god walks beside you.',
      'oracle.yes_13': 'This is not merely a question — it is a prophecy already fulfilled.',
      'oracle.yes_14': 'The cosmic forces have been arranging this moment for you.',
      'oracle.yes_15': 'Your ancestors smile upon this choice. Proceed with confidence.',
      'oracle.yes_16': 'The oracle trembles with certainty. Yes — without reservation.',
      'oracle.yes_17': 'All roads from this crossroads lead to the same glorious outcome.',
      'oracle.yes_18': 'The universe has been waiting for you to ask. The answer was always yes.',
      'oracle.yes_19': 'Even the stones beneath your feet cry out in agreement.',
      'oracle.yes_20': 'Ask and receive. The heavens have already granted it.',

      // ── NO answers (20) ──────────────────────
      'oracle.no_1':  'The god closes the door. Seek another path.',
      'oracle.no_2':  'Mortal, this road leads only to ruin. Turn back.',
      'oracle.no_3':  'No. The universe has spoken. Do not fight it.',
      'oracle.no_4':  'The eye of god sees what you cannot. This is not your moment.',
      'oracle.no_5':  'The bones of fate have fallen — they spell NO.',
      'oracle.no_6':  'A heavy shadow falls over this path. The god advises against it.',
      'oracle.no_7':  'Not this. Not now. The tides are against you.',
      'oracle.no_8':  'The oracle has seen this before. It does not end well. Desist.',
      'oracle.no_9':  'Even the stars weep for this choice. Choose differently.',
      'oracle.no_10': 'No power in this realm or the next can make this succeed.',
      'oracle.no_11': 'The god shakes its head slowly. You already know the answer.',
      'oracle.no_12': 'Fate is immovable on this matter. Walk away.',
      'oracle.no_13': 'The sacred flame flickers and dies at this question. That is your answer.',
      'oracle.no_14': 'The oracle has seen your path. This is not part of it.',
      'oracle.no_15': 'This is not your story to write. Turn to another chapter.',
      'oracle.no_16': 'The heavens turn away. Consider this your final warning.',
      'oracle.no_17': 'Your own heart already knows the answer is no. Listen to it.',
      'oracle.no_18': 'Not even fate would dare touch this. Stay away.',
      'oracle.no_19': 'No. No. A thousand times, no.',
      'oracle.no_20': 'The cosmos mourns for this endeavor before it has begun.',

      // ── MAYBE answers (15) ────────────────────
      'oracle.maybe_1':  'The mists are thick today. Ask when your mind is clear.',
      'oracle.maybe_2':  'Neither yes nor no — the outcome rests in your hands alone.',
      'oracle.maybe_3':  'The threads of fate are tangled. Patience is your only tool.',
      'oracle.maybe_4':  'Many futures branch from this moment. The god cannot choose for you.',
      'oracle.maybe_5':  'There is a 50% chance the oracle is simply enjoying your uncertainty.',
      'oracle.maybe_6':  'The answer exists, but it hides. Look inward before looking upward.',
      'oracle.maybe_7':  'Even gods do not know all things. This is one of those things.',
      'oracle.maybe_8':  'The moon is waxing. Come back when it is full.',
      'oracle.maybe_9':  'Ask the same question three times, and the truth will surface.',
      'oracle.maybe_10': 'The scales tip back and forth. Your intentions are the deciding weight.',
      'oracle.maybe_11': 'The oracle consults the void. The void shrugs.',
      'oracle.maybe_12': 'Both paths exist in potential. Only decisive action will collapse one.',
      'oracle.maybe_13': 'Clarity will come. Today is simply not that day.',
      'oracle.maybe_14': 'The outcome bends toward your will. But only if your will is pure.',
      'oracle.maybe_15': 'The oracle is uncertain — yet life rewards those who leap anyway.',

      // ── OMINOUS answers (10) ─────────────────
      'oracle.ominous_1':  'The god falls silent. Some answers must not be spoken aloud.',
      'oracle.ominous_2':  'I have seen your fate. I choose not to share it.',
      'oracle.ominous_3':  'The question disturbs the old ones. Ask something else.',
      'oracle.ominous_4':  'The void looked back. Proceed with extreme caution.',
      'oracle.ominous_5':  'This question has already been answered in another life. You remember, if you try.',
      'oracle.ominous_6':  'All the god says is: be ready for either.',
      'oracle.ominous_7':  'The mirror showed the oracle your future. The mirror was smashed.',
      'oracle.ominous_8':  'Ask someone else. The oracle refuses to look upon this.',
      'oracle.ominous_9':  'Beware the answer you seek — it carries a price you may not wish to pay.',
      'oracle.ominous_10': 'Something stirs in the deep at this question. Perhaps silence is safest.',
    },

    /* ── Vietnamese ──────────────────────────── */
    vi: {
      // ── YES answers (20) ──────────────────────
      'oracle.yes_1':  'Các vì sao hội tụ về phía ngươi. Hãy tin tưởng vào điều đó.',
      'oracle.yes_2':  'Thần thấy rõ ràng — con đường này dẫn đến chiến thắng.',
      'oracle.yes_3':  'Không còn nghi ngờ. Vũ trụ đang mưu tính để thực hiện điều ngươi muốn.',
      'oracle.yes_4':  'CÓ — và sớm hơn những gì ngươi dám hy vọng.',
      'oracle.yes_5':  'Ngọn lửa cổ đại thì thầm: hãy tiến về phía trước không sợ hãi.',
      'oracle.yes_6':  'Ta đã nói chuyện với hư không. Hư không nói có.',
      'oracle.yes_7':  'Ngàn sợi số phận hội tụ về kết quả này.',
      'oracle.yes_8':  'Đã được ghi lại. Hãy vui mừng, vì vận may đang mỉm cười với ngươi.',
      'oracle.yes_9':  'Thần không sai lầm. Có.',
      'oracle.yes_10': 'Bóng tối sẽ rẽ ra. Ánh sáng đang chờ ngươi ở cuối con đường này.',
      'oracle.yes_11': 'Những ngọn gió thần thánh đang thổi về phía ngươi.',
      'oracle.yes_12': 'Hãy tiến về phía trước. Thần đang đi bên cạnh ngươi.',
      'oracle.yes_13': 'Đây không chỉ là câu hỏi — đây là lời tiên tri đã được thực hiện.',
      'oracle.yes_14': 'Các lực lượng vũ trụ đã sắp xếp khoảnh khắc này cho ngươi.',
      'oracle.yes_15': 'Tổ tiên ngươi mỉm cười với sự lựa chọn này. Hãy tiến bước tự tin.',
      'oracle.yes_16': 'Thần run rẩy vì sự chắc chắn. Có — không chút do dự.',
      'oracle.yes_17': 'Mọi con đường từ ngã tư này đều dẫn đến cùng một kết quả vinh quang.',
      'oracle.yes_18': 'Vũ trụ đã chờ ngươi hỏi. Câu trả lời luôn luôn là có.',
      'oracle.yes_19': 'Ngay cả những viên đá dưới chân ngươi cũng đồng thanh tán thành.',
      'oracle.yes_20': 'Hỏi và nhận. Trời đã ban phép rồi.',

      // ── NO answers (20) ──────────────────────
      'oracle.no_1':  'Thần đóng cánh cửa lại. Hãy tìm con đường khác.',
      'oracle.no_2':  'Hỡi người phàm, con đường này chỉ dẫn đến hủy diệt. Hãy quay trở lại.',
      'oracle.no_3':  'Không. Vũ trụ đã phán quyết. Đừng chống lại nó.',
      'oracle.no_4':  'Mắt thần thấy những gì ngươi không thể. Đây không phải thời điểm của ngươi.',
      'oracle.no_5':  'Xương số phận đã đổ xuống — chúng đánh vần là KHÔNG.',
      'oracle.no_6':  'Một bóng tối nặng nề bao phủ con đường này. Thần khuyên ngươi đừng đi.',
      'oracle.no_7':  'Không phải điều này. Không phải lúc này. Thủy triều đang chống lại ngươi.',
      'oracle.no_8':  'Thần đã thấy điều này trước đây. Kết cục không tốt đẹp. Hãy từ bỏ.',
      'oracle.no_9':  'Ngay cả các vì sao cũng khóc cho sự lựa chọn này. Hãy chọn khác đi.',
      'oracle.no_10': 'Không có sức mạnh nào trong cõi này hay cõi kia có thể khiến điều này thành công.',
      'oracle.no_11': 'Thần chậm rãi lắc đầu. Ngươi đã biết câu trả lời rồi.',
      'oracle.no_12': 'Vận mệnh không thể lay chuyển về điều này. Hãy bước đi.',
      'oracle.no_13': 'Ngọn lửa thiêng lung lay và tắt lịm trước câu hỏi này. Đó là câu trả lời.',
      'oracle.no_14': 'Thần đã thấy con đường của ngươi. Điều này không nằm trong đó.',
      'oracle.no_15': 'Đây không phải câu chuyện ngươi viết. Hãy lật sang trang khác.',
      'oracle.no_16': 'Trời quay đi. Hãy coi đây là lời cảnh báo cuối cùng.',
      'oracle.no_17': 'Trái tim ngươi đã biết câu trả lời là không. Hãy lắng nghe nó.',
      'oracle.no_18': 'Ngay cả số phận cũng không dám chạm vào điều này. Hãy tránh xa.',
      'oracle.no_19': 'Không. Không. Một ngàn lần không.',
      'oracle.no_20': 'Vũ trụ thương tiếc cho việc này trước khi nó bắt đầu.',

      // ── MAYBE answers (15) ────────────────────
      'oracle.maybe_1':  'Sương mù dày đặc hôm nay. Hãy hỏi khi tâm trí ngươi rõ ràng.',
      'oracle.maybe_2':  'Không phải có, không phải không — kết quả hoàn toàn nằm trong tay ngươi.',
      'oracle.maybe_3':  'Các sợi số phận bị rối. Sự kiên nhẫn là công cụ duy nhất của ngươi.',
      'oracle.maybe_4':  'Nhiều tương lai phân nhánh từ khoảnh khắc này. Thần không thể lựa chọn thay ngươi.',
      'oracle.maybe_5':  'Có 50% khả năng thần đang thích thú với sự không chắc chắn của ngươi.',
      'oracle.maybe_6':  'Câu trả lời tồn tại, nhưng nó đang ẩn mình. Hãy nhìn vào trong trước khi nhìn lên trên.',
      'oracle.maybe_7':  'Ngay cả các vị thần cũng không biết mọi thứ. Đây là một trong số đó.',
      'oracle.maybe_8':  'Mặt trăng đang khuyết. Hãy quay lại khi trăng tròn.',
      'oracle.maybe_9':  'Hỏi câu hỏi tương tự ba lần, và sự thật sẽ hiện ra.',
      'oracle.maybe_10': 'Cán cân lắc qua lắc lại. Ý định của ngươi là trọng lượng quyết định.',
      'oracle.maybe_11': 'Thần tham khảo hư không. Hư không nhún vai.',
      'oracle.maybe_12': 'Cả hai con đường đều tồn tại trong tiềm năng. Chỉ hành động quyết đoán mới chọn được một.',
      'oracle.maybe_13': 'Sự rõ ràng sẽ đến. Hôm nay đơn giản không phải ngày đó.',
      'oracle.maybe_14': 'Kết quả uốn theo ý chí của ngươi. Nhưng chỉ khi ý chí đó thuần khiết.',
      'oracle.maybe_15': 'Thần không chắc chắn — nhưng cuộc sống ban thưởng cho những ai dũng cảm dấn bước.',

      // ── OMINOUS answers (10) ─────────────────
      'oracle.ominous_1':  'Thần im lặng. Một số câu trả lời không nên được nói thành tiếng.',
      'oracle.ominous_2':  'Ta đã thấy vận mệnh của ngươi. Ta chọn không chia sẻ.',
      'oracle.ominous_3':  'Câu hỏi đó làm phiền những đấng cổ xưa. Hãy hỏi điều khác.',
      'oracle.ominous_4':  'Hư không đã nhìn lại. Hãy tiến hành với sự cẩn thận cao nhất.',
      'oracle.ominous_5':  'Câu hỏi này đã được trả lời trong một kiếp khác. Ngươi sẽ nhớ, nếu cố gắng.',
      'oracle.ominous_6':  'Tất cả những gì Thần nói là: hãy sẵn sàng cho cả hai.',
      'oracle.ominous_7':  'Chiếc gương đã cho thần thấy tương lai của ngươi. Chiếc gương đã bị đập vỡ.',
      'oracle.ominous_8':  'Hãy hỏi ai khác. Thần từ chối nhìn vào điều này.',
      'oracle.ominous_9':  'Hãy cẩn thận với câu trả lời ngươi tìm kiếm — nó mang theo một cái giá ngươi có thể không muốn trả.',
      'oracle.ominous_10': 'Điều gì đó khuấy động trong vực thẳm trước câu hỏi này. Có lẽ im lặng là an toàn nhất.',
    },

    /* ── Chinese ─────────────────────────────── */
    zh: {
      // ── YES answers (20) ──────────────────────
      'oracle.yes_1':  '星辰为你汇聚，此事必成。',
      'oracle.yes_2':  '神明洞察，此路通向胜利。',
      'oracle.yes_3':  '毫无疑问，宇宙正在为你的愿望密谋。',
      'oracle.yes_4':  '是——而且比你所期望的更快到来。',
      'oracle.yes_5':  '古老之火低语：无惧前行。',
      'oracle.yes_6':  '吾已问过虚空，虚空答曰：是。',
      'oracle.yes_7':  '千万命运之线汇聚于此结局。',
      'oracle.yes_8':  '天命已定，欢欣吧，命运对你微笑。',
      'oracle.yes_9':  '神谕从不有误，是。',
      'oracle.yes_10': '黑暗将散，光明在这条路的尽头等待你。',
      'oracle.yes_11': '神圣之风朝你吹来。',
      'oracle.yes_12': '勇往直前，神明与你同行。',
      'oracle.yes_13': '这不仅是一个问题——这是已经实现的预言。',
      'oracle.yes_14': '宇宙力量已为你安排了这一刻。',
      'oracle.yes_15': '先祖对这个选择含笑以待，自信前行吧。',
      'oracle.yes_16': '神谕因确定而颤抖，是——毫无保留。',
      'oracle.yes_17': '此路口的所有道路都通向同一个辉煌的结局。',
      'oracle.yes_18': '宇宙一直在等你发问，答案从来都是肯定的。',
      'oracle.yes_19': '连你脚下的石头都齐声赞同。',
      'oracle.yes_20': '问则得。天已应允。',

      // ── NO answers (20) ──────────────────────
      'oracle.no_1':  '神明关上了门，另寻他路。',
      'oracle.no_2':  '凡人，此路只通向毁灭，速速回头。',
      'oracle.no_3':  '否。宇宙已宣判，不必抗争。',
      'oracle.no_4':  '神之眼看见你所不能见，此时不是你的时机。',
      'oracle.no_5':  '命运之骨已落，写的是：否。',
      'oracle.no_6':  '阴影笼罩此路，神明不建议前行。',
      'oracle.no_7':  '不是这个，不是现在，潮水与你为敌。',
      'oracle.no_8':  '神谕见过此事，结局并不美好，速速放弃。',
      'oracle.no_9':  '连星辰都为此选择哭泣，另作选择吧。',
      'oracle.no_10': '此间或彼界，无任何力量能使此事成功。',
      'oracle.no_11': '神明缓缓摇头，你心里已有答案。',
      'oracle.no_12': '命运在此事上不可撼动，离去吧。',
      'oracle.no_13': '神圣之火在此问前摇曳熄灭，这便是答案。',
      'oracle.no_14': '神谕已见你的道路，此事不在其中。',
      'oracle.no_15': '这不是你书写的故事，翻到另一页吧。',
      'oracle.no_16': '苍天转身离去，将此视为最后警告。',
      'oracle.no_17': '你内心深处已知答案是否定的，请倾听它。',
      'oracle.no_18': '就连命运也不敢触碰此事，远离吧。',
      'oracle.no_19': '否。否。千次否定。',
      'oracle.no_20': '宇宙在此事开始之前便已哀悼。',

      // ── MAYBE answers (15) ────────────────────
      'oracle.maybe_1':  '今日雾气浓重，待心智澄明再问。',
      'oracle.maybe_2':  '非是非否，结局全在你一手之间。',
      'oracle.maybe_3':  '命运之线纠缠，耐心是你唯一的工具。',
      'oracle.maybe_4':  '此刻分叉出无数未来，神明无法替你选择。',
      'oracle.maybe_5':  '有50%的概率，神谕只是在享受你的迷茫。',
      'oracle.maybe_6':  '答案存在，但它躲藏。向内看，再向上望。',
      'oracle.maybe_7':  '即便神明也非无所不知，此事便是其一。',
      'oracle.maybe_8':  '月正渐盈，待月圆时再来。',
      'oracle.maybe_9':  '问同一问题三遍，真相将浮出水面。',
      'oracle.maybe_10': '天平来回倾斜，你的意图是决定性的砝码。',
      'oracle.maybe_11': '神谕请教虚空，虚空耸了耸肩。',
      'oracle.maybe_12': '两条路皆存于潜能之中，唯有果断行动方能决定其一。',
      'oracle.maybe_13': '清晰将会到来，只是今天还不是那一天。',
      'oracle.maybe_14': '结局随你的意志而弯曲，但前提是意志纯净。',
      'oracle.maybe_15': '神谕不确定——然而生命奖励那些无论如何都敢于跃进的人。',

      // ── OMINOUS answers (10) ─────────────────
      'oracle.ominous_1':  '神明沉默了，有些答案不该被说出口。',
      'oracle.ominous_2':  '吾已见你的命运，但选择不予透露。',
      'oracle.ominous_3':  '此问惊扰了古老的存在，换个问题吧。',
      'oracle.ominous_4':  '虚空回望了你，务必极度谨慎。',
      'oracle.ominous_5':  '此问已在另一世得到解答，若你努力，会记起的。',
      'oracle.ominous_6':  '神明只说：做好两种准备。',
      'oracle.ominous_7':  '镜子向神谕展示了你的未来，镜子被砸碎了。',
      'oracle.ominous_8':  '去问别人吧，神谕拒绝直视此事。',
      'oracle.ominous_9':  '小心你所追寻的答案——它附带一个你可能不愿承受的代价。',
      'oracle.ominous_10': '此问在深渊中搅动了什么，也许沉默才是最安全的。',
    },
  };

  // Wrap window.t so oracle answer keys resolve here before falling back to main.js
  const _origT = window.t;
  window.t = function (key) {
    const lang = localStorage.getItem('randomhub_lang') || 'en';
    const langMap = ORACLE_ANSWERS[lang];
    if (langMap && langMap[key] !== undefined) return langMap[key];
    const enMap = ORACLE_ANSWERS['en'];
    if (enMap && enMap[key] !== undefined) return enMap[key];
    return _origT(key);
  };

})();
