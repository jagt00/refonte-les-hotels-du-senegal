import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetail from "./pages/HotelDetail";
import RoomDetail from "./pages/RoomDetail";
import Booking from "./pages/Booking";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="font-sans text-ink">
      <Header onBook={() => setModalOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetail />} />
          <Route path="/chambres/:id" element={<RoomDetail />} />
          <Route path="/reserver" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
