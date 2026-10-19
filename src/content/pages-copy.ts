/**
 * Copy for the pages that exist in this build but had no home in the old
 * landing-only file: navigation, the dedicated story / visit / FAQ pages,
 * the products index and the five category pages.
 *
 * Same rules as aqua-copy.ts: no claim we cannot point at, no invented
 * number, [FILL IN] in place of anything the shop has not confirmed yet.
 * The Telugu strings are drafted to be checked by a native speaker before
 * launch; they are simple, factual sentences.
 */
import type { Lang } from "@/content/aqua-copy";
import type { Category } from "@/lib/pages";

export interface NavCopy {
  home: string;
  story: string;
  brands: string;
  products: string;
  faq: string;
  visit: string;
  menuOpen: string;
  menuClose: string;
  skipToContent: string;
}

export interface CategoryCopy {
  slug: Category;
  name: string;
  heading: string;
  intro: string;
  photoKey: string;
  points: { title: string; body: string }[];
  brandsNote: string;
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

  productsIndex: {
    h1: string;
    lead: string;
    otherTitle: string;
    otherNote: string;
    priceNote: string;
    openCard: string;
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

  categories: Record<Category, CategoryCopy>;
}

const CATEGORIES_EN: PagesCopy["categories"] = {
  feed: {
    slug: "feed",
    name: "Feed",
    heading: "Shrimp and fish feed on the feed shelf",
    intro:
      "Feed is the biggest line in every crop's budget, so it is the shelf we take most seriously. Starter, grow-out and finisher feed for shrimp ponds and fish ponds, from the brands you already ask for.",
    photoKey: "feedSacks",
    points: [
      {
        title: "Check the trays first",
        body: " Uneaten feed on the tray is the pond talking. Bring that observation to the counter and we will match a feed rate, not just a bag.",
      },
      {
        title: "Buy for the week you are in",
        body: " The weather here turns quickly. A week of fresh feed at a time keeps the crop and your money safer than a full drum bought in advance.",
      },
      {
        title: "Ask for today's price",
        body: " Feed prices move with the market, so we never print them. Call or message and you will get the current number.",
      },
    ],
    brandsNote: "Every brand we stock is in the brand directory on the home page.",
  },
  medicines: {
    slug: "medicines",
    name: "Medicines",
    heading: "Pond medicines for when a pond goes wrong",
    intro:
      "Bring us the problem, not just a product name. Water colour, feed behaviour, sudden losses after a rain. We hear it at the counter every season and will tell you what usually helps and what does not.",
    photoKey: "medicineBottles",
    points: [
      {
        title: "Describe the water before you buy",
        body: " Colour, smell, how the stock sits at the edges. With that, we can suggest the right treatment, or tell you it may not need treating at all.",
      },
      {
        title: "Named brands on the shelf",
        body: " We stock the medicines farmers in this belt already trust, not whichever company called that week.",
      },
      {
        title: "Dose questions welcome",
        body: " Ask here before you dose. Pond size, stocking density and the weather all change the answer.",
      },
    ],
    brandsNote: "Every brand we stock is in the brand directory on the home page.",
  },
  minerals: {
    slug: "minerals",
    name: "Minerals and water conditioners",
    heading: "Minerals and water conditioners for hard water and long crops",
    intro:
      "Every crop pulls minerals out of the water. Hardness, salinity and the moulting cycle all read differently here than in the next belt, and we stock for this water specifically.",
    photoKey: "mineralPowder",
    points: [
      {
        title: "Same-stock minerals, tested shelves",
        body: " We turn stock over with the season, so what you buy has not sat for a year in the sun.",
      },
      {
        title: "Ask about the crop stage",
        body: " What a pond needs at 20 days is not what it needs at 90. Tell us where you are and we will match the dose.",
      },
      {
        title: "Cut the waste",
        body: " We would rather sell you the right quantity once than the easy quantity twice.",
      },
    ],
    brandsNote: "Every brand we stock is in the brand directory on the home page.",
  },
  probiotics: {
    slug: "probiotics",
    name: "Probiotics and pond culture",
    heading: "Probiotics and pond culture for gut, water and pond floor",
    intro:
      "Gut probiotics, water probiotics, molasses culture and the pond-floor routine. Used right, they cut feed waste and keep the water stable between checks.",
    photoKey: "probioticSachet",
    points: [
      {
        title: "The routine matters more than the brand",
        body: " A probiotic added once, at the wrong dose, fixes nothing. Ask at the counter for the dosing routine that fits your crop.",
      },
      {
        title: "Molasses culture, brewed here",
        body: " We stock what you need to brew and explain how, so the culture going into your tank is alive and on time.",
      },
      {
        title: "Watch the floor",
        body: " Sludge load decides more crops than any medicine. We will show you what a clean pond floor looks like on a tray.",
      },
    ],
    brandsNote: "Every brand we stock is in the brand directory on the home page.",
  },
  aerators: {
    slug: "aerators",
    name: "Aerators and spares",
    heading: "Aerators, spare parts and fittings on the same road",
    intro:
      "An aerator that stops at 2 AM costs a crop. We keep aerators, impellers, bearings, tubing and fittings so a breakdown never costs you a night.",
    photoKey: "aeratorInAction",
    points: [
      {
        title: "Spares before aerators",
        body: " Nine times out of ten the machine can be fixed by morning if the part is already here. We keep the parts the ponds in this belt break.",
      },
      {
        title: "Buy once",
        body: " We stock machines we would run ourselves and say so when a cheaper one will not survive the season.",
      },
      {
        title: "Fittings and tubing kept in count",
        body: " Hoses, clips, wheels, pipe: all stocked, not ordered and waited for.",
      },
    ],
    brandsNote: "Every brand we stock is in the brand directory on the home page.",
  },
};

const CATEGORIES_TE: PagesCopy["categories"] = {
  feed: {
    ...CATEGORIES_EN.feed,
    name: "దాణా",
    heading: "దాణా షెల్ఫ్: రొయ్యలు, చేపల దాణా",
    intro:
      "పంట బడ్జెట్ లో దాణా అనేది పెద్ద కొన. రొయ్యల, చేపల చెరువులకు స్టార్టర్, గ్రో అవుట్, ఫినిషర్ దాణా ఇక్కడే. రైతులు అడిగే బ్రాండ్లు ఉన్నాయి.",
    points: [
      { title: "ముందు ట్రే చూడండి", body: " ట్రేలో దాణా మిగిలిస్తే చెరువు చెబుతోంది. కౌంటర్ దగ్గర చెప్పండి, అప్పుడే దాణా రేటు సరిపోము." },
      { title: "ఈ వారానికి కావాల్సిందే కొనండి", body: " వాతావరణం వేగంగా మారుతుంది. వారానికి తాజా దాణా కొనడం ముందు డ్రమ్ కొనడం కంటే మంచిది." },
      { title: "ఈ రోజు ధర అడగండి", body: " మార్కెట్ ప్రకారం ధరలు మారతాయి. కాల్ చేసి అడగండి, ఇప్పటి ధర చెబుతాము." },
    ],
    brandsNote: "మేము పెట్టే ప్రతి బ్రాండ్ హోమ్ పేజీలోని బ్రాండ్ జాబితాలో ఉంది.",
  },
  medicines: {
    ...CATEGORIES_EN.medicines,
    name: "మందులు",
    heading: "చెరువు తప్పినప్పుడు కావాల్సిన మందులు",
    intro:
      "ఉత్పత్తి పేరు కాదు, సమస్యను తీసుకురండి. నీటి రంగు, తినే తీరు, వర్షం తర్వాత నష్టాలు. సీజన్లుగా కౌంటర్ దగ్గర వింటున్నాము, ఏది పని చేస్తుందో చెబుతాము.",
    points: [
      { title: "ముందు నీళ్లను వివరించండి", body: " రంగు, వాసన, అంచుల్లో కూర్చోవడం. దీన్ని చెప్పగానే సరైన మందు, లేదా మందు అవసరం లేదు అని కూడా చెబుతాము." },
      { title: "ఈ ప్రాంతం నమ్మే బ్రాండ్లు", body: " గత వారం ఏ సంస్థ కాల్ చేసిందో అది కాదు, ఈ బెల్ట్ రైతులు నమ్మే మందులు పెట్టాము." },
      { title: "డోస్ అడగండి", body: " డోస్ గురించి అడగడానికి తప్పు లేదు. చెరువు పరిమాణం, సాంద్రత, వాతావరణం అన్నీ సమాధానం మార్చతాయి." },
    ],
    brandsNote: "మేము పెట్టే ప్రతి బ్రాండ్ హోమ్ పేజీలోని బ్రాండ్ జాబితాలో ఉంది.",
  },
  minerals: {
    ...CATEGORIES_EN.minerals,
    name: "ఖనిజాలు, నీటి కండిషనర్లు",
    heading: "గట్టి నీళ్ళకు, పొడవాటి పంటకు ఖనిజాలు",
    intro:
      "పంట నీటి నుండి ఖనిజాలను లాక్కుంటుంది. కాఠిన్యం, ఉప్పు, మోల్టింగ్ చక్రం ఇక్కడి నీళ్లలో ఎలా మారతాయో చూసిన అనుభవం ఉంది. ఈ నీటికే సరిపోయేవి పెట్టాము.",
    points: [
      { title: "తాజా స్టాక్", body: " సీజన్ ప్రకారం వస్తువులు తిరుగుతాయి. సూర్యుని కింద ఏడాది కూర్చున్నవి అమ్మము." },
      { title: "పంట దశ చెప్పండి", body: " 20 రోజుల చెరువుకు 90 రోజుల చెరువుకు అవసరం ఒకటి కాదు. ఎక్కడున్నారో చెప్పండి, డోస్ సరిపోము." },
      { title: "వేస్ట్ తగ్గించుకోండి", body: " ఒక్కసారి సరైన మోతాదు అనుకుంటాము, రెండుసార్లు సులభమైన మోతాదు కాదు." },
    ],
    brandsNote: "మేము పెట్టే ప్రతి బ్రాండ్ హోమ్ పేజీలోని బ్రాండ్ జాబితాలో ఉంది.",
  },
  probiotics: {
    ...CATEGORIES_EN.probiotics,
    name: "ప్రొబయాటిక్స్, పాండ్ కల్చర్",
    heading: "పొట్టకు, నీటికి, చెరువు అడుగుకు ప్రొబయాటిక్స్",
    intro:
      "గట్ ప్రొబయాటిక్స్, వాటర్ ప్రొబయాటిక్స్, మొలాసిస్ కల్చర్, చెరువు అడుగు రొయొటీన్. సరిగా వాడితే దాణా వేస్ట్ తగ్గుతుంది, నీరు స్థిరంగా ఉంటుంది.",
    points: [
      { title: "బ్రాండ్ కంటే రొయొటీన్ ముఖ్యం", body: " ఒకసారి, చెప్పిన మోతాదు లేకుండా పోస్తే ఏమీ సరిపోదు. మీ పంటకు సరిపోయే రొయొటీన్ కౌంటర్ దగ్గర అడగండి." },
      { title: "మొలాసిస్ కల్చర్, ఇక్కడే మద్దతు", body: " కల్చర్ పులియబెట్టడానికి కావాల్సినవి పెట్టాము, ఎలా చేయాలో చెబుతాము. ట్యాంక్ లో పడే కల్చర్ తిరిగి వాడకుండా వేళకు సిద్ధం." },
      { title: "అడుగు చూడండి", body: " ఏ మందు కంటేను చెరువు అడుగు మట్టి చెప్పేది ఎక్కువ. శుభ్రమైన అడుగు ట్రేలో ఎలా కనిపిస్తుందో చూపుతాము." },
    ],
    brandsNote: "మేము పెట్టే ప్రతి బ్రాండ్ హోమ్ పేజీలోని బ్రాండ్ జాబితాలో ఉంది.",
  },
  aerators: {
    ...CATEGORIES_EN.aerators,
    name: "ఎయిరేటర్లు, స్పేర్లు",
    heading: "ఎయిరేటర్లు, స్పేర్ పార్ట్స్, ఫిటింగ్స్ అదే రోడ్ లో",
    intro:
      "రాత్రి 2 గంటలు ఎయిరేటర్ ఆపేస్తే పంట పోతుంది. ఎయిరేటర్లు, ఇంపెల్లర్లు, బేరింగ్లు, పైపులు, ఫిటింగ్స్ పెట్టాము. ఇంటి తడుసు పెరిగిపోకుండా ఉండే చెరువు కోసం.",
    points: [
      { title: "ఎయిరేటర్ కంటే స్పేర్లు ముఖ్యం", body: " పార్ట్ ఇక్కడే ఉంటే ఉదయానికి యంత్రం తిరిగి పనిలోకి వస్తుంది. ఈ బెల్ట్ చెరువులు తరచుగా కోరే పార్ట్స్ స్టాక్లో పెట్టాము." },
      { title: "ఒకసారే కొనండి", body: " మనం స్వయంగా పరుగెత్తించగలగిన మెషీన్లు పెట్టాము. సీజన్ నిలిచే తక్కువ ధరది అని కూడా చెబుతాము." },
      { title: "ఫిటింగ్స్ నింపుకొండి", body: " పైపు, క్లిప్పులు, హోస్, చక్రాలు: మొత్తం స్టాక్ ఇక్కడే. ఆర్డర్ ఆసరా కోసం ఆగాల్సి రాదు." },
    ],
    brandsNote: "మేము పెట్టే ప్రతి బ్రాండ్ హోమ్ పేజీలోని బ్రాండ్ జాబితాలో ఉంది.",
  },
};

export const PAGES_COPY: Record<Lang, PagesCopy> = {
  en: {
    nav: {
      home: "Back to the top",
      story: "Our story",
      brands: "Brands",
      products: "What we supply",
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
    productsIndex: {
      h1: "Five shelves at the counter.",
      lead: "Feed, medicines, minerals, probiotics and aerators. A working index, not a brochure: ask for today's price, because it moves with the market.",
      otherTitle: "And the small things you drive across town for",
      otherNote: "Nets, test kits, feed trays, buckets and fittings.",
      priceNote:
        "Prices change through the season, so we quote them fresh. Call or message and you will get today's number.",
      openCard: "Open the shelf",
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
    categories: CATEGORIES_EN,
  },

  te: {
    nav: {
      home: "పైకి వెళ్ళు",
      story: "మా కథ",
      brands: "బ్రాండ్లు",
      products: "మనం సరఫరా చేసేవి",
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
    productsIndex: {
      h1: "కౌంటర్‌లో ఐదు షెల్ఫ్‌లు.",
      lead: "దాణా, మందులు, ఖనిజాలు, ప్రొబయాటిక్స్, ఎయిరేటర్లు. బ్రోచర్ కాదు, పనిలో వాడే ఇండెక్స్: ధర మార్కెట్ ప్రకారం మారుతుంది, ఈ రోజు ధర అడగండి.",
      otherTitle: "పట్టణం దాటి కొనిపోవాల్సిన చిన్న వస్తువులు",
      otherNote: "దారులు, టెస్ట్ కిట్ లు, దాణా ట్రేలు, బకెట్లు, ఫిటింగ్స్.",
      priceNote: "ధరలు సీజన్ ప్రకారం మారతాయి, కనుక తయారు అంత త్వరగా ముద్రించము. కాల్ లేదా మెసేజ్ చేస్తే ఇప్పటి ధర చెబుతాము.",
      openCard: "షెల్ఫ్ ఓపెన్ చేయి",
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
    categories: CATEGORIES_TE,
  },
};

export function pagesCopyFor(lang: Lang): PagesCopy {
  return PAGES_COPY[lang];
}
