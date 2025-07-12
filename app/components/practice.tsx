"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { circOut } from "framer-motion";

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

const PracticeSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#978C72] via-[#8C8D75] via-30% via-[#7B7C68] via-60% via-[#5B542D] to-[#8D7958] py-16 flex justify-center px-10">
      <div className="w-full border border-white">
        {/* Header */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white py-8 border-b border-white">
          Practice with Us
        </h2>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:flex divide-y md:divide-y-0 md:divide-x divide-white text-white">
          {/* Yoga */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 flex flex-col justify-between md:w-1/2"
          >
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/yoga.jpg"
                  alt="Yoga"
                  width={500}
                  height={100}
                  className="text-center"
                  style={{ borderRadius: "50px" }}
                />
              </motion.div>
            </div>
            <div className="flex justify-between items-center border-t border-white pt-4 mt-10">
              <h3 className="text-lg font-medium">Yoga</h3>
              <a
                href="/meditations"
                className="hover:underline transition duration-200 hover:text-yellow-200"
              >
                Explore Classes →
              </a>
            </div>
          </motion.div>

          {/* Meditation */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 flex flex-col justify-between md:w-1/2"
          >
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/meditate.jpg"
                  alt="Meditation"
                  width={500}
                  height={100}
                  style={{ borderRadius: "50px" }}
                />
              </motion.div>
            </div>
            <div className="flex justify-between items-center border-t border-white pt-4 mt-10">
              <h3 className="text-lg font-medium">Meditations</h3>
              <a
                href="/meditations"
                className="hover:underline transition duration-200 hover:text-yellow-200"
              >
                Explore Classes →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;