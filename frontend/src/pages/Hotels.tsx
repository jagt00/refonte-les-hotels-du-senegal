import { useEffect, useState } from "react";
import { api, type Hotel } from "../lib/api";

export default function Hotels() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  useEffect(() => {
    api.get<Hotel[]>("/hotels").then((r) => setHotels(r.data)).catch(() => setHotels([]));
  }, []);
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <h1 className="font-serif text-4xl mb-2 text-center">Nos Hôtels</h1>
      <p className="text-center text-gray-500 mb-12">Trois établissements d'exception à travers le Sénégal</p>
      <div className="grid md:grid-cols-3 gap-8">
        {hotels.map((h) => (
          <article key={h.id}>
            <img src={h.image} alt={h.name} className="w-full h-72 object-cover mb-4" />
            <h2 className="font-serif text-xl">{h.name}</h2>
            <p className="text-sand text-sm uppercase tracking-widest mb-2">{h.city} · {"★".repeat(h.stars)}</p>
            <p className="text-gray-600 text-sm">{h.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
