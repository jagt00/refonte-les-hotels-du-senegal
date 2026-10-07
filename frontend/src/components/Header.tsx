import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface Props { onBook: () => void }

export default function Header({ onBook }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>

        <nav className="hidden md:flex gap-6 text-sm uppercase tracking-widest text-ink">
          <Link to="/" className="hover:text-sand">Accueil</Link>
          <Link to="/hotels" className="hover:text-sand">Hôtels</Link>
          <a href="#hebergements" className="hover:text-sand">Hébergements</a>
          <a href="#contact" className="hover:text-sand">Contact</a>
        </nav>

        <Link to="/" className="font-serif text-xl md:text-2xl text-ink">
          Les Hôtels <em className="text-sand not-italic">du Sénégal</em>
        </Link>

        <div className="flex items-center gap-4">
          <a className="hidden lg:block text-sm" href="tel:+221338000000">Tél : +221 33 800 00 00</a>
          <button onClick={onBook} className="border border-ink px-4 py-2 text-sm uppercase tracking-widest hover:bg-ink hover:text-white transition">
            Réserver
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col px-4 pb-4 gap-3 text-sm uppercase tracking-widest">
          <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link to="/hotels" onClick={() => setOpen(false)}>Hôtels</Link>
          <a href="#hebergements" onClick={() => setOpen(false)}>Hébergements</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}
