import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = { title: "تواصل معنا" };

export default function ContactPage() {
  return <InnerPage code="CONTACT / 24H" title="أرسل رقم الملف. نكمل الباقي." lead="للحصول على رد أسرع، اذكر رقم الحساب مثل KW-079-GC واسأل عن التوفر والسعر النهائي وطريقة الاستلام.">
    <div className="content-grid"><article className="content-card"><span>TELEGRAM / SALES</span><h2>@Qq965</h2><p>القناة الأسرع للاستفسار والحجز وطلب فيديو الحساب.</p><div className="contact-actions"><a href="https://t.me/Qq965" target="_blank" rel="noreferrer">فتح تلغرام ↗</a></div></article><article className="content-card"><span>WHATSAPP / KUWAIT</span><h2 dir="ltr">+965 9920 8718</h2><p>للاستفسار المباشر من الكويت. لا ترسل معلومات دفع حساسة قبل تأكيد هوية الجهة.</p><div className="contact-actions"><a href="https://wa.me/96599208718" target="_blank" rel="noreferrer">فتح واتساب ↗</a></div></article><article className="content-card wide-card"><span>OFFICIAL / CHANNEL</span><h2>@AMZQ88</h2><p>تابع القناة الأصلية للحسابات والإضافات الجديدة.</p></article></div>
  </InnerPage>;
}
