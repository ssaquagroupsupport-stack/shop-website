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
 * The brief asks which of the two names should lead. Until the owner says,
 * both are shown and this flag keeps a [CONFIRM EXACT NAME] marker visible.
 * Set to `false` once it is settled and the marker goes away.
 */
export const NAME_NEEDS_CONFIRMING = false;

export const FOUNDED = 1997;
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
 * [FILL IN],  paste the shop's numbers here and every call, WhatsApp and price
 * button on the page starts working. Formats:
 *   display : how it should read on screen, e.g. "+91 98765 43210"
 *   tel     : what a phone dials, e.g. "+919876543210"  (no spaces)
 *   whatsapp: country code + number, digits only, e.g. "919876543210"
 * Until then the buttons fall back to scrolling to the "Visit us" block, where
 * the marker sits, instead of dialling a number nobody has given us.
 */
export const PHONE = {
  display: null as string | null,
  tel: null as string | null,
};

export const WHATSAPP = {
  number: null as string | null,
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

/** Key-free Google Maps embed, pinned to the shop's address. */
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  MAP_QUERY,
)}&z=16&output=embed`;

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
export const SAME_AS: string[] = [];

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
    te: "షెల్ఫ్‌లో ఉన్న సరుకుల పూర్తి జాబితా",
  },
  {
    id: "delivery",
    en: "Delivery and service area",
    te: "డెలివరీ, సర్వీస్ ప్రాంతం",
  },
  {
    id: "photos",
    en: "Real photographs of the shop, the counter and the shelves",
    te: "షాప్, కౌంటర్, షెల్ఫ్‌ల నిజమైన ఫోటోలు",
  },
  {
    id: "brandRequest",
    en: "The empty-search note promises we can usually get a brand that is missing. Confirm it is true.",
    te: "బ్రాండ్ లేకపోతే సాధారణంగా తెచ్చి ఇస్తామని నోట్ ఉంది. ఇది నిజమేనో కన్ఫర్మ్ చేయండి.",
  },
];
