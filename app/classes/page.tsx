"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const tabs = ["All Services", "YOGA", "MEDITATION", "RESTORATIVE"];

const allClasses = [
  { name: "ASHTANGA", price: "$15", type: "YOGA" },
  { name: "VINYASA", price: "$15", type: "YOGA" },
  { name: "BIKRAM", price: "$15", type: "YOGA" },
  { name: "FOCUSED", price: "$15", type: "MEDITATION" },
  { name: "MANTRA", price: "$15", type: "MEDITATION" },
  { name: "BREATHWORK", price: "$15", type: "RESTORATIVE" },
];

const ClassesPage = () => {
  const [activeTab, setActiveTab] = useState("All Services");
  const router = useRouter();

  const filteredClasses =
    activeTab === "All Services"
      ? allClasses
      : allClasses.filter((cls) => cls.type === activeTab);

  return (
    <section className="bg-[#5A582F] py-16 px-10 min-h-screen text-white">
      <h1 className="text-4xl font-semibold py-16 text-center mb-10">
        All Our Classes
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-10 mb-10 border-b border-white">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-lg cursor-pointer transition-all ${
              activeTab === tab
                ? "border-b-2 border-white font-semibold"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Classes List */}
      <div className="space-y-4 mt-10">
        {filteredClasses.map((cls, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-white py-6"
          >
            <h3 className="text-3xl font-medium">{cls.name}</h3>

            {/* Right side: Price and Button evenly spaced */}
            <div className="flex items-center gap-10">
              <p className="text-lg font-semibold">{cls.price}</p>
              <Link
                href={`/classes/${cls.name}`}
                className="px-4 py-2 border border-white text-white cursor-pointer hover:bg-white hover:text-[#5A582F] transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassesPage;
