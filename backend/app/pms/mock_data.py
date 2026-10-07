"""Mock data for the 3 hotels of the group."""

HOTELS = [
    {
        "id": "resort-ile-de-la-dame",
        "name": "Resort Île-de-la-Dame",
        "city": "Saly Portudal",
        "country": "Sénégal",
        "stars": 5,
        "description": "Resort 5 étoiles en bord de mer, luxe, tranquillité & raffinement.",
        "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    },
    {
        "id": "maison-gorée",
        "name": "Maison Gorée",
        "city": "Île de Gorée",
        "country": "Sénégal",
        "stars": 4,
        "description": "Maison d'hôtes de charme au cœur des ruelles historiques de l'île.",
        "image": "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
    },
    {
        "id": "riad-dakar-luxe",
        "name": "Riad Dakar Luxe",
        "city": "Dakar",
        "country": "Sénégal",
        "stars": 5,
        "description": "Riad contemporain à deux pas de la corniche, spa et rooftop.",
        "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    },
]

ROOMS = [
    {"id": "villa-vue-ocean", "hotel_id": "resort-ile-de-la-dame", "name": "Villa Vue Océan",
     "surface_m2": 84, "capacity": 2, "beds": "1 Lit King", "price_fcfa": 350000,
     "description": "Emplacement face à la plage, espace intérieur de 60 m², piscine à débordement privée.",
     "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop"},
    {"id": "residence-premium", "hotel_id": "resort-ile-de-la-dame", "name": "Résidence Premium",
     "surface_m2": 200, "capacity": 6, "beds": "3 Lits King", "price_fcfa": 600000,
     "description": "Vue panoramique sur l'océan, jardin tropical privé, idéale pour les familles.",
     "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop"},
    {"id": "suite-bord-de-mer", "hotel_id": "maison-gorée", "name": "Suite Bord de Mer",
     "surface_m2": 60, "capacity": 2, "beds": "1 Lit King", "price_fcfa": 250000,
     "description": "Intime et lumineuse, accès direct à la plage et service en chambre.",
     "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop"},
    {"id": "chambre-deluxe", "hotel_id": "riad-dakar-luxe", "name": "Chambre Deluxe",
     "surface_m2": 45, "capacity": 2, "beds": "1 Lit King", "price_fcfa": 180000,
     "description": "Chambre élégante avec vue ville ou jardin intérieur.",
     "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop"},
]

# Simple availability calendar: room_id -> list of blocked dates (YYYY-MM-DD)
BLOCKED_DATES = {
    "villa-vue-ocean": ["2026-10-10", "2026-10-11", "2026-11-01"],
    "residence-premium": ["2026-10-20", "2026-12-25", "2026-12-26"],
    "suite-bord-de-mer": [],
    "chambre-deluxe": ["2026-10-15"],
}
