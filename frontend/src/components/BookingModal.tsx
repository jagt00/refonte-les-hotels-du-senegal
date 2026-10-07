import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/70 z-[70] flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4" aria-label="Fermer"><X /></button>
        <h3 className="font-serif text-2xl mb-2">Réserver votre séjour</h3>
        <p className="text-gray-500 text-sm mb-6">Sélectionnez vos dates et laissez-vous guider vers la suite idéale.</p>
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <label className="flex flex-col text-sm">Arrivée<input type="date" className="border-b border-gray-300 py-2" /></label>
          <label className="flex flex-col text-sm">Départ<input type="date" className="border-b border-gray-300 py-2" /></label>
          <label className="flex flex-col text-sm">Adultes<input type="number" min={1} defaultValue={1} className="border-b border-gray-300 py-2" /></label>
          <Link to="/reserver" onClick={onClose} className="bg-sand text-white text-center py-3 uppercase tracking-widest text-sm mt-2 hover:brightness-110 transition">
            Continuer
          </Link>
        </form>
      </div>
    </div>
  );
}

