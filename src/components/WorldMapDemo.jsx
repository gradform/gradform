"use client";
import { WorldMap } from "./WorldMap";
import { motion } from "framer-motion"; // Changed from "motion/react" to "framer-motion"
import { cn } from "../lib/utils"; // Import cn utility

export function WorldMapDemo() {
  return (
    <section id="explore-opportunities" className="w-full py-20 flex justify-center items-center flex-col">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-white text-center">Gradform Destinations</h2>
        <div className={cn(
          "relative w-full overflow-hidden rounded-2xl p-4 md:p-8 shadow-xl",
          "bg-linear-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 backdrop-blur-lg"
        )}>
          <div className="flex justify-center">
            <WorldMap lineColor="#3B82F6" /> {/* Changed line color to a brighter blue for better visibility */}
          </div>
          <p className="mt-8 text-center text-lg text-gray-300">
            Our mentorship covers 5+ destinations, but we don’t stop there. If your target country isn’t included yet, we’ll customize our guidance to fit your goals, because genuine, research-driven support has no borders.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="/explore" className="bg-white text-[#0000CD] px-6 py-3 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-sm font-medium drop-shadow-lg font-inter min-w-[180px] flex justify-center items-center">Explore Destinations</a>
          </div>
        </div>
      </div>
    </section>
  );
}
