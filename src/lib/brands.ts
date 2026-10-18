/**
 * The brand list, read once at build time from /public/data/brands.json.
 * The file doubles as a public URL (/data/brands.json) for llms.txt.
 * Nothing here is live: `inStock` is a snapshot dated BRANDS_AS_OF.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Lang } from "@/content/aqua-copy";

export interface Brand {
  name: string;
  /** Telugu name, supplied by the shop. Absent until they send it, in which
   * case the card's Telugu pill simply does not render. Never transliterate
   * this automatically: a wrong Telugu brand name is worse than none. */
  nameTe?: string;
  slug: string;
  inStock: boolean;
}

const raw = JSON.parse(
  readFileSync(join(process.cwd(), "public", "data", "brands.json"), "utf8"),
) as { count: number; asOf: string; brands: Brand[] };

export const BRANDS: Brand[] = raw.brands;
export const BRAND_COUNT: number = raw.count;
export const BRANDS_AS_OF: string = raw.asOf; // "2026-10-18"

/** "18 Oct" / "18 అక్టోబర్", built from BRANDS_AS_OF so the label never drifts. */
export function asOfLabel(lang: Lang): string {
  const [, m, d] = BRANDS_AS_OF.split("-").map(Number);
  const en = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const te = [
    "జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్",
    "జూలై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్",
  ];
  return lang === "te" ? `${d} ${te[m - 1]}` : `${d} ${en[m - 1]}`;
}

/** Letters that actually start at least one brand name, sorted A-Z. */
export const BRAND_LETTERS: string[] = [
  ...new Set(BRANDS.map((b) => b.name[0].toUpperCase())),
].filter((c) => c >= "A" && c <= "Z").sort();

/** The names the FAQ answer quotes; drawn from the data so it never drifts. */
export const BRAND_SAMPLE: string[] = BRANDS.slice(0, 10).map((b) => b.name);

/**
 * A stable decorative hue (0-359) for a brand card, derived from the name so it
 * never shifts between builds. This is NOT a brand colour: we have no logos, so
 * the grid gets variation without pretending to know anyone's palette.
 */
export function brandHue(name: string): number {
  let hue = 0;
  for (const char of name.toLowerCase()) hue = (hue * 31 + char.charCodeAt(0)) % 360;
  return hue;
}
