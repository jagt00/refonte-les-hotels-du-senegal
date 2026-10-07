import useEmblaCarousel from "embla-carousel-react";

const images = [
  { src: "/images/gallery/gallery-pool.jpg", alt: "Piscine" },
  { src: "/images/gallery/gallery-beach.jpg", alt: "Plage" },
  { src: "/images/gallery/gallery-spa.jpg", alt: "Spa" },
  { src: "/images/gallery/gallery-restaurant.jpg", alt: "Restaurant" },
  { src: "/images/gallery/gallery-excursion.jpg", alt: "Excursion" },
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
