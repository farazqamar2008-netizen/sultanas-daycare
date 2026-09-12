/**
 * Global <clipPath> definitions used by PhotoCutout's `shape` variants.
 * Rendered once in the root layout; components reference shapes via
 * `clip-path: url(#cutout-<shape>)`.
 */
export function ShapeDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="absolute h-0 w-0 overflow-hidden"
    >
      <defs>
        <clipPath id="cutout-circle" clipPathUnits="objectBoundingBox">
          <circle cx="0.5" cy="0.5" r="0.5" />
        </clipPath>

        <clipPath id="cutout-blob" clipPathUnits="objectBoundingBox">
          <path
            d="M0.79,0.87 C0.68,0.98,0.5,1,0.35,0.96
               C0.19,0.91,0.04,0.8,0.02,0.63
               C-0.01,0.46,0.09,0.31,0.21,0.19
               C0.34,0.06,0.51,-0.02,0.67,0.02
               C0.83,0.06,0.97,0.22,0.99,0.4
               C1.01,0.57,0.91,0.75,0.79,0.87 Z"
          />
        </clipPath>

        <clipPath id="cutout-star" clipPathUnits="objectBoundingBox">
          <path
            d="M0.5,0 L0.6123,0.3455 L0.9755,0.3455 L0.6817,0.559
               L0.7939,0.9045 L0.5,0.691 L0.2061,0.9045 L0.3183,0.559
               L0.0245,0.3455 L0.3877,0.3455 Z"
          />
        </clipPath>

        <clipPath id="cutout-heart" clipPathUnits="objectBoundingBox">
          <path
            d="M0.5,0.93 C0.5,0.93,0.06,0.63,0.06,0.34
               C0.06,0.14,0.23,0.02,0.41,0.02
               C0.48,0.02,0.5,0.11,0.5,0.14
               C0.5,0.11,0.52,0.02,0.59,0.02
               C0.77,0.02,0.94,0.14,0.94,0.34
               C0.94,0.63,0.5,0.93,0.5,0.93 Z"
          />
        </clipPath>

        <clipPath id="cutout-arch" clipPathUnits="objectBoundingBox">
          <path d="M0,0.35 A0.5,0.35 0 0 1 1,0.35 L1,1 L0,1 Z" />
        </clipPath>

        <clipPath id="cutout-scallop" clipPathUnits="objectBoundingBox">
          <path
            d="M0,0 L1,0 L1,0.88
               Q0.9,0.98 0.8,0.88
               Q0.7,0.98 0.6,0.88
               Q0.5,0.98 0.4,0.88
               Q0.3,0.98 0.2,0.88
               Q0.1,0.98 0,0.88 Z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
