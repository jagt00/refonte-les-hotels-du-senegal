import { useState } from "react";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  return (
    <section
      className="parallax relative py-32"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative flex justify-center">
        <button
          onClick={() => setOpen(true)}
          aria-label="Lire la vidéo"
          className="w-20 h-20 rounded-full border-2 border-white text-white flex items-center justify-center hover:scale-110 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 64 72"><path stroke="#FFF" strokeWidth="2" fill="none" d="m3.121 1.446 58.545 35.412L1.708 69.853 3.121 1.446Z" /></svg>
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-3xl aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/XHOmBV4js_E?autoplay=1" title="Vidéo" allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>
      )}
    </section>
  );
}
