/**
 * Optimum water levels for shrimp and fish, transcribed from the lab report the
 * shop keeps at the counter. The numbers and the two phrases are the report's
 * own; the PDF's mangled subscripts (CO2, HCO3, NO2, H2S, Cl2, and the charges
 * on Mg, Ca, K) are written properly here. Nothing else was changed.
 */
import type { Lang } from "@/content/aqua-copy";

/** A cell: a printed range, or one of the report's two phrases. */
export type WaterValue = string | "salinity" | "none";

export interface WaterRow {
  label: Record<Lang, string>;
  unit: string;
  shrimp: WaterValue;
  fish: WaterValue;
  /** Carries the asterisk explained under the table. */
  flagged?: boolean;
}

export interface WaterGroup {
  name: Record<Lang, string>;
  rows: WaterRow[];
}

export const WATER_GROUPS: WaterGroup[] = [
  {
    name: { en: "Water chemistry", te: "నీటి కెమిస్ట్రీ" },
    rows: [
      { label: { en: "pH", te: "pH" }, unit: "—", shrimp: "7–8.5", fish: "7–8.5" },
      { label: { en: "Salinity", te: "లవణీయత" }, unit: "ppt", shrimp: "5–25", fish: "0" },
      {
        label: { en: "Carbon dioxide (CO₂)", te: "కార్బన్ డై ఆక్సైడ్ (CO₂)" },
        unit: "ppm",
        shrimp: "20–40",
        fish: "20–40",
      },
      {
        label: { en: "Bicarbonate (HCO₃⁻)", te: "బైకార్బొనేట్ (HCO₃⁻)" },
        unit: "ppm",
        shrimp: "100–120",
        fish: "150–500",
      },
      {
        label: { en: "Total alkalinity", te: "మొత్తం ఆల్కలీనిటీ" },
        unit: "ppm",
        shrimp: "150–250",
        fish: "150–500",
      },
      {
        label: { en: "Total hardness", te: "మొత్తం హార్డ్‌నెస్" },
        unit: "ppm",
        shrimp: "salinity",
        fish: "salinity",
      },
      {
        label: { en: "Alkaline hardness", te: "ఆల్కలైన్ హార్డ్‌నెస్" },
        unit: "ppm",
        shrimp: "200–300",
        fish: "200–300",
      },
      {
        label: { en: "Magnesium (Mg²⁺)", te: "మెగ్నీషియం (Mg²⁺)" },
        unit: "ppm",
        shrimp: "salinity",
        fish: "salinity",
      },
      {
        label: { en: "Calcium (Ca²⁺)", te: "కాల్షియం (Ca²⁺)" },
        unit: "ppm",
        shrimp: "salinity",
        fish: "salinity",
      },
      {
        label: { en: "Potassium (K⁺)", te: "పొటాషియం (K⁺)" },
        unit: "ppm",
        shrimp: "salinity",
        fish: "salinity",
      },
    ],
  },
  {
    name: { en: "Nitrogen", te: "నత్రజని" },
    rows: [
      {
        label: { en: "Total ammonia", te: "మొత్తం అమ్మోనియా" },
        unit: "ppm",
        shrimp: "0.4–1",
        fish: "0.4–1",
        flagged: true,
      },
      {
        label: { en: "Unionized ammonia", te: "యూనియనైజ్డ్ అమ్మోనియా" },
        unit: "ppm",
        shrimp: "0–0.1",
        fish: "0–0.1",
        flagged: true,
      },
      {
        label: { en: "Nitrite (NO₂⁻)", te: "నైట్రైట్ (NO₂⁻)" },
        unit: "ppm",
        shrimp: "salinity",
        fish: "salinity",
      },
    ],
  },
  {
    name: { en: "Other readings", te: "మిగతా కొలతలు" },
    rows: [
      { label: { en: "Iron (Fe)", te: "ఇనుము (Fe)" }, unit: "ppm", shrimp: "0–1.0", fish: "0–1.0" },
      {
        label: { en: "Hydrogen sulfide (H₂S)", te: "హైడ్రోజన్ సల్ఫైడ్ (H₂S)" },
        unit: "ppm",
        shrimp: "0–0.4",
        fish: "0–0.4",
        flagged: true,
      },
      {
        label: { en: "Dissolved oxygen (DO)", te: "కరిగిన ఆక్సిజన్ (DO)" },
        unit: "ppm",
        shrimp: "4–10",
        fish: "4–10",
      },
      {
        label: { en: "Chlorine (Cl₂)", te: "క్లోరిన్ (Cl₂)" },
        unit: "ppm",
        shrimp: "0–0.3",
        fish: "0–0.3",
      },
      {
        label: { en: "Temperature", te: "ఉష్ణోగ్రత" },
        unit: "°C",
        shrimp: "none",
        fish: "none",
      },
    ],
  },
];

export const WATER_ROW_COUNT = WATER_GROUPS.reduce((n, group) => n + group.rows.length, 0);

/** The two cells that are a sentence, not a range. */
export const WATER_PHRASES: Record<Lang, { salinity: string; none: string }> = {
  en: { salinity: "According to salinity", none: "Not specified" },
  te: { salinity: "లవణీయతను బట్టి", none: "పేర్కొనలేదు" },
};

export function waterValueFor(value: WaterValue, lang: Lang): string {
  if (value === "salinity") return WATER_PHRASES[lang].salinity;
  if (value === "none") return WATER_PHRASES[lang].none;
  return value;
}
