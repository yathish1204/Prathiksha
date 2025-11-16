import { IMAGES } from "@/images";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-center h-[60px] md:h-[72px] z-[1000] bg-white shadow-sm">
      <Image
        src={IMAGES.prathiGana}
        className="object-contain w-[200px] md:w-[300px]"
        alt="PrathGana"
        priority
      />
    </div>
  );
};

export default NavBar;
