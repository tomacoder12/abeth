import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-80 w-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/about.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Centered Hero Text */}
      <div className="relative z-10 flex items-center justify-center h-full px-8">
        <h2 className="text-gray-200 font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-tight animate-slide-in">
          ABOUT
        </h2>
      </div>
    </div>
  );
};

export default Hero;
