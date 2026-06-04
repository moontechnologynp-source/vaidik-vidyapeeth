export default function BrandMark({ compact = false }) {
  return (
    <div
      className={`flex ${compact ? "items-center gap-2.5 sm:gap-3" : "flex-col items-center gap-5"}`}
    >
      <svg
        viewBox="0 0 320 250"
        className={
          compact
            ? "h-11 w-16 shrink-0 sm:h-12 sm:w-[4.25rem]"
            : "h-40 w-auto sm:h-48"
        }
        aria-label="Vaidik Vidyapeeth logo"
        role="img"
        style={{
          filter: compact
            ? "none"
            : "drop-shadow(0 4px 16px rgba(30,88,173,.2))",
        }}
      >
        <defs>
          <linearGradient id="redFlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff3341" />
            <stop offset="100%" stopColor="#d81d30" />
          </linearGradient>
          <linearGradient id="blueFlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563c3" />
            <stop offset="100%" stopColor="#134a98" />
          </linearGradient>
          <linearGradient id="purpleFlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9d4edd" />
            <stop offset="100%" stopColor="#7c3aa2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Star / crown */}
        <polygon
          points="160,12 168,35 192,35 173,49 181,72 160,57 139,72 147,49 128,35 152,35"
          fill="url(#purpleFlow)"
          filter="url(#glow)"
        />

        {/* Left orb */}
        <circle cx="111" cy="80" r="18" fill="#1e58ad" />
        <path
          d="M121 66c3 12-4 25-16 28 11 4 25-1 31-12 5-10 2-23-7-29-1 4-4 8-8 13Z"
          fill="#ffffff"
          opacity=".9"
        />

        {/* Right orb */}
        <circle cx="209" cy="80" r="18" fill="#f32131" />
        <path
          d="M201 67c10 5 14 17 11 27 10-7 14-20 8-31-6-10-18-15-29-11 4 2 7 8 10 15Z"
          fill="#ffffff"
          opacity=".9"
        />

        {/* Wings */}
        <path
          d="M156 54c-7 34-29 57-69 72-22 8-35 20-40 39 22-8 44-8 66 1l41-43c-17-24-16-47 2-69Z"
          fill="url(#redFlow)"
        />
        <path
          d="M164 54c7 34 29 57 69 72 22 8 35 20 40 39-22-8-44-8-66 1l-41-43c17-24 16-47-2-69Z"
          fill="url(#blueFlow)"
        />

        {/* Lower sweeps */}
        <path
          d="M31 178c43 3 82 18 117 44-24-37-61-61-113-72l-4 28Z"
          fill="#1e58ad"
          opacity=".85"
        />
        <path
          d="M287 178c-43 3-82 18-117 44 24-37 61-61 113-72l4 28Z"
          fill="#f32131"
          opacity=".85"
        />
        <path
          d="M20 197c52 2 95 18 140 51-31-41-77-70-138-79l-2 28Z"
          fill="#f32131"
          opacity=".7"
        />
        <path
          d="M300 197c-52 2-95 18-140 51 31-41 77-70 138-79l2 28Z"
          fill="#1e58ad"
          opacity=".7"
        />

        {/* Central stem */}
        <path
          d="M160 132c-4 27-4 56 0 86 4-30 4-59 0-86Z"
          fill="url(#purpleFlow)"
        />
        <circle
          cx="160"
          cy="214"
          r="8"
          fill="url(#purpleFlow)"
          filter="url(#glow)"
        />
      </svg>

      <div className={compact ? "min-w-0 leading-none" : "text-center"}>
        <div
          className={`${compact ? "truncate text-[0.82rem] sm:text-base" : "text-3xl sm:text-4xl"} font-serif uppercase tracking-normal`}
          style={{ color: "var(--brand-blue)" }}
        >
          Vaidik Vidyapeeth
        </div>
        <div
          className={`${compact ? "truncate text-[8px] sm:text-[10px]" : "mt-2 text-xs sm:text-sm"} uppercase tracking-widest`}
          style={{ color: "var(--brand-red)", letterSpacing: ".1em" }}
        >
          Kathmandu-32, Koteshwor
        </div>
      </div>
    </div>
  );
}
