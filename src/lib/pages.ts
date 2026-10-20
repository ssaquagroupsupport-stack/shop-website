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
};

export const PAGES: PageMeta[] = [
  {
    slug: "",
    en: {
      title: "S.S Aqua Feeds & Needs, Bhimavaram | Aqua Feed & Medicines",
      description:
        "S.S Aqua Feeds & Needs on JP Road, Bhimavaram: shrimp and fish feed, medicines, minerals, probiotics. Open 8 AM to 9 PM. Call to confirm today's stock.",
    },
    te: {
      title: "ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్, భీమవరం | ఆక్వా ఫీడ్ & మందులు",
      description:
        "భీమవరం జెపి రోడ్‌లో, శివ రంజిని ఆసుపత్రి ఎదురుగా, 1997 నుంచి రొయ్యలు, చేపల రైతులకు దాణా, మందులు, ఖనిజాలు, ప్రొబయోటిక్స్, ఎయిరేటర్లు.",
    },
  },
  {
    slug: "story",
    en: {
      title: "S.S Aqua Feeds & Needs, Bhimavaram | Shop Story",
      description:
        "The story of S.S Aqua Feeds & Needs: 29 years on JP Road, Bazar, Bhimavaram, selling feed and pond supplies to the farmers around it.",
    },
    te: {
      title: "ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్, భీమవరం | 1997 నుంచి మా కథ",
      description:
        "భీమవరం జెపి రోడ్, బజార్‌లో, శ్రీ వెంకటేశ్వర స్వామి ఆలయం పక్కన, శివ రంజిని ఆసుపత్రి ఎదురుగా, 29 ఏళ్లుగా రైతులకు దాణా, చెరువు సరుకులు అమ్ముతున్న S.S Aqua Feeds & Needs కథ.",
    },
  },
  {
    slug: "visit",
    en: {
      title: "S.S Aqua Feeds & Needs, Bhimavaram | Address & Directions",
      description:
        "S.S Aqua Feeds & Needs, beside Sri Venkateswara Swamy Temple, JP Road, Bhimavaram 534202. Open 8 AM to 9 PM, all days. Phone, WhatsApp and directions.",
    },
    te: {
      title: "ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్, భీమవరం | చిరునామా, సమయం, దారి",
      description:
        "భీమవరం జెపి రోడ్, బజార్, శ్రీ వెంకటేశ్వర స్వామి ఆలయం పక్కన, పశ్చిమ గోదావరి 534202. ఉదయం 8 నుంచి రాత్రి 9 వరకు, అన్ని రోజులూ ఓపెన్.",
    },
  },
  {
    slug: "water-quality",
    en: {
      title: "Pond Water Parameters | S.S Aqua Feeds & Needs, Bhimavaram",
      description:
        "Water parameters for shrimp and fish ponds from the lab report at S.S Aqua, Bhimavaram, with the optimum range for pH, salinity, ammonia, nitrite and more.",
    },
    te: {
      title: "రొయ్యలు, చేపల నీటి పారామితులు | ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్",
      description:
        "రొయ్యలు, చేపల చెరువుల నీటి పారామితులు, ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్ (భీమవరం) నీటి పట్టిక నుంచి: pH, లవణీయత, ఆల్కలీనిటీ, అమ్మోనియా, నైట్రైట్, ఆక్సిజన్, ప్రతి దానికి అనుకూల శ్రేణితో.",
    },
  },
  {
    slug: "faq",
    en: {
      title: "Aqua Feed & Pond Supply FAQs | S.S Aqua Feeds & Needs",
      description:
        "Straight answers about aqua feed, water medicine, minerals, probiotics, aerators, payments and delivery, from the counter at S.S Aqua Feeds & Needs, Bhimavaram.",
    },
    te: {
      title: "ఆక్వా ఫీడ్ & మందుల ప్రశ్నలు | ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్",
      description:
        "దాణా, చెరువు మందులు, ఖనిజాలు, ప్రొబయాటిక్స్, ఎయిరేటర్లు, పేమెంట్ల గురించి సూటి సమాధానాలు, భీమవరం కౌంటరు నుండి.",
    },
  },
];
