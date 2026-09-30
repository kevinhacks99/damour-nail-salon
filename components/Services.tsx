"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ServiceItem = {
  name: string;
  description: string;
  price: string;
};

type Service = {
  number: string;
  category: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  items: ServiceItem[];
};

const services: Service[] = [
  {
    number: "01",
    category: "HANDS",
    name: "Signature Manicure",
    description:
      "Shape, cuticle care, warm soak, massage and a clean lacquer finish.",
    duration: "50 min",
    price: "from $48",
    items: [
      {
        name: "Classic Manicure",
        description:
          "Shape, cuticle care and your choice of lacquer.",
        price: "$48",
      },
      {
        name: "Gel Manicure",
        description:
          "Meticulous prep with a long-wear gel finish.",
        price: "$68",
      },
      {
        name: "French Manicure",
        description:
          "A timeless French finish with clean, precise detailing.",
        price: "$63",
      },
    ],
  },
  {
    number: "02",
    category: "GEL",
    name: "Gel Atelier",
    description:
      "Long-wear color with meticulous prep and a high-gloss, stone-smooth finish.",
    duration: "60 min",
    price: "from $68",
    items: [
      {
        name: "Gel Overlay",
        description:
          "Structured gel applied over the natural nail.",
        price: "$68",
      },
      {
        name: "Gel Refresh",
        description:
          "Fresh color, shaping and detailed cuticle care.",
        price: "$58",
      },
      {
        name: "French Gel",
        description:
          "A refined French finish over your gel service.",
        price: "$78",
      },
    ],
  },
  {
    number: "03",
    category: "SCULPT",
    name: "Stone Sculpt",
    description:
      "Structured extensions and sculpted acrylics tailored to your natural nail.",
    duration: "90 min",
    price: "from $105",
    items: [
      {
        name: "Builder Gel",
        description:
          "Structured natural nails with a durable gel finish.",
        price: "$105",
      },
      {
        name: "Gel Extensions",
        description:
          "Added length with a lightweight, natural-looking finish.",
        price: "$125",
      },
      {
        name: "Custom Nail Art",
        description:
          "Hand-painted details designed around your personal style.",
        price: "from $15",
      },
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  return (
    <section
      id="services"
      className="border-t border-black/10 px-6 py-28 md:px-12 lg:px-20 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-20 grid gap-8 md:grid-cols-[1fr_360px] md:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28b4a]">
              Treatments
            </p>

            <h2 className="font-serif text-5xl font-normal tracking-[-0.05em] text-[#24231f] md:text-6xl lg:text-7xl">
              The essentials.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#746f66]">
            Considered treatments for natural nails, long wear and
            sculpted finishes. Each service is performed with patience
            and precision.
          </p>
        </div>

        {/* Service list */}
        <div className="border-t border-black/10">
          {services.map((service) => (
            <button
              key={service.number}
              type="button"
              onClick={() => setSelectedService(service)}
              className="group block w-full border-b border-black/10 py-12 text-left transition-all duration-500 hover:px-3 md:py-14"
            >
              <div className="grid gap-8 md:grid-cols-[70px_1fr_auto] md:items-center">
                {/* Number */}
                <span className="text-xs tracking-[0.2em] text-[#b28b4a]">
                  {service.number}
                </span>

                {/* Main content */}
                <div>
                  <div className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#746f66]">
                    {service.category}
                  </div>

                  <h3 className="font-serif text-4xl font-normal tracking-[-0.04em] text-[#24231f] transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
                    {service.name}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#746f66]">
                    {service.description}
                  </p>

                  <p className="mt-5 text-xs text-[#746f66]">
                    {service.duration}
                  </p>
                </div>

                {/* Price + action */}
                <div className="flex items-center justify-between gap-8 md:flex-col md:items-end md:justify-center">
                  <span className="font-serif text-2xl font-normal text-[#24231f]">
                    {service.price}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#746f66] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#b28b4a]">
                    View menu →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Service menu modal */}
      <Dialog
        open={selectedService !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedService(null);
          }
        }}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto rounded-[2rem] border-black/10 bg-[#f8f6f0]/95 p-8 backdrop-blur-xl sm:max-w-xl sm:p-10">
          {selectedService && (
            <>
              <DialogHeader>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#b28b4a]">
                  {selectedService.category}
                </p>

                <DialogTitle className="mt-3 font-serif text-4xl font-normal tracking-[-0.04em] text-[#24231f]">
                  {selectedService.name}
                </DialogTitle>

                <p className="pt-3 text-sm leading-7 text-[#746f66]">
                  {selectedService.description}
                </p>
              </DialogHeader>

              <div className="mt-6 divide-y divide-black/10">
                {selectedService.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-8 py-7 first:pt-2"
                  >
                    <div className="flex-1">
                      <h4 className="font-serif text-xl font-normal text-[#24231f]">
                        {item.name}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-[#746f66]">
                        {item.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm text-[#b28b4a]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-full bg-[#24231f] px-6 py-4 text-xs uppercase tracking-[0.18em] text-white transition-transform hover:scale-[1.01]"
              >
                Book this service
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}