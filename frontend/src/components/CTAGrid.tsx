const cards = [
  { title: "Spa & Bien-être", text: "Massages relaxants, hammam et soins du corps pour parfaire votre séjour détente.", img: "/images/exp-spa.jpg" },
  { title: "Excursions & Découvertes", text: "Pirogues sur le Delta du Saloum, observation d'oiseaux, VTT et immersion culturelle diola.", img: "/images/exp-excursions.jpg" },
  { title: "Restaurants & Bars", text: "Des spécialités locales sénégalaises à la cuisine internationale, dégustez face à la mer.", img: "/images/exp-gastronomie.jpg" },
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
