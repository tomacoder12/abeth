"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  const people = [
    {
      name: "Hanna M",
      age: 36,
      quote:
        "Abeth has truly transformed how I show up for myself each day. I never imagined yoga could be this grounding and uplifting.",
    },
    {
      name: "Jordan H",
      age: 25,
      quote:
        "I started with zero flexibility and a lot of doubt. Now, I look forward to every session — it’s become the best part of my week.",
    },
    {
      name: "Tara S",
      age: 28,
      quote:
        "The instructors are incredibly supportive, and the space is so welcoming. It feels like home every time I walk in.",
    },
    {
      name: "Joel G",
      age: 41,
      quote:
        "This studio helped me find balance again — mentally and physically. It’s more than just yoga; it’s a mindset shift.",
    },
  ];

  return (
    <section className="bg-[#F7F4EF] px-10 py-16 text-[#1F1F1F]">
      <div className="border border-[#1F1F1F] flex flex-col md:flex-row overflow-hidden min-h-[400px]">
        {/* Left: Heading + Testimonials */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-2/3 flex flex-col justify-center"
        >
          {/* Header */}
          <div className="p-8 md:p-16">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-12">
              WHAT PEOPLE <br /> ARE SAYING
            </h2>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#1F1F1F]">
            {people.map((person, index) => {
              let borderStyles =
                "p-6 md:p-8 flex flex-col justify-between h-full border-[#1F1F1F]";

              const isRight = index % 2 === 0; // Left column (0, 2)
              const isBottom = index < 2; // Top row (0, 1)

              if (isRight) borderStyles += " sm:border-r";
              if (isBottom) borderStyles += " border-b";

              // Remove specific borders for Jordan and Tara
              if (index === 1)
                borderStyles = borderStyles.replace("sm:border-r", ""); // Jordan: no right border
              if (index === 2)
                borderStyles = borderStyles.replace("border-b", ""); // Tara: no bottom

              return (
                <div key={index} className={borderStyles}>
                  <p className="mb-4 text-[#74736D]">{person.quote}</p>
                  <p className="font-bold text-base">
                    {person.name}, {person.age}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/3 border-t md:border-t-0 md:border-l border-[#1F1F1F] p-5 flex items-center justify-center"
        >
          <div className="w-full max-w-lg">
            <Image
              src="/friends.avif"
              alt="Feel the Flow"
              width={500}
              height={500}
              className="rounded-[50px] object-cover w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
