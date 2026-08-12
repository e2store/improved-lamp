import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerPage } from "../../components/InnerPage";
import { getAccount, statusLabel } from "../../data";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const account = getAccount(id);
  return { title: account ? `ملف ${account.id}` : "الحساب غير موجود" };
}

export default async function AccountPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const account = getAccount(id);
  if (!account) notFound();
  return <InnerPage code={`DOSSIER / ${account.id}`} title={`حساب مستوى ${account.level} · ${account.rank}`} lead={`${account.note}. تم التحقق: ${account.verified}.`}>
    <div className="account-page-grid"><div className="account-page-image"><img src={account.image} alt="عرض عتاد الحساب" /></div><article className="account-page-panel"><span className={`status status-${account.status}`}><i />{statusLabel[account.status]}</span><h2>{account.price} د.ك</h2><p className="inner-lead">السيرفر: {account.server} · {account.mythic} قطعة Mythic · {account.killMessages} سلاح Kill Message</p><div className="manifest"><header><span>01</span><h3>الأسلحة</h3></header><ul>{account.weapons.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="manifest"><header><span>02</span><h3>المقتنيات</h3></header><ul>{account.assets.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="contact-actions"><a href="https://t.me/Qq965" target="_blank" rel="noreferrer">احجز عبر تلغرام ↗</a><a href="https://wa.me/96599208718" target="_blank" rel="noreferrer">واتساب</a></div></article></div>
  </InnerPage>;
}
