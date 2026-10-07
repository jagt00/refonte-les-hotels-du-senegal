import ReservationBar from "./ReservationBar";

export default function Hero({ onSearch }: { onSearch: () => void }) {
  return (
    <>
      <section
        id="accueil"
        className="parallax relative min-h-[85vh] flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative container mx-auto px-4 text-center text-white pt-24">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Resort Île-de-la-Dame, Sénégal</h1>
          <p className="text-lg md:text-xl mb-8">Le refuge en bord de mer où règnent chaleur, tranquillité et ressourcement</p>
          <button onClick={onSearch} className="border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-ink transition">
            Réserver votre séjour
          </button>
        </div>
      </section>
      <ReservationBar />
    </>
  );
}
