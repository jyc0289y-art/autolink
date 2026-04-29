/* === AutoLink SL — Main Script === */

// ─── i18n translations ───
const I18N = {
  ko: {},
  en: {
    nav_cta: 'Get Quote',
    hero_1: 'Repetitive work,',
    hero_2: 'automated.',
    hero_sub: 'Collect. Analyze. Report. All automated.',
    hero_w1: 'Crawling',
    hero_w2: 'Dashboard',
    hero_w3: 'Alerts',
    hero_w4: 'AI Analysis',
    hero_cta: 'Free Estimate',
    portfolio_title: 'What We Do',
    case1_title: 'Price Monitoring',
    case1_desc: 'Auto-collect competitor prices. Instant alerts on changes. Dashboard view.',
    case1_tag: 'Standard',
    case2_title: 'Listing Tracker',
    case2_desc: 'Track new real estate, used car listings in real-time. Map dashboard included.',
    case2_tag: 'Premium',
    case3_title: 'SNS Monitoring',
    case3_desc: 'Track Instagram, YouTube, blog keywords. Auto-generate weekly reports.',
    case3_tag: 'Standard',
    case4_title: 'Review AI Analysis',
    case4_desc: 'AI classifies & analyzes customer reviews. Sentiment trends on dashboard.',
    case4_tag: 'Signature',
    case5_title: 'Sales Dashboard',
    case5_desc: 'Combine sales from multiple platforms into one real-time dashboard.',
    case5_tag: 'Premium',
    case6_title: 'This Site is Automated',
    case6_desc: 'From intake to AI analysis to quotes to response — this site itself is proof of automation.',
    case6_tag: 'Meta',
    pkg_title: 'Service Packages',
    pkg_popular: 'Popular',
    pkg_basic_price: '$200–$600',
    pkg_basic_sub: 'One-time',
    pkg_basic_1: 'Automation script',
    pkg_basic_2: 'CSV/Excel output',
    pkg_basic_3: 'Single delivery',
    pkg_std_price: '$700–$1,800',
    pkg_std_sub: '+ $20–$70/mo',
    pkg_std_1: 'Automation + Web Dashboard',
    pkg_std_2: 'PC/Mobile responsive',
    pkg_std_3: 'Monthly health check',
    pkg_prm_price: '$2,200–$5,000',
    pkg_prm_sub: '+ $70–$200/mo',
    pkg_prm_1: 'Real-time dashboard',
    pkg_prm_2: 'Chat/Email alerts',
    pkg_prm_3: 'Multi-user login',
    pkg_prm_4: 'AI analysis report',
    diff1_title: 'Website, Not Excel',
    diff1_desc: 'Get results as a web dashboard, not a spreadsheet.',
    diff2_title: 'AI Analysis Included',
    diff2_desc: 'Data is auto-interpreted and summarized by AI.',
    diff3_title: 'Alerts Included',
    diff3_desc: 'Get notified via chat or email without turning on your PC.',
    diff4_title: 'Any Language OK',
    diff4_desc: 'Submit in any language — we handle translation.',
    form_title: 'Get a Free Estimate',
    form_desc: 'Answer the questions below to see your estimated quote instantly.',
    form_basic: 'Basic Info',
    form_name: 'Name / Company',
    form_email: 'Email',
    form_industry: 'Industry',
    form_rubric: 'Requirements (6 factors)',
    v1_label: '① Number of Data Sources',
    v1_1: '1 source',
    v1_2: '2–3 sources',
    v1_3: '4+ sources',
    v2_label: '② Source Type',
    v2_1: 'Excel/CSV/Public API',
    v2_2: 'Regular website',
    v2_3: 'Login required / Dynamic',
    v3_label: '③ Data Processing',
    v3_1: 'Simple (filter/sum)',
    v3_2: 'Rule-based sorting',
    v3_3: 'AI analysis needed',
    v4_label: '④ Output Format',
    v4_1: 'Excel/CSV',
    v4_2: 'Web dashboard',
    v4_3: 'Real-time + Alerts + Login',
    v5_label: '⑤ Run Frequency',
    v5_1: 'One-time',
    v5_2: 'Daily/Weekly',
    v5_3: 'Real-time',
    v6_label: '⑥ Current Data State',
    v6_1: 'Clean & organized',
    v6_2: 'Somewhat messy',
    v6_3: 'Unorganized',
    form_detail: 'Details',
    form_what: 'What work would you like to automate?',
    form_deadline: 'Desired Deadline',
    form_budget: 'Budget Range',
    est_title: 'Estimated Quote',
    est_score: 'Score',
    est_grade: 'Grade',
    est_price: 'Est. Price',
    est_sub: 'Monthly',
    est_disclaimer: 'This is a reference estimate. Exact pricing will be provided after consultation.',
    form_submit: 'Submit Request',
    faq_title: 'FAQ',
    faq1_q: 'How is pricing determined?',
    faq1_a: 'We score complexity using 6 factors from the intake form. Scores map to grades S–D, each with a price range.',
    faq2_q: 'What about maintenance after delivery?',
    faq2_a: 'Monthly subscription includes hosting, monitoring, and site structure change response. Without subscription, changes are quoted per request.',
    faq3_q: 'Can you scrape any website?',
    faq3_a: 'Sites that prohibit automation, require CAPTCHA/biometric auth, or mobile apps are excluded. We prioritize public APIs when available.',
    faq4_q: 'Can I submit from outside Korea?',
    faq4_a: 'Yes. Submit your request in any language. All communication will be in your preferred language.',
    footer_note: 'Powered by automation. Built with care.'
  },
  ja: {
    nav_cta: '見積もり依頼',
    hero_1: '繰り返し作業、',
    hero_2: '自動化。',
    hero_sub: '収集。分析。報告。すべて自動化します。',
    hero_w1: 'クローリング',
    hero_w2: 'ダッシュボード',
    hero_w3: 'アラート',
    hero_w4: 'AI分析',
    hero_cta: '無料見積もり',
    portfolio_title: 'サービス内容',
    case1_title: '価格モニタリング',
    case1_desc: '競合他社の価格を自動収集。変動時に即時アラート。ダッシュボードで一目確認。',
    case1_tag: 'Standard',
    case2_title: '物件トラッキング',
    case2_desc: '不動産・中古車などの新着物件をリアルタイム追跡。地図ダッシュボード付き。',
    case2_tag: 'Premium',
    case3_title: 'SNSモニタリング',
    case3_desc: 'Instagram、YouTube、ブログのキーワード追跡。週次レポート自動生成。',
    case3_tag: 'Standard',
    case4_title: 'レビューAI分析',
    case4_desc: '顧客レビューをAIが分類・分析。ポジティブ/ネガティブのトレンドをダッシュボードで。',
    case4_tag: 'Signature',
    case5_title: '売上統合ダッシュボード',
    case5_desc: '複数プラットフォームの売上を一つのリアルタイムダッシュボードで確認。',
    case5_tag: 'Premium',
    case6_title: 'このサイトも自動化',
    case6_desc: '依頼受付→AI分析→見積もり→対応まで、このサイト自体が自動化の証拠です。',
    case6_tag: 'Meta',
    pkg_title: 'サービスパッケージ',
    pkg_popular: '人気',
    pkg_basic_price: '¥30,000–¥80,000',
    pkg_basic_sub: '一回限り',
    pkg_basic_1: '自動化スクリプト',
    pkg_basic_2: 'CSV/Excel出力',
    pkg_basic_3: '一回納品',
    pkg_std_price: '¥100,000–¥250,000',
    pkg_std_sub: '+ 月額¥3,000–¥10,000',
    pkg_std_1: '自動化 + Webダッシュボード',
    pkg_std_2: 'PC/モバイル対応',
    pkg_std_3: '月1回動作点検',
    pkg_prm_price: '¥300,000–¥700,000',
    pkg_prm_sub: '+ 月額¥10,000–¥30,000',
    pkg_prm_1: 'リアルタイムダッシュボード',
    pkg_prm_2: 'チャット/メールアラート',
    pkg_prm_3: 'マルチユーザーログイン',
    pkg_prm_4: 'AI分析レポート',
    diff1_title: 'Excelではなくサイトで',
    diff1_desc: '結果をExcelではなくWebダッシュボードで受け取れます。',
    diff2_title: 'AI分析込み',
    diff2_desc: 'データをAIが自動解釈・要約します。',
    diff3_title: 'アラート標準装備',
    diff3_desc: 'PCを開かなくてもチャット/メールで通知。',
    diff4_title: 'どの言語でもOK',
    diff4_desc: 'どの言語でも依頼可能。翻訳はこちらで対応します。',
    form_title: '無料見積もり',
    form_desc: '以下の質問に答えると、予想見積もりをすぐ確認できます。',
    form_basic: '基本情報',
    form_name: 'お名前 / 会社名',
    form_email: 'メールアドレス',
    form_industry: '業種',
    form_rubric: '要件（6項目）',
    v1_label: '① データソース数',
    v1_1: '1つ',
    v1_2: '2〜3つ',
    v1_3: '4つ以上',
    v2_label: '② ソース種類',
    v2_1: 'Excel/CSV/公開API',
    v2_2: '一般Webサイト',
    v2_3: 'ログイン必要/動的サイト',
    v3_label: '③ データ加工',
    v3_1: 'シンプル（フィルター/合計）',
    v3_2: 'ルールベース分類',
    v3_3: 'AI分析が必要',
    v4_label: '④ 出力形式',
    v4_1: 'Excel/CSV',
    v4_2: 'Webダッシュボード',
    v4_3: 'リアルタイム + アラート + ログイン',
    v5_label: '⑤ 実行頻度',
    v5_1: '一回限り',
    v5_2: '毎日/毎週',
    v5_3: 'リアルタイム',
    v6_label: '⑥ 現在のデータ状態',
    v6_1: '整理済み',
    v6_2: 'やや不規則',
    v6_3: '未整理',
    form_detail: '詳細',
    form_what: 'どんな業務を自動化したいですか？',
    form_deadline: '希望納期',
    form_budget: '予算範囲',
    est_title: '予想見積もり',
    est_score: 'スコア',
    est_grade: '等級',
    est_price: '予想価格',
    est_sub: '月額',
    est_disclaimer: 'この見積もりは参考用です。正確な見積もりは相談後にご案内します。',
    form_submit: '依頼書を提出',
    faq_title: 'よくある質問',
    faq1_q: '料金はどのように決まりますか？',
    faq1_a: '依頼書の6項目で複雑度をスコアリングします。スコアに応じてS〜D等級が決まり、等級別の価格帯が適用されます。',
    faq2_q: '納品後のメンテナンスは？',
    faq2_a: '月額サブスクリプションにはホスティング、モニタリング、サイト構造変更対応が含まれます。非加入の場合は都度見積もりです。',
    faq3_q: 'どのサイトでもクローリングできますか？',
    faq3_a: '自動化を禁止しているサイト、CAPTCHA/生体認証が必要なサイト、モバイルアプリは対象外です。公開APIがある場合は優先利用します。',
    faq4_q: '海外からも依頼できますか？',
    faq4_a: 'はい。どの言語でも依頼書を作成できます。すべてのコミュニケーションはお客様の言語で行います。',
    footer_note: '自動化で実現。心を込めて構築。'
  }
};

// Estimate data per language
const ESTIMATE_DATA = {
  ko: {
    grades: { S: '10~30만원', A: '40~80만원', B: '100~250만원', C: '300~700만원', D: '1,000만원+' },
    subs: { S: '없음', A: '없음', B: '월 3~10만원', C: '월 10~30만원', D: '별도 협의' }
  },
  en: {
    grades: { S: '$70–$200', A: '$280–$600', B: '$700–$1,800', C: '$2,200–$5,000', D: '$7,000+' },
    subs: { S: 'None', A: 'None', B: '$20–$70/mo', C: '$70–$200/mo', D: 'Custom' }
  },
  ja: {
    grades: { S: '¥10,000–¥30,000', A: '¥40,000–¥80,000', B: '¥100,000–¥250,000', C: '¥300,000–¥700,000', D: '¥1,000,000+' },
    subs: { S: 'なし', A: 'なし', B: '月額¥3,000–¥10,000', C: '月額¥10,000–¥30,000', D: '要相談' }
  }
};

let currentLang = 'ko';

// ─── Language Detection ───
function detectLanguage() {
  const saved = localStorage.getItem('autolink-lang');
  if (saved && I18N[saved] !== undefined) return saved;

  const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
  const langMap = { ko: 'ko', en: 'en', ja: 'ja', de: 'en', es: 'en', fr: 'en', pt: 'en' };
  return langMap[browserLang] || 'en';
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('autolink-lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  if (lang === 'ko') {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el._originalText) el.textContent = el._originalText;
    });
  } else {
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (!el._originalText) el._originalText = el.textContent;
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
  }

  captureMetadata();
}

// ─── Capture client language for back-end stage scoring ───
function captureMetadata() {
  const langField = document.getElementById('hidden-lang');
  if (langField) langField.value = currentLang;
}

// ─── Scroll Reveal ───
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  // Language
  const detected = detectLanguage();
  setLanguage(detected);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  captureMetadata();

  // Scroll reveal
  initReveal();

  // Form submission — capture language metadata at submit time
  const form = document.getElementById('autolink-form');
  if (form) {
    form.addEventListener('submit', () => captureMetadata());
  }
});
