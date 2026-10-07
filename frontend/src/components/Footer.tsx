export default function Footer() {
  return (
    <footer id="contact" className="bg-tealbrand text-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div className="flex flex-col gap-4">
          <img src="/images/logo-senegal-hotels.png" alt="Sénégal Hôtels" className="h-12 w-auto brightness-0 invert self-start" />
          <p>Le groupe hôtelier de référence sur le littoral sénégalais.</p>
        </div>
        <div>
          <h6 className="uppercase tracking-widest text-sand mb-3">Adresse</h6>
          <p>Corniche Ouest, Saly Portudal,<br />Mbour, Sénégal</p>
        </div>
        <div>
          <h6 className="uppercase tracking-widest text-sand mb-3">Contact</h6>
          <p>+221 33 800 00 00<br />contact@leshotelsdusenegal.sn</p>
        </div>
        <div>
          <h6 className="uppercase tracking-widest text-sand mb-3">Réseaux</h6>
          <p>Facebook · Instagram · LinkedIn</p>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs pb-6">© 2026 Les Hôtels du Sénégal — Tous droits réservés</p>
    </footer>
  );
}
