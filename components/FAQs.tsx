"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "¿Necesito experiencia en judo?",
    answer: "No. El seminario está diseñado para todos los niveles.",
  },
  {
    question: "¿Qué debo llevar?",
    answer: "Judogi, cinturón y botella de agua.",
  },
  {
    question: "¿Puedo transferir mi entrada?",
    answer:
      "Sí, podés transferirla avisando previamente a la organización.",
  },
  {
    question: "¿Habrá diferentes niveles entrenando juntos?",
    answer:
      "Sí, pero las actividades se adaptan para que todos aprovechen.",
  },
  {
    question: "¿Se puede grabar o tomar fotos?",
    answer: "Sí, siempre que no interrumpa el entrenamiento.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-gray-100 w-full" id="preguntas-frecuentes">
      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-black">Preguntas Frecuentes</h2>
          <p className="mt-2 text-black">Preguntas frecuentes sobre el evento.</p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between px-4 py-4 text-left text-base font-medium"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-black">{item.question}</span>
                    <span className="ml-4 text-xl leading-none text-red-500" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="border-t border-gray-100 px-4 py-4 text-sm text-black"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}