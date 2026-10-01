export default function Locations() {
  const location = {
    name: "D'Amour Nail Salon",
    address: (
      <>
        1541 Pooler Pkwy, Ste 300
        <br />
        Pooler, GA 31322
      </>
    ),
    mapUrl:
      "https://www.google.com/maps?q=1541+Pooler+Pkwy+Ste+300,+Pooler,+GA+31322&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=1541+Pooler+Pkwy+Ste+300,+Pooler,+GA+31322",
  };

  return (
    <section
      id="visit"
      className="reveal relative z-10 border-t border-black/10 px-6 py-28 md:px-12 lg:px-20 lg:py-36"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
        {/* Map */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-black/10">
          <iframe
            title={`${location.name} map`}
            src={location.mapUrl}
            className="absolute inset-0 h-full w-full border-0 grayscale-[0.7]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Location information */}
        <div className="max-w-xl lg:pl-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#b28b4a]">
            Visit Damour Nail Salon
          </p>

          <h2 className="mt-5 font-serif text-5xl font-normal leading-[1.05] tracking-[-0.05em] text-[#24231f] sm:text-6xl lg:text-7xl">
            Come a little
            <br />
            slower.
          </h2>

          <p className="mt-8 max-w-md text-sm leading-7 text-[#746f66]">
            A quiet nail atelier in Pooler, designed around thoughtful
            treatments, polished details and an intentionally unhurried
            experience.
          </p>

          {/* Address */}
          <div className="mt-12 border-t border-black/10 pt-7">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#746f66]">
              Our studio
            </p>

            <h3 className="mt-3 font-serif text-3xl font-normal tracking-[-0.03em] text-[#24231f]">
              {location.name}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#746f66]">
              {location.address}
            </p>

            <a
              href={location.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-[#24231f] px-6 py-3 text-xs uppercase tracking-[0.15em] text-white transition-transform hover:scale-[1.02]"
            >
              Get directions
            </a>
          </div>

          {/* Hours */}
          <div className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-4 border-t border-black/10 pt-6 text-xs text-[#746f66]">
            <div>
              <p className="uppercase tracking-[0.15em]">Monday — Saturday</p>
              <p className="mt-2">9:00 AM — 7:00 PM</p>
            </div>

            <div>
              <p className="uppercase tracking-[0.15em]">Sunday</p>
              <p className="mt-2">10:00 AM - 5:00 PM</p>
            </div>

            <div>
              <p className="uppercase tracking-[0.15em]">Appointments</p>
              <p className="mt-2">Recommended</p>
            </div>

            <div>
              <p className="uppercase tracking-[0.15em]">Walk-ins</p>
              <p className="mt-2">Welcome!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}