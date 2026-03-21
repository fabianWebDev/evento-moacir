type PassCardProps = {
  name: string;
  price: string;
  details: string;
  features: string[];
  ctaLabel?: string;
  featured?: boolean;
  size?: "regular" | "large";
};

export default function PassCard({
  name,
  price,
  details,
  features,
  ctaLabel = "Choose package",
  featured = false,
  size = "regular",
}: PassCardProps) {
  const isLarge = size === "large";

  return (
    <article
      className={[
        "rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200",
        isLarge ? "md:scale-105 md:p-8" : "md:p-6",
        featured
          ? "border-red-500 shadow-red-300 md:shadow-lg"
          : "border-gray-200 hover:-translate-y-0.5 hover:shadow-md",
      ].join(" ")}
    >
      {featured && (
        <span className="mb-4 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">
          Más vendido
        </span>
      )}

      <h3 className={isLarge ? "text-2xl font-bold text-gray-900" : "text-xl font-bold text-gray-900"}>
        {name}
      </h3>
      <p className="mt-2 text-3xl font-extrabold text-gray-900">{price}</p>
      <p className="mt-2 text-sm text-gray-600">{details}</p>

      <ul className="mt-5 space-y-2 text-sm text-gray-700">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-0.5 text-indigo-600">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={[
          "mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors",
          featured
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-gray-900 text-white hover:bg-gray-800",
        ].join(" ")}
      >
        {ctaLabel}
      </button>
    </article>
  );
}