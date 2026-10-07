import { useState } from "react";

export default function ReservationBar() {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <section className="container mx-auto px-0 relative z-10">
      <form
        className="bg-white shadow-xl rounded-sm p-4 md:p-6 grid grid-cols-2 md:grid-cols-5 gap-4 items-end"
        onSubmit={(e) => { e.preventDefault(); window.location.hash = "hebergements"; }}
      >
        <label className="flex flex-col text-sm">
          Arrivée
          <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} className="border-b border-gray-300 py-2 focus:outline-none focus:border-sand" />
        </label>
        <label className="flex flex-col text-sm">
          Départ
          <input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} className="border-b border-gray-300 py-2 focus:outline-none focus:border-sand" />
        </label>
        <label className="flex flex-col text-sm">
          Chambres
          <input type="number" min={1} value={rooms} onChange={(e) => setRooms(+e.target.value)} className="border-b border-gray-300 py-2 focus:outline-none focus:border-sand" />
        </label>
        <label className="flex flex-col text-sm">
          Voyageurs
          <span className="flex items-center gap-2 border-b border-gray-300 py-2">
            <input type="number" min={1} value={adults} onChange={(e) => setAdults(+e.target.value)} className="w-12 focus:outline-none" title="Adultes" />
            adultes,
            <input type="number" min={0} value={children} onChange={(e) => setChildren(+e.target.value)} className="w-12 focus:outline-none" title="Enfants" />
            enfants
          </span>
        </label>
        <button type="submit" className="bg-sand text-white px-4 py-3 uppercase tracking-widest text-sm hover:brightness-110 transition">
          Vérifier les disponibilités
        </button>
      </form>
    </section>
  );
}

