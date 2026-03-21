import PassCard from "@/components/PassCard";

const packages = [
  {
    name: "Starter",
    price: "$49",
    details: "Perfect for newcomers who want access to all basic event activities.",
    features: ["Event entry", "Welcome kit", "General seating"],
    ctaLabel: "Get Starter",
    size: "regular" as const,
  },
  {
    name: "Premium",
    price: "$99",
    details: "Best value package with priority access and extra perks all day.",
    features: ["Priority seating", "Exclusive lounge", "VIP support", "After party access"],
    ctaLabel: "Get Premium",
    featured: true,
    size: "large" as const,
  },
  {
    name: "Group",
    price: "$179",
    details: "Ideal for teams or friends attending together at a discounted rate.",
    features: ["4 event entries", "Group check-in", "Reserved area"],
    ctaLabel: "Get Group Pass",
    size: "regular" as const,
  },
];

export default function PassesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="pases-y-entradas">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-white">Pases y Entradas</h2>
        <p className="mt-2 text-white">Elige el pase que se ajuste a tu experiencia.</p>
      </div>

      <div
        className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain px-6 pb-2 scroll-smooth [scrollbar-width:thin] md:mx-0 md:grid md:grid-cols-3 md:items-stretch md:gap-8 md:overflow-visible md:px-0 md:pb-0 md:snap-none md:overscroll-auto"
        role="region"
        aria-label="Pases y entradas"
      >
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="w-[min(85vw,22rem)] shrink-0 snap-center md:w-auto md:min-w-0 md:shrink"
          >
            <PassCard {...pkg} />
          </div>
        ))}
      </div>
    </section>
  );
}
