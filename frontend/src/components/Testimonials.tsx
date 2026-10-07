export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 pb-24 text-center max-w-3xl">
      <p className="text-sand uppercase tracking-[0.3em] text-sm mb-2">La voix de nos hôtes</p>
      <h4 className="font-serif text-2xl mb-8">Ils ont séjourné chez nous</h4>
      <blockquote>
        <p className="text-xl font-serif italic text-gray-700">
          « Un service exceptionnel et une vue imprenable sur l'océan. L'accueil sénégalais est irrésistible ! »
        </p>
        <cite className="block mt-4 text-sand not-italic text-sm tracking-widest">— Awa Ndiaye, Dakar</cite>
      </blockquote>
    </section>
  );
}

