/**
 * Base-aware URL helpers.
 *
 * Production builds use the default base ("/"), but PR preview builds are served
 * from a subpath (e.g. /pr-preview/pr-123/), so internal links must be prefixed
 * with it. Wrap root-relative internal paths in `url()` instead of hardcoding
 * them, or they will escape the preview and land on the live site.
 */

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** True when the site is served from a subpath, i.e. this is a PR preview build. */
export const isPreview = BASE !== '';

/** Prefix a root-relative path with the configured base. Leaves other URLs alone. */
export function url(path: string): string {
  return path.startsWith('/') ? `${BASE}${path}` : path;
}

/** Strip the base off a pathname, so canonical URLs always point at production. */
export function stripBase(pathname: string): string {
  if (!BASE || !pathname.startsWith(BASE)) return pathname;
  return pathname.slice(BASE.length) || '/';
}
