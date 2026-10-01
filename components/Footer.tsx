export function Footer() {
  return (
    <footer className="border-t border-[#ddd5d8] px-6 py-10 lg:px-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* Brand */}
        <div>
          <a
            href="/"
            className="font-serif text-3xl tracking-[0.25em] text-[#292329]"
          >
            D'AMOUR NAIL SALON
          </a>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[#756d73]">
            Beautiful nails & thoughtful service.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6f666d]">
          <a
            href="#services"
            className="transition hover:text-[#292329]"
          >
            Services
          </a>

          <a
            href="#gallery"
            className="transition hover:text-[#292329]"
          >
            Gallery
          </a>

          <a
            href="#visit"
            className="transition hover:text-[#292329]"
          >
            Visit
          </a>

          <a
            href="tel:+19129883690"
            className="transition hover:text-[#292329]"
          >
            Book now
          </a>
        </nav>
      </div>

      {/* Bottom row */}
      <div className="mt-10 grid gap-5 border-t border-[#ddd5d8] pt-5 text-xs text-[#9a9197] sm:grid-cols-3 sm:items-center">
        {/* Copyright + Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/images/test.png"
            alt="D'Amour Nail Salon"
            className="h-10 w-auto object-contain"
          />

          <p>© 2026 D'Amour Nail Salon. All rights reserved.</p>
        </div>

        {/* Social links - centered */}
        <div className="flex items-center justify-center gap-3">
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
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

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
        </div>

        {/* Location */}
        <p className="text-left sm:text-right">
          Pooler, Georgia
        </p>
      </div>
    </footer>
  );
}