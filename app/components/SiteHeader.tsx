import { siteHref } from "../site-path";

export function SiteHeader() {
  return (
    <>
      <div className="blessing">صلّ على النبي ﷺ</div>
      <header className="site-header">
        <a className="brand" href={siteHref()} aria-label="العودة للرئيسية">
          <span className="brand-mark">KW</span>
          <span>حسابات <b>🇰🇼 PUBG</b></span>
        </a>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <a href={siteHref("#inventory")}>الحسابات المتاحة</a>
          <a href={siteHref("sold")}>تم البيع</a>
          <a href={siteHref("how-to-buy")}>طريقة الشراء</a>
          <a href={siteHref("proofs")}>إثباتات البيع</a>
          <a href={siteHref("contact")}>تواصل</a>
        </nav>
        <div className="header-tools"><span>AR</span><a href="https://t.me/AMZQ88" target="_blank" rel="noreferrer">@AMZQ88 ↗</a></div>
      </header>
    </>
  );
}

export function MobileDock() {
  return (
    <nav className="mobile-dock" aria-label="تنقل الجوال">
      <a href={siteHref()}>الأرشيف</a><a href={siteHref("#inventory")}>بحث</a><a href={siteHref("sold")}>تم البيع</a><a href={siteHref("contact")}>تواصل</a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><strong>حسابات 🇰🇼 PUBG</strong><p>أرشيف مستقل للحسابات المعروضة من الكويت.</p></div>
      <div className="footer-links"><a href={siteHref("faq")}>الأسئلة الشائعة</a><a href={siteHref("policies")}>الشروط والاسترجاع</a><a href={siteHref("privacy")}>الخصوصية</a></div>
      <p className="disclaimer">متجر مستقل وغير تابع لـ PUBG MOBILE أو KRAFTON. تداول الحسابات قد يخضع لقيود الناشر؛ افحص الأدلة وتأكد من التوفر قبل الدفع.</p>
    </footer>
  );
}
