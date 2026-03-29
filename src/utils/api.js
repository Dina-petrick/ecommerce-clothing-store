/**
 * Stripe API base URL.
 *
 * - Development: defaults to http://localhost:4242 (Express) so we do not rely on
 *   CRA's `package.json` proxy, which often returns 404 for `/api/*` if misconfigured.
 * - Production: set REACT_APP_API_URL to your deployed API origin.
 */
const DEV_API_ORIGIN = 'http://localhost:4242';

export function apiUrl(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const envBase = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');
  if (envBase) {
    return `${envBase}${normalized}`;
  }
  if (process.env.NODE_ENV === 'development') {
    return `${DEV_API_ORIGIN}${normalized}`;
  }
  return normalized;
}
