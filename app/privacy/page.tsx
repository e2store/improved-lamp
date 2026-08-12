import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = { title: "سياسة الخصوصية" };

export default function PrivacyPage() {
  return <InnerPage code="LEGAL / PRIVACY" title="نثبت الصفقة، لا نكشف صاحبها." lead="يعرض الموقع بيانات عامة عن الحسابات فقط. لا تُنشر أسماء المشترين أو أرقامهم أو تفاصيل دفعهم في أرشيف المبيعات.">
    <div className="content-grid"><article className="content-card"><span>01 / DATA</span><h2>البيانات التي نتعامل معها</h2><p>قد تُستخدم وسيلة التواصل ورقم الملف ومعلومات الصفقة لإتمام الاستفسار والتسليم والدعم.</p></article><article className="content-card"><span>02 / PROOF</span><h2>إثباتات المبيعات</h2><p>عند مشاركة إثبات بيع، تُخفى المعلومات التي يمكن أن تحدد هوية المشتري أو بياناته المالية.</p></article><article className="content-card wide-card"><span>03 / EXTERNAL</span><h2>الخدمات الخارجية</h2><p>تخضع محادثات تلغرام وواتساب لسياسات تلك الخدمات. لا ترسل كلمات مرور أو رموز تحقق عبر قنوات غير مؤكدة.</p></article></div>
  </InnerPage>;
}
