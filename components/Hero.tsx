export default function Hero() {
    return (
        <section
            className="relative flex h-[60vh] items-center justify-center bg-cover bg-center bg-no-repeat md:h-[80vh]"
            style={{ backgroundImage: "url('/hero.png')" }}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 px-6 text-white">

                <h1 className="text-4xl font-bold md:text-8xl text-left">Seminario Internacional de Judo con Moacir Méndez</h1>

                <p className="text-2xl font-bold md:text-4xl text-left">Entrená con uno de los referentes del judo mundial.</p>
                <p className="text-2xl font-bold md:text-4xl text-left">Técnica, sparring y experiencia única en tatami.</p>
                <h2 className="text-2xl font-bold md:text-4xl text-left">Judo San Pedro, San José, Costa Rica</h2>
                <h2 className="text-2xl font-bold md:text-4xl text-left">21 de Marzo de 2026</h2>
                <button className="text-white px-4 py-2 rounded-md mt-4 bg-red-500 text-lg font-bold">
                    <a href="#pases-y-entradas">Comprar entrada</a>
                </button>
            </div>
        </section>
    );
}