// "use client";

// import { IMAGES } from "@/images";
// import { X } from "lucide-react";
// import Image from "next/image";
// import React, { useRef, useState, useEffect } from "react";
// import { createPortal } from "react-dom";

// const Modal = ({ weddingDate }) => {
//   const [show, setShow] = useState(false);
//   const modalRef = useRef();

//   useEffect(() => {
//     const target = new Date(weddingDate);
//     const now = new Date();
//     const diffHours = (target - now) / (1000 * 60 * 60);
//     const alreadyShown = localStorage.getItem("weddingModalShown");
//     if (alreadyShown === "true") return;

//     if (diffHours <= 12 && diffHours > 0) {
//       setShow(true);
//       localStorage.setItem("weddingModalShown", "true"); // 🔥 save once
//     }
//   }, [weddingDate]);

//   if (show) {
//     document.body.style.overflow = "hidden";
//     setTimeout(() => {
//       setShow(false);
//     }, 10000);
//   } else {
//     document.body.style.overflow = "auto";
//   }

//   const closeModal = () => setShow(false);

//   // Close when clicking outside
//   const handleClickOutside = (e) => {
//     if (modalRef.current && !modalRef.current.contains(e.target)) {
//       closeModal();
//     }
//   };

//   useEffect(() => {
//     if (!show) return;

//     if (typeof document !== "undefined") {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       if (typeof document !== "undefined") {
//         document.removeEventListener("mousedown", handleClickOutside);
//       }
//     };
//   }, [show]);

//   useEffect(() => {
//     if (show) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [show]);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//       <Image
//         className="absolute mx-auto  inset-0 z-[0]  "
//         src={IMAGES.confetti}
//         alt="Confetti"
//         unoptimized
//       />
//       <div
//         ref={modalRef}
//         className="bg-white p-6 rounded-xl shadow-xl w-75 md:w-100 text-center relative"
//       >
//         {/* Close Button */}
//         <button
//           onClick={closeModal}
//           className="absolute top-[-3rem] right-0 left-0 mx-auto p-2 rounded-full text-center w-fit bg-gray-300  text-gray-600 text-xl font-bold"
//         >
//           <X className=" " size={24} />
//         </button>
//         {/* <Image
//           src={IMAGES.modalImage}
//           className={"w-70  mx-auto"}
//           alt={"Wedding illustration"}
//         /> */}
//         <div className="relative flex flex-col items-center justify-center px-0  md:px-20">
//           <Image
//             className=" object-fit z-5 max-w-[250px] w-full"
//             src={IMAGES.wedHero}
//             alt="BrideGroom"
//             priority
//           />
//           <div className=" absolute bottom-[-60px] md:bottom-[-70px]  z-10">
//             <Image
//               className=" object-fit z-5 max-w-[250px] w-full"
//               src={IMAGES.horMainLogo}
//               alt="logo"
//               priority
//             />
//           </div>
//         </div>
//         <h2 className=" font-medium text-gray-700 mt-[61px] md:mt-[70px]">
//           It’s Wedding Day! 🎉
//         </h2>
//         <p className="text-[15px] md:text-md text-[#555] mt-1">
//           Your presence, along with your family, would mean the world to us on
//           this most cherished day of our lives.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Modal;

"use client";

import { IMAGES } from "@/images";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const Modal = ({ weddingDate }) => {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  // Determine if modal should show (one-time + ≤12 hours)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = localStorage.getItem("weddingModalShown");
    if (alreadyShown === "true") return;

    const target = new Date(weddingDate);
    const now = new Date();
    const diffHours = (target - now) / (1000 * 60 * 60);

    if (diffHours <= 12 && diffHours > 0) {
      setShow(true);
      localStorage.setItem("weddingModalShown", "true");
    }
  }, [weddingDate]);

  // Lock/unlock scroll + auto close after 10s
  useEffect(() => {
    if (!show) {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
      return;
    }

    // lock scroll
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShow(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [show]);

  // Outside click to close
  useEffect(() => {
    if (!show) return;

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Image
        className="absolute mx-auto inset-0 z-[0]"
        src={IMAGES.confetti}
        alt="Confetti"
        unoptimized
      />

      <div
        ref={modalRef}
        className="bg-white p-6 rounded-xl shadow-xl w-75 md:w-100 text-center relative"
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-[-3rem] right-0 left-0 mx-auto p-2 rounded-full bg-gray-300 text-gray-600 text-xl font-bold"
        >
          <X size={24} />
        </button>

        <div className="relative flex flex-col items-center px-0 md:px-20">
          <Image
            className="object-fit max-w-[250px] w-full"
            src={IMAGES.wedHero}
            alt="BrideGroom"
            priority
          />

          <div className="absolute bottom-[-60px] md:bottom-[-70px] z-10">
            <Image
              className="object-fit max-w-[250px] w-full"
              src={IMAGES.horMainLogo}
              alt="logo"
              priority
            />
          </div>
        </div>

        <h2 className="font-medium text-gray-700 mt-[61px] md:mt-[70px]">
          It’s Wedding Day! 🎉
        </h2>

        <p className="text-[15px] md:text-md text-[#555] mt-1">
          Your presence, along with your family, would mean the world to us on
          this most cherished day of our lives.
        </p>
      </div>
    </div>
  );
};

export default Modal;
