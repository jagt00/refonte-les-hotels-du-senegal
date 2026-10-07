import { useEffect, useState } from "react";
import { api, type Hotel, type ReservationPayload, type Room } from "../lib/api";

export default function Booking() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [form, setForm] = useState<ReservationPayload>({
    hotel_id: "",
    room_id: "",
    guest_name: "",
    nationality: "",
    checkin: "",
    checkout: "",
    payment_method: "carte",
    origin: "website",
  });
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<Hotel[]>("/hotels").then((r) => setHotels(r.data));
    api.get<Room[]>("/rooms").then((r) => setRooms(r.data));
  }, []);

  const set = (k: keyof ReservationPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const r = await api.post("/reservations", form);
      setResult(`Réservation confirmée : ${r.data.reservation_id}`);
    } catch (err: any) {
      setError(err?.response?.data?.description ?? "Erreur lors de la réservation");
    }
  };

  return (
    <section className="container mx-auto px-4 pt-32 pb-20 max-w-2xl">
      <h1 className="font-serif text-4xl mb-8 text-center">Réserver</h1>
      {result && <p className="mb-6 p-4 bg-green-50 text-green-800">{result}</p>}
      {error && <p className="mb-6 p-4 bg-red-50 text-red-800">{error}</p>}
      <form className="flex flex-col gap-5" onSubmit={submit}>
        <label className="flex flex-col text-sm">Hôtel
          <select className="border-b border-gray-300 py-2 bg-transparent" value={form.hotel_id} onChange={set("hotel_id")} required>
            <option value="">Choisir…</option>
            {hotels.map((h) => <option key={h.id} value={h.id}>{h.name} — {h.city}</option>)}
          </select>
        </label>
        <label className="flex flex-col text-sm">Chambre
          <select className="border-b border-gray-300 py-2 bg-transparent" value={form.room_id} onChange={set("room_id")} required>
            <option value="">Choisir…</option>
            {rooms.filter((r) => !form.hotel_id || r.hotel_id === form.hotel_id)
              .map((r) => <option key={r.id} value={r.id}>{r.name} — {r.price_fcfa.toLocaleString("fr-FR")} FCFA/nuit</option>)}
          </select>
        </label>
        <label className="flex flex-col text-sm">Nom du client<input className="border-b border-gray-300 py-2" value={form.guest_name} onChange={set("guest_name")} required /></label>
        <label className="flex flex-col text-sm">Nationalité<input className="border-b border-gray-300 py-2" value={form.nationality} onChange={set("nationality")} /></label>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col text-sm">Arrivée<input type="date" className="border-b border-gray-300 py-2" value={form.checkin} onChange={set("checkin")} required /></label>
          <label className="flex flex-col text-sm">Départ<input type="date" className="border-b border-gray-300 py-2" value={form.checkout} onChange={set("checkout")} required /></label>
        </div>
        <label className="flex flex-col text-sm">Mode de paiement
          <select className="border-b border-gray-300 py-2 bg-transparent" value={form.payment_method} onChange={set("payment_method")}>
            <option value="carte">Carte bancaire</option>
            <option value="paypal">PayPal</option>
            <option value="bictorys">Bictorys (à venir)</option>
          </select>
        </label>
        <button className="bg-ink text-white py-3 uppercase tracking-widest text-sm hover:bg-sand transition">Confirmer la réservation</button>
      </form>
    </section>
  );
}
