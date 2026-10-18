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
  | "faq"
  | "products"
  | `products/${"feed" | "medicines" | "minerals" | "probiotics" | "aerators"}`;

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
        "S.S Aqua Feeds & Needs (Siva Sai Aqua) on JP Road, beside Sri Venkateswara Swamy Temple, opposite Siva Ranjini Hospital, Bhimavaram. Feed, medicines, minerals, probiotics and aerators for shrimp and fish farmers. Established 1997.",
    },
    te: {
      title: "జెపి రోడ్ లో ఈత దాణా, మందులు, చెరువు సరుకులు, 1997 నుండి",
      description:
        "భీమవరం జెపి రోడ్, శ్రీ వెంకటేశ్వర స్వామి ఆలయం పక్కన, శివ రంజిని ఆసుపత్రి ఎదురుగా ఉన్న S.S Aqua Feeds & Needs. రొయ్యలు, చేపల రైతులకు దాణా, మందులు, ఖనిజాలు, ప్రొబయాటిక్స్, ఎయిరేటర్లు. 1997 నుండి.",
    },
  },
  {
    slug: "story",
    en: {
      title: "Same road, same counter, since 1997",
      description:
        "The story of S.S Aqua Feeds & Needs: 29 years on JP Road, Bhimavaram, opposite Siva Ranjini Hospital, selling feed and pond supplies to the farmers around it.",
    },
    te: {
      title: "అదే రోడ్, అదే కౌంటరు, 1997 నుండి",
      description:
        "భీమవరం జెపి రోడ్ లో 29 ఏళ్లుగా రైతులకు దాణా, చెరువు సరుకులు అమ్ముతున్న S.S Aqua Feeds & Needs కథ.",
    },
  },
  {
    slug: "visit",
    en: {
      title: "Visit the shop: address, hours and directions",
      description:
        "S.S Aqua Feeds & Needs, beside Sri Venkateswara Swamy Temple, opposite Siva Ranjini Hospital, JP Road, Bhimavaram. Open 8 AM to 9 PM, all days. Phone, WhatsApp and directions here.",
    },
    te: {
      title: "దుకాణానికి వస్తే: చిరునామా, పని వేళలు, దారి",
      description:
        "భీమవరం జెపి రోడ్, శ్రీ వెంకటేశ్వర స్వామి ఆలయం పక్కన, శివ రంజిని ఆసుపత్రి ఎదురుగా. ఉదయం 8 నుంచి రాత్రి 9 వరకు, అన్ని రోజులూ ఓపెన్. ఫోన్, వాట్సాప్, దారి ఇక్కడ.",
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
  {
    slug: "products",
    en: {
      title: "What we supply: feed, medicines, minerals, probiotics, aerators",
      description:
        "Five shelves at the counter: shrimp and fish feed, pond medicines, minerals and water conditioners, probiotics and pond culture, aerators and spare parts. Prices change through the season, so we quote them fresh.",
    },
    te: {
      title: "మనం సరఫరా చేసేవి: దాణా, మందులు, ఖనిజాలు, ప్రొబయాటిక్స్, ఎయిరేటర్లు",
      description:
        "రొయ్యలు, చేపల దాణా, చెరువు మందులు, ఖనిజాలు, నీటి కండిషనర్లు, ప్రొబయాటిక్స్, ఎయిరేటర్లు, స్పేర్ పార్ట్స్. ధరలు సీజన్ ప్రకారం మారతాయి, కాబట్టి రోజు ధర అడగండి.",
    },
  },
];

/** Category slugs under /products/, in shelf order. */
export const CATEGORIES = [
  "feed",
  "medicines",
  "minerals",
  "probiotics",
  "aerators",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** Unique SEO meta for each /products/<category> page. */
export const CATEGORY_META: Record<Category, { en: { title: string; description: string }; te: { title: string; description: string } }> = {
  feed: {
    en: {
      title: "Shrimp and fish feed: brands, sizes and how we quote",
      description:
        "The feed shelf at S.S Aqua Feeds & Needs, Bhimavaram: shrimp and fish feed brands and sizes in stock, how we match feed to crop stage, and why prices are quoted fresh each season.",
    },
    te: {
      title: "రొయ్యలు, చేపల దాణా: బ్రాండ్లు, సైజులు, ధర ఎలా ఉంటుంది",
      description:
        "భీమవరం S.S Aqua Feeds & Needs దాణా షెల్ఫ్: స్టాక్ లో ఉన్న బ్రాండ్లు, సైజులు, పంట దశకు దాణా సరిపోయే విధానం, ధరలు సీజన్ ప్రకారం ఎందుకు మారతాయి.",
    },
  },
  medicines: {
    en: {
      title: "Pond medicines and treatments, with usage on the pack",
      description:
        "Water medicines and treatments at S.S Aqua Feeds & Needs, Bhimavaram: what we stock for common pond problems, how we talk through a dose on the counter, and what we tell farmers to ask their lease advisor.",
    },
    te: {
      title: "చెరువు మందులు, ట్రీట్‌మెంట్లు: ప్యాక్ పైనే వాడకం వివరాలు",
      description:
        "భీమవరం కౌంటరులో చెరువు సమస్యలకు మందులు: డోస్ గురించి కౌంటరులో మాట్లాడే విధానం, స్టాక్ మందులు, రైతులు ఏమి అడగాలో సూచన.",
    },
  },
  minerals: {
    en: {
      title: "Minerals and water conditioners for hard water and long crops",
      description:
        "Minerals, conditioners and supplements at S.S Aqua Feeds & Needs, Bhimavaram: what we stock, when a farmer reaches for them, and how we help with application rates.",
    },
    te: {
      title: "ఖనిజాలు, నీటి కండిషనర్లు: గట్టి నీళ్ళు, పొడవాటి పంటలు",
      description:
        "భీమవరం S.S Aqua Feeds & Needs లో ఖనిజాలు, కండిషనర్లు, సప్లిమెంట్లు: స్టాక్, ఎప్పుడు వాడతారో, మోతాదు గణనలో మేము ఏం చేస్తామో.",
    },
  },
  probiotics: {
    en: {
      title: "Probiotics and pond culture for gut, water and pond floor",
      description:
        "Probiotics and pond culture products at S.S Aqua Feeds & Needs, Bhimavaram: the shelves we keep for gut health, water and pond floor, and how we route a farmer to the right one.",
    },
    te: {
      title: "ప్రొబయాటిక్స్, పాండ్ కల్చర్: పొట్టకు, నీటికి, అడుగుకు",
      description:
        "భీమవరం కౌంటరులో ప్రొబయాటిక్స్, పాండ్ కల్చర్: పొట్ట, నీరు, చెరువు అడుగు కావాల్సిన సరుకు, సరైనదానికి మేము ఎలా దారి చూపిస్తామో.",
    },
  },
  aerators: {
    en: {
      title: "Aerators, paddle wheels, spare parts and fittings",
      description:
        "Aerators, paddle wheel parts and fittings at S.S Aqua Feeds & Needs, Bhimavaram: what sits on the shelf, what arrives next day, and the spares we keep for 2 HP through 5 HP set-ups.",
    },
    te: {
      title: "ఎయిరేటర్లు, ప్యాడిల్ వీల్స్, స్పేర్ పార్ట్స్, ఫిటింగ్స్",
      description:
        "భీమవరం S.S Aqua Feeds & Needs లో ఎయిరేటర్లు, ప్యాడిల్ వీల్ పార్ట్స్, ఫిటింగ్స్: షెల్ఫులో ఉండేవి, మర్నాడు వచ్చేవి, 2HP నుండి 5HP వరకు మేము పెట్టుకునే స్పేర్లు.",
    },
  },
};
