import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = { title: "أرشيف المبيعات" };

const sold = [
  ["SOLD-099", "حساب مستوى 79 · 99 Mythic · 26 سلاح مطور", "61 مشاهدة", "تم البيع 🔴"],
  ["SOLD-064", "حساب كونكر · M416 Glacier · 14 Kill Message", "صورة الدفع محفوظة", "تم التسليم ✓"],
  ["SOLD-041", "حساب أوروبا · 55 Mythic · X-Suit", "إثبات الاستلام محفوظ", "تم البيع 🔴"],
];

export default function SoldPage() {
  return <InnerPage code="ARCHIVE / SOLD" title="الملفات المغلقة تبقى شاهدة." lead="نحتفظ بملخصات الحسابات المباعة كدليل نشاط، من دون عرض أي معلومات تخص المشترين أو تفاصيل الدفع الخاصة.">
    <div className="archive-list">{sold.map((row) => <article className="sold-row" key={row[0]}><span>{row[0]}</span><strong>{row[1]}</strong><span>{row[2]}</span><b>{row[3]}</b></article>)}</div>
    <div className="contact-actions"><a href="https://t.me/LafiPUBG" target="_blank" rel="noreferrer">قناة فواتير البيع ↗</a></div>
  </InnerPage>;
}
