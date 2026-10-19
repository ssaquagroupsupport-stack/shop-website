import { YEARS_TRADING } from "@/lib/shop";

/**
 * All page copy, both languages, one place.
 *
 * The `Copy` interface is the contract. TypeScript refuses to build if a Telugu
 * string is missing for something the English version says, so the two
 * languages can never drift apart.
 *
 * Voice: a shop owner talking across the counter,  warm, direct, specific. No
 * "cutting-edge", no "seamless", no "one-stop solution". No claim we cannot
 * point at, no number we have not been given.
 */

export type Lang = "en" | "te";

export interface Copy {
  htmlLang: string;
  /** Label on the language toggle. */
  langShort: string;
  langSwitchLabel: string;
  skipToContent: string;
  nameConfirm: string;
  fillLabel: string;
  /** Small print under every photograph that is not the shop's own. */
  stockPhotoLabel: string;

  nav: {
    story: string;
    supply: string;
    trust: string;
    corner: string;
    shop: string;
    visit: string;
    call: string;
    menuOpen: string;
    menuClose: string;
    home: string;
    quickContact: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    /** The other language, a line beneath the headline. */
    postLine: string;
    since: string;
    callCta: string;
    whatsappCta: string;
    directionsCta: string;
    hours: string;
    scrollHint: string;
    /** Caption on the full-bleed photograph. */
    photoCaption: string;
  };

  /** The three numbers on the cream band. Two are facts, one is arithmetic. */
  stats: {
    yearsLabel: string;
    yearsNote: string;
    foundedLabel: string;
    foundedNote: string;
    openLabel: string;
    openNote: string;
  };

  story: {
    title: string;
    lead: string;
    timeline: { year: string; title: string; body: string }[];
    quote: string;
    quoteNote: string;
    photoCaptionPonds: string;
    photoCaptionPrawns: string;
  };

  products: {
    kicker: string;
    title: string;
    intro: string;
    priceCta: string;
    priceNote: string;
    brandLabel: string;
    linesLabel: string;
    cards: { id: string; name: string; use: string }[];
    otherTitle: string;
    otherNote: string;
  };

  trust: {
    title: string;
    intro: string;
    points: { title: string; body: string }[];
    note: string;
  };

  corner: {
    title: string;
    kicker: string;
    lead: string;
    items: { title: string; body: string }[];
    closing: string;
  };

  shop: {
    kicker: string;
    title: string;
    lead: string;
    addressLabel: string;
    hoursLabel: string;
    photoLabel: string;
    photoHint: string;
    photoNote: string;
    mapNote: string;
    directionsCta: string;
  };

  visit: {
    title: string;
    lead: string;
    phoneLabel: string;
    deliveryLabel: string;
    hoursNote: string;
    callCta: string;
    whatsappCta: string;
    directionsCta: string;
    whatsappMessage: string;
    mapAlt: string;
    mapNote: string;
  };

  feedback: {
    kicker: string;
    title: string;
    lead: string;
    nameLabel: string;
    phoneLabel: string;
    phoneHint: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    note: string;
  };

  footer: {
    contactHeading: string;
    hoursHeading: string;
    sealLabel: string;
    fillHeading: string;
    fillNote: string;
    rights: string;
    signOff: string;
  };
}

export const COPY: Record<Lang, Copy> = {
  /* ────────────────────────────────────────────────────────────── ENGLISH */
  en: {
    htmlLang: "en",
    langShort: "English",
    langSwitchLabel: "Language,  choose English or Telugu",
    skipToContent: "Skip to content",
    nameConfirm: "[CONFIRM EXACT NAME]",
    fillLabel: "[FILL IN]",
    stockPhotoLabel: "Stock photo",

    nav: {
      story: "Our story",
      supply: "What we supply",
      trust: "Why farmers trust us",
      corner: "Field notes",
      shop: "The shop",
      visit: "Visit us",
      call: "Call the shop",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      home: "Back to the top",
      quickContact: "Quick contact",
    },

    hero: {
      eyebrow: "JP Road, opposite Siva Ranjini Hospital · Bhimavaram",
      title: "Rooted in the water since 1997.",
      lead: "We provide quality aqua, poultry, and veterinary medicines and feeds to meet all your farming needs.",
      postLine: "1997 నుంచి భీమవరం రైతులతో కలిసి నడుస్తున్నాం.",
      since: "Since 1997",
      callCta: "Call the shop",
      whatsappCta: "WhatsApp",
      directionsCta: "Directions",
      hours: "Open 8 AM to 9 PM",
      scrollHint:
        "Feed, medicines, minerals, probiotics, aerators,  and the one counter they all come from.",
      photoCaption: "Aquaculture ponds from the air.",
    },

    stats: {
      yearsLabel: "years on JP Road",
      yearsNote: "and the address has never changed",
      foundedLabel: "the year the shutters opened",
      foundedNote: "opposite Siva Ranjini Hospital",
      openLabel: "we open",
      openNote: "every morning, all week",
    },

    story: {
      title: "Same road, same shutters, since 1997.",
      lead: "S.S Aqua Feeds & Needs has stood opposite Siva Ranjini Hospital on JP Road, selling feed and pond supplies to the farmers around it. Farmers who came in as young men now send their sons.",
      timeline: [
        {
          year: "1997",
          title: "The shutters open",
          body: "Opposite Siva Ranjini Hospital, JP Road, Bhimavaram.",
        },
        {
          year: "Since then",
          title: "The same counter",
          body: "Feed, medicine, minerals and pond equipment, season after season.",
        },
        {
          year: "Today",
          title: "Nearly three decades on",
          body: `Open from 8 in the morning to 9 at night. ${YEARS_TRADING} years in the same trade, on the same road.`,
        },
      ],
      quote: "Why the shop started, in the owner's own words.",
      quoteNote:
        "One or two sentences from the owner will do more here than anything a writer could add.",
      photoCaptionPonds: "Ponds from the air",
      photoCaptionPrawns: "The crop itself",
    },

    products: {
      kicker: "On the shelves",
      title: "Five things a pond asks for.",
      intro:
        "A working index, not a brochure. Ask for today's price,  it moves with the market, so we never print it.",
      priceCta: "Ask today's price",
      priceNote:
        "Prices change through the season, so we quote them fresh. Call or message and you will get today's number.",
      brandLabel: "Brands",
      linesLabel: "Lines on this shelf",
      cards: [
        {
          id: "feed",
          name: "Feed",
          use: "Starter, grow-out and finisher feed for shrimp and fish ponds.",
        },
        {
          id: "medicines",
          name: "Medicines",
          use: "For when a pond goes wrong. Bring us the problem, not just a product name.",
        },
        {
          id: "minerals",
          name: "Minerals & water conditioners",
          use: "For hardness, salinity and the minerals a crop pulls out of the water.",
        },
        {
          id: "probiotics",
          name: "Probiotics & pond culture",
          use: "Gut and water probiotics, molasses culture, the pond-floor routine.",
        },
        {
          id: "aerators",
          name: "Aerators & spares",
          use: "Aerators, spare parts and fittings, so a breakdown never costs you a night.",
        },
      ],
      otherTitle: "And the small things you drive across town for",
      otherNote: "Nets, test kits, feed trays, buckets and fittings.",
    },

    trust: {
      title: "Why farmers trust us",
      intro:
        "Three plain reasons. We would rather you check them at the counter than take our word for them.",
      points: [
        {
          title: `${YEARS_TRADING} years on the same road`,
          body: "Established 1997. The address has never changed, so you always know where to find us and who you are talking to.",
        },
        {
          title: "We know the water in this belt",
          body: "Feed price, water colour, sudden losses after a rain. We have heard the same problems for years, and we will tell you what usually helps and what does not.",
        },
        {
          title: "Advice before you spend",
          body: "Ask what suits this month's weather before you buy the drum. We would rather sell you the right thing once.",
        },
      ],
      note: "No awards, no certifications, nothing on this page we cannot show you at the counter.",
    },

    corner: {
      title: "Field notes",
      kicker: "What farmers are asking about this season",
      lead: "Three things that come up at the counter again and again, written the way we would say them across it.",
      items: [
        {
          title: "Feed is the biggest line in your budget",
          body: "Most of what goes into a crop goes in as feed. Watch the trays,  if feed is lying uneaten, the pond is telling you something before your bill does.",
        },
        {
          title: "Look at the water before you buy the medicine",
          body: "Colour, smell, the way the shrimp sit at the edges. Tell us what you are seeing and we will work out what to treat,  and whether it needs treating at all.",
        },
        {
          title: "Buy for the week you are in",
          body: "The weather here turns quickly. Buying feed a week at a time keeps it fresh and keeps you free to change course.",
        },
      ],
      closing:
        "Not sure? Call the shop and describe what you are seeing. That is usually faster than working it out alone.",
    },

    shop: {
      kicker: "The shop",
      title: "One counter on JP Road, opposite the hospital.",
      lead: "Established 1997. Farmers who came in as young men now send their sons.",
      addressLabel: "Address",
      hoursLabel: "Hours",
      photoLabel: "The shopfront on JP Road",
      photoHint: "A photograph of the shop, the counter and the shelves",
      photoNote:
        "No photograph of the shop has been supplied yet. This frame is left empty on purpose rather than filled with somebody else's shop.",
      mapNote: "Opposite Siva Ranjini Hospital,  look for the sign on JP Road.",
      directionsCta: "Open in Google Maps",
    },

    visit: {
      title: "Visit us",
      lead: "Walk in, or send a message first. We open at 8 in the morning and close at 9 at night.",
      phoneLabel: "Phone / WhatsApp",
      deliveryLabel: "Delivery / service area",
      hoursNote: "8 AM to 9 PM, open every day including Sunday.",
      callCta: "Tap to call",
      whatsappCta: "WhatsApp enquiry",
      directionsCta: "Open in Google Maps",
      whatsappMessage:
        "Namaste,  I would like to ask about feed and pond supplies.",
      mapAlt: "Map of JP Road, Bhimavaram, showing S.S Aqua Feeds & Needs",
      mapNote: "Opposite Siva Ranjini Hospital,  look for the sign on JP Road.",
    },

    feedback: {
      kicker: "Feedback",
      title: "Tell us how we did.",
      lead: "One line is enough. What was good, where we were slow, what you could not find on the shelf.",
      nameLabel: "Your name",
      phoneLabel: "Phone or WhatsApp",
      phoneHint: "Optional. Add it only if you want a call back.",
      messageLabel: "Your feedback",
      messagePlaceholder:
        "What happened at the counter, what we should improve, what you needed that we did not have.",
      submit: "Send feedback",
      sending: "Sending",
      success: "Thank you. We have your note.",
      error: "That did not send. Please call the shop instead.",
      note: "This comes to the shop only. No mailing list, no marketing calls.",
    },

    footer: {
      contactHeading: "Where to find us",
      hoursHeading: "When we are open",
      sealLabel: "Est. 1997",
      fillHeading: "Still to confirm before this goes live",
      fillNote:
        "Nothing on this page has been guessed. These are the details the shop still needs to supply,  the [FILL IN] markers close by themselves once they are filled in.",
      rights: "S.S Aqua Feeds & Needs, Bhimavaram.",
      signOff: "Rooted in the water since 1997.",
    },
  },

  /* ────────────────────────────────────────────────────────────── తెలుగు */
  te: {
    htmlLang: "te",
    langShort: "తెలుగు",
    langSwitchLabel: "భాష,  ఇంగ్లీష్ లేదా తెలుగు ఎంచుకోండి",
    skipToContent: "నేరుగా విషయానికి వెళ్లండి",
    nameConfirm: "[సరైన పేరు నిర్ధారించండి]",
    fillLabel: "[ఇది ఇవ్వాలి]",
    stockPhotoLabel: "స్టాక్ ఫోటో",

    nav: {
      story: "మా కథ",
      supply: "మేము అమ్మేవి",
      trust: "నమ్మకం ఎందుకు",
      corner: "పొలం నోట్స్",
      shop: "షాపు",
      visit: "మమ్మల్ని కలవండి",
      call: "షాపుకు కాల్",
      menuOpen: "మెనూ తెరవండి",
      menuClose: "మెనూ మూసేయండి",
      home: "పైకి వెళ్లండి",
      quickContact: "త్వరిత సంబంధం",
    },

    hero: {
      eyebrow: "జేపీ రోడ్డు, శివ రంజని హాస్పిటల్ ఎదురుగా · భీమవరం",
      title: "1997 నుంచి నీటితోనే మా బతుకు.",
      lead: "మీ వ్యవసాయ అవసరాలకు నాణ్యమైన ఆక్వా, పౌల్ట్రీ, పశువైద్య మందులు మరియు ఫీడ్‌లు అందిస్తాము.",
      postLine: "Since 1997, on the same road with the farmers of Bhimavaram.",
      since: "1997 నుంచి",
      callCta: "షాపుకు కాల్ చేయండి",
      whatsappCta: "వాట్సాప్",
      directionsCta: "దారి చూడండి",
      hours: "ఉదయం 8 - రాత్రి 9 వరకు",
      scrollHint:
        "ఫీడ్, మందులు, మినరల్స్, ప్రొబయోటిక్స్, ఏరేటర్లు,  అన్నీ ఒకే కౌంటర్‌లో.",
      photoCaption: "గాలి నుంచి చూసిన ఆక్వా చెరువులు.",
    },

    stats: {
      yearsLabel: "ఏళ్లు, జేపీ రోడ్డులో",
      yearsNote: "చిరునామా ఒక్కసారి కూడా మారలేదు",
      foundedLabel: "షట్టర్ తెరిచిన సంవత్సరం",
      foundedNote: "శివ రంజని హాస్పిటల్ ఎదురుగా",
      openLabel: "తెరుస్తాం",
      openNote: "ప్రతి ఉదయం, అన్ని రోజులూ",
    },

    story: {
      title: "అదే రోడ్డు, అదే షట్టర్,  1997 నుంచి.",
      lead: "1997లో శివ రంజని హాస్పిటల్ ఎదురుగా, జేపీ రోడ్డులో ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్ మొదలైంది. అప్పటి నుంచి చుట్టుపక్కల రైతులకు ఫీడ్, చెరువు సరుకు అమ్ముతోంది. చిన్నప్పుడు వచ్చిన రైతులే ఇప్పుడు తమ కొడుకులను పంపుతున్నారు.",
      timeline: [
        {
          year: "1997",
          title: "షట్టర్ తెరిచిన రోజు",
          body: "శివ రంజని హాస్పిటల్ ఎదురుగా, జేపీ రోడ్డు, భీమవరం.",
        },
        {
          year: "అప్పటి నుంచి",
          title: "అదే కౌంటర్",
          body: "ఫీడ్, మందులు, మినరల్స్, చెరువు పరికరాలు,  సీజన్ తర్వాత సీజన్.",
        },
        {
          year: "ఈ రోజు",
          title: "దాదాపు ముప్ఫై ఏళ్లు",
          body: `ఉదయం 8 నుంచి రాత్రి 9 వరకు తెరుస్తాం. అదే వ్యాపారం, అదే రోడ్డు,  ${YEARS_TRADING} ఏళ్లు.`,
        },
      ],
      quote: "షాప్ ఎందుకు మొదలుపెట్టారు,  యజమాని మాటల్లోనే.",
      quoteNote:
        "యజమాని చెప్పే ఒకటి రెండు మాటలు ఇక్కడ ఉంటే, ఎవరు రాసినా దాని కంటే బాగుంటుంది.",
      photoCaptionPonds: "గాలి నుంచి చెరువులు",
      photoCaptionPrawns: "పంట,  రొయ్యలు",
    },

    products: {
      kicker: "షెల్ఫ్‌లో",
      title: "చెరువు అడిగే ఐదు విషయాలు.",
      intro:
        "ఇది బ్రోషర్ కాదు,  పనికొచ్చే జాబితా. ఈరోజు ధర అడగండి. మార్కెట్‌తో మారుతుంది, అందుకే ధరలు రాసి పెట్టము.",
      priceCta: "ఈరోజు ధర అడగండి",
      priceNote:
        "సీజన్‌లో ధరలు మారుతుంటాయి, అందుకే అడిగినప్పుడే చెబుతాం. కాల్ చేయండి లేదా మెసేజ్ పెట్టండి,  ఈరోజు ధర చెబుతాం.",
      brandLabel: "బ్రాండ్లు",
      linesLabel: "ఈ షెల్ఫ్‌లో ఉండేవి",
      cards: [
        {
          id: "feed",
          name: "ఫీడ్",
          use: "రొయ్యలు, చేపల పెంపకానికి స్టార్టర్, గ్రో-అవుట్, ఫినిషర్ ఫీడ్.",
        },
        {
          id: "medicines",
          name: "మందులు",
          use: "చెరువులో ఏదైనా తప్పు జరిగినప్పుడు కావాల్సినవి. మందు పేరు కాదు,  మీ సమస్య చెప్పండి.",
        },
        {
          id: "minerals",
          name: "మినరల్స్ & వాటర్ కండిషనర్స్",
          use: "నీటి కాఠిన్యం, ఉప్పు శాతం, పంట నీటి నుంచి తీసుకునే మినరల్స్ కోసం.",
        },
        {
          id: "probiotics",
          name: "ప్రొబయోటిక్స్",
          use: "గట్, వాటర్ ప్రొబయోటిక్స్, మొలాసిస్ కల్చర్,  చెరువు అడుగు చూసుకోవడానికి.",
        },
        {
          id: "aerators",
          name: "ఏరేటర్లు & స్పేర్లు",
          use: "ఏరేటర్లు, స్పేర్ పార్ట్స్, ఫిట్టింగ్స్,  రాత్రి పూట బ్రేక్‌డౌన్ మిమ్మల్ని ఇబ్బంది పెట్టకూడదు.",
        },
      ],
      otherTitle: "ఊరంతా తిరిగి వెతకాల్సిన చిన్న సరుకు",
      otherNote: "వలలు, టెస్ట్ కిట్లు, ఫీడ్ ట్రేలు, బకెట్లు, ఫిట్టింగ్స్.",
    },

    trust: {
      title: "రైతులు మమ్మల్ని ఎందుకు నమ్ముతారు",
      intro:
        "మూడు సూటి కారణాలు. మా మాట నమ్మే కంటే కౌంటర్‌లో వచ్చి చూసుకోవడమే మంచిది.",
      points: [
        {
          title: `అదే రోడ్డులో ${YEARS_TRADING} ఏళ్లు`,
          body: "1997 నుంచి. చిరునామా ఎప్పుడూ మారలేదు,  మమ్మల్ని ఎక్కడ వెతకాలో, ఎవరితో మాట్లాడుతున్నారో మీకు తెలుసు.",
        },
        {
          title: "ఈ ప్రాంత నీళ్లు మాకు తెలుసు",
          body: "ఫీడ్ ధర, నీటి రంగు, వర్షం తర్వాత అకస్మాత్తు చావులు. ఇవి ఏళ్ల తరబడి వింటున్న సమస్యలు. సాధారణంగా ఏం పని చేస్తుందో, ఏం చేయదో నేరుగా చెబుతాం.",
        },
        {
          title: "ఖర్చు పెట్టే ముందు సలహా",
          body: "ఈ నెల వాతావరణానికి ఏది సరిపోతుందో ముందే అడగండి. ఒక్కసారి సరైనది అమ్మడమే మాకు ఇష్టం.",
        },
      ],
      note: "పురస్కారాలు లేవు, సర్టిఫికెట్లు లేవు,  ఈ పేజీలో రాసిన ప్రతిదీ కౌంటర్‌లో చూపించగలం.",
    },

    corner: {
      title: "పొలం నోట్స్",
      kicker: "ఈ సీజన్‌లో రైతులు అడుగుతున్నవి",
      lead: "కౌంటర్‌లో మళ్లీ మళ్లీ వచ్చే మూడు విషయాలు,  అక్కడ మేము చెప్పినట్టే ఇక్కడ రాసి ఉన్నాయి.",
      items: [
        {
          title: "ఫీడ్ మీ బడ్జెట్‌లో పెద్ద ముక్క",
          body: "పంటలో పెట్టే ఖర్చులో ఎక్కువ భాగం ఫీడ్‌కే పోతుంది. ట్రేలు గమనించండి,  మిగిలిపోతుంటే, బిల్లు కంటే ముందే చెరువు ఏదో చెబుతోంది.",
        },
        {
          title: "మందు కొనే ముందు నీళ్లు చూడండి",
          body: "రంగు, వాసన, అంచుల్లో రొయ్యలు ఎలా కూచుంటున్నాయో. మీరు చూస్తున్నది మాకు చెప్పండి,  ఏం చేయాలి, చేయాల్సిన అవసరం ఉందా లేదా అని కలిసి ఆలోచిద్దాం.",
        },
        {
          title: "వారానికి సరిపడా కొనండి",
          body: "ఇక్కడ వాతావరణం త్వరగా మారుతుంది. వారం వారం ఫీడ్ కొంటే తాజాగా ఉంటుంది, దారి మార్చుకోవడానికి స్వేచ్ఛ ఉంటుంది.",
        },
      ],
      closing:
        "అనుమానమా? షాప్‌కు కాల్ చేసి, మీరు చూస్తున్నది చెప్పండి. ఒంటరిగా ఆలోచించడం కంటే అది వేగంగా ఉంటుంది.",
    },

    shop: {
      kicker: "షాపు",
      title: "జేపీ రోడ్డులో ఒకే కౌంటర్, హాస్పిటల్ ఎదురుగా.",
      lead: "1997లో మొదలైంది. చిన్నప్పుడు వచ్చిన రైతులే ఇప్పుడు తమ కొడుకులను పంపుతున్నారు.",
      addressLabel: "చిరునామా",
      hoursLabel: "సమయం",
      photoLabel: "జేపీ రోడ్డులో షాపు ముఖం",
      photoHint: "షాపు, కౌంటర్, షెల్ఫ్‌ల ఫోటో",
      photoNote:
        "షాపు ఫోటో ఇంకా రాలేదు. వేరే షాపు ఫోటో పెట్టకుండా, ఈ ఫ్రేమ్‌ను ఉద్దేశపూర్వకంగా ఖాళీగా ఉంచాం.",
      mapNote: "శివ రంజని హాస్పిటల్ ఎదురుగా,  జేపీ రోడ్డులో బోర్డు చూడండి.",
      directionsCta: "గూగుల్ మ్యాప్స్‌లో తెరవండి",
    },

    visit: {
      title: "మమ్మల్ని కలవండి",
      lead: "నేరుగా రండి, లేదా ముందే మెసేజ్ పెట్టండి. ఉదయం 8 నుంచి రాత్రి 9 వరకు ఓపెన్.",
      phoneLabel: "ఫోన్ / వాట్సాప్",
      deliveryLabel: "డెలివరీ ప్రాంతం",
      hoursNote: "ఉదయం 8 నుంచి రాత్రి 9 వరకు, ఆదివారం సహా అన్ని రోజులూ.",
      callCta: "కాల్ చేయడానికి తన్నండి",
      whatsappCta: "వాట్సాప్‌లో అడగండి",
      directionsCta: "గూగుల్ మ్యాప్స్‌లో తెరవండి",
      whatsappMessage: "నమస్తే,  ఫీడ్, చెరువు సరుకు గురించి అడగాలి.",
      mapAlt: "జేపీ రోడ్డు, భీమవరం,  ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్ ఉన్న చోటు మ్యాప్",
      mapNote: "శివ రంజని హాస్పిటల్ ఎదురుగా,  జేపీ రోడ్డులో బోర్డు చూడండి.",
    },

    feedback: {
      kicker: "అభిప్రాయం",
      title: "మేము ఎలా ఉన్నామో చెప్పండి.",
      lead: "ఒక్క లైన్ చాలు. మంచి ఏమిటి, ఆలస్యం ఎక్కడ జరిగింది, షెల్ఫ్‌లో ఏది దొరకలేదు.",
      nameLabel: "మీ పేరు",
      phoneLabel: "ఫోన్ లేదా వాట్సాప్",
      phoneHint: "తప్పనిసరి కాదు. మళ్లీ కాల్ కావాలంటే మాత్రమే ఇవ్వండి.",
      messageLabel: "మీ అభిప్రాయం",
      messagePlaceholder:
        "కౌంటర్‌లో ఏం జరిగింది, ఏం మెరుగుపరచాలి, మాకు లేని ఏ సరుకు కావాలి.",
      submit: "అభిప్రాయం పంపండి",
      sending: "పంపుతున్నాం",
      success: "ధన్యవాదాలు. మీ మాట మాకు చేరింది.",
      error: "పంపడం కుదరలేదు. దయచేసి షాపుకు కాల్ చేయండి.",
      note: "ఇది షాప్‌కే చేరుతుంది. మెయిలింగ్ లిస్ట్ లేదు, మార్కెటింగ్ కాల్స్ లేవు.",
    },

    footer: {
      contactHeading: "మేము ఎక్కడ ఉన్నాం",
      hoursHeading: "మేము ఎప్పుడు తెరుస్తాం",
      sealLabel: "స్థాపన 1997",
      fillHeading: "లైవ్ చేసే ముందు ఇంకా నిర్ధారించాల్సినవి",
      fillNote:
        "ఈ పేజీలో ఏదీ ఊహించి రాయలేదు. షాప్ నుంచి ఇంకా రావాల్సిన వివరాలు ఇవి,  అవి చేరగానే [ఇది ఇవ్వాలి] గుర్తులు తామే మాయమవుతాయి.",
      rights: "ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్, భీమవరం.",
      signOff: "1997 నుంచి నీటితోనే మా బతుకు.",
    },
  },
};

export function copyFor(lang: Lang): Copy {
  return COPY[lang];
}

/**
 * The marquee band. Deliberately *not* inside `Copy`: it is the one place the
 * page shows both languages at once, side by side, so the pairs live here
 * together and are always in step.
 */
export const MARQUEE_PAIRS: { en: string; te: string }[] = [
  { en: "Shrimp feed", te: "రొయ్యల ఫీడ్" },
  { en: "Fish feed", te: "చేపల ఫీడ్" },
  { en: "Medicines", te: "మందులు" },
  { en: "Minerals", te: "మినరల్స్" },
  { en: "Probiotics", te: "ప్రొబయోటిక్స్" },
  { en: "Aerators", te: "ఏరేటర్లు" },
  { en: "Spares & fittings", te: "స్పేర్ పార్ట్స్" },
  { en: "Nets & test kits", te: "వలలు, టెస్ట్ కిట్లు" },
  { en: "Feed trays", te: "ఫీడ్ ట్రేలు" },
  { en: "Water conditioners", te: "వాటర్ కండిషనర్స్" },
];
