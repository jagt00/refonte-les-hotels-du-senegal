import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface Props { onBook: () => void }

export default function Header({ onBook }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-tealbrand shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>

        <nav className="hidden md:flex gap-6 text-sm uppercase tracking-widest text-white">
          <Link to="/" className="hover:text-orange-200">Accueil</Link>
          <Link to="/hotels" className="hover:text-orange-200">Hôtels</Link>
          <a href="#hebergements" className="hover:text-orange-200">Hébergements</a>
          <a href="#contact" className="hover:text-orange-200">Contact</a>
        </nav>

        <Link to="/">
          <img src="/images/logo-senegal-hotels.png" alt="Sénégal Hôtels" className="h-10 md:h-14 w-auto brightness-0 invert" />
        </Link>

        <div className="flex items-center gap-4">
          <a className="hidden lg:block text-sm text-white/90" href="tel:+221338000000">Tél : +221 33 800 00 00</a>
          <button onClick={onBook} className="bg-sand text-white px-4 py-2 text-sm uppercase tracking-widest hover:brightness-110 transition">
            Réserver
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col px-4 pb-4 gap-3 text-sm uppercase tracking-widest text-white">
          <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link to="/hotels" onClick={() => setOpen(false)}>Hôtels</Link>
          <a href="#hebergements" onClick={() => setOpen(false)}>Hébergements</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}


