export interface NavLink {
  label: string;
  href: `#${string}`;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Updates", href: "#updates" },
  { label: "Apply", href: "#apply" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
