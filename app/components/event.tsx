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
            Upcoming Events
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-12">
            EXPLORE OUR UPCOMING WORKSHOPS AND SPECIAL EVENTS.
          </h2>

          <a
            href="/events"
            className="font-medium text-white hover:underline flex items-center gap-2 w-max text-lg"
          >
            Explore →
          </a>
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

      {/* Become One of Us Section */}
      <div className="mt-20 text-white text-center px-4">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-4">
          Become One of Us
        </h3>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Choose a membership plan to start your journey with us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Basic",
              desc: "Great for beginners and casual practitioners.",
              price: "$19/mo",
              link: "/subscribe/basic",
            },
            {
              title: "Standard",
              desc: "Full access to classes, online materials, and live events.",
              price: "$39/mo",
              link: "/subscribe/standard",
            },
            {
              title: "Premium",
              desc: "All-inclusive package with private sessions and events.",
              price: "$69/mo",
              link: "/subscribe/premium",
            },
          ].map((plan, index) => (
            <motion.div
              key={plan.title}
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
              <h4 className="text-2xl font-bold mb-3">{plan.title}</h4>
              <p className="mb-4 text-center">{plan.desc}</p>
              <span className="text-3xl font-semibold mb-6">{plan.price}</span>
              <a
                href={plan.link}
                className="mt-auto text-white font-semibold px-6 py-2 border border-white hover:bg-white hover:text-black transition"
              >
                Select
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
