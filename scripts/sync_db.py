"""Synchronise les données du groupe depuis le Supabase du site existant.
Génère backend/app/pms/mock_data.py et télécharge les images dans frontend/public/images/remote.
"""
import io
import json
import os
import re
import requests

SUPABASE_URL = "https://fagnpedgmurqhcvtcmxp.supabase.co"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhZ25wZWRnbXVycWhjdnRjbXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3MjA5MTUsImV4cCI6MjA5MTI5NjkxNX0.zsKgSr5yHS6Gepy9jETJ8gCXyBCUTH7RmYAdou9j-vU"
H = {"apikey": ANON_KEY, "Authorization": f"Bearer {ANON_KEY}"}
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "frontend", "public", "images", "remote")
os.makedirs(IMG_DIR, exist_ok=True)


def get(path, params):
    r = requests.get(f"{SUPABASE_URL}/rest/v1/{path}?{params}", headers=H, timeout=30)
    r.raise_for_status()
    return r.json()


def download(url):
    if not url:
        return None
    fname = url.split("/")[-1]
    dest = os.path.join(IMG_DIR, fname)
    if not os.path.exists(dest):
        r = requests.get(url, timeout=60)
        r.raise_for_status()
        with open(dest, "wb") as f:
            f.write(r.content)
    return f"/images/remote/{fname}"


def slugify(s):
    return re.sub(r"[^a-zA-Z0-9]+", "-", s.lower().strip()).strip("-")


hotels = get("hotels", "select=id,name,slug,location,country,description,price,rating,tags,image_url,gallery")
rooms = get("room_types", "select=name,category,description,price,max_guests,bed_type,size,amenities,image_url,hotel_id,is_available")
services = get("hotel_services", "select=hotel_id,name,service_type,description,opening_hours,sort_order")

out_hotels, out_rooms, out_services = [], [], []
for h in hotels:
    h_id = h["slug"] or slugify(h["name"])
    out_hotels.append({
        "id": h_id,
        "name": h["name"],
        "city": h.get("location") or "",
        "country": h.get("country") or "Sénégal",
        "stars": 5 if "royal" in h_id else 4,
        "description": h.get("description") or "",
        "image": download(h.get("image_url")) or "",
        "gallery": [u for u in (download(g) for g in (h.get("gallery") or [])) if u],
        "price": h.get("price") or 0,
        "rating": h.get("rating") or 0,
        "tags": h.get("tags") or [],
    })
    for r in rooms:
        if r["hotel_id"] != h["id"] or not r.get("is_available") or not r.get("price"):
            continue
        out_rooms.append({
            "id": f"{h_id}-{slugify(r['name'])}",
            "hotel_id": h_id,
            "name": r["name"],
            "surface_m2": int(re.sub(r"[^0-9]", "", r.get("size") or "0") or 0),
            "capacity": r.get("max_guests") or 2,
            "beds": r.get("bed_type") or "",
            "price_fcfa": r.get("price") or 0,
            "description": r.get("description") or "",
            "image": download(r.get("image_url")) or "",
            "amenities": r.get("amenities") or [],
        })
    for s in services:
        if s["hotel_id"] != h["id"]:
            continue
        out_services.append({
            "id": f"{h_id}-{slugify(s['name'])}",
            "hotel_id": h_id,
            "name": s["name"],
            "type": s.get("service_type") or "",
            "description": s.get("description") or "",
            "hours": s.get("opening_hours") or "",
        })

me = os.path.join(ROOT, "backend", "app", "pms", "mock_data.py")
with io.open(me, "w", encoding="utf-8") as f:
    f.write('"""DONNÉES GÉNÉRÉES depuis Supabase (scripts/sync_db.py). Ne pas éditer à la main."""\n\n')
    f.write("HOTELS = " + json.dumps(out_hotels, ensure_ascii=False, indent=2) + "\n\n")
    f.write("ROOMS = " + json.dumps(out_rooms, ensure_ascii=False, indent=2) + "\n\n")
    f.write("SERVICES = " + json.dumps(out_services, ensure_ascii=False, indent=2) + "\n\n")
    f.write("BLOCKED_DATES = {r['id']: [] for r in ROOMS}\n")

print(f"{len(out_hotels)} hôtels, {len(out_rooms)} chambres, {len(out_services)} services")
