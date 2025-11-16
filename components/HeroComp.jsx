import { IMAGES } from "@/images";
import Image from "next/image";
import React from "react";

const HeroComp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  md:mt-6  px-0 md:px-10">
      <Image
        className="sm:hidden absolute top-4 left-0 right-0 z-[-1] garden-animation hanging-flower"
        src={IMAGES.hangingFlower}
        alt="Flower Decoration"
        priority
      />
      <div className="flex-1  ">
        <div className="relative flex flex-col items-center justify-center px-0  md:px-20">
          <Image
            className=" object-fit z-5 max-w-[50vh] md:max-w-[80vh] w-full"
            src={IMAGES.wedHero}
            alt="BrideGroom"
            priority
          />
          <div className=" md:hidden absolute  bottom-[-115px] z-10">
            <Image
              className=" object-fit z-5 max-w-[400px] w-full"
              src={IMAGES.horMainLogo}
              alt="logo"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <div className=" flex flex-col gap-2 items-center justify-center mt-[120px] md:mt-0 ">
          <Image
            className="hidden md:block w-[400px] md:w-[600px] object-cover z-5 "
            src={IMAGES.horMainLogo}
            alt="Wedding Logo"
            priority
          />
          <p className="text-xl md:text-2xl  font-semibold text-[#333] text-center px-4 md:px-8">
            With <span className="text-rose-500">love</span> and{" "}
            <span className="text-rose-500">happiness</span>, We invite you and
            your family to celebrate our wedding!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;

{
  /* <div className="flex bg-white md:hidden p-4 rounded-xl border-2 border-rose-500 shadow-lg absolute bottom-30 rotate-[45deg] z-10">
            <Image
              className="relative rotate-[-45deg] object-fit z-5 w-[150px]"
              src={IMAGES.logoSm}
              alt="logo"
              priority
            />
          </div> */
}
