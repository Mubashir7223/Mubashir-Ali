export default function HeroLineField() {
  return (
    <svg
      className="hero-line-field pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 620"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-line-gradient" x1="0" y1="0" x2="1440" y2="620" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffa800" stopOpacity="0" />
          <stop offset=".48" stopColor="#ffa800" stopOpacity=".72" />
          <stop offset="1" stopColor="#fbbf24" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path pathLength="100" d="M-80 155C150 130 208 270 428 248s278-130 472-91 286 158 620 60" />
      <path pathLength="100" d="M-80 410c205-152 344-145 520-26s307 125 468 21 260-158 590-28" />
      <path pathLength="100" d="M120 690c123-191 240-307 418-302s233 152 404 116 294-178 578-132" />
      <path pathLength="100" d="M720-90c-8 157 93 237 246 276s257 126 222 282 91 157 336 203" />
      <path pathLength="100" d="M-40 42c188 63 318 17 419 102s147 211 335 192 329-95 518-3 171 182 273 208" />
    </svg>
  )
}
