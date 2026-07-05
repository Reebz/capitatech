// Deterministic ASCII texture for the spotlight layers. Seeded from row/col
// so the texture is identical across builds and across the two layers that
// render it: the viewport-fixed page grid (Layout.astro, behind every section)
// and the hero-scoped spotlight layer (index.astro, over the blue hero band).
// Sparse +, ∙, * break the dot monotony without competing with foreground copy.
export function generateAscii(cols = 320, rows = 80): string {
  const gridChar = (r: number, c: number): string => {
    const h = ((r * 73856093) ^ (c * 19349663) ^ (r * c * 83492791)) >>> 0;
    const v = h % 100;
    if (v < 4) return " ";
    if (v < 12) return "*";
    if (v < 17) return "+";
    if (v < 22) return "∙";
    return "·";
  };
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => gridChar(r, c)).join(""),
  ).join("\n");
}
