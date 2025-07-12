"use client";

import { Calendar } from "@/components/ui/calendar";
import { routes } from "@/constants";
import { classAvailability } from "@/constants/data";
import { Availability } from "@/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function getNextAvailableDate(avail: Availability, fromDate: Date): Date | null {
  const dt = new Date(fromDate);
  for (let i = 1; i <= 365; i++) {
    dt.setDate(dt.getDate() + 1);
    const weekday = dt.toLocaleDateString("en-US", { weekday: "long" });
    const dateStr = dt.toISOString().slice(0, 10);
    const off = avail.overrides?.find((o) => o.date === dateStr);
    const hasWeekly = !!avail.weeklyHours[weekday]?.length;
    if (!off?.isClosed && hasWeekly) return new Date(dt);
  }
  return null;
}

export default function BookingPage({
  classNameParam,
}: {
  classNameParam: keyof typeof classAvailability;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [nextAvailableDate, setNextAvailableDate] = useState<Date | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const avail = classAvailability[classNameParam];

  const weekday = selectedDate?.toLocaleDateString("en-US", { weekday: "long" }) ?? "";
  const dateStr = selectedDate?.toISOString().slice(0, 10) ?? "";
  const isClosed = avail.overrides?.some((o) => o.date === dateStr && o.isClosed);
  const weeklyTimes = avail.weeklyHours[weekday] || [];
  const times = !isClosed && weeklyTimes.length ? weeklyTimes : [];

  return (
    <section className="bg-[#5A582F] py-16 px-10 min-h-screen text-white">
      <div className="container mx-auto py-28 space-y-8 max-w-7xl">
        {/* Header */}
        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <ArrowLeft />
            <Link href={routes.CLASSES} className="text-white">
              Back
            </Link>
          </div>
          <h1 className="font-semibold text-5xl mb-2">Schedule your service</h1>
          <p className="text-gray-200 text-md">
            Check out our availability and book the date and time that works for you
          </p>
        </div>

        {/* Main content */}
        <div className="flex items-start justify-between space-x-10">
          {/* Calendar + Time */}
          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full">
              {/* Date section title with border */}
              <div className="border-b border-white mb-6 flex items-center justify-between">
                <p className="text-lg pb-2">Select a Date and Time</p>
                <p className="text-sm opacity-80">Time zone: {avail.timeZone}</p>
              </div>

              <div className="flex items-start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setNextAvailableDate(null);
                  }}
                  className="w-96"
                  disabled={(d) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const w = d.toLocaleDateString("en-US", { weekday: "long" });
                    const sd = d.toISOString().slice(0, 10);
                    return (
                      d < today ||
                      avail.overrides?.some((o) => o.date === sd && o.isClosed) ||
                      !avail.weeklyHours[w]?.length
                    );
                  }}
                />

                <div className="ml-6 text-white py-8">
                  <p className="font-semibold text-lg mb-2">
                    Availability for{" "}
                    {selectedDate?.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  {times.length ? (
                    <div className="border border-white px-4 py-2 cursor-default hover:bg-white hover:text-[#5A582F] transition select-none">
                      <ul className="list-disc list-inside m-0">
                        {times.map(({ open, close }) => (
                          <li key={open}>
                            {open} – {close}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="border border-white px-4 py-2 cursor-default hover:bg-white hover:text-[#5A582F] transition select-none">
                      No availability
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="w-96 text-white">
            {/* Title with matching border */}
            <div className="border-b border-white mb-6">
              <p className="text-lg pb-2">Service Details</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-xl">{avail.label}</p>
              <p>${avail.price}</p>

              {selectedDate && times.length > 0 && (
                <>
                  <p>
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    at {times[0].open}
                  </p>
                  <p>{avail.location}</p>
                  <p>{avail.instructor}</p>
                  <p>{avail.duration}</p>
                </>
              )}

              {/* More details toggle */}
              <div className="mt-2">
                <button
                  onClick={() => setShowDetails((prev) => !prev)}
                  className="flex items-center space-x-1 text-sm"
                >
                  <span>{showDetails ? "Less details" : "More details"}</span>
                  <span
                    className={`transform transition-transform ${
                      showDetails ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-2 space-y-1 text-sm text-gray-300"
                    >
                      {avail.description && <p>{avail.description}</p>}
                      {avail.type && <p>Class type: {avail.type}</p>}
                      {avail.tags && avail.tags.length > 0 && (
                        <p>Tags: {avail.tags.join(", ")}</p>
                      )}
                      {avail.capacity && <p>Capacity: {avail.capacity} people</p>}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button className="mt-6 w-full cursor-pointer px-4 py-2 border border-white hover:bg-white hover:text-[#5A582F] transition">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
