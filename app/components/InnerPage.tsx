import { MobileDock, SiteFooter, SiteHeader } from "./SiteHeader";

export function InnerPage({ code, title, lead, children }: { code: string; title: string; lead: string; children: React.ReactNode }) {
  return (
    <main className="inner-page">
      <SiteHeader />
      <div className="inner-main">
        <span className="inner-kicker">{code}</span>
        <h1>{title}</h1>
        <p className="inner-lead">{lead}</p>
        {children}
      </div>
      <SiteFooter />
      <MobileDock />
    </main>
  );
}
