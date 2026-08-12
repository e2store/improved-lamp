import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = { title: "إثباتات البيع والاستلام" };

export default function ProofsPage() {
  return <InnerPage code="PROOF / LEDGER" title="الإثبات موجود. الخصوصية كذلك." lead="تُحفظ صور الدفع والاستلام في قناة منفصلة مع إخفاء المعلومات الخاصة. الهدف إثبات اكتمال الصفقة، لا كشف هوية المشتري.">
    <div className="content-grid"><article className="content-card"><span>01 / PAYMENT</span><h2>إثبات الدفع</h2><p>يُعرض المبلغ وحالة التحويل فقط عند الحاجة، وتُحجب الأسماء والأرقام والبيانات الحساسة.</p></article><article className="content-card"><span>02 / DELIVERY</span><h2>تأكيد الاستلام</h2><p>يُسجل تأكيد وصول بيانات الحساب وقدرة المشتري على تسجيل الدخول.</p></article><article className="content-card wide-card"><span>EXTERNAL / CHANNEL</span><h2>قناة المبيعات</h2><p>يمكنك مراجعة سجل الصور والتسليم المنشور من البائع.</p><div className="contact-actions"><a href="https://t.me/LafiPUBG" target="_blank" rel="noreferrer">فتح قناة LafiPUBG ↗</a></div></article></div>
  </InnerPage>;
}
