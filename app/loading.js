import { IMAGES } from "@/images";
import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="w-full bg-white flex flex-col gap-3 justify-center items-center h-screen">
      <Image
        className=" object-fit z-5 max-w-[400px] w-full"
        src={IMAGES.horMainLogo}
        alt="logo"
        priority
      />
      <p className="text-xl md:text-2xl font-semibold text-rose-500">
        Loading...
      </p>
    </div>
  );
};

export default loading;
