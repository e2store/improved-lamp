export function SiteHeader() {
  return (
    <>
      <div className="blessing">صلّ على النبي ﷺ</div>
      <header className="site-header">
        <a className="brand" href="/" aria-label="العودة للرئيسية">
          <span className="brand-mark">7R</span>
          <span>حسابات <b>🇰🇼 PUBG</b></span>
        </a>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <a href="/#inventory">الحسابات المتاحة</a>
          <a href="/sold">تم البيع</a>
          <a href="/how-to-buy">طريقة الشراء</a>
          <a href="/proofs">إثباتات البيع</a>
          <a href="/contact">تواصل</a>
        </nav>
        <div className="header-tools"><span>AR</span><a href="https://t.me/AMZQ88" target="_blank" rel="noreferrer">@AMZQ88 ↗</a></div>
      </header>
    </>
  );
}

export function MobileDock() {
  return (
    <nav className="mobile-dock" aria-label="تنقل الجوال">
      <a href="/">الأرشيف</a><a href="/#inventory">بحث</a><a href="/sold">تم البيع</a><a href="/contact">تواصل</a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><strong>حسابات 🇰🇼 PUBG</strong><p>أرشيف مستقل للحسابات المعروضة من الكويت.</p></div>
      <div className="footer-links"><a href="/faq">الأسئلة الشائعة</a><a href="/policies">الشروط والاسترجاع</a><a href="/privacy">الخصوصية</a></div>
      <p className="disclaimer">متجر مستقل وغير تابع لـ PUBG MOBILE أو KRAFTON. تداول الحسابات قد يخضع لقيود الناشر؛ افحص الأدلة وتأكد من التوفر قبل الدفع.</p>
    </footer>
  );
}
