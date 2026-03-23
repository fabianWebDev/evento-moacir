export default function Hero() {
    return (
        <section
            className="relative flex h-[60vh] items-center justify-center bg-cover bg-center bg-no-repeat md:h-[80vh]"
            style={{ backgroundImage: "url('/hero.png')" }}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 px-6 text-white">
                <h1 className="text-left text-3xl mb-2 font-bold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">Seminario Internacional de Judo con Moacir Méndez</h1>
                <p className="text-left text-md font-bold sm:text-lg md:text-2xl lg:text-4xl">Entrená con uno de los referentes del judo mundial.</p>
                <p className="text-left text-md font-bold sm:text-lg md:text-2xl lg:text-4xl">Técnica, sparring y experiencia única en tatami.</p>
                <hr className="mb-2 mt-2 w-40 md:w-80 md:mb-4 md:mt-4 border-t-2 border-current" />
                <h2 className="text-left text-sm sm:text-xl md:text-2xl lg:text-4xl">Judo San Pedro, San José, Costa Rica</h2>
                <h2 className="text-left text-sm sm:text-xl md:text-2xl lg:text-4xl">13 de Mayo de 2026</h2>
                <button className="mt-2 rounded-md bg-red-500 px-4 py-2 text-sm font-bold text-white sm:text-base md:mt-4 md:text-lg">
                    <a href="#pases-y-entradas">Comprar entrada</a>
                </button>
            </div>
        </section>
    );
}