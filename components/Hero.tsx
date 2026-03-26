export default function Hero() {
    return (
        <section
            className="relative flex h-[60vh] items-center justify-center bg-cover bg-center bg-no-repeat md:h-[80vh]"
            style={{ backgroundImage: "url('/hero.png')" }}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 px-6 text-white">
                <h1 className="text-left text-3xl mb-2 font-bold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-lora">Seminario <span className="text-highlight-dark" style={{
                    WebkitTextStroke: "0.5px #ccc",
                }}>TAMO JUNTO!</span></h1>
                <p className="text-left text-md font-bold sm:text-lg md:text-2xl lg:text-4xl">Entrená judo de alto nivel con Moacir Méndez</p>
                <p className="text-left text-md font-bold sm:text-lg md:text-2xl lg:text-4xl">Seminario intensivo — todos los niveles</p>
                <hr className="mb-2 mt-2 w-40 md:w-80 md:mb-4 md:mt-4 border-t-2 border-current" />
                <h2 className="text-left text-sm sm:text-xl md:text-xl lg:text-3xl">Judo San Pedro, San José, Costa Rica</h2>
                <h2 className="text-left text-sm sm:text-xl md:text-xl lg:text-3xl">13 de Mayo de 2026</h2>
                <a
                  className="mt-2 inline-block rounded-md bg-highlight px-4 py-2 text-sm font-bold text-white sm:text-base md:mt-4 md:text-lg"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScmogv5bI8x2hAUgIWOuEj-FXsUNJMEOkEp1EpcKPk0W7KMuQ/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reservar mi cupo
                </a>
            </div>
        </section>
    );
}