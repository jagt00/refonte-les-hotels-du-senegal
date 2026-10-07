import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bed, Expand, User } from "lucide-react";
import { api, type Room } from "../lib/api";

export default function Accommodations() {
  const [rooms, setRooms] = useState<Room[]>([]);
  useEffect(() => {
    api.get<Room[]>("/rooms").then((r) => setRooms(r.data)).catch(() => setRooms([]));
  }, []);

  return (
    <section id="hebergements" className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <p className="text-sand uppercase tracking-[0.3em] text-sm mb-2">Profitez d'un séjour de classe mondiale</p>
          <h3 className="font-serif text-3xl md:text-4xl">Les Hébergements</h3>
        </div>
        <Link to="/hotels" className="mt-4 md:mt-0 border border-tealbrand text-tealbrand px-6 py-2 uppercase tracking-widest text-sm hover:bg-tealbrand hover:text-white transition self-start">
          Découvrir toutes les suites
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <article key={room.id}>
            <div className="relative overflow-hidden group">
              <img src={room.image} alt={room.name} className="w-full h-72 object-cover rounded-2xl shadow-lg transition duration-500 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-sm">
                À partir de {room.price_fcfa.toLocaleString("fr-FR")} FCFA
              </div>
            </div>
            <h2 className="font-serif text-xl mt-4">{room.name}</h2>
            <ul className="flex gap-4 text-sm text-gray-500 my-3">
              <li className="flex items-center gap-1"><Expand size={14} /> {room.surface_m2} m²</li>
              <li className="flex items-center gap-1"><User size={14} /> {room.capacity} Voyageurs</li>
              <li className="flex items-center gap-1"><Bed size={14} /> {room.beds}</li>
            </ul>
            <p className="text-gray-600 text-sm">{room.description}</p>
            <Link to={`/chambres/${room.id}`} className="inline-block mt-3 border-b border-sand text-sand uppercase tracking-widest text-xs pb-1">
              En savoir plus
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}



