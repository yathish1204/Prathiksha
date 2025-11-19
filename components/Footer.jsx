import { IMAGES } from "@/images";
import { Heart } from "lucide-react";
import Image from "next/image";
import React, { lazy } from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-rose-100 to-rose-300  px-4 mt-25 md:mt-30">
      <Image
        src={IMAGES.floralFooter}
        className="w-[200px] md:w-[250px] absolute top-2 left-0 right-0 mx-auto -translate-y-1/2"
        alt="floral Decoration"
      />
      <Image
        className="absolute top-[-5] opacity-0.8 left-0 right-0 mx-auto -translate-y-1/2 mx-auto  right-0 z-[12] "
        src={IMAGES.butterfly}
        alt="butterfly"
        priority
        unoptimized
      />
      <div className="max-w-4xl mx-auto flex flex-col justify-center min-h-50 pt-5">
        {/* Footer Content */}
        <h1 className="text-center text-rose-800 font-medium text-xl md:text-2xl mb-6">
          “Your presence is our greatest blessing.”
        </h1>
        <div className="flex items-center justify-center gap-4 ">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-rose-400"></div>
          <Heart
            className="text-rose-500 pulse-animation"
            fill="currentColor"
            size={32}
          />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-rose-400"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
