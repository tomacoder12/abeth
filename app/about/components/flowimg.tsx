"use client";

export default function FloatingImages() {
  return (
    <section className="relative h-[200vh] bg-[#5A582F] overflow-hidden">
      {/* Floating images scroll past */}
      <img
        src="/float1.avif"
        alt="Yoga Pose"
        className="absolute top-[10vh] left-[10vw] w-56 md:w-80 rounded-xl shadow-2xl"
      />
      <img
        src="/float2.avif"
        alt="Yoga Pose"
        className="absolute top-[50vh] right-[15vw] w-56 md:w-80 rounded-xl shadow-2xl"
      />
      <img
        src="/float3.avif"
        alt="Yoga Pose"
        className="absolute top-[100vh] left-[20vw] w-56 md:w-80 rounded-xl shadow-2xl"
      />
      <img
        src="/float4.avif"
        alt="Yoga Pose"
        className="absolute top-[150vh] right-[10vw] w-56 md:w-80 rounded-xl shadow-2xl"
      />
    </section>
  );
}
