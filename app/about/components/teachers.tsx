"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const circOut: [number, number, number, number] = [0.55, 0.085, 0.68, 0.53];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: circOut,
    },
  },
};

const teachers = [
  {
    name: "John",
    description: "John brings a calming presence and deep knowledge to every class, grounding students with his steady guidance.",
    src: "/john.avif",
  },
  {
    name: "Alice",
    description: "Alice inspires with her graceful energy and intuitive teaching style, making every session feel meaningful.",
    src: "/alice.avif",
  },
  {
    name: "Bo",
    description: "Bo’s classes are a blend of focus and flow, creating space for both strength and stillness.",
    src: "/bo.avif",
  },
  {
    name: "Shelly",
    description: "Shelly lights up the room with positivity, encouraging students to explore movement with confidence and joy.",
    src: "/shelly.avif",
  },
  {
    name: "Sun",
    description: "Sun lives up to her name—radiant, uplifting, and full of warmth that shines through her teaching.",
    src: "/sun.avif",
  },
  {
    name: "Melanie",
    description: "Melanie blends compassion with precision, helping every student feel seen, supported, and empowered.",
    src: "/melanie.avif",
  },
  {
    name: "Anais",
    description: "Anais brings quiet strength and creative flow, guiding students through a practice that feels both grounding and free.",
    src: "/anais.avif",
  },
  {
    name: "Snow",
    description: "Snow is the studio’s furry soul—a loyal, loving pup who reminds everyone to stay playful and present.",
    src: "/snow.avif",
  },
];

const Teachers = () => {
  const totalCols = 4;

  return (
    <section className="bg-[#F7F4EF] py-16 px-10">
      <div className="w-full border border-[#1F1F1F]">
        {/* Header */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1F1F1F] py-8 border-b border-[#1F1F1F]">
          Meet the Teachers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {teachers.map(({ name, description, src }, index) => {
            const isRight = (index + 1) % totalCols !== 0;
            const isBottom = index < teachers.length - totalCols;

            let borderClass =
              "border-[#1F1F1F] p-0 flex flex-col justify-between";
            if (isRight) borderClass += " border-r";
            if (isBottom) borderClass += " border-b";

            return (
              <motion.div
                key={name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={borderClass}
              >
                {/* Image */}
                <div className="w-full max-w-sm mx-auto p-6">
                  <Image
                    src={src}
                    alt={name}
                    width={300}
                    height={300}
                    className="rounded-[50px] object-cover w-full h-auto"
                  />
                </div>

                {/* Boxed name/desc section with top border that touches the box */}
                <div className="border-t border-[#1F1F1F] px-6 pt-4 pb-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#1F1F1F]">
                    {name}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#1F1F1F]">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
