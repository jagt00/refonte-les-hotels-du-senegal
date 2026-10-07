import useEmblaCarousel from "embla-carousel-react";

const images = [
  { src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop", alt: "Piscine et palmiers" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop", alt: "Plage" },
  { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop", alt: "Spa" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop", alt: "Restaurant" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", alt: "Mer" },
];

export default function Gallery() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {images.map((img) => (
            <div key={img.src} className="flex-[0_0_80%] md:flex-[0_0_31%]">
              <img src={img.src} alt={img.alt} className="w-full h-72 object-cover" />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-500 mt-4 italic">
        Inspirés de notre histoire, entourés de nature, conçus pour vous offrir une expérience différente
      </p>
    </section>
  );
}
