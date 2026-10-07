import { Umbrella } from "lucide-react";

export default function Welcome() {
  return (
    <section id="a-propos" className="container mx-auto px-4 py-20 text-center max-w-3xl">
      <Umbrella className="mx-auto text-sand mb-4" size={40} />
      <p className="text-sand uppercase tracking-[0.3em] text-sm mb-3">Bienvenue chez Les Hôtels du Sénégal</p>
      <h2 className="font-serif text-3xl md:text-4xl mb-6">Au cœur du littoral atlantique, des vues à couper le souffle</h2>
      <p className="text-gray-600 leading-relaxed">
        Nichés entre l'océan Atlantique et des jardins tropicaux, nos établissements incarnent la chaleur
        sénégalaise : hospitalité, sérénité et art de vivre. Des plages de sable blanc de Saly aux ruelles
        de l'Île de Gorée, chaque adresse raconte le Sénégal.
      </p>
    </section>
  );
}
