import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api, type Hotel, type Room } from "../lib/api";

interface HotelWithRooms extends Hotel { rooms: Room[] }

export default function HotelDetail() {
  const { id } = useParams();
  const [hotel, setHotel] = useState<HotelWithRooms | null>(null);
  useEffect(() => {
    api.get<HotelWithRooms>(`/hotels/${id}`).then((r) => setHotel(r.data)).catch(() => setHotel(null));
  }, [id]);

  if (!hotel) return <p className="pt-40 text-center text-gray-500">Chargement…</p>;

  return (
    <section className="pt-24 pb-20">
      <img src={hotel.image} alt={hotel.name} className="w-full h-[55vh] object-cover" />
      <div className="container mx-auto px-4 max-w-4xl mt-10">
        <p className="text-sand uppercase tracking-[0.3em] text-sm">{hotel.city} · {"★".repeat(hotel.stars)}</p>
        <h1 className="font-serif text-4xl md:text-5xl my-4">{hotel.name}</h1>
        <p className="text-gray-600 leading-relaxed mb-6">{hotel.description}</p>
        <div className="flex gap-2 flex-wrap mb-10">
          {hotel.tags?.map((t) => (
            <span key={t} className="text-xs border border-sand text-sand px-2 py-1">{t}</span>
          ))}
        </div>

        <h2 className="font-serif text-3xl mb-8">Chambres & Suites</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {hotel.rooms.map((room) => (
            <article key={room.id}>
              <Link to={`/chambres/${room.id}`}>
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover mb-4 hover:opacity-90 transition" />
              </Link>
              <h3 className="font-serif text-xl">{room.name}</h3>
              <p className="text-sm text-gray-500 my-2">
                {room.surface_m2} m² · {room.capacity} pers. · {room.beds}
              </p>
              <p className="text-gray-600 text-sm mb-3">{room.description}</p>
              <p className="text-ink"><strong>{room.price_fcfa.toLocaleString("fr-FR")} FCFA</strong> / nuit</p>
              <Link to={`/chambres/${room.id}`} className="inline-block mt-3 border-b border-sand text-sand uppercase tracking-widest text-xs pb-1">
                Détails de la chambre
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
