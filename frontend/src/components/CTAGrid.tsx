const cards = [
  { title: "Spa & Bien-être", text: "Lové dans une nature luxuriante, notre spa moderne incarne l'apaisement : soins, hammam, massages.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop" },
  { title: "Excursions & Découvertes", text: "Surf, plongée, pêche, voile, randonnées et villages à découvrir : un terrain de jeu pour aventuriers.", img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=900&auto=format&fit=crop" },
  { title: "Restaurants & Bars", text: "De la cuisine sénégalaise aux saveurs internationales, nos tables célèbrent le terroir et la mer.", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop" },
];

export default function CTAGrid() {
  return (
    <section className="container mx-auto px-4 py-20 grid md:grid-cols-3 gap-8">
      {cards.map((c) => (
        <div key={c.title}>
          <img src={c.img} alt={c.title} className="w-full h-56 object-cover mb-4" />
          <h5 className="font-serif text-xl mb-2">{c.title}</h5>
          <p className="text-gray-600 text-sm mb-3">{c.text}</p>
          <a href="#" className="text-sand uppercase tracking-widest text-xs border-b border-sand pb-1">En savoir plus</a>
        </div>
      ))}
    </section>
  );
}
