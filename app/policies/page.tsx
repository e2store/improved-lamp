import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = { title: "الشروط وسياسة الاسترجاع" };

export default function PoliciesPage() {
  return <InnerPage code="LEGAL / TERMS" title="اقرأ المخاطر قبل أن تختار الملف." lead="شراء حساب لعبة ليس معاملة خالية من المخاطر، وقد يكون مخالفًا لشروط ناشر اللعبة. إتمام الدفع يعني أنك راجعت الأدلة وفهمت طبيعة النقل.">
    <div className="content-grid"><article className="content-card"><span>01 / AVAILABILITY</span><h2>تأكيد التوفر</h2><p>لا تعتبر حالة الموقع تأكيدًا نهائيًا. يجب الحصول على تأكيد مباشر من البائع قبل الدفع.</p></article><article className="content-card"><span>02 / INSPECTION</span><h2>مسؤولية الفحص</h2><p>راجع الفيديو والصور والرتبة والعناصر وطريقة الدخول، واطلب توضيح أي نقطة غير مذكورة.</p></article><article className="content-card"><span>03 / REFUNDS</span><h2>الاسترجاع</h2><p>تُراجع الحالات التي تختلف فيها البيانات المستلمة جوهريًا عن البيان المنشور عند الإبلاغ فورًا وقبل تغيير المعلومات. لا يشمل الاسترجاع تغيير الرأي أو قرارات ناشر اللعبة.</p></article><article className="content-card"><span>04 / PUBLISHER</span><h2>قيود الناشر</h2><p>لا يوجد ضمان دائم ضد الحظر أو الاسترداد أو أي إجراء تتخذه PUBG MOBILE أو KRAFTON.</p></article></div>
  </InnerPage>;
}
