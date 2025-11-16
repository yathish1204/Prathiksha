import { IMAGES } from "@/images";
import Image from "next/image";
import React from "react";

const FloralDecoration = ({ isLeft }) => {
  const src = isLeft ? IMAGES.floralLeft : IMAGES.floralRight;
  return (
    <div className="">
      <Image
        src={src}
        alt="Decorational Flowers"
        className={`w-[3rem]  max-w-[200px] absolute   ${
          isLeft ? "left-0" : "right-0"
        }`}
        priority
      />
    </div>
  );
};

export default FloralDecoration;
