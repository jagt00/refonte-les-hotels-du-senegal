import ReservationBar from "./ReservationBar";

export default function Hero({ onSearch }: { onSearch: () => void }) {
  return (
    <>
      <section
        id="accueil"
        className="parallax relative min-h-[85vh] flex items-center"
        style={{ backgroundImage: "url('/images/hero-senegal-new.webp')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative container mx-auto px-4 text-center text-white pt-24">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Trois hôtels d'exception au Sénégal</h1>
          <p className="text-lg md:text-xl mb-8">Du littoral de Saly au Delta du Saloum, jusqu'aux plages sauvages de Casamance</p>
          <button onClick={onSearch} className="border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-ink transition">
            Réserver votre séjour
          </button>
        </div>
      </section>
      <ReservationBar />
    </>
  );
}
