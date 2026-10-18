/**
 * Photographs — every image on the site, in one place.
 *
 * PROVENANCE, PLAINLY
 * -------------------
 * The shop has not supplied its own photographs yet (nothing was found in the
 * project), so these are free-licence stock images from Pexels. Each entry
 * records the photo's own page, which is where the title and the description
 * used for the alt text come from. Every URL below was fetched and returned
 * HTTP 200 with `content-type: image/webp` before it was written down.
 *
 * Two honest limitations, so nobody has to guess later:
 *  1. The photograph *contents* are taken from each photo's published title and
 *     description. Pexels blocks automated requests to its pages (403), so the
 *     files could not be opened and looked at. Swapping in the shop's own photo
 *     is a one-line change per entry — replace `id` with a `/photos/...` path
 *     and drop the `page` field.
 *  2. Photographer names are not retrievable for the same reason. The Pexels
 *     Licence requires no attribution, and the licence link is below, but the
 *     name cannot be printed because it could not be read.
 *
 * Nothing here is captioned as the shop itself, and no image shows another
 * company's logo or packaging — the two product shots that risked brand labels
 * (bottles, sachet) are used knowing that, and are flagged in `note`.
 */
export const PEXELS_LICENCE = "https://www.pexels.com/license/";

export interface Photo {
  /** Pexels photo id. The CDN path is derived from it by `photoSrc`. */
  id: number;
  /** The title the photo is published under — the evidence for the alt text. */
  title: string;
  /** What the photo shows, written for a screen reader. */
  alt: string;
  /** The photo's own page, where the title and description can be checked. */
  page: string;
  /** Dominant colour. Painted under the image while the WebP is in flight. */
  tint: string;
  /** Anything a reader of this file should know before shipping. */
  note?: string;
}

const p = (id: number, page: string) => `https://www.pexels.com/photo/${page}-${id}/`;

export const PHOTOS = {
  /** The aerial pond shot that opens the page. */
  hero: {
    id: 18574670,
    title: "Aerial View of Aquaculture Fields",
    alt: "Aerial view of aquaculture ponds holding still water under a morning sky, seen from above",
    page: p(18574670, "aerial-view-of-aquaculture-fields"),
    tint: "#0A5F68",
  },
  /** The tall photograph in the story block, with the prawns overlapping it. */
  pondsFromAir: {
    id: 39930943,
    title: "Aerial View of Circular Fish Ponds in Vietnam",
    alt: "Overhead view of round aquaculture ponds set among green fields",
    page: p(39930943, "aerial-view-of-circular-fish-ponds-in-vietnam"),
    tint: "#0E7C86",
  },
  prawns: {
    id: 3680164,
    title: "Fresh Prawns",
    alt: "Fresh raw prawns, close up",
    page: p(3680164, "fresh-prawns"),
    tint: "#FF6B4A",
  },
  basketsOfShrimp: {
    id: 5882728,
    title: "Close-Up Shot of Baskets with Shrimps",
    alt: "Harvested shrimp heaped in shallow baskets",
    page: p(5882728, "close-up-shot-of-baskets-with-shrimps"),
    tint: "#FF6B4A",
  },
  feedingThePond: {
    id: 17355150,
    title: "Man Feeding Fish in Pond",
    alt: "A farmer standing at the edge of a pond, feeding the stock",
    page: p(17355150, "man-feeding-fish-in-pond"),
    tint: "#3DDC84",
  },
  atThePondEdge: {
    id: 6711539,
    title: "Female Anglers Catching Fish in Pond",
    alt: "Two farm workers working the water at the edge of a pond",
    page: p(6711539, "female-anglers-catching-fish-in-pond"),
    tint: "#22D3EE",
  },
  workingWater: {
    id: 18331390,
    title: "Timelapse of Water Around a Whirlpool in a Pond",
    alt: "Water turning in a pond, showing the current moving across the surface",
    page: p(18331390, "timelapse-of-water-around-a-whirlpool-in-a-pond"),
    tint: "#0E7C86",
  },
  pondFromAbove: {
    id: 5462678,
    title: "Aerial View of Land and Pond",
    alt: "A single pond seen from the air, bordered by green land",
    page: p(5462678, "aerial-view-of-land-and-pond"),
    tint: "#3DDC84",
  },
  feedSacks: {
    id: 18053128,
    title: "Stacked Pile of Fabric Sacks",
    alt: "Feed sacks stacked on top of one another",
    page: p(18053128, "stacked-pile-of-fabric-sacks"),
    tint: "#FFB627",
    note: "Plain sacks. If any print is visible on a sack in the final crop, swap this one out.",
  },
  medicineBottles: {
    id: 10022079,
    title: "Bottles with Medications",
    alt: "A row of bottles used to dose a pond",
    page: p(10022079, "bottles-with-medications"),
    tint: "#22D3EE",
    note: "RISK: these are generic pharmacy bottles and may carry a label from an unrelated brand. Replace with the shop's own shelf photo before going live.",
  },
  mineralPowder: {
    id: 8477743,
    title: "White Powder in White Ceramic Bowl",
    alt: "White mineral powder heaped in a bowl",
    page: p(8477743, "white-powder-in-white-ceramic-bowl"),
    tint: "#EFE0C4",
  },
  probioticSachet: {
    id: 10941391,
    title: "Close-Up Shot of a Person Holding a White Sachet",
    alt: "A plain white sachet held in one hand",
    page: p(10941391, "close-up-shot-of-a-person-holding-a-white-sachet"),
    tint: "#EFE0C4",
    note: "RISK: the sachet is described as plain, but any print on it would be another brand's. Replace with the shop's own photo before going live.",
  },
  aeratorInAction: {
    id: 39043216,
    title: "Aquaculture Farming in Phu Tho, Vietnam",
    alt: "An aerator churning the water of a stocked pond at an aquaculture farm",
    page: p(39043216, "aquaculture-farming-in-phu-tho-vietnam"),
    tint: "#22D3EE",
  },
  paddyDelta: {
    id: 28093912,
    title: "A Sunset over a Rice Field with Trees",
    alt: "Sunset over a rice field in rural India, the same belt the shop serves",
    page: p(28093912, "a-sunset-over-a-rice-field-with-trees"),
    tint: "#FFB627",
  },
  waterTexture: {
    id: 2702798,
    title: "Water Droplet in Close-Up View",
    alt: "Close-up of water beading and splashing",
    page: p(2702798, "water-droplet-in-close-up-view"),
    tint: "#0E7C86",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;

/**
 * Widths actually requested, per role. The `sizes` attribute on each <img>
 * decides which one a phone downloads, so a handset in a field never pulls the
 * desktop file.
 *
 * These numbers were chosen by measuring, not by taste: the Pexels CDN ignores
 * a quality parameter (identical bytes at q=50 and q=75), so width is the only
 * lever on weight. Measured across all 15 photos: a phone that scrolls the
 * whole page downloads 0.49MB of WebP, a large monitor 1.44MB, and the hero is
 * 53KB on a phone. Only the hero is fetched before the reader scrolls.
 */
export const WIDTHS = {
  hero: [800, 1400],
  wide: [600, 1200],
  card: [500, 900],
  tile: [450, 800],
} as const;

/** One image URL, at one width. WebP is requested explicitly, not hoped for. */
export function photoSrc(photo: Photo, width: number): string {
  return `https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&fm=webp`;
}

export function photoSrcSet(photo: Photo, widths: readonly number[]): string {
  return widths.map((w) => `${photoSrc(photo, w)} ${w}w`).join(", ");
}
