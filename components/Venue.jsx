"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { LocateIcon } from "lucide-react";

const Venue = () => {
  const googleMapsUrl = `https://maps.app.goo.gl/NE54mg21dNfUtwCn8`;
  return (
    <section className="w-full px-4 mt-20 md:mt-20">
      <h1 className="text-center font-greatvibes  text-rose-500 text-4xl md:text-6xl mb-6">
        Venue
      </h1>
      <div className="text-center mt-6">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://maps.app.goo.gl/NE54mg21dNfUtwCn8"}
          className="text-center font-medium text-lg text-[#555] mt-2 md:text-2xl"
        >
          Shree Narayanaguru SabhaBhavana
        </Link>
        <p className="text-center text-[#555] mt-2 text-sm md:text-lg mb-4">
          CPQR+C2Q, Edapally - Panvel Hwy, Kochi, Bramavara, Karnataka 576213
        </p>
        <button
          className="h-10 w-full max-w-[400px] py-2 rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white shadow-lg"
          onClick={() => window.open(googleMapsUrl, "_blank")}
        >
          Get Directions on Google Maps
        </button>
      </div>
    </section>
  );
};

export default Venue;
