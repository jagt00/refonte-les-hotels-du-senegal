# Les Hôtels du Sénégal — Site web du groupe

Site du groupe hôtelier **Les Hôtels du Sénégal** : frontend React + backend Flask relié par API au PMS des 3 hôtels (mode mock pour l'instant, intégration Opera PMS 5.6.25.3 à venir).

## Structure

```
backend/    API Flask (hotels, rooms, disponibilités, réservations, paiement)
frontend/   SPA React + Vite + Tailwind CSS
```

## Lancer le projet

Backend :
```bash
cd backend
..\\.venv\\Scripts\\python run.py   # http://localhost:5000
```

Frontend :
```bash
cd frontend
npm install
npm run dev                          # http://localhost:5173
```

## API

| Méthode | Route | Description |
|---|---|---|
| GET | /api/health | Statut + mode PMS |
| GET | /api/hotels | Liste des 3 hôtels |
| GET | /api/rooms?hotel_id= | Liste des chambres |
| GET | /api/availability/<room_id>?start=&end= | Disponibilités nuit par nuit |
| POST | /api/reservations | Créer une réservation (durée, nom, dates, origine, paiement, nationalité) |
| POST | /api/payments/initiate | Paiement Bictorys (à venir) |
