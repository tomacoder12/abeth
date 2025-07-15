"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const UpcomingEvents = () => {
  return (
    <section className="bg-[#5A582F] py-16 px-10">
      {/* Flex Row: Text + Image */}
      <div className="border border-white flex flex-col md:flex-row overflow-hidden min-h-[400px]">
        {/* Left Side: Text Content */}
        <div className="md:w-2/3 p-8 md:p-16 text-white flex flex-col justify-center">
          <p className="text-xl font-semibold mb-10 tracking-wider uppercase">
            Wellness Benefits
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-12">
            UNLOCK A HEALTHIER, STRONGER, AND MORE BALANCED YOU.
          </h2>
        </div>

        {/* Right Side: Image with Left Border */}
        <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-white p-6 flex items-center justify-center">
          <Image
            src="/explore.avif"
            alt="explore"
            width={500}
            height={100}
            style={{ borderRadius: "50px" }}
          />
        </div>
      </div>

      {/* Wellness Benefits Section */}
      <div className="mt-20 text-white text-center px-4">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-4">
          You Stand to Gain
        </h3>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Discover the powerful benefits of living well — physically, mentally, and emotionally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Increased Energy",
              desc: "Daily movement and better sleep hygiene fuel your body and boost stamina naturally.",
            },
            {
              title: "Improved Mental Health",
              desc: "Reduce anxiety and stress while enhancing mood and emotional clarity through mindful practices.",
            },
            {
              title: "Stronger Immunity",
              desc: "Consistent wellness routines help strengthen your immune system and improve long-term resilience.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1],
                delay: index * 0.1,
              }}
              className="border border-white p-8 flex flex-col items-center hover:scale-105 transition hover:shadow-lg"
            >
              <h4 className="text-2xl font-bold mb-3">{benefit.title}</h4>
              <p className="mb-4 text-center">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
