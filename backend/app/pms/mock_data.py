"""DONNÉES GÉNÉRÉES depuis Supabase (scripts/sync_db.py). Ne pas éditer à la main."""

HOTELS = [
  {
    "id": "nema-kadior",
    "name": "Le Nema Cadior",
    "city": "Casamance",
    "country": "Sénégal",
    "stars": 4,
    "description": "Le Nema Kadior est un boutique-hôtel de charme au cœur de la Casamance, la région la plus verdoyante du Sénégal. Architecture traditionnelle, jardins tropicaux luxuriants, plages sauvages et immersion culturelle diola.",
    "image": "/images/remote/1777628104038-rxya0e4zeqb.webp",
    "gallery": [
      "/images/remote/1777628104038-rxya0e4zeqb.webp",
      "/images/remote/1777628126314-07epsy7kxy9g.webp",
      "/images/remote/1777628126716-etvicbxajat.webp",
      "/images/remote/1777628126959-o93we79iaa.webp",
      "/images/remote/1777628127265-4ki58cb0sq.webp",
      "/images/remote/1777628128233-ww4bu6n7fx.webp",
      "/images/remote/1777628128879-5pliotu9d2c.webp",
      "/images/remote/1777628129278-xiiqjl18am.webp",
      "/images/remote/1777628129554-yc3y76bkuec.webp",
      "/images/remote/1777628129759-25fvt5xul7v.webp",
      "/images/remote/1777628130149-ol6elkpcpi.webp",
      "/images/remote/1777628130422-rwzw5fcbq4l.webp",
      "/images/remote/1777628130867-rwxterny6e.webp"
    ],
    "price": 40000,
    "rating": 4.6,
    "tags": [
      "Charme",
      "Culture",
      "Plage sauvage",
      "Jardin tropical"
    ]
  },
  {
    "id": "pelican-du-saloum",
    "name": "Le Pélican du Saloum",
    "city": "Toubacouta",
    "country": "Sénégal",
    "stars": 4,
    "description": "Niché au cœur du Delta du Saloum, patrimoine mondial de l'UNESCO, Le Pélican du Saloum offre une expérience unique entre mangrove et bolongs. Lodge éco-luxe avec excursions en pirogue, observation d'oiseaux et cuisine locale raffinée.",
    "image": "/images/remote/1777628538272-uz9xrdaxa3.webp",
    "gallery": [
      "/images/remote/1777628538272-uz9xrdaxa3.webp",
      "/images/remote/1777628535874-a8avojnjl9.webp",
      "/images/remote/1777628536327-umz40mum7z.webp",
      "/images/remote/1777628536730-te9qy9a0uy.webp",
      "/images/remote/1777628536956-kx1epp9c08h.webp",
      "/images/remote/1777628537266-c6thq4uaf4.webp",
      "/images/remote/1777628537676-ia10pii0hya.webp",
      "/images/remote/1777628537993-zf9ax2az3jj.webp",
      "/images/remote/1777628538495-9cywqjqkvi.webp",
      "/images/remote/1777628538799-uo3u0pd19l.webp"
    ],
    "price": 35000,
    "rating": 4.5,
    "tags": [
      "Éco-lodge",
      "Nature",
      "Excursions",
      "Cuisine locale"
    ]
  },
  {
    "id": "royal-saly",
    "name": "Hotel Club Royal Saly",
    "city": "Saly",
    "country": "Sénégal",
    "stars": 5,
    "description": "Le Hotel Club Royal Saly est un hôtel club à taille humaine en formule All Inclusive, situé en bord de mer dans la station balnéaire de Saly, à 80 km de l'aéroport de Dakar et face au golf de Saly. Il dispose de 150 chambres réparties en bungalows dans un parc arboré qui a conservé sa flore d'origine (baobabs, cocotiers). Les chambres sont spacieuses et calmes, les restaurants et le bar donnent directement sur la plage avec vue sur la mer. Le chef Mr Gaby vous fait découvrir les spécialités locales au fil de buffets à thèmes. Une équipe d'animation propose activités et soirées pour petits et grands, dans une ambiance reposante et conviviale.",
    "image": "/images/remote/1776272328257-aoo0wyvcsbu.webp",
    "gallery": [
      "/images/remote/1776272328257-aoo0wyvcsbu.webp",
      "/images/remote/1776272283059-qqoeefnmgb.webp",
      "/images/remote/1776272281834-40tk5tslbyi.webp",
      "/images/remote/1776272282382-vngy099ilp9.webp",
      "/images/remote/1776272282613-2ikoj92zqzi.webp",
      "/images/remote/1776272282832-ob1xkhd5nbl.webp",
      "/images/remote/1776272283286-3obw8n2exxx.webp",
      "/images/remote/1776272283556-f2rjsdu93qh.webp",
      "/images/remote/1776272283767-l4j9y77h5s.webp",
      "/images/remote/1776272283988-a4l0cp2kqxo.webp",
      "/images/remote/1776272284463-lkzy0ha6ytd.webp",
      "/images/remote/1776272327684-x1qeyc6nqg.webp",
      "/images/remote/1776272327983-afiz6qafn5m.webp",
      "/images/remote/1776272328628-4nd2bbtspix.webp"
    ],
    "price": 45000,
    "rating": 4.7,
    "tags": [
      "All Inclusive",
      "Bord de mer",
      "Plage privée",
      "Resort familial",
      "Bungalows"
    ]
  }
]

ROOMS = [
  {
    "id": "nema-kadior-villa-casamance",
    "hotel_id": "nema-kadior",
    "name": "Villa Casamance",
    "surface_m2": 80,
    "capacity": 4,
    "beds": "Lit King Size + 2 lits simples",
    "price_fcfa": 95000,
    "description": "Villa privée avec piscine plunge, jardin clos et service personnalisé.",
    "image": "/images/remote/1776780485448-v6orwzw4la.webp",
    "amenities": [
      "Climatisation",
      "Minibar premium",
      "Piscine plunge",
      "Jardin privatif",
      "Salon extérieur",
      "Service personnalisé"
    ]
  },
  {
    "id": "nema-kadior-bungalow-fromager",
    "hotel_id": "nema-kadior",
    "name": "Bungalow Fromager",
    "surface_m2": 40,
    "capacity": 2,
    "beds": "Lit King Size",
    "price_fcfa": 62000,
    "description": "Bungalow indépendant niché sous les fromagers centenaires, avec terrasse et hamac.",
    "image": "/images/remote/1776780143994-yeofvvo2gwo.webp",
    "amenities": [
      "Climatisation",
      "Minibar",
      "Hamac",
      "Terrasse privée",
      "Douche extérieure",
      "Vue jardin"
    ]
  },
  {
    "id": "nema-kadior-chambre-diola",
    "hotel_id": "nema-kadior",
    "name": "Chambre Diola",
    "surface_m2": 30,
    "capacity": 2,
    "beds": "Lit double",
    "price_fcfa": 40000,
    "description": "Chambre de charme inspirée de l'architecture diola, avec mobilier artisanal local.",
    "image": "/images/remote/1776780207205-5zrkbt309z9.webp",
    "amenities": [
      "Ventilateur + Clim",
      "Mobilier artisanal",
      "Salle de bain",
      "Terrasse",
      "Jardin tropical"
    ]
  },
  {
    "id": "pelican-du-saloum-case-traditionnelle",
    "hotel_id": "pelican-du-saloum",
    "name": "Case Traditionnelle",
    "surface_m2": 28,
    "capacity": 2,
    "beds": "Lit double",
    "price_fcfa": 35000,
    "description": "Case rénovée avec tout le confort moderne, terrasse donnant sur les bolongs.",
    "image": "/images/remote/1776442572460-72acpoiqan.webp",
    "amenities": [
      "Ventilateur",
      "Moustiquaire",
      "Salle d'eau",
      "Terrasse privée",
      "Vue bolong"
    ]
  },
  {
    "id": "pelican-du-saloum-suite-baobab",
    "hotel_id": "pelican-du-saloum",
    "name": "Suite Baobab",
    "surface_m2": 55,
    "capacity": 3,
    "beds": "Lit King Size + Canapé-lit",
    "price_fcfa": 85000,
    "description": "Suite premium avec salon, vue à 360° sur le delta et accès privatif à la piscine.",
    "image": "/images/remote/1776442709786-1rwxu3a5h0r.webp",
    "amenities": [
      "Climatisation",
      "Minibar premium",
      "Salon",
      "Baignoire",
      "Vue 360°",
      "Piscine privative"
    ]
  },
  {
    "id": "pelican-du-saloum-lodge-mangrove",
    "hotel_id": "pelican-du-saloum",
    "name": "Lodge Mangrove",
    "surface_m2": 36,
    "capacity": 2,
    "beds": "Lit King Size",
    "price_fcfa": 55000,
    "description": "Lodge sur pilotis avec vue imprenable sur la mangrove. Immersion totale dans la nature.",
    "image": "/images/remote/1776442684786-2lt6xyrj36r.webp",
    "amenities": [
      "Climatisation",
      "Minibar",
      "Terrasse panoramique",
      "Douche à l'italienne",
      "Vue mangrove"
    ]
  },
  {
    "id": "royal-saly-chambre-sup-rieure",
    "hotel_id": "royal-saly",
    "name": "Chambre Supérieure",
    "surface_m2": 26,
    "capacity": 3,
    "beds": "1 lit double + 1 lit simple",
    "price_fcfa": 60000,
    "description": "Chambre spacieuse pour 3 personnes en bungalow, parfaite pour les amis ou petits groupes. Salle de bain privée, climatisation et terrasse sur le parc.",
    "image": "/images/remote/1776536564961-zuegnkcn1hp.webp",
    "amenities": [
      "Climatisation",
      "Salle de bain privée",
      "Terrasse ou balcon",
      "TV",
      "Téléphone",
      "Coffre-fort",
      "Sèche-cheveux",
      "Wifi",
      "Vue jardin"
    ]
  },
  {
    "id": "royal-saly-chambre-duplex-eco",
    "hotel_id": "royal-saly",
    "name": "Chambre Duplex Eco",
    "surface_m2": 60,
    "capacity": 4,
    "beds": "Lit double + divan",
    "price_fcfa": 95000,
    "description": "Junior suite spacieuse de 60 m² avec terrasse privative, divan, climatisation et salle de bain privée. Formule tout compris (repas, boissons, en-cas). Idéale pour les familles avec lits bébé gratuits et garde d'enfants disponible.",
    "image": "/images/remote/1776533082310-0esa6kjvknf9.webp",
    "amenities": [
      "Terrasse",
      "Climatisation",
      "Lits bébé gratuits",
      "Rideaux occultants",
      "Divan",
      "Salle de bain privée",
      "Tout compris (repas/boissons/en-cas)",
      "Parking sans voiturier gratuit",
      "Accès par couloirs extérieurs",
      "Accessibilité PMR",
      "Articles de toilette gratuits",
      "Douche",
      "Serviettes",
      "Draps",
      "Chaînes thématiques",
      "Télévision satellite",
      "Garde d'enfants (en supplément)",
      "Bouteille d'eau gratuite",
      "Minibar",
      "Réfrigérateur",
      "Bureau",
      "Coffre-fort",
      "Service de ménage quotidien",
      "Téléphone"
    ]
  },
  {
    "id": "royal-saly-chambre-eco",
    "hotel_id": "royal-saly",
    "name": "Chambre Eco",
    "surface_m2": 30,
    "capacity": 3,
    "beds": "1 lit double ou 2 lits simples",
    "price_fcfa": 65000,
    "description": "Chambre supérieure de 30 m² pouvant accueillir 3 personnes, avec terrasse, climatisation et salle de bain privée. Formule tout compris (repas, boissons, en-cas) et parking gratuit inclus.",
    "image": "/images/remote/1776687634197-61ylxqwpmox.webp",
    "amenities": [
      "Climatisation",
      "Lits bébé gratuits",
      "Rideaux opaques/occultants",
      "Divan",
      "Salle de bain privée",
      "Bouteille d'eau gratuite",
      "Tout compris (repas/boissons/en-cas)",
      "Parking sans voiturier gratuit",
      "Accès par couloirs extérieurs",
      "Accessibilité aux personnes à mobilité réduite",
      "Articles de toilette gratuits",
      "Douche",
      "Serviettes",
      "Draps",
      "Chaînes thématiques",
      "Télévision avec chaînes par satellite",
      "Garde d'enfants dans la chambre (en supplément)",
      "Lit bébé gratuit",
      "Bureau",
      "Service de ménage (tous les jours)",
      "Téléphone"
    ]
  }
]

SERVICES = [
  {
    "id": "nema-kadior-la-playa",
    "hotel_id": "nema-kadior",
    "name": "La playa",
    "type": "restaurant",
    "description": "De restaurant est",
    "hours": "7h 12H"
  },
  {
    "id": "pelican-du-saloum-le-bar-du-p-lican",
    "hotel_id": "pelican-du-saloum",
    "name": "Le bar du Pélican",
    "type": "restaurant",
    "description": "Ouvert tous les jours dès 7h00, le Bar du Pélican vous invite à vivre une expérience unique où élégance et ambiance balnéaire se rencontrent.\n\nFace à l’océan, dans un cadre enchanteur bercé par la brise marine, commencez votre journée avec des cafés d’exception et des jus frais, avant de laisser place, au fil des heures, à une atmosphère vibrante et festive.\n\nÀ la tombée du jour, le bar s’anime et devient un lieu incontournable : cocktails signature raffinés, musique envoûtante, couchers de soleil spectaculaires et ambiance chic décontractée. Chaque instant y est pensé pour offrir un moment d’évasion, entre luxe discret et convivialité.\n\nLe Bar du Pélican est bien plus qu’un simple bar : c’est une destination, un lieu de vie où se mêlent détente, plaisir et célébration au rythme de l’océan.",
    "hours": "7h-00h"
  },
  {
    "id": "royal-saly-bar-de-la-plage",
    "hotel_id": "royal-saly",
    "name": "Bar de la plage",
    "type": "bar",
    "description": "Bar donnant directement sur la plage avec vue sur la mer. Carte de cocktails alcoolisés et sans alcool, jus locaux (bissap, bouye), softs, bières et vins inclus dans la formule All Inclusive.",
    "hours": "10h00 - minuit"
  },
  {
    "id": "royal-saly-espace-barbecue",
    "hotel_id": "royal-saly",
    "name": "Espace Barbecue",
    "type": "restaurant",
    "description": "Installations barbecue en bord de mer pour des soirées grillades poissons et viandes dans une ambiance conviviale.",
    "hours": "Selon programme"
  },
  {
    "id": "royal-saly-piscine-ext-rieure",
    "hotel_id": "royal-saly",
    "name": "Piscine extérieure",
    "type": "activities",
    "description": "Grande piscine extérieure entourée de transats au cœur du parc arboré, avec espace solarium pour profiter du soleil de Saly.",
    "hours": "08h00 - 19h00"
  },
  {
    "id": "royal-saly-restaurant-principal",
    "hotel_id": "royal-saly",
    "name": "Restaurant principal",
    "type": "restaurant",
    "description": "Restaurant en formule buffet face à la mer. Le chef Mr Gaby propose chaque jour des buffets à thèmes mettant à l'honneur les spécialités locales sénégalaises et la cuisine internationale : crudités, poissons et viandes grillés, plats en sauce, couscous, desserts variés. Œufs et crêpes à la demande.",
    "hours": "07h00 - 22h00"
  },
  {
    "id": "royal-saly-piscine-pour-enfants",
    "hotel_id": "royal-saly",
    "name": "Piscine pour enfants",
    "type": "activities",
    "description": "Piscine peu profonde réservée aux enfants, sécurisée et surveillée par l'équipe.",
    "hours": "08h00 - 19h00"
  },
  {
    "id": "royal-saly-spa-massage",
    "hotel_id": "royal-saly",
    "name": "Spa & Massage",
    "type": "spa",
    "description": "Espace spa proposant massages relaxants et soins du corps pour parfaire votre séjour détente au Royal Saly.",
    "hours": "10h00 - 19h00"
  },
  {
    "id": "royal-saly-salle-de-fitness",
    "hotel_id": "royal-saly",
    "name": "Salle de fitness",
    "type": "activities",
    "description": "Salle de fitness équipée pour entretenir votre forme pendant vos vacances.",
    "hours": "07h00 - 21h00"
  },
  {
    "id": "royal-saly-plage-priv-e",
    "hotel_id": "royal-saly",
    "name": "Plage privée",
    "type": "activities",
    "description": "Accès direct à la plage privée de l'hôtel, idéale pour la baignade et la détente face à l'océan.",
    "hours": "24h/24"
  },
  {
    "id": "royal-saly-sports-nautiques",
    "hotel_id": "royal-saly",
    "name": "Sports nautiques",
    "type": "activities",
    "description": "Activités nautiques au départ de la plage de l'hôtel : pédalo, kayak, planche à voile et autres sports d'eau selon saison.",
    "hours": "09h00 - 18h00"
  },
  {
    "id": "royal-saly-p-che",
    "hotel_id": "royal-saly",
    "name": "Pêche",
    "type": "activities",
    "description": "Sorties pêche au gros et pêche côtière organisables depuis la plage de l'hôtel.",
    "hours": "Sur réservation"
  },
  {
    "id": "royal-saly-tennis",
    "hotel_id": "royal-saly",
    "name": "Tennis",
    "type": "activities",
    "description": "Court de tennis à disposition des clients pour un match en journée ou en soirée.",
    "hours": "08h00 - 20h00"
  },
  {
    "id": "royal-saly-tennis-de-table",
    "hotel_id": "royal-saly",
    "name": "Tennis de table",
    "type": "activities",
    "description": "Tables de ping-pong en accès libre dans l'espace loisirs.",
    "hours": "09h00 - 22h00"
  },
  {
    "id": "royal-saly-golf-de-saly",
    "hotel_id": "royal-saly",
    "name": "Golf de Saly",
    "type": "activities",
    "description": "L'hôtel se situe face au golf de Saly, parcours 18 trous accessible en quelques minutes.",
    "hours": "07h00 - 18h00"
  },
  {
    "id": "royal-saly-club-pour-enfants",
    "hotel_id": "royal-saly",
    "name": "Club pour enfants",
    "type": "activities",
    "description": "Mini-club avec animateurs qualifiés proposant jeux, activités créatives et sorties pour les enfants.",
    "hours": "09h00 - 17h00"
  },
  {
    "id": "royal-saly-jardin-d-enfants-garderie",
    "hotel_id": "royal-saly",
    "name": "Jardin d'enfants & garderie",
    "type": "activities",
    "description": "Jardin d'enfants avec jeux extérieurs et service de garderie pour les plus petits.",
    "hours": "09h00 - 18h00"
  },
  {
    "id": "royal-saly-quipe-d-animation",
    "hotel_id": "royal-saly",
    "name": "Équipe d'animation",
    "type": "activities",
    "description": "Animations matin et après-midi (volley, pétanque, foot, aquagym, jeux) et soirées à thèmes proposées par notre équipe d'animation.",
    "hours": "10h00 - minuit"
  },
  {
    "id": "royal-saly-bo-te-de-nuit",
    "hotel_id": "royal-saly",
    "name": "Boîte de nuit",
    "type": "activities",
    "description": "Discothèque de l'hôtel pour prolonger la soirée en musique.",
    "hours": "23h00 - 03h00"
  },
  {
    "id": "royal-saly-karaok",
    "hotel_id": "royal-saly",
    "name": "Karaoké",
    "type": "activities",
    "description": "Soirées karaoké régulières dans une ambiance festive.",
    "hours": "Selon programme"
  },
  {
    "id": "royal-saly-r-ception-24h-24",
    "hotel_id": "royal-saly",
    "name": "Réception 24h/24",
    "type": "activities",
    "description": "Réception ouverte 24h/24 avec coffre-fort, change de monnaie, presse, enregistrement et départ privé.",
    "hours": "24h/24"
  },
  {
    "id": "royal-saly-bureau-d-excursions",
    "hotel_id": "royal-saly",
    "name": "Bureau d'excursions",
    "type": "activities",
    "description": "Bureau d'excursions sur place pour organiser vos sorties : île de Gorée, lac Rose, réserve de Bandia, Saint-Louis, etc.",
    "hours": "09h00 - 18h00"
  },
  {
    "id": "royal-saly-service-de-transfert",
    "hotel_id": "royal-saly",
    "name": "Service de transfert",
    "type": "activities",
    "description": "Service de transferts depuis et vers l'aéroport international de Dakar (sur réservation).",
    "hours": "Sur réservation"
  },
  {
    "id": "royal-saly-boutique",
    "hotel_id": "royal-saly",
    "name": "Boutique",
    "type": "activities",
    "description": "Boutique de l'hôtel pour souvenirs, articles de plage et produits de première nécessité.",
    "hours": "09h00 - 20h00"
  },
  {
    "id": "royal-saly-salles-de-r-unions",
    "hotel_id": "royal-saly",
    "name": "Salles de réunions",
    "type": "activities",
    "description": "Salles de réunions modulables pour vos séminaires, conférences et événements professionnels.",
    "hours": "Sur réservation"
  }
]

BLOCKED_DATES = {r['id']: [] for r in ROOMS}
