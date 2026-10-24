/**
 * Every fact this site is allowed to state lives in this one file.
 *
 * Nothing here is guessed. Where the shop has not confirmed a detail yet the
 * value is `null`, and the page renders a visible [FILL IN] marker in its place
 * instead of an invented one. Fill a value in here and the marker disappears
 * everywhere it appears, in both languages, at once.
 */

/** The literal marker the brief asks for. Rendered by <FillIn />. */
export const FILL = "[FILL IN]";

/* ── Identity ─────────────────────────────────────────────────────────────── */

export const NAME = {
  en: "S.S Aqua Feeds & Needs",
  te: "ఎస్.ఎస్ ఆక్వా ఫీడ్స్ & నీడ్స్",
};

/** The second name the shop trades under, as given. */
export const ALT_NAME = {
  en: "Siva Sai Aqua",
  te: "శివ సాయి ఆక్వా",
};

/**
 * Every name the shop is known by online, for structured data and copy that
 * has to survive a search for "ssaqua". The Google Maps listing reads
 * "Siva Sainath aqua feeds and needs (SS AQUA)"; that is the owner's own pin,
 * not a second shop.
 */
export const ALT_NAMES = [
  "Siva Sai Aqua",
  "SS Aqua",
  "SSAqua",
  "SS Aqua Group",
  "Siva Sainath Aqua Feeds and Needs (SS Aqua)",
];

/** The Maps listing name, shown once on the visit page so people who found
 * the pin can confirm they are in the right place. */
export const MAPS_LISTING_NAME = "Siva Sainath aqua feeds and needs (SS AQUA)";

/**
 * The brief asks which of the two names should lead. Until the owner says,
 * both are shown and this flag keeps a [CONFIRM EXACT NAME] marker visible.
 * Set to `false` once it is settled and the marker goes away.
 */
export const NAME_NEEDS_CONFIRMING = false;

export const FOUNDED = 1994;
/** Years in the trade, worked out rather than typed, so it never goes stale. */
export const YEARS_TRADING = new Date().getFullYear() - FOUNDED;

/* ── Place ────────────────────────────────────────────────────────────────── */

export const ADDRESS = {
  line1: "Beside Sri Venkateswara Swamy Temple, Opp Siva Ranjini Hospital",
  line2: "JP Road, Bazar",
  city: "Bhimavaram",
  district: "West Godavari",
  state: "Andhra Pradesh",
  pin: "534202",
};

export const ADDRESS_LINES = [
  ADDRESS.line1,
  ADDRESS.line2,
  `${ADDRESS.city}, ${ADDRESS.district}`,
  `${ADDRESS.state} ${ADDRESS.pin}`,
];

/* ── Hours ────────────────────────────────────────────────────────────────── */
/**
 * Owner-confirmed: open 8 AM to 9 PM, every day of the week including Sunday.
 * (The shop's Google listing still says Mon-Sat 8-8:30, Sun closed; the
 * owner's word wins.)
 */
export const HOURS = {
  opens: "08:00",
  closes: "21:00" as string | null,
  weeklyOff: null as string | null, // null: no weekly off, open every day
};

/* ── Reach us ─────────────────────────────────────────────────────────────── */
/**
 * The shop's own numbers, given by the owner on 19 Oct 2026: the counter phone
 * and the WhatsApp line are separate. Formats:
 *   display : how it should read on screen, e.g. "+91 98765 43210"
 *   tel     : what a phone dials, e.g. "+919876543210"  (no spaces)
 *   whatsapp: country code + number, digits only, e.g. "919876543210"
 */
export const PHONE = {
  display: "+91 98484 99051",
  tel: "+919848499051",
};

export const WHATSAPP = {
  number: "919381204865",
};

/**
 * Photographs live in `src/lib/images.ts`, not here: that file holds the alt
 * text, the credit and the dominant colour for each one. These are still stock
 * images standing in for the shop's own,  see the header of that file for the
 * provenance and the two honest limitations.
 */

/** Delivery / service area,  [FILL IN] in the copy file. */

export function telHref(): string | null {
  return PHONE.tel ? `tel:${PHONE.tel}` : null;
}

export function whatsappHref(message: string): string | null {
  return WHATSAPP.number
    ? `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`
    : null;
}

/** "8 AM - 9 PM", or null while the closing time is unconfirmed. */
export function hoursLine(): string | null {
  if (HOURS.closes === null) return null;
  const hourOf = (h: string) => {
    const [H, M] = h.split(":").map(Number);
    const am = H < 12;
    const h12 = ((H + 11) % 12) + 1;
    return M === 0
      ? `${h12}${am ? " AM" : " PM"}`
      : `${h12}:${String(M).padStart(2, "0")}${am ? " AM" : " PM"}`;
  };
  return `${hourOf(HOURS.opens)} - ${hourOf(HOURS.closes)}`;
}

/* ── Maps ─────────────────────────────────────────────────────────────────── */

const MAP_QUERY = `${NAME.en}, Beside Sri Venkateswara Swamy Temple, JP Road, Bhimavaram, Andhra Pradesh 534202`;

/** Google Maps embed of the shop's own listing (place id 0x3a362d00ddd4cfb1).
 * Given by the owner; points at the pin rather than a text query. */
export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7649.357710770767!2d81.50580624398954!3d16.542302836831336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a362d00ddd4cfb1%3A0xb72491e4377bf296!2sSiva%20Sainath%20aqua%20feeds%20and%20needs%20(%20SS%20AQUA%20)!5e0!3m2!1sen!2sin!4v1792426462785!5m2!1sen!2sin";

export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAP_QUERY,
)}`;

/* ── Structured data extras ───────────────────────────────────────────────── */

/**
 * FILL IN: the shop's GPS coordinates for LocalBusiness structured data.
 * Until they land, schema.org renders without the geo field rather than
 * printing wrong numbers.
 */
/**
 * Confirmed from the shop's Google Maps listing (place "Siva Sainath aqua
 * feeds and needs ( SS AQUA )", plus code GGW9+2C5), not from the owner.
 */
export const GEO = {
  lat: 16.544934 as number | null,
  lng: 81.518519 as number | null,
};

/**
 * FILL IN: the shop's Google Maps place ID, Facebook and Justdial pages.
 * These become `sameAs` links in LocalBusiness schema and the hasMap field.
 */
/** Permanent Google Maps link for the shop's pin (cid form survives renames).
 *  The listing reads "Siva Sainath aqua feeds and needs (SS AQUA)". */
export const MAPS_PLACE_URL = "https://www.google.com/maps/place/?cid=13196833217471836822";

export const SAME_AS: string[] = [
  MAPS_PLACE_URL,
  "https://www.justdial.com/Bhimavaram/S-S-Aqua-feeds--Needs-Bhimavaram-Bazar/9999P8816-8816-230117134911-S1S3_BZDET",
];

/** FILL IN: the place ID used by the "directions" links, when available. */
export const PLACE_ID: string | null = null;

/* ── What still needs the owner's input ───────────────────────────────────── */

export interface MissingFact {
  id: string;
  en: string;
  te: string;
}

/**
 * Listed in the footer as a plain, honest note, and repeated back to whoever is
 * building the site. Keep this in step with the markers rendered on the page.
 */
export const MISSING_FACTS: MissingFact[] = [
  // The feedback form needs its Google Sheet endpoint (docs/feedback-sheet.md).
  // This entry removes itself once PUBLIC_FEEDBACK_URL is set.
  ...(import.meta.env.PUBLIC_FEEDBACK_URL
    ? []
    : [
        {
          id: "feedback",
          en: "The feedback form needs its Google Sheet endpoint (PUBLIC_FEEDBACK_URL).",
          te: "ఫీడ్బ్యాక్ ఫారమ్కు గూగుల్ షీట్ లింక్ (PUBLIC_FEEDBACK_URL) ఇంకా పెట్టలేదు.",
        },
      ]),
  {
    id: "phone",
    en: "Phone and WhatsApp numbers",
    te: "ఫోన్, వాట్సాప్ నంబర్లు",
  },
  {
    id: "owner",
    en: "The owner's name and how the shop actually began",
    te: "యజమాని పేరు, షాప్ ఎలా మొదలైందో",
  },
  {
    id: "products",
    en: "The exact product lines on the shelves",
    te: "షెల్ఫ్లో ఉన్న సరుకుల పూర్తి జాబితా",
  },
  {
    id: "delivery",
    en: "Delivery and service area",
    te: "డెలివరీ, సేవా ప్రాంతం",
  },
  {
    id: "photos",
    en: "Real photographs of the shop, the counter and the shelves",
    te: "షాప్, కౌంటర్, షెల్ఫ్ల నిజమైన ఫోటోలు",
  },
  {
    id: "brandRequest",
    en: "The empty-search note promises we can usually get a brand that is missing. Confirm it is true.",
    te: "బ్రాండ్ లేకపోతే సాధారణంగా తెచ్చి ఇస్తామని నోట్ ఉంది. ఇది నిజమేనో కన్ఫర్మ్ చేయండి.",
  },
];
