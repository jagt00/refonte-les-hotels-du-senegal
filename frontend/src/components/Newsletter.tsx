export default function Newsletter() {
  return (
    <section
      className="parallax relative py-24"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 text-center text-white max-w-xl">
        <p className="text-sand uppercase tracking-[0.3em] text-sm mb-2">Restez informés</p>
        <h4 className="font-serif text-2xl mb-6">Suivez-nous chez Les Hôtels du Sénégal</h4>
        <form onSubmit={(e) => e.preventDefault()} className="flex">
          <input type="email" required placeholder="Votre adresse e-mail" className="flex-1 px-4 py-3 text-ink" />
          <button className="bg-sand text-white px-6 py-3 uppercase tracking-widest text-sm">S'inscrire</button>
        </form>
      </div>
    </section>
  );
}
