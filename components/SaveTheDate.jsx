"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import Button from "../Button/Button";
import { IMAGES } from "@/images";

const SaveTheDate = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("December 1, 2025 10:00:00");
      const currentTime = new Date();
      const difference = targetDate - currentTime;

      let timeLeft = {};
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        };
      } else {
        timeLeft = { days: "00", hours: "00", minutes: "00" };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  let details = `We’re%20so%20excited%20to%20celebrate%20our%20wedding%20with%20you!%20Your%20presence%20would%20make%20our%20day%20truly%20special.%20🌸
`;
  const GoogleCalender = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Prathiksha%20Weds%20Ganesh&dates=20251201T035000Z/20251201T045000Z&details=${details}&location=Shree%20Narayanaguru%20SabhaBhavana%2C%20CPQR%2BC2Q%2C%20Edapally%20-%20Panvel%20Hwy%2C%20Kochi%2C%20Bramavara%2C%20Karnataka%20576213`;

  return (
    <section className="w-full flex justify-center mt-20 md:mt-20 px-4 ">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-center font-greatvibes  text-rose-500 text-4xl md:text-6xl ">
          Save the Date
        </h1>

        <div className="w-full flex flex-col items-center gap-8 text-xl text-gray-700  mt-5 ">
          {/* DATE */}
          <div className="text-center">
            <p className="text-center font-medium">
              1<sup>st</sup> December 2025 , Monday
            </p>
          </div>

          {/* COUNTDOWN */}
          <div className="flex items-center  justify-center gap-2 md:gap-6 text-gray-500  ">
            {/* Days */}
            <div className="flex flex-col items-center gap-2 ">
              <div className="relative w-15 sm:w-20 h-15 sm:h-20 md:w-[162px] md:h-[162px] flex items-center justify-center overflow-hidden">
                <Image
                  alt="Coral Heart"
                  src={IMAGES.coralHeart}
                  className="absolute w-full h-full top-0 left-0 z-[1]"
                />
                <div className="relative z-[2] text-xl md:text-3xl text-white font-semibold">
                  {timeLeft.days}
                </div>
              </div>
              <span className="text-sm md:text-xl font-semibold text-[#ff8e83] ">
                Days
              </span>
            </div>

            {/* Colon */}
            <div className="text-xl md:text-3xl  flex items-center justify-center -translate-y-5">
              :
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-15 sm:w-20 h-15 sm:h-20 md:w-[162px] md:h-[162px] flex items-center justify-center overflow-hidden">
                <Image
                  alt="White Heart"
                  src={IMAGES.whiteHeart}
                  className="absolute w-full h-full top-0 left-0 z-1"
                />
                <div className="relative z-2 text-xl md:text-3xl font-semibold">
                  {timeLeft.hours}
                </div>
              </div>
              <span className="text-sm md:text-xl  text-[#b2b2b2] ">Hours</span>
            </div>

            {/* Colon */}
            <div className="text-xl md:text-3xl  flex items-center justify-center -translate-y-5">
              :
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-15 sm:w-20 h-15 sm:h-20 md:w-[162px] md:h-[162px] flex items-center justify-center overflow-hidden">
                <Image
                  alt="White Heart"
                  src={IMAGES.whiteHeart}
                  className="absolute w-full h-full top-0 left-0 z-[1]"
                />
                <div className="relative z-[2] text-xl md:text-3xl font-semibold">
                  {timeLeft.minutes}
                </div>
              </div>
              <span className="text-sm md:text-xl  text-[#b2b2b2] ">
                Minutes
              </span>
            </div>
          </div>

          {/* <Button /> */}
          <button
            className="h-10 w-full max-w-[400px] py-2 rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white shadow-lg"
            onClick={() => window.open(GoogleCalender, "_blank")}
          >
            Add to Calender
          </button>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDate;
