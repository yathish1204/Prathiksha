import Await from "@/components/Await";
import FloralDecoration from "@/components/FloralDecoration";
import Footer from "@/components/Footer";
import HeroComp from "@/components/HeroComp";
import Muhurtha from "@/components/Muhurtha";
import NavBar from "@/components/NavBar";
import SaveTheDate from "@/components/SaveTheDate";
import Venue from "@/components/Venue";
import { IMAGES } from "@/images";
import React from "react";

const MainEntryPage = () => {
  return (
    <>
      <NavBar />
      <HeroComp />
      <FloralDecoration isLeft={true} />
      <SaveTheDate />
      <FloralDecoration isLeft={false} />
      <Muhurtha />
      <FloralDecoration isLeft={true} />
      <Venue />
      <FloralDecoration isLeft={false} />
      <Await />
      {/* <FloralDecoration isLeft={true} /> */}
      <Footer />
    </>
  );
};

export default MainEntryPage;
