/**
 * Seeded from the 5 named Google reviews in the Shapo floating badge config
 * (see the script tag in src/app/layout.tsx) — no review text was provided
 * for these, only names + a 5-star rating, so none is fabricated here.
 */
export interface SeedReview {
  name: string;
  rating: number;
}

export const seedReviews: SeedReview[] = [
  { name: "Bibi Zainab", rating: 5 },
  { name: "a_q.t1p", rating: 5 },
  { name: "Vidya", rating: 5 },
  { name: "Heather Massey", rating: 5 },
  { name: "Latoya Cohen", rating: 5 },
];

export const REVIEW_SUMMARY = {
  rating: 4.7,
  count: 14,
};

/**
 * data-settings for the Shapo floating Google-reviews badge (site-wide).
 *
 * This is the brief's snippet with one change: `position` was moved from
 * "bottom-right" to "bottom-left". Bottom-right is also where the Contact
 * form's submit button and any bottom-right-anchored UI naturally lands,
 * and the badge (a real, sizeable panel, not a small icon) intercepts
 * clicks on whatever sits underneath its fixed position — confirmed via a
 * Playwright test where it blocked the "Send Message" button. Everything
 * else (reviews, rating, styling) is unchanged.
 */
export const SHAPO_BADGE_DATA_SETTINGS =
  "eyJwbGFjZUlkIjoiQ2hJSlJiZDB2LWJGS29nUmNjajhodUdYTlBzIiwicGxhY2VOYW1lIjoiU3VsdGFuYSdzIERheWNhcmUgJiBCYWJ5c2l0dGluZyIsInBsYWNlQWRkcmVzcyI6IlN1dGhlcmxhbmQgQXZlLCBCcmFkZm9yZCBXZXN0IEd3aWxsaW1idXJ5LCBPTiBMM1ogNEg2LCBDYW5hZGEiLCJyYXRpbmciOjQuNywicmV2aWV3Q291bnQiOjE0LCJwbGFjZW1lbnQiOiJmbG9hdGluZyIsImNvbnRhaW5lcklkIjpudWxsLCJwb3NpdGlvbiI6ImJvdHRvbS1sZWZ0IiwidGVtcGxhdGUiOiJjbGFzc2ljIiwiYnV0dG9uVGV4dCI6IkxlYXZlIGEgUmV2aWV3IiwiYnV0dG9uQ29sb3IiOiIjNDI4NUY0IiwicmV2aWV3cyI6W3siYXV0aG9yTmFtZSI6IkJpYmkgWmFpbmFiIiwiYXV0aG9yUGhvdG9VcmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKVmoxb2lPbVFNM1VFQ0VSeGM2OXJRZEZlRFU5VXNKUEZnTFllNFlZNW5NeDQ2ZmlSMT1zMTI4LWMweDAwMDAwMDAwLWNjLXJwLW1vIiwicmF0aW5nIjo1LCJ0ZXh0IjoiIn0seyJhdXRob3JOYW1lIjoiYV9xLnQxcCIsImF1dGhvclBob3RvVXJsIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FMVi1ValdsXzA5dEtIZWNtWWVMRjZLclVwenVJYUlUcGk4VE9oNFlaZFNLZDJsUTNLU184X0tFPXMxMjgtYzB4MDAwMDAwMDAtY2MtcnAtbW8iLCJyYXRpbmciOjUsInRleHQiOiIifSx7ImF1dGhvck5hbWUiOiJWaWR5YSIsImF1dGhvclBob3RvVXJsIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FMVi1ValU0ZFA0N3o3YzgwNHBJaFE1dUlyVzE4WWVRSGpiRmxBOXRzc0xmYTZGVzE2THVFOEZZPXMxMjgtYzB4MDAwMDAwMDAtY2MtcnAtbW8tYmE1IiwicmF0aW5nIjo1LCJ0ZXh0IjoiIn0seyJhdXRob3JOYW1lIjoiSGVhdGhlciBNYXNzZXkiLCJhdXRob3JQaG90b1VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0xjMXN4clV1WDF6N1hkN20yUWdOQ0Jvc01XYmlJMHc2d0lINnROM01YZXozVV9IUT1zMTI4LWMweDAwMDAwMDAwLWNjLXJwLW1vIiwicmF0aW5nIjo1LCJ0ZXh0IjoiIn0seyJhdXRob3JOYW1lIjoiTGF0b3lhIENvaGVuIiwiYXV0aG9yUGhvdG9VcmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUxWLVVqV2RMTXhESkg0WEstTEtKWVppdXY4cUtRMXdZOVUzVlNZeU93dk5NS2x3aGtMU1BRST1zMTI4LWMweDAwMDAwMDAwLWNjLXJwLW1vIiwicmF0aW5nIjo1LCJ0ZXh0IjoiIn1dfQ==";
