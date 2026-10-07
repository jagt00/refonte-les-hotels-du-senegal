"""Client PMS — mode mock ou trames Booking.com vers Opera PMS 5.6.25.3.

Le PMS sera interrogé avec des trames inspirées de l'API Connectivity de
Booking.com (messages XML availability / reservation). Tant que l'admin PMS
finalise l'intégration, PMS_MODE=mock renvoie les données locales.
"""

import uuid
from datetime import date, datetime, timedelta

import requests
from flask import current_app

from . import mock_data


def _mode() -> str:
    return current_app.config.get("PMS_MODE", "mock")


def list_hotels() -> list[dict]:
    if _mode() == "opera":
        return _get("/hotels")
    return mock_data.HOTELS


def list_rooms(hotel_id: str | None = None) -> list[dict]:
    if _mode() == "opera":
        return _get(f"/hotels/{hotel_id}/rooms" if hotel_id else "/rooms")
    rooms = mock_data.ROOMS
    if hotel_id:
        rooms = [r for r in rooms if r["hotel_id"] == hotel_id]
    return rooms


def list_services(hotel_id: str | None = None) -> list[dict]:
    if _mode() == "opera":
        return _get(f"/hotels/{hotel_id}/services" if hotel_id else "/services")
    services = getattr(mock_data, "SERVICES", [])
    if hotel_id:
        services = [s for s in services if s["hotel_id"] == hotel_id]
    return services


def get_availability(room_id: str, start: date, end: date) -> dict:
    """Retourne la disponibilité nuit par nuit d'une chambre."""
    if _mode() == "opera":
        return _get(f"/rooms/{room_id}/availability?start={start.isoformat()}&end={end.isoformat()}")
    blocked = set(mock_data.BLOCKED_DATES.get(room_id, []))
    nights = []
    d = start
    while d < end:
        nights.append({"date": d.isoformat(), "available": d.isoformat() not in blocked})
        d += timedelta(days=1)
    return {"room_id": room_id, "start": start.isoformat(), "end": end.isoformat(), "nights": nights}


def create_reservation(payload: dict) -> dict:
    """Crée une réservation (durée, nom client, date d'entrée, origine = site web,
    mode de paiement, nationalité)."""
    if _mode() == "opera":
        return _post("/reservations", xml=_reservation_xml(payload))
    return {
        "reservation_id": "RES-" + uuid.uuid4().hex[:8].upper(),
        "status": "confirmed",
        "origin": payload.get("origin", "website"),
        "created_at": datetime.utcnow().isoformat() + "Z",
        **payload,
    }


def _get(path: str):
    resp = requests.get(
        current_app.config["PMS_BASE_URL"] + path,
        auth=(current_app.config["PMS_USERNAME"], current_app.config["PMS_PASSWORD"]),
        headers={"X-API-Key": current_app.config["PMS_API_KEY"]},
        timeout=15,
    )
    resp.raise_for_status()
    return resp.json()


def _post(path: str, xml: str):
    resp = requests.post(
        current_app.config["PMS_BASE_URL"] + path,
        data=xml.encode("utf-8"),
        auth=(current_app.config["PMS_USERNAME"], current_app.config["PMS_PASSWORD"]),
        headers={"X-API-Key": current_app.config["PMS_API_KEY"], "Content-Type": "application/xml"},
        timeout=15,
    )
    resp.raise_for_status()
    return resp.json()


def _reservation_xml(p: dict) -> str:
    """Trame inspirée de l'API de push réservations Booking.com."""
    return f"""<reservation>
  <hotel_id>{p['hotel_id']}</hotel_id>
  <room_id>{p['room_id']}</room_id>
  <guest><name>{p['guest_name']}</name><nationality>{p.get('nationality','')}</nationality></guest>
  <checkin>{p['checkin']}</checkin>
  <checkout>{p['checkout']}</checkout>
  <payment_method>{p.get('payment_method','')}</payment_method>
  <origin>{p.get('origin','website')}</origin>
</reservation>"""
