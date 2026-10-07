export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-sm">
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
