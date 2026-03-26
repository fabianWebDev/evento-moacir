import PassCard from "@/components/PassCard";

const packages = [
  {
    name: "Preventa",
    price: "37.500",
    details: "Entrada al seminario",
    features: ["Entrada al seminario", "Acceso a todas las actividades"],
    ctaLabel: "Comprar entrada",
    featured: true,
    size: "large" as const,
  },
  {
    name: "General",
    price: "49.900",
    details: "Entrada al seminario",
    features: ["Entrada al seminario", "Acceso a todas las actividades"],
    ctaLabel: "Comprar entrada",
    size: "regular" as const,
  },

];

export default function PassesSection() {
  return (
    <div className="bg-secondary w-full">
      <section className="mx-auto max-w-6xl px-6 py-14" id="pases-y-entradas">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-white font-lora">Reserva tu lugar</h2>
          <p className="mt-2 text-white">Elige el pase que se ajuste a tu experiencia.</p>
        </div>

        <div
          className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain px-6 pb-2 scroll-smooth [scrollbar-width:thin] md:mx-auto md:grid md:max-w-4xl md:grid-cols-2 md:items-stretch md:gap-8 md:overflow-visible md:px-0 md:pb-0 md:snap-none md:overscroll-auto"
          role="region"
          aria-label="Pases y entradas"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="w-[min(85vw,22rem)] shrink-0 snap-center md:w-full md:min-w-0 md:shrink"
            >
              <PassCard {...pkg} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
