import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, type Hotel } from "../lib/api";

export default function Hotels() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  useEffect(() => {
    api.get<Hotel[]>("/hotels").then((r) => setHotels(r.data)).catch(() => setHotels([]));
  }, []);
  return (
    <section className="container mx-auto px-4 pt-32 pb-24">
      <h1 className="font-serif text-4xl mb-2 text-center">Nos Hôtels</h1>
      <p className="text-center text-gray-500 mb-12">Trois établissements d'exception à travers le Sénégal</p>
      <div className="grid md:grid-cols-3 gap-8">
        {hotels.map((h) => (
          <article key={h.id}>
            <Link to={`/hotels/${h.id}`}><img src={h.image} alt={h.name} className="w-full h-72 object-cover mb-4 rounded-2xl shadow-lg hover:opacity-90 transition" /></Link>
            <Link to={`/hotels/${h.id}`}><h2 className="font-serif text-xl hover:text-sand transition">{h.name}</h2></Link>
            <p className="text-sand text-sm uppercase tracking-widest mb-2">{h.city} · {"★".repeat(h.stars)} · {h.rating}/5</p>
            <p className="text-gray-600 text-sm mb-3">{h.description}</p>
            <p className="text-ink text-sm">À partir de <strong>{h.price.toLocaleString("fr-FR")} FCFA</strong> / nuit</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {h.tags.map((t) => (
                <span key={t} className="text-xs border border-sand text-sand px-2 py-1">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


