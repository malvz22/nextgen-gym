"use client";

import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

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
        className={`flex flex-col w-full max-w-[full] justify-center items-center px-24 py-5 sticky top-0 z-50 transition-colors duration-700 ${
          scrolled ? "bg-[#121212]" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1240px] mx-auto flex flex-row justify-between items-center">
          <h1 className="text-[32px]">
            NEXTGEN<span>GYM</span>
          </h1>
          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-row gap-10 text-[21px] text-white">
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
          <h1 className="hidden lg:flex text-[21px] px-7 py-2 bg-[#ff0000] hover:bg-white hover:text-[#ff0000] transition-all duration-900">
            START NOW
          </h1>
          <RxHamburgerMenu
            onClick={handleOpen}
            size={30}
            className="lg:hidden"
          />
        </div>
        <div
          className={
            isOpen
              ? "flex flex-col w-full max-w-full text-center lg-hidden"
              : "hidden"
          }
        >
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
      </div>
    </>
  );
}
