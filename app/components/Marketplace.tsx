"use client";

import { useEffect, useMemo, useState } from "react";
import { accounts, type Account, statusLabel } from "../data";
import { siteAsset, siteHref } from "../site-path";
import { MobileDock, SiteFooter, SiteHeader } from "./SiteHeader";

const telegram = "https://t.me/Qq965";
const whatsapp = "https://wa.me/96599208718";

function Stat({ value, label }: { value: string | number; label: string }) {
  return <div className="stat"><strong>{value}</strong><span>{label}</span></div>;
}

function Status({ account }: { account: Account }) {
  return <span className={`status status-${account.status}`}><i />{statusLabel[account.status]}</span>;
}

function AccountRecord({ account, favorite, onFavorite, onOpen }: { account: Account; favorite: boolean; onFavorite: () => void; onOpen: () => void }) {
  return (
    <article className={`dossier dossier-${account.rarity}`}>
      <button className={`favorite ${favorite ? "is-favorite" : ""}`} onClick={onFavorite} aria-label={favorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}>{favorite ? "★" : "☆"}</button>
      <button className="dossier-main" onClick={onOpen} aria-label={`عرض تفاصيل الحساب ${account.id}`}>
        <div className="dossier-image"><img src={siteAsset(account.image)} alt="عرض بصري للعتاد" loading="lazy" /><span className="serial">FILE / {account.id}</span>{account.video && <span className="video-flag">● فيديو 04:55</span>}</div>
        <div className="dossier-copy">
          <div className="dossier-top"><Status account={account} />{account.originalPrice && <span className="discount">خصم + هدية</span>}</div>
          <div className="price-line"><strong>{account.price}</strong><span>د.ك</span>{account.originalPrice && <del>{account.originalPrice} د.ك</del>}</div>
          <div className="record-stats"><Stat value={account.level} label="لفل" /><Stat value={account.mythic} label="مثك" /><Stat value={account.killMessages} label="كل مسج" /></div>
          <div className="record-meta"><span>{account.rank}</span><span>{account.server}</span>{account.conqueror && <span>{account.conqueror}</span>}</div>
          <p>{account.weapons.slice(0, 3).join(" · ")}</p>
          <div className="inspect">افتح ملف الحساب <span>←</span></div>
        </div>
      </button>
    </article>
  );
}

function InspectionDrawer({ account, onClose }: { account: Account; onClose: () => void }) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    document.body.classList.add("drawer-open");
    return () => { window.removeEventListener("keydown", close); document.body.classList.remove("drawer-open"); };
  }, [onClose]);

  return (
    <div className="drawer-layer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside className="inspection" role="dialog" aria-modal="true" aria-labelledby="inspection-title">
        <button className="drawer-close" onClick={onClose} aria-label="إغلاق">×</button>
        <div className="drawer-image"><img src={siteAsset(account.image)} alt="تفاصيل عتاد الحساب" />{account.video && <span className="video-flag">● عرض فيديو متوفر</span>}</div>
        <div className="drawer-head"><div><small>ACCOUNT DOSSIER / {account.id}</small><h2 id="inspection-title">ملف حساب مستوى {account.level}</h2></div><div className="drawer-price"><b>{account.price}</b><span>د.ك</span></div></div>
        <div className="drawer-status"><Status account={account} /><span>تم التحقق: {account.verified}</span></div>
        <div className="drawer-stats"><Stat value={account.rank} label="الرتبة" /><Stat value={account.mythic} label="Mythic" /><Stat value={account.gunLab} label="Gun Lab" /><Stat value={account.killMessages} label="Kill Message" /></div>
        <section className="manifest"><header><span>01</span><h3>بيان الأسلحة</h3></header><ul>{account.weapons.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className="manifest"><header><span>02</span><h3>المقتنيات</h3></header><ul>{account.assets.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className="verification"><h3>سجل التحقق</h3>{["تم فحص معلومات الحساب", "طريقة الدخول مؤكدة", "الصور مطابقة للبيان", "جاهز لإجراءات النقل"].map((item, index) => <div key={item}><i>✓</i><span>{item}</span><time>{17 + index}:4{index}</time></div>)}</section>
        <div className="risk-note"><b>مهم قبل الدفع</b><p>أكد التوفر مع البائع وافحص جميع الأدلة. لا يمكن ضمان الحماية من قرارات الناشر أو محاولات الاسترجاع.</p></div>
        <div className="drawer-actions"><a className="primary-action" href={telegram} target="_blank" rel="noreferrer">احجز عبر تلغرام ↗</a><a href={whatsapp} target="_blank" rel="noreferrer">واتساب</a><a href={siteHref(`account/${account.id}`)}>رابط مستقل</a></div>
      </aside>
    </div>
  );
}

export function Marketplace() {
  const [query, setQuery] = useState("");
  const [server, setServer] = useState("all");
  const [status, setStatus] = useState("available");
  const [sort, setSort] = useState("newest");
  const [selected, setSelected] = useState<Account | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const list = accounts.filter((account) => {
      const haystack = [account.id, account.rank, account.server, account.note, ...account.weapons, ...account.assets].join(" ").toLowerCase();
      return (!needle || haystack.includes(needle)) && (server === "all" || account.server === server) && (status === "all" || account.status === status || (status === "discount" && !!account.originalPrice));
    });
    return [...list].sort((a, b) => sort === "price-low" ? a.price - b.price : sort === "price-high" ? b.price - a.price : sort === "mythic" ? b.mythic - a.mythic : sort === "level" ? b.level - a.level : 0);
  }, [query, server, status, sort]);

  const toggleFavorite = (id: string) => setFavorites((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  const featured = accounts[0];

  return (
    <main className="market-shell">
      <SiteHeader />
      <div className="archive-spine" aria-hidden="true"><span>KW / LOADOUT ARCHIVE</span><b>29.3759° N · 47.9774° E</b></div>
      <section className="inventory-intro">
        <div className="intro-copy"><span className="eyebrow"><i /> مخزون حيّ · الكويت</span><h1>لا تشتري حسابًا.<br /><em>افتح ملفّه أولًا.</em></h1><p>حسابات موثقة وجاهزة للنقل، مرتبة كملفات عتاد واضحة بدل منشورات متفرقة.</p></div>
        <div className="intro-ledger"><Stat value="10" label="ملفات نشطة" /><Stat value="2" label="إضافة جديدة" /><Stat value="1" label="خصم حالي" /><div className="last-check"><span>آخر تحقق</span><b>منذ 12 دقيقة</b></div></div>
      </section>

      <section className="featured-file" aria-label="الحساب المميز">
        <div className="featured-visual"><img src={siteAsset(featured.image)} alt="عتاد M416 ثلجي داخل خزنة" /><span className="featured-index">01 / FEATURED</span></div>
        <div className="featured-panel">
          <Status account={featured} />
          <div className="featured-price"><strong>{featured.price}</strong><span>د.ك</span></div>
          <div><small>M416 GLACIER / LVL 5</small><h2>ملف ثلجي موثّق.<br />مرّتان كونكر.</h2></div>
          <div className="featured-stats"><Stat value="79" label="لفل" /><Stat value="72" label="مثك" /><Stat value="5" label="Kill Message" /></div>
          <button onClick={() => setSelected(featured)}>فحص الحساب بالكامل <span>←</span></button>
        </div>
      </section>

      <div className="drop-ticker"><span>NEW / KW-079-GC تم التحقق الآن</span><span>SOLD / تم تسليم ملف 099</span><span>DROP / خصم ملف EU-074-X3 إلى 48 د.ك</span></div>

      <section className="inventory-section" id="inventory">
        <header className="section-heading"><div><span className="eyebrow">INDEX / 001—010</span><h2>فهرس الحسابات</h2></div><p>{filtered.length.toString().padStart(2, "0")} ملف مطابق</p></header>
        <div className="command-bar">
          <label className="search-field"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث: M416 Glacier، كونكر، أقل من 30 د.ك…" /></label>
          <select value={server} onChange={(event) => setServer(event.target.value)} aria-label="السيرفر"><option value="all">كل السيرفرات</option><option>الشرق الأوسط</option><option>أوروبا</option></select>
          <select value={status} onChange={(event) => setStatus(event.target.value)} aria-label="الحالة"><option value="available">المتاح</option><option value="discount">الخصومات</option><option value="reserved">المحجوز</option><option value="all">الكل</option></select>
          <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="الترتيب"><option value="newest">الأحدث</option><option value="price-low">السعر: الأقل</option><option value="price-high">السعر: الأعلى</option><option value="mythic">الأكثر Mythic</option><option value="level">أعلى مستوى</option></select>
        </div>
        <div className="active-filters"><button onClick={() => setQuery("")}>بحث نظيف ×</button><button onClick={() => setStatus("discount")}>عليه خصم</button><button onClick={() => setQuery("Glacier")}>M416 Glacier</button><span>{favorites.length} محفوظ</span></div>
        <div className="dossier-list">
          {filtered.length ? filtered.map((account) => <AccountRecord key={account.id} account={account} favorite={favorites.includes(account.id)} onFavorite={() => toggleFavorite(account.id)} onOpen={() => setSelected(account)} />) : <div className="empty-state"><b>لا يوجد ملف مطابق.</b><p>جرّب حذف الفلاتر أو البحث باسم سلاح واحد.</p><button onClick={() => { setQuery(""); setServer("all"); setStatus("available"); }}>إعادة ضبط الفهرس</button></div>}
        </div>
      </section>

      <section className="buying-route"><div className="route-title"><span>TRANSFER / ROUTE</span><h2>الشراء بدون قفزات غامضة</h2></div><ol>{["اختر الحساب", "افحص التفاصيل", "أكد التوفر", "ادفع", "استلم البيانات", "أكد الدخول"].map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span></li>)}</ol><p>لا ترسل أي دفعة قبل تأكيد التوفر مباشرة مع البائع.</p></section>
      <section className="trust-ledger"><header><span>VERIFICATION / LEDGER</span><h2>الثقة هنا سجل، لا شعار.</h2></header><div>{["فحص معلومات الحساب", "تأكيد طريقة الدخول", "مراجعة الصور والفيديو", "تجهيز تعليمات النقل", "توضيح حالة بطاقة الاسم", "دعم بعد الاستلام"].map((item, index) => <article key={item}><span>0{index + 1}</span><strong>{item}</strong><small>VERIFIED / 17:{40 + index}</small><i>✓</i></article>)}</div></section>
      <SiteFooter />
      <MobileDock />
      {selected && <InspectionDrawer account={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}
