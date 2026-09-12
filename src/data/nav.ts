export interface NavLink {
  label: string;
  href: `/#${string}`;
}

/**
 * Root-relative ("/#id") rather than bare ("#id") so these still work when
 * rendered on a different route (e.g. a policy page) — a plain anchor with
 * a root-relative href navigates back to the homepage and jumps to the
 * section, while still behaving as an in-page fragment scroll when already
 * on "/".
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Apply", href: "/#apply" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];
