export default function Welcome() {
  return (
    <section id="a-propos" className="bg-creambrand">
      <div className="container mx-auto px-4 py-24 text-center max-w-3xl">
        <img src="/icons/icon-192.png" alt="Les Hôtels du Sénégal" className="mx-auto mb-4 h-12 w-12 rounded-xl" />
        <p className="text-sand uppercase tracking-[0.3em] text-sm mb-3">Bienvenue chez Les Hôtels du Sénégal</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Trois adresses d'exception, un art de vivre sénégalais</h2>
        <p className="text-gray-600 leading-relaxed">
          Le groupe Les Hôtels du Sénégal réunit trois établissements complémentaires :
          le Club-Hôtel Royal Saly sur la Petite Côte, Le Pélican du Saloum au cœur du Delta inscrit à l'UNESCO,
          et Le Nema Kadior entre mangroves et plages sauvages de Casamance.
          Hospitalité, gastronomie, nature et culture : un même standard, trois destinations à découvrir.
        </p>

        <div className="mt-10 flex items-center justify-center gap-8 flex-wrap opacity-70">
          {["TripAdvisor", "Booking.com", "Google", "Michelin Guide"].map((b) => (
            <span key={b} className="text-sm font-semibold tracking-widest uppercase text-tealbrand border border-tealbrand/30 rounded-full px-4 py-2">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
