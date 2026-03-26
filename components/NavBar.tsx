"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#", label: "Inicio" },
  { href: "#sobre-moacir", label: "Sobre Moacir" },
  { href: "#pases-y-entradas", label: "Entradas" },
  { href: "#preguntas-frecuentes", label: "Preguntas Frecuentes" },
  { href: "#ubicacion", label: "Ubicación" },
  
] as const;

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md text-black">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 sm:gap-3"
            aria-label="Ir al inicio"
          >
            <Image
              src="/graphs-01.png"
              alt="Logo Seminario Tamo Junto"
              width={150}
              height={48}
              className="h-10 w-auto sm:h-12"
              priority
            />
            <h1 className="text-3xl font-bold leading-none text-highlight-dark sm:text-3xl">
              TAMO JUNTO!
            </h1>
          </a>

          <ul className="hidden flex-1 items-center justify-center gap-8 text-lg font-medium md:flex">
            {links.map(({ href, label }) => (
              <li key={href + label}>
                <a
                  href={href}
                  className="transition-colors hover:text-highlight"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-highlight-dark md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <ul
            id="mobile-menu"
            className="mt-4 flex flex-col items-center gap-4 border-t border-gray-100 pt-4 text-lg font-medium md:hidden"
          >
            {links.map(({ href, label }) => (
              <li key={href + label}>
                <a
                  href={href}
                  className="block py-1 transition-colors hover:text-highlight"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
