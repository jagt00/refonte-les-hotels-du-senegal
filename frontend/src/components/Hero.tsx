import { useEffect, useState } from "react";
import ReservationBar from "./ReservationBar";const slides = [
  { video: "/videos/hero.mp4", title: "Trois hôtels d'exception au Sénégal", sub: "Du littoral de Saly au Delta du Saloum, jusqu'aux plages sauvages de Casamance" },
  { video: "/videos/hero-2.mp4", title: "L'art de vivre sénégalais", sub: "Hospitalité, sérénité et raffinement sur la Petite Côte" },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 12000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section id="accueil" className="relative h-screen min-h-[640px] flex items-center">
        {slides.map((s, idx) => (
          <video
            key={s.video}
            src={s.video}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative container mx-auto px-4 text-center text-white pt-24">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">{slides[i].title}</h1>
          <p className="text-lg md:text-xl mb-8">{slides[i].sub}</p>
        </div>
        <div className="absolute inset-x-0 bottom-4 z-20 px-4">
          <ReservationBar />
        </div>
      </section>
    </>
  );
}

