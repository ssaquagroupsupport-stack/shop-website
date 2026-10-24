/**
 * Copy for the water parameters: the home band and the full page. Same rules as the
 * other decks,  no claim we cannot point at, and the footnote says plainly
 * where the numbers came from.
 */
import type { Lang } from "@/content/aqua-copy";

export interface WaterCopy {
  /** Home band. */
  home: {
    kicker: string;
    heading: string;
    lead: string;
    cta: string;
  };
  /** Full page. */
  page: {
    home: string;
    kicker: string;
    h1: string;
    lead: string;
    facts: string;
  };
  table: {
    caption: string;
    particulars: string;
    unit: string;
    shrimp: string;
    fish: string;
  };
  notes: {
    warning: string;
    temperature: string;
  };
}

const EN: WaterCopy = {
  home: {
    kicker: "Water parameters",
    heading: "Optimum water levels, shrimp and fish.",
    lead: "The sheet we keep at the counter: pH, salinity, alkalinity, ammonia, oxygen and the rest, with the report's range for shrimp and for fish.",
    cta: "Open the water parameters",
  },
  page: {
    home: "Home",
    kicker: "Water parameters",
    h1: "Optimum water levels, shrimp and fish.",
    lead: "The reference we keep at the counter, typed out from the lab report the shop was given. Two columns, because shrimp and fish do not want the same water.",
    facts: "parameters, shrimp and fish",
  },
  table: {
    caption: "Optimum water levels for shrimp and fish",
    particulars: "Particulars",
    unit: "Unit",
    shrimp: "Shrimp optimum",
    fish: "Fish optimum",
  },
  notes: {
    warning:
      "Values transcribed from the supplied lab report. Treat them as reference, not as safe operating targets. Keep unionized ammonia and hydrogen sulfide as close to zero as possible, and confirm species-specific targets with an aquaculture professional before you treat.",
    temperature:
      "The report's table did not give an optimum temperature, so no range is printed here.",
  },
};

const TE: WaterCopy = {
  home: {
    kicker: "నీటి పారామితులు",
    heading: "రొయ్యలు, చేపలకు అనుకూల నీటి స్థాయిలు.",
    lead: "కౌంటర్లో ఉంచుకునే పట్టిక: pH, లవణీయత, ఆల్కలీనిటీ, అమ్మోనియా, ఆక్సిజన్, మిగతావి, రొయ్యలకు, చేపలకు రిపోర్ట్లో ఇచ్చిన శ్రేణులతో.",
    cta: "పూర్తి నీటి పారామితులు తెరవండి",
  },
  page: {
    home: "హోమ్",
    kicker: "నీటి పారామితులు",
    h1: "రొయ్యలు, చేపలకు అనుకూల నీటి స్థాయిలు.",
    lead: "మేము కౌంటర్లో ఉంచుకునే సూచిక, షాపుకు ఇచ్చిన ల్యాబ్ రిపోర్ట్ నుంచి టైప్ చేసినది. రెండు నిలువు వరుసలు, ఎందుకంటే రొయ్యలకు, చేపలకు ఒకే నీరు సరిపోదు.",
    facts: "పరామితులు, రొయ్యలు మరియు చేపలు",
  },
  table: {
    caption: "రొయ్యలు, చేపలకు అనుకూల నీటి స్థాయిలు",
    particulars: "వివరాలు",
    unit: "యూనిట్",
    shrimp: "రొయ్యలకు అనుకూలం",
    fish: "చేపలకు అనుకూలం",
  },
  notes: {
    warning:
      "ఇచ్చిన ల్యాబ్ రిపోర్ట్ నుంచి తీసుకున్న విలువలు. ఇవి సురక్షిత లక్ష్యాలు కావు, కేవలం సూచన. అయాన్ రహిత అమ్మోనియా, హైడ్రోజన్ సల్ఫైడ్ వీలైనంత సున్నాకు దగ్గరగా ఉంచండి. చికిత్స ముందు ఆక్వాకల్చర్ నిపుణుడితో నిర్ధారించుకోండి.",
    temperature: "రిపోర్ట్ పట్టికలో అనుకూల ఉష్ణోగ్రత ఇవ్వలేదు, అందుకే ఇక్కడ శ్రేణి లేదు.",
  },
};

const COPY: Record<Lang, WaterCopy> = { en: EN, te: TE };

export function waterCopyFor(lang: Lang): WaterCopy {
  return COPY[lang];
}
