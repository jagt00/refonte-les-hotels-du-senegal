from datetime import date, datetime

from flask import Blueprint, abort, current_app, jsonify, request

from .pms import opera_client

bp = Blueprint("api", __name__, url_prefix="/api")


@bp.get("/health")
def health():
    return jsonify({"status": "ok", "pms_mode": current_app.config["PMS_MODE"]})


@bp.get("/hotels")
def hotels():
    return jsonify(opera_client.list_hotels())


@bp.get("/services")
def services():
    hotel_id = request.args.get("hotel_id")
    return jsonify(opera_client.list_services(hotel_id))


@bp.get("/hotels/<hotel_id>")
def hotel_detail(hotel_id):
    hotel = next((h for h in opera_client.list_hotels() if h["id"] == hotel_id), None)
    if hotel is None:
        abort(404, description="Hôtel introuvable")
    hotel["rooms"] = opera_client.list_rooms(hotel_id)
    return jsonify(hotel)


@bp.get("/rooms/<room_id>")
def room_detail(room_id):
    room = next((r for r in opera_client.list_rooms() if r["id"] == room_id), None)
    if room is None:
        abort(404, description="Chambre introuvable")
    return jsonify(room)


@bp.get("/rooms")
def rooms():
    hotel_id = request.args.get("hotel_id")
    return jsonify(opera_client.list_rooms(hotel_id))


@bp.get("/availability/<room_id>")
def availability(room_id):
    try:
        start = datetime.strptime(request.args["start"], "%Y-%m-%d").date()
        end = datetime.strptime(request.args["end"], "%Y-%m-%d").date()
    except (KeyError, ValueError):
        abort(400, description="Paramètres start/end requis au format YYYY-MM-DD")
    if end <= start:
        abort(400, description="end doit être postérieure à start")
    return jsonify(opera_client.get_availability(room_id, start, end))


@bp.post("/reservations")
def reservations():
    data = request.get_json(silent=True) or {}
    required = ["hotel_id", "room_id", "guest_name", "checkin", "checkout"]
    missing = [k for k in required if k not in data]
    if missing:
        abort(400, description=f"Champs manquants: {', '.join(missing)}")
    try:
        checkin = datetime.strptime(data["checkin"], "%Y-%m-%d").date()
        checkout = datetime.strptime(data["checkout"], "%Y-%m-%d").date()
    except ValueError:
        abort(400, description="checkin/checkout au format YYYY-MM-DD")
    if checkout <= checkin:
        abort(400, description="checkout doit être postérieur à checkin")
    payload = {
        "hotel_id": data["hotel_id"],
        "room_id": data["room_id"],
        "guest_name": data["guest_name"],
        "nationality": data.get("nationality", ""),
        "checkin": data["checkin"],
        "checkout": data["checkout"],
        "duration_nights": (checkout - checkin).days,
        "payment_method": data.get("payment_method", ""),
        "origin": data.get("origin", "website"),
    }
    return jsonify(opera_client.create_reservation(payload)), 201


@bp.post("/payments/initiate")
def payments_initiate():
    """Point d'entrée paiement Bictorys — implémentation à venir."""
    data = request.get_json(silent=True) or {}
    return jsonify({
        "status": "pending_implementation",
        "provider": "bictorys",
        "amount": data.get("amount"),
        "currency": data.get("currency", "XOF"),
    }), 202
