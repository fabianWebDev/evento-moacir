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
                        className="text-4xl font-bold text-black"
                    >
                        Sobre Moacir Méndez
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-10 lg:gap-12">
                    <div className="flex justify-center md:justify-start">
                        <Image
                            src="/moacir.jpg"
                            alt="Moacir Méndez"
                            width={1000}
                            height={1000}
                            className="h-auto w-full max-w-md rounded-xl object-cover shadow-md md:max-w-full"
                            sizes="(min-width: 768px) 45vw, min(28rem, 100vw)"
                        />
                    </div>

                    <div className="space-y-4 text-left text-base leading-relaxed text-black md:min-w-0">
                        <p>
                            Moacir Méndez es uno de los referentes del judo y jiu-jitsu a nivel
                            internacional, con una trayectoria de más de 15 años en la selección
                            brasileña de judo, donde ingresó a los 17 años y se mantuvo hasta los
                            32.
                        </p>
                        <p>
                            Especialista en ne-waza (lucha de suelo), fue reconocido como el mejor
                            del mundo en esta área en 2012, y ha sido entrenador de la selección
                            brasileña en Juegos Olímpicos como Río 2016, Tokio 2021 y París 2024.
                        </p>
                        <p>
                            Actualmente trabaja con el equipo principal de judo de Sogipa y
                            colabora con la selección brasileña senior, además de dirigir su
                            propia academia en Brasil.
                        </p>
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
