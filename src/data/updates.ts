export interface Update {
  /** ISO date, e.g. "2026-09-05". Array order doesn't matter — the feed
   * and gallery both sort newest-first automatically. */
  date: string;
  title: string;
  blurb: string;
  /** Path under /public/updates/, e.g. "/updates/fall-craft.jpg". Leave
   * unset to show a "Photo coming soon" placeholder. */
  image?: string;
}

/**
 * HOW TO POST AN UPDATE
 * 1. (Optional) Drop a photo into /public/updates/, e.g. public/updates/snow-day.jpg
 * 2. Add an object to this array below — anywhere, order doesn't matter.
 * That's it: it shows up in both the news feed and the photo gallery.
 *
 * Optional upgrade (not built): these could instead be read from a Google
 * Sheet tab via an Apps Script `doGet` endpoint, if the owner would rather
 * edit a spreadsheet than this file.
 */
export const updates: Update[] = [
  {
    date: "2026-02-10",
    title: "Snow day fun ❄️",
    blurb: "A fresh snowfall meant snow forts, snow angels, and a lot of hot cocoa after.",
  },
  {
    date: "2026-09-05",
    title: "Now enrolling for Fall!",
    blurb: "We have a few spots opening up this fall — reach out if you'd like to come for a visit.",
  },
  {
    date: "2026-07-15",
    title: "Story time favourites 📚",
    blurb: "New picture books arrived and circle time has never been more popular.",
  },
  {
    date: "2026-08-20",
    title: "Little gardeners 🌱",
    blurb: "We planted sunflowers together and everyone checks on them every single day.",
  },
];

export function sortedUpdates(): Update[] {
  return [...updates].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
