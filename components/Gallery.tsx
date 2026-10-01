const galleryImages = [
  {
    src: "/images/damour-nail-salon-4.jpg",
    alt: "damour nail shop",
    label: "interior",
  },
  {
    src: "/images/damour-nail-salon-5.jpg",
    alt: "damour nail atelier",
    label: "02 — The atelier",
  },
  {
    src: "/images/damour-nail-salon-6.jpg",
    alt: "damour nail design",
    label: "03 — Soft sculpt",
  },
  {
    src: "/images/damour-nail-salon-11.jpg",
    alt: "damour manicure",
    label: "04 — Natural finish",
  },
  {
    src: "/images/damour-nail-salon-8.jpg",
    alt: "damour detail",
    label: "05 — Stone tones",
  },
  {
    src: "/images/damour-nail-salon-9.jpg",
    alt: "damour detail",
    label: "06 — Quiet details",
  },
  {
    src: "/images/damour-nail-salon-10.jpg",
    alt: "damour studio detail",
    label: "07 — Quiet details",
  },
  {
    src: "/images/damour-nail-salon-7.jpg",
    alt: "damour detail",
    label: "08 — Quiet details",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="reveal border-t border-black/10 px-6 py-28 md:px-12 lg:px-20 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-20 grid gap-8 md:grid-cols-[1fr_360px] md:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28b4a]">
              The gallery
            </p>

            <h2 className="font-serif text-5xl font-normal tracking-[-0.05em] text-[#24231f] md:text-6xl lg:text-7xl">
              Made to linger.
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-7 text-[#746f66]">
              A collection of quiet details, polished finishes and the
              atmosphere of D&apos;Amour Nail Salon.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/damournailsalon.pooler/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D'Amour Nail Salon on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b28b4a]/40 text-[#746f66] transition-all duration-300 hover:border-[#b28b4a] hover:bg-[#b28b4a] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61586151631577"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D'Amour Nail Salon on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b28b4a]/40 text-[#746f66] transition-all duration-300 hover:border-[#b28b4a] hover:bg-[#b28b4a] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
                </svg>
              </a>

              <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-[#9a9197]">
                Follow the studio
              </span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-[260px_260px_220px]">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-[1.5rem] ${
                index === 0
                  ? "col-span-2 row-span-2"
                  : index === 3
                    ? "col-span-2"
                    : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Image overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-6 pb-5 pt-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <figcaption className="text-xs uppercase tracking-[0.18em] text-white">
                  {image.label}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}