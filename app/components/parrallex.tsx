export default function ParallaxYoga() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      {/* Overlay Image - Bottom Left */}
      <img
        src="/overlay1.avif"
        alt="Yoga Pose 1"
        className="absolute bottom-24 left-20 w-56 md:w-80 rounded-xl shadow-2xl z-10"
      />

      {/* Overlay Image - Top Right */}
      <img
        src="/overlay2.avif"
        alt="Yoga Pose 2"
        className="absolute top-24 right-20 w-56 md:w-80 rounded-xl shadow-2xl z-10"
      />
    </section>
  );
}
