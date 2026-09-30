export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <a
        href="/"
        className="flex items-center"
        aria-label="La Pierre home"
        >
        <img
            src="/images/damour-nail-salon-1.jpg"
            alt="La Pierre"
            className="h-20 w-auto object-contain"
        />
        </a>

        

        {/* Navigation */}
        <div className="hidden gap-8 text-sm text-[#746f66] md:flex">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Visit</a>
        </div>

        {/* Booking */}
            <a
            href="tel:+19129883690"
            className="rounded-full bg-[#24231f] px-5 py-3 text-sm text-white inline-block"
            >
            Book an Appointment
            </a>

      </nav>
    </header>
  );
}