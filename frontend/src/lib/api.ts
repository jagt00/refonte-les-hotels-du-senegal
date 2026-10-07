import axios from "axios";

export const api = axios.create({ baseURL: "/api" });

export interface Hotel {
  id: string;
  name: string;
  city: string;
  country: string;
  stars: number;
  description: string;
  image: string;
}

export interface Room {
  id: string;
  hotel_id: string;
  name: string;
  surface_m2: number;
  capacity: number;
  beds: string;
  price_fcfa: number;
  description: string;
  image: string;
}

export interface ReservationPayload {
  hotel_id: string;
  room_id: string;
  guest_name: string;
  nationality: string;
  checkin: string;
  checkout: string;
  payment_method: string;
  origin: string;
}
