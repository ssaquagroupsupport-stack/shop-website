/**
 * The site map, in one table. Every page on the site, in both languages,
 * with its unique SEO meta. The [...slug].astro route file iterates this;
 * so does the sitemap, the hreflang alternates and the language toggle.
 * Add a page here and it exists in English and Telugu at once.
 */
import type { Lang } from "@/content/aqua-copy";

export const LANGS = ["en", "te"] as const satisfies readonly Lang[];

export type PageSlug =
  | ""
  | "story"
  | "visit"
  | "water-quality"
  | "faq"

export interface PageMeta {
  slug: PageSlug;
  en: { title: string; description: string };
  te: { title: string; description: string };
}

export const SITE = {
  name: { en: "S.S Aqua Feeds & Needs", te: "S.S Aqua Feeds & Needs" },
  titleSuffix: "S.S Aqua Feeds & Needs, Bhimavaram",
};

export const PAGES: PageMeta[] = [
  {
    slug: "",
    en: {
      title: "Aqua feed, medicine and pond supplies on JP Road, since 1997",
      description:
        "S.S Aqua Feeds & Needs (Siva Sai Aqua), beside Sri Venkateswara Swamy Temple, opposite Siva Ranjini Hospital, JP Road, Bazar, Bhimavaram, West Godavari 534202. Feed, medicines, minerals, probiotics and aerators for shrimp and fish farmers. Established 1997.",
    },
    te: {
      title: "జెపి రోడ్ లో ఈత దాణా, మందులు, చెరువు సరుకులు, 1997 నుండి",
      description:
        "భీమవరం జెపి రోడ్, బజార్, శ్రీ వెంకటేశ్వర స్వామి ఆలయం పక్కన, శివ రంజిని ఆసుపత్రి ఎదురుగా ఉన్న S.S Aqua Feeds & Needs. రొయ్యలు, చేపల రైతులకు దాణా, మందులు, ఖనిజాలు, ప్రొబయాటిక్స్, ఎయిరేటర్లు. 1997 నుండి.",
    },
  },
  {
    slug: "story",
    en: {
      title: "Same road, same counter, since 1997",
      description:
        "The story of S.S Aqua Feeds & Needs: 29 years on JP Road, Bazar, Bhimavaram, beside Sri Venkateswara Swamy Temple and opposite Siva Ranjini Hospital, selling feed and pond supplies to the farmers around it.",
    },
    te: {
      title: "అదే రోడ్, అదే కౌంటరు, 1997 నుండి",
      description:
        "భీమవరం జెపి రోడ్, బజార్‌లో, శ్రీ వెంకటేశ్వర స్వామి ఆలయం పక్కన, శివ రంజిని ఆసుపత్రి ఎదురుగా, 29 ఏళ్లుగా రైతులకు దాణా, చెరువు సరుకులు అమ్ముతున్న S.S Aqua Feeds & Needs కథ.",
    },
  },
  {
    slug: "visit",
    en: {
      title: "Visit the shop: address, hours and directions",
      description:
        "S.S Aqua Feeds & Needs, beside Sri Venkateswara Swamy Temple, opposite Siva Ranjini Hospital, JP Road, Bazar, Bhimavaram, West Godavari, Andhra Pradesh 534202. Open 8 AM to 9 PM, all days. Phone, WhatsApp and directions here.",
    },
    te: {
      title: "దుకాణానికి వస్తే: చిరునామా, పని వేళలు, దారి",
      description:
        "భీమవరం జెపి రోడ్, బజార్, శ్రీ వెంకటేశ్వర స్వామి ఆలయం పక్కన, శివ రంజిని ఆసుపత్రి ఎదురుగా, పశ్చిమ గోదావరి 534202. ఉదయం 8 నుంచి రాత్రి 9 వరకు, అన్ని రోజులూ ఓపెన్. ఫోన్, వాట్సాప్, దారి ఇక్కడ.",
    },
  },
  {
    slug: "water-quality",
    en: {
      title: "Optimum water levels for shrimp and fish",
      description:
        "Water parameters for shrimp and fish, from S.S Aqua Feeds & Needs, Bhimavaram: pH, salinity, alkalinity, hardness, ammonia, nitrite, iron, hydrogen sulfide, dissolved oxygen and chlorine, with the report's optimum range for each.",
    },
    te: {
      title: "రొయ్యలు, చేపలకు అనుకూల నీటి స్థాయిలు",
      description:
        "ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్ (భీమవరం) నీటి పట్టిక: pH, లవణీయత, ఆల్కలీనిటీ, హార్డ్‌నెస్, అమ్మోనియా, నైట్రైట్, ఇనుము, హైడ్రోజన్ సల్ఫైడ్, కరిగిన ఆక్సిజన్, క్లోరిన్, రొయ్యలకు మరియు చేపలకు రిపోర్ట్‌లో ఇచ్చిన అనుకూల శ్రేణులతో.",
    },
  },
  {
    slug: "faq",
    en: {
      title: "Answers to what farmers ask at the counter",
      description:
        "Straight answers about aqua feed, water medicine, minerals, probiotics, aerators, payments and delivery, from the counter at S.S Aqua Feeds & Needs, Bhimavaram.",
    },
    te: {
      title: "రైతులు అడిగే ప్రశ్నలకు సమాధానాలు",
      description:
        "దాణా, చెరువు మందులు, ఖనిజాలు, ప్రొబయాటిక్స్, ఎయిరేటర్లు, పేమెంట్ల గురించి సూటి సమాధానాలు, భీమవరం కౌంటరు నుండి.",
    },
  },
];
