declare global {
  var __SITE_BASE__: string | undefined;
}

export function siteHref(path = "") {
  const base = globalThis.__SITE_BASE__ ?? "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${path.replace(/^\//, "")}`;
}

export function siteAsset(path: string) {
  return siteHref(path);
}
