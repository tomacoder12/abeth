import React from "react";

const Hero = () => {
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
