import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = { title: "طريقة الشراء" };

const steps = [
  ["01", "اختر الملف", "استخدم البحث والفلاتر، ثم افتح بيان العتاد الكامل."],
  ["02", "اطلب الأدلة", "راجع الصور أو الفيديو وطريقة الدخول وحالة بطاقة تغيير الاسم."],
  ["03", "أكد التوفر", "تواصل مع البائع قبل أي دفعة؛ حالة الحساب قد تتغير بسرعة."],
  ["04", "الدفع والاستلام", "اتبع تعليمات الدفع المرسلة من القنوات الرسمية فقط، ثم استلم البيانات."],
  ["05", "أكد الدخول", "غيّر البيانات المتاحة فورًا واتبع تعليمات النقل خطوة بخطوة."],
];

export default function HowToBuyPage() {
  return <InnerPage code="TRANSFER / ROUTE" title="مسار واضح من الملف إلى الاستلام." lead="نحن نعرض التفاصيل ونرتبها؛ القرار النهائي يبدأ بفحصك وينتهي بتأكيد دخولك. لا توجد وعود مخفية أو ضمانات ضد قرارات ناشر اللعبة.">
    <div className="content-grid">{steps.map(([index, title, copy]) => <article className="content-card" key={index}><span>{index}</span><h2>{title}</h2><p>{copy}</p></article>)}</div>
  </InnerPage>;
}
