"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`flex flex-row w-full max-w-[full] h-20 px-24 fixed top-0 z-50 transition-colors duration-700 ${
          scrolled ? "bg-[#121212]" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1240px] mx-auto flex flex-row justify-between items-center">
          <h1 className="text-[32px]">
            NEXTGEN<span>GYM</span>
          </h1>
          <div className="flex flex-row gap-10 text-[21px] text-white">
            <h1 className="hover:text-[#ff0000] transition-all duration-900">
              HOME
            </h1>
            <h1 className="hover:text-[#ff0000] transition-all duration-900">
              SERVICE
            </h1>
            <h1 className="hover:text-[#ff0000] transition-all duration-900">
              TRAINERS
            </h1>
            <h1 className="hover:text-[#ff0000] transition-all duration-900">
              TESTIMONIAL
            </h1>
            <h1 className="hover:text-[#ff0000] transition-all duration-900">
              CONTACT US
            </h1>
          </div>
          <h1 className="text-[21px] px-7 py-2 bg-[#ff0000] hover:bg-white hover:text-[#ff0000] transition-all duration-900">
            START NOW
          </h1>
        </div>
      </div>
    </>
  );
}
