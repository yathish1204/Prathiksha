import { Heart, Star } from "lucide-react";
import React from "react";

const Await = () => {
  return (
    <section className="w-full px-4 mt-20 md:mt-20">
      <h1 className="text-center font-greatvibes  text-rose-500 text-4xl md:text-6xl mb-6">
        Awaiting your presence
      </h1>
      <p className="text-center font-medium text-lg text-[#555] mt-2 md:text-2xl">
        Smt. Malathi Shivaraj Shettigar
      </p>
      <p className="text-center font-medium text-lg text-[#555] mt-2 md:text-2xl">
        Sri Prathveesh S Shettigar
      </p>
      <p className="text-center text-[#555] mt-2 text-sm md:text-lg">
        'Vinoda Nilaya' , Salikeri
      </p>
      <div className="flex items-center justify-center gap-4 my-4">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-rose-400"></div>
        <div className="flex gap-1">
          <Heart className="text-rose-500 " fill="currentColor" size={24} />
          <Heart
            className="text-rose-500 pulse-animation"
            fill="currentColor"
            size={24}
          />
          <Heart className="text-rose-500 " fill="currentColor" size={24} />
        </div>
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-rose-400"></div>
      </div>
      <p className="text-center font-medium  text-[#555] mt-2 md:text-xl">
        Smt. Lakshmi & Sri. Gururaj Shettigar & their children
      </p>
      <p className="text-center text-[#555] mb-4 text-sm md:text-lg">
        Chikkamagaluru, Chittadi, Udupi
      </p>
      <p className="text-center font-medium  text-[#555] mt-2 md:text-xl">
        Smt. Akkayya & the late Sheena Shettigar’s children, daughters-in-law,
        son-in-law, grandchildren
      </p>
      <p className="text-center text-[#555] mb-4 text-sm md:text-lg">
        Ulluru, Kadinakonda
      </p>
      <p className="text-center font-medium  text-[#555] mt-2 md:text-xl">
        The family members of “Vinoda Nilaya”
      </p>
      <p className="text-center text-[#555] mb-4 text-sm md:text-lg">
        Salikeri
      </p>
      <p className="text-center font-medium  text-[#555] mt-2 md:text-xl">
        Along with relatives and friends
      </p>
    </section>
  );
};

export default Await;
