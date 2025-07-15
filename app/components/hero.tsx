import React, { useEffect, useState } from "react";

const Hero = () => {
  const [bookings, setBookings] = useState([]);
  console.log(bookings)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch('/api/bookings');
        if (!res.ok) throw new Error('Failed to fetch bookings');
        const data = await res.json();
        setBookings(data);
        console.log("Bookings:", data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      {/* Overlay (behind nav) */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Hero Text (above overlay) */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 pt-32 max-w-6xl">
        <h2 className="text-gray-200 font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-tight animate-slide-in">
          YOGA. <br />
          MEDITATION. <br />
          WELLBEING.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
