import { Sun } from "lucide-react";

export default function ParallaxBanner() {
  return (
    <section
      className="parallax relative py-32"
      style={{ backgroundImage: "url('/images/dest-dakar.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 text-center text-white max-w-2xl">
        <Sun className="mx-auto mb-4 text-sand" size={40} />
        <p className="text-sand uppercase tracking-[0.3em] text-sm mb-3">Expérience Inoubliable</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">L'une des destinations les plus prisées d'Afrique de l'Ouest</h2>
        <p>Un resort 5 étoiles incarnant le meilleur du Sénégal : luxe, tranquillité & raffinement.</p>
      </div>
    </section>
  );
}
