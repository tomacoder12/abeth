"use client";

import { routes } from "@/constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AboutSection() {
  const router = useRouter()
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative bg-[#F5F3EB] pt-12 pb-24">
      <div className="px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40 text-center">
        {/* Top row images – hidden on mobile */}
        <div className="hidden md:flex md:justify-between gap-6 mb-12">
          <img
            src="/hand.avif"
            alt="Hands"
            className="w-full md:w-96 object-cover rounded-md transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
          />
          <img
            src="/pray.avif"
            alt="Pose"
            className="w-full md:w-56 h-auto object-cover rounded-md transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
          />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4" data-aos="fade-up">
          We Are Abeth
        </h2>
        <h1
          className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          WE BELIEVE YOGA CAN INSPIRE TRANSFORMATION, ANYTIME, ANYWHERE.
        </h1>

        {/* Paragraph */}
        <p
          className="text-gray-700 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At Abeth, we are committed to bringing balance and joy to your life.
          We offer a broad range of classes for every level. It&apos;s time to invite
          more meaning and calm to your daily routine.
        </p>

        {/* View Classes Button */}
        <button
          className="mt-6 inline-flex cursor-pointer items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700 transition transform hover:scale-105 motion-safe:animate-pulse"
          onClick={() => router.push(routes.BOOK_CLASS)}
          aria-label="View Classes about Abeth"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          View Classes
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom row images – hidden on mobile */}
        <div className="hidden md:flex md:justify-between gap-6 mt-12">
          <img
            src="/stretch.avif"
            alt="Stretch"
            className="w-full md:w-56 h-auto object-cover rounded-md transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <img
            src="/beads.jpeg"
            alt="Namaste"
            className="w-full md:w-56 h-auto object-cover rounded-md transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>

        {/* Fifth Image – always visible */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="500">
          <img
            src="/group.avif"
            alt="Group Yoga Session"
            className="mx-auto w-full max-w-xs md:max-w-sm object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
