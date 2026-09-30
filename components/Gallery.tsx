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
      className="border-t border-black/10 px-6 py-28 md:px-12 lg:px-20 lg:py-36"
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

          <p className="max-w-sm text-sm leading-7 text-[#746f66]">
            A collection of quiet details, polished finishes and the
            atmosphere of D'Amour Nail Salon.
          </p>
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