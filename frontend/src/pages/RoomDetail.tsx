import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Bed, Expand, Users } from "lucide-react";
import { api, type Room } from "../lib/api";

export default function RoomDetail() {
  const { id } = useParams();
  const [room, setRoom] = useState<Room | null>(null);
  useEffect(() => {
    api.get<Room>(`/rooms/${id}`).then((r) => setRoom(r.data)).catch(() => setRoom(null));
  }, [id]);

  if (!room) return <p className="pt-40 text-center text-gray-500">Chargement…</p>;

  return (
    <section className="pt-24 pb-24">
      <img src={room.image} alt={room.name} className="w-full h-[55vh] object-cover" />
      <div className="container mx-auto px-4 max-w-3xl mt-10">
        <p className="text-sand uppercase tracking-[0.3em] text-sm">Chambre</p>
        <h1 className="font-serif text-4xl md:text-5xl my-4">{room.name}</h1>
        <ul className="flex gap-6 text-gray-500 mb-6">
          <li className="flex items-center gap-2"><Expand size={16} /> {room.surface_m2} m²</li>
          <li className="flex items-center gap-2"><Users size={16} /> {room.capacity} voyageurs</li>
          <li className="flex items-center gap-2"><Bed size={16} /> {room.beds}</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-6">{room.description}</p>

        {room.amenities && (
          <div className="mb-8">
            <h2 className="font-serif text-2xl mb-3">Équipements</h2>
            <div className="flex gap-2 flex-wrap">
              {room.amenities.map((a) => (
                <span key={a} className="text-xs border border-gray-300 px-2 py-1">{a}</span>
              ))}
            </div>
          </div>
        )}

        <p className="text-2xl font-serif mb-8">À partir de <strong>{room.price_fcfa.toLocaleString("fr-FR")} FCFA</strong> / nuit</p>
        <Link to={`/reserver`} className="bg-sand text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-sand transition">
          Réserver cette chambre
        </Link>
      </div>
    </section>
  );
}


