import Image from "next/image";

export default function AboutSensei() {
    return (
        <div className="bg-white w-full" id="sobre-moacir">
            <section
                className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 bg-white"
                aria-labelledby="about-sensei-heading"
            >
                <div className="mb-8 text-center">
                    <h2
                        id="about-sensei-heading"
                        className="relative pl-4 text-5xl font-bold font-lora text-highlight-dark"
                    >
                        Moacir Méndez
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-10 lg:gap-12">
                    <div className="flex justify-center md:justify-start">
                        <Image
                            src="/moacir.png"
                            alt="Moacir Méndez"
                            width={1000}
                            height={1000}
                            className="h-auto w-full max-w-md  object-cover md:max-w-full"
                            sizes="(min-width: 768px) 45vw, min(28rem, 100vw)"
                        />
                    </div>

                    <div className="text-left text-lg leading-relaxed text-black md:min-w-0">
                        <ul className="list-disc pl-6 marker:text-highlight-dark marker:text-lg space-y-2 uppercase">
                            <li>Referente <span className="text-highlight-dark font-bold">internacional</span> en judo y jiu-jitsu.</li>
                            <li>Más de <span className="text-highlight-dark font-bold">15 años</span> en la selección brasileña de judo.</li>
                            <li><span className="text-highlight-dark font-bold">Especialista</span> en ne-waza (lucha de suelo).</li>
                            <li>Reconocido como el <span className="text-highlight-dark font-bold">mejor del mundo</span> en ne-waza en 2012.</li>
                            <li>Entrenador olímpico en <span className="text-highlight-dark font-bold">Río 2016, Tokio 2021 y París 2024</span>.</li>
                            <li>Actualmente integra el equipo principal de judo de <span className="text-highlight-dark font-bold">Sogipa</span> en Brasil.</li>
                            <li>Colabora con la selección brasileña <span className="text-highlight-dark font-bold">senior</span>.</li>
                            <li>Dirige su propia academia en <span className="text-highlight-dark font-bold">Brasil</span>.</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                        <button className="mt-2 rounded-md bg-highlight px-4 py-2 text-sm font-bold text-white sm:text-base md:mt-4 md:text-lg">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScmogv5bI8x2hAUgIWOuEj-FXsUNJMEOkEp1EpcKPk0W7KMuQ/viewform?usp=publish-editor" target="_blank">Reservar mi cupo</a>
                        </button>
                    </div>
                </div>

                {/* <div className="mt-12">
                    <h3 className="mb-6 text-center text-3xl font-bold text-black">
                        Logros destacados
                    </h3>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-xl border border-gray-200 p-6">
                            <h4 className="mb-4 text-lg font-semibold text-black text-center">
                                Judo
                            </h4>
                            <ul className="list-disc space-y-2 pl-5 text-sm text-black md:text-base">
                                <li>Cinturón negro desde 1997</li>
                                <li>Campeón Panamericano adulto (2006)</li>
                                <li>Tetracampeón brasileño adulto</li>
                                <li>Tricampeón Trofeo Brasil</li>
                                <li>Medalla de bronce en Mundial Junior</li>
                            </ul>
                        </div>
                        <div className="rounded-xl border border-gray-200 p-6">
                            <h4 className="mb-4 text-lg font-semibold text-black text-center">
                                Jiu-Jitsu
                            </h4>
                            <ul className="list-disc space-y-2 pl-5 text-sm text-black md:text-base">
                                <li>Cinturón negro desde 2008</li>
                                <li>Campeón mundial (2010 – faixa preta)</li>
                                <li>Medallista en World Pro Abu Dhabi</li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                {/* <div className="mt-12 rounded-xl border border-red-100 bg-red-50/80 p-6 text-center md:p-8">
                    <h3 className="mb-4 text-xl font-bold text-black">
                        Una oportunidad única
                    </h3>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-black">
                        Entrenar con Moacir Méndez no es solo aprender técnica, es vivir la
                        experiencia de un atleta y entrenador de élite que ha trabajado con
                        judokas olímpicos y de alto rendimiento.
                    </p>
                    <p className="mt-4 text-base font-medium text-black">
                        Si querés llevar tu judo al siguiente nivel, este seminario es para
                        vos.
                    </p>
                </div> */}
            </section>
        </div>
    );
}
