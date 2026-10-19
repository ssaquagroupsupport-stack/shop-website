/**
 * Copy for the pages that exist in this build but had no home in the old
 * landing-only file: navigation and the dedicated story / visit / FAQ pages.
 *
 * Same rules as aqua-copy.ts: no claim we cannot point at, no invented
 * number, [FILL IN] in place of anything the shop has not confirmed yet.
 * The Telugu strings are drafted to be checked by a native speaker before
 * launch; they are simple, factual sentences.
 */
import type { Lang } from "@/content/aqua-copy";

export interface NavCopy {
  home: string;
  story: string;
  brands: string;
  faq: string;
  visit: string;
  menuOpen: string;
  menuClose: string;
  skipToContent: string;
}

export interface PagesCopy {
  nav: NavCopy;

  callLabel: string;
  whatsappLabel: string;
  directionsLabel: string;

  /** Small print under every photograph that is not the shop's own. */
    stockPhotoLabel: string;
    storyPage: {
    h1: string;
    lead: string;
    closing: string;
  };

  visitPage: {
    h1: string;
    lead: string;
    phoneLabel: string;
    deliveryLabel: string;
    hoursLabel: string;
    whatsappMessage: string;
  };

  faqPage: {
    h1: string;
    lead: string;
    items: { q: string; a: string }[];
  };

  /** The "Brands we carry" section (home, both languages). */
  brands: {
    overline: string;
    heading: string;
    /** The same heading in the other language, shown as a small line beneath. */
    headingAlt: string;
    lead: string;
    countLabel: string;
    searchPlaceholder: string;
    searchClear: string;
    /** "{n}" results shown out of "{total}" in the directory. */
    showing: string;
    lettersLabel: string;
    downloadLabel: string;
    downloadA11y: string;
    fileHint: string;
    emptyState: string;
    /** Short facts listed under the count. Keep to three: the card is a metric,
     * not a paragraph. */
    metricFacts: string[];
    sheetTitle: string;
    sheetNote: string;
    sheetClose: string;
    sheetWhatsapp: string;
    sheetDirections: string;
    faq: {
      q1: string;
      /** "{count}" is replaced at build time with the brand count. */
      a1Head: string;
      a1Tail: string;
      q2: string;
      a2: string;
    };
  };

}

export const PAGES_COPY: Record<Lang, PagesCopy> = {
  en: {
    nav: {
      home: "Back to the top",
      story: "Our story",
      brands: "Brands",
      faq: "Farmer's questions",
      visit: "Visit us",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      skipToContent: "Skip to content",
    },
    callLabel: "Call the shop",
    whatsappLabel: "WhatsApp",
    directionsLabel: "Directions",
    stockPhotoLabel: "Stock photo",
    storyPage: {
      h1: "Same road, same shutters, since 1997.",
      lead: "S.S Aqua Feeds & Needs stood opposite Siva Ranjini Hospital on JP Road when the first Aqua Feeds & Needs poster went up. Farmers who came in as young men now send their sons.",
      closing:
        "What has changed since: the products, the packaging, the season's problems. What has not: the address, the counter and the habit of saying what we know.",
    },
    visitPage: {
      h1: "Visit the counter on JP Road.",
      lead: "Walk in, or send a message first. We open at 8 in the morning and close at 9 at night.",
      phoneLabel: "Phone / WhatsApp",
      deliveryLabel: "Delivery / service area",
      hoursLabel: "Hours",
      whatsappMessage:
        "Namaste, I would like to ask about feed and pond supplies.",
    },
    faqPage: {
      h1: "What farmers ask us.",
      lead: "The questions that come up again and again at the counter, answered the way we would answer them across it.",
      items: [
        {
          q: "What time does the shop open?",
          a: "The shutters open at 8 in the morning and close at 9 at night, seven days a week including Sunday.",
        },
        {
          q: "Where is the shop exactly?",
          a: "Beside Sri Venkateswara Swamy Temple, opposite Siva Ranjini Hospital, JP Road, Bhimavaram, West Godavari district, Andhra Pradesh, PIN 534202. A Google Map is on the visit page.",
        },
        {
          q: "How much does shrimp feed cost?",
          a: "Prices move with the market, so we quote them fresh instead of printing them. Call or message the shop for today's price.",
        },
        {
          q: "Which feed brands do you stock?",
          a: "All 116 brands we carry are listed on the home page under Brands we carry, searchable. Stock on the day changes, so ask at the counter.",
        },
        {
          q: "Do you deliver to the farm?",
          a: "Delivery is arranged case by case. Ask at the counter with your location and we will tell you what is possible.",
        },
        {
          q: "Which medicine should I use for my pond problem?",
          a: "Describe the water, not a product name. Bring what you are seeing: colour, smell, how the stock behaves. We will say what usually helps in this belt, and whether treatment is needed at all.",
        },
        {
          q: "How much feed should I use per meal?",
          a: "Watch the feed trays. If tray feed is lying uneaten, cut the rate and tell us what you saw. The tray plans the meal; the shop only helps you read it.",
        },
        {
          q: "What probiotic do I need for my pond?",
          a: "It depends on the age of the crop and what the water shows. Ask at the counter with your crop details; the routine matters more than the brand.",
        },
        {
          q: "An aerator failed at night. Do you stock spares?",
          a: "Yes. Impellers, bearings, tubing and fittings are kept in stock so a breakdown in the night does not cost you the crop.",
        },
        {
          q: "Can I buy feed for a few weeks in advance?",
          a: "We advise against it in this weather. Buying feed a week at a time keeps it fresh and keeps you free to change course when the weather turns.",
        },
        {
          q: "How long have you been trading?",
          a: "Since 1997, on the same road, in the same trade. That is 29 years, and the address has never moved.",
        },
      ],
    },
    brands: {
      overline: "The Brand Ledger / Field Index",
      heading: "Brands we carry",
      headingAlt: "మేము అమ్మే బ్రాండ్లు",
      lead:
        "A working directory of the brand names that come across our counter. Search it before you ride over, or take the whole list with you as a PDF.",
      countLabel: "brand names in the directory",
      searchPlaceholder: "Search all brand names",
      searchClear: "Clear",
      showing: "Showing {n} of {total}",
      lettersLabel: "Jump to a letter",
      downloadLabel: "Download brand list (PDF)",
      downloadA11y: "Download the S.S Aqua brand list as a PDF",
      fileHint: "Brand names only",
      emptyState: "No brand matches that. Try a shorter word, or ask at the counter.",
      metricFacts: [
        "Open 8 AM to 9 PM, every day",
        "The same counter on JP Road since 1997",
        "Stock changes daily, ask before you travel",
      ],
      sheetTitle: "About this brand",
      sheetNote: "Ask at the counter for the sizes and stock we have today.",
      sheetClose: "Close",
      sheetWhatsapp: "Enquire on WhatsApp",
      sheetDirections: "Directions to the shop",
      faq: {
        q1: "Which aqua brands does S.S Aqua stock?",
        a1Head: "Our directory lists {count} brand names, including",
        a1Tail: "The whole list is on this page and in the PDF. What is on the shelf today still needs a call.",
        q2: "Is everything in the directory on the shelf today?",
        a2: "Not always. The directory is what we stock, and stock changes daily. Call or visit the counter on JP Road to confirm.",
      },
    },
  },

  te: {
    nav: {
      home: "పైకి వెళ్ళు",
      story: "మా కథ",
      brands: "బ్రాండ్లు",
      faq: "రైతుల ప్రశ్నలు",
      visit: "దుకాణానికి రండి",
      menuOpen: "మెనూ ఓపెన్ చేయి",
      menuClose: "మెనూ క్లోజ్ చేయి",
      skipToContent: "కంటెంట్ కి వెళ్ళు",
    },
    callLabel: "దుకాణానికి కాల్ చేయి",
    whatsappLabel: "వాట్సాప్",
    directionsLabel: "దారి చూపు",
    stockPhotoLabel: "స్టాక్ ఫోటో",
    storyPage: {
      h1: "అదే రోడ్, అదే షట్టరు, 1997 నుండి.",
      lead: "మొదటి బోర్డు పెట్టిన రోజు నుండి అదే చోటు: భీమవరం జెపి రోడ్, శివ రంజిని ఆసుపత్రి ఎదురుగా. అప్పుడు యువకులై వచ్చిన రైతులు, ఇప్పుడు వారి కొడుకులను పంపుతున్నారు.",
      closing:
        "మారినవి: సరుకులు, ప్యాకింగ్, సీజన్ సమస్యలు. మారనివి: చిరునామా, కౌంటరు, తెలిసింది చెప్పే అలవాటు.",
    },
    visitPage: {
      h1: "జెపి రోడ్ లో మా కౌంటరుకు రండి.",
      lead: "నడచి రండి లేదా మొదట మెసేజ్ చేయండి. ఉదయం 8 నుంచి రాత్రి 9 వరకు ఓపెన్.",
      phoneLabel: "ఫోన్ / వాట్సాప్",
      deliveryLabel: "డెలివరీ / సర్వీస్ ప్రాంతం",
      hoursLabel: "పని వేళలు",
      whatsappMessage: "నమస్కారం, దాణా, చెరువు సరుకుల గురించి అడగాలనుకుంటున్నాను.",
    },
    faqPage: {
      h1: "రైతులు మనల్ని అడిగేవి.",
      lead: "కౌంటరు దగ్గర మళ్ళీ మళ్ళీ వచ్చే ప్రశ్నలు, అక్కడ సమాధానం చెప్పే విధంగానే ఇక్కడా.",
      items: [
        { q: "దుకాణం ఎప్పుడు ఓపెన్?", a: "ఉదయం 8 నుంచి రాత్రి 9 వరకు, ఆదివారం సహా ఏడంతా ఓపెన్." },
        { q: "సరిగ్గా ఎక్కడ ఉంటుంది?", a: "భీమవరం జెపి రోడ్, శ్రీ వెంకటేశ్వర స్వామి ఆలయం పక్కన, శివ రంజిని ఆసుపత్రి ఎదురుగా, పశ్చిమ గోదావరి జిల్లా, పిన్ 534202. విజిట్ పేజీలో గూగుల్ మ్యాప్ ఉంది." },
        { q: "రొయ్యల దాణా ధర ఎంత?", a: "ధరలు మార్కెట్ ప్రకారం మారతాయి, కాబట్టి ప్రింట్ చేయము. కాల్ చేస్తే ఇప్పటి ధర చెబుతాము." },
        { q: "ఏ బ్రాండ్ దాణా పెట్టుకున్నారు?", a: "మేము అమ్మే 116 బ్రాండ్లన్నీ హోమ్ పేజీ Brands we carry లో ఉన్నాయి, సెర్చ్ చేయొచ్చు. రోజు స్టాక్ మారుతుంది, కౌంటర్‌లో అడగండి." },
        { q: "చెరువుకు డెలివరీ చేస్తారా?", a: "డెలివరీ విషయం ఒక్కో చోటుకు ఒక్కోలా ఉంటుంది. మీ ప్రాంతం చెప్పి కౌంటర్‌లో అడగండి, ఏమి చేయగలమో చెబుతాము." },
        { q: "నా చెరువు సమస్యకు ఏ మందు వాడాలి?", a: "ఉత్పత్తి పేరు కాదు, నీళ్ళను చెప్పండి. రంగు, వాసన, స్టాక్ ఎలా ప్రవర్తిస్తోంది. ఈ బెల్ట్ లో ఏది పని చేస్తుందో, మందు అవసరమే లేదో కూడా చెబుతాము." },
        { q: "ఒక భోజనంకు ఎంత దాణా పోస్తాలి?", a: "దాణా ట్రేలు చూడండి. ట్రే లో దాణా మిగిలితే రేటు తగ్గించాలి. ఈ సందర్భంగా కౌంటరు దగ్గర చెప్పండి; పెట్టే మోతాదు ట్రే చదువే ప్రణాళిక, మనం అందులో సహాయం మాత్రమే." },
        { q: "నా చెరువుకు ఏ ప్రొబయాటిక్?", a: "పంట వయస్సు, నీటి పరిస్థితి చూసి చెప్పాలి. కౌంటరు దగ్గర పంట వివరాలతో చెప్పండి; బ్రాండ్ కంటే రొయొటీన్ ముఖ్యం." },
        { q: "రాత్రి ఎయిరేటర్ పోయింది. స్పేర్లు ఉన్నాయా?", a: "ఉన్నాయి. ఇంపెల్లర్లు, బేరింగ్లు, పైపు, ఫిటింగ్స్ స్టాక్ లో ఉంటాయి; రాత్రి ఒక్క పెరుగుడు పంట చెడిపోకూడదు." },
        { q: "ముందుకు వారాల దాణా కొనొచ్చా?", a: "ఈ వాతావరణం లో మంచిది కాదు. వారం మోతాదుకు తాజా దాణా కొనడం మంచిది; వాతావరణం మారితే వెనక్కి తగ్గొచ్చు." },
        { q: "ఎంత కాలంగా ట్రేడ్ చేస్తున్నారు?", a: "1997 నుండి, అదే రోడ్, అదే ట్రేడ్. 29 ఏళ్లు; చిరునామా ఒకసారి కూడా మారలేదు."},
      ],
    },
    brands: {
      overline: "బ్రాండ్ లెడ్జర్ / ఫీల్డ్ ఇండెక్స్",
      heading: "మేము అమ్మే బ్రాండ్లు",
      headingAlt: "Brands we carry",
      lead:
        "మా కౌంటర్‌కు వచ్చే బ్రాండ్ పేర్ల పని జాబితా. బయలుదేరే ముందే వెతకండి, లేదా పూర్తి జాబితాను PDF గా తీసుకెళ్లండి.",
      countLabel: "జాబితాలో బ్రాండ్ పేర్లు",
      searchPlaceholder: "అన్ని బ్రాండ్ పేర్లలో వెతకండి",
      searchClear: "తొలగించు",
      showing: "{total} లో {n} చూపుతున్నాం",
      lettersLabel: "అక్షరానికి వెళ్లండి",
      downloadLabel: "బ్రాండ్ జాబితా డౌన్‌లోడ్ (PDF)",
      downloadA11y: "S.S Aqua బ్రాండ్ జాబితాను PDF గా డౌన్‌లోడ్ చేయండి",
      fileHint: "బ్రాండ్ పేర్లు మాత్రమే",
      emptyState: "ఆ పేరుతో బ్రాండ్ లేదు. చిన్న మాటతో వెతకండి, లేదా కౌంటర్‌లో అడగండి.",
      metricFacts: [
        "రోజూ ఉదయం 8 నుంచి రాత్రి 9 వరకు ఓపెన్",
        "1997 నుంచి జేపీ రోడ్డులో అదే కౌంటర్",
        "స్టాక్ రోజుకు మారుతుంది, బయలుదేరే ముందు అడగండి",
      ],
      sheetTitle: "ఈ బ్రాండ్ గురించి",
      sheetNote: "ఈ రోజు మా దగ్గర ఉన్న సైజులు, స్టాక్ కౌంటర్‌లో అడగండి.",
      sheetClose: "మూసివేయి",
      sheetWhatsapp: "వాట్సాప్‌లో అడగండి",
      sheetDirections: "దుకాణానికి దారి",
      faq: {
        q1: "S.S Aqua ఏ ఆక్వా బ్రాండ్లు పెడుతుంది?",
        a1Head: "మా జాబితాలో {count} బ్రాండ్ పేర్లు ఉన్నాయి, వాటిలో",
        a1Tail: "పూర్తి జాబితా ఈ పేజీలో, PDF లో ఉంది. ఈ రోజు షెల్ఫ్‌లో ఏముందో కాల్ చేసి అడగాలి.",
        q2: "జాబితాలో ఉన్నవన్నీ ఈ రోజు షెల్ఫ్‌లో ఉంటాయా?",
        a2: "అన్నీ ఉండకపోవచ్చు. జాబితా మేము పెట్టే బ్రాండ్లది, స్టాక్ రోజుకు మారుతుంది. ధృవీకరణకు జేపీ రోడ్డు కౌంటర్‌కు కాల్ చేయండి లేదా రండి.",
      },
    },
  },
};

export function pagesCopyFor(lang: Lang): PagesCopy {
  return PAGES_COPY[lang];
}
