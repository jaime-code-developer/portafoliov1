export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/portafoliov1";

/**
 * Returns the proper URL for an asset, prepending basePath for local static files
 * so they load correctly on GitHub Pages (e.g. /portafoliov1/trade01.jpg).
 */
export function getAssetPath(src?: string | null): string {
  if (!src) return "";
  // Leave external or data URLs untouched
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("//") ||
    src.startsWith("data:")
  ) {
    return src;
  }
  // Avoid double-prefixing if already present
  if (basePath && src.startsWith(basePath)) {
    return src;
  }
  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}
