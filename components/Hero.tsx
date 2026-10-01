export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden px-6 py-20 md:px-12 lg:px-20">

      {/* Marble Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Base stone */}
        <div className="absolute inset-0 bg-[#f4f1e9]" />

        {/* Soft marble clouds */}
        <div className="absolute -left-[10%] top-[5%] h-[55%] w-[65%] rounded-full bg-white/90 blur-[120px]" />

        <div className="absolute right-[-15%] top-[10%] h-[70%] w-[55%] rounded-full bg-[#d7d0c1]/50 blur-[140px]" />

        <div className="absolute bottom-[-20%] left-[25%] h-[45%] w-[60%] rounded-full bg-[#c5bbaa]/40 blur-[120px]" />


        {/* Large marble veins */}
        <div className="absolute left-[-20%] top-[28%] h-5 w-[90%] rotate-[-18deg] bg-white/80 blur-xl" />

        <div className="absolute left-[-20%] top-[31%] h-[2px] w-[95%] rotate-[-18deg] bg-[#a79d8b]/30" />


        <div className="absolute left-[30%] top-[-30%] h-[150%] w-4 rotate-[28deg] bg-white/70 blur-xl" />

        <div className="absolute left-[33%] top-[-30%] h-[150%] w-[2px] rotate-[28deg] bg-[#aaa08d]/30" />


        {/* Gold mineral vein */}
        <div className="absolute left-[-5%] top-[32%] h-[2px] w-[75%] rotate-[-18deg] bg-[#b28b4a]/50 blur-[1px]" />

      </div>


      {/* Content Layer */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl items-center gap-16 md:grid-cols-2">


        {/* Left Content */}
        <div>

            <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/30 px-5 py-3 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-[flashBlack_1s_ease-in-out_infinite]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#806672]">
                · Pooler, GA
              </span>
            </div>


          <h1 className="font-serif text-6xl leading-[0.88] tracking-[-0.05em] text-[#24231f] md:text-7xl lg:text-[100px]">
            Quiet polish,
            <br />
            worked
            <br />
            like stone.
          </h1>


          <p className="mt-9 max-w-xl text-base leading-7 text-[#746f66] md:text-lg">
            A slow, spa-grade nail studio built around the feel of a
            cool polished counter — manicure, gel and sculpted
            acrylics, finished with restraint.
          </p>


          <div className="mt-9 flex items-center gap-6">

            <a
            href="tel:+19129883690"
            className="rounded-full bg-[#24231f] px-5 py-3 text-sm text-white inline-block"
            >
            Book an Appointment
            </a>
            


            <a
              href="#services"
              className="border-b border-[#24231f] pb-1 text-sm text-[#24231f]"
            >
              See menu
            </a>

          </div>

        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-lg">
        <img
            src="/images/test.png"
            alt="La Pierre nail atelier"
            className="h-full w-full object-contain"
        />
        </div>
      </div>

    </section>
  );
}