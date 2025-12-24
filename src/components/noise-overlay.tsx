export function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{ opacity: "var(--noise-opacity)" }}
      aria-hidden="true"
    >
      <svg className="h-full w-full opacity-100" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

