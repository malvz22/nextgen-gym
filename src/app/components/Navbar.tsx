"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar: React.FC = () => {
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

  // const handleScroll = (
  //   e: React.MouseEvent<HTMLAnchorElement>,
  //   targetId: string
  // ) => {
  //   e.preventDefault();
  //   const targetElement = document.getElementById(targetId);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  return (
    <>
      <div
        className={`flex flex-col w-full max-w-[full] justify-center items-center px-24 py-5 fixed top-0 z-[100] transition-colors duration-700 ${
          scrolled ? "bg-[#121212]" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1240px] mx-auto flex flex-row justify-between items-center">
          <h1 className="text-[32px]">
            NEXTGEN<span>GYM</span>
          </h1>
          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-row gap-10 text-[21px] text-white">
            <Link href="#hero-section">
              <h1 className="hover:text-[#ff0000] transition-all duration-900">
                HOME
              </h1>
            </Link>
            <Link href={"#service-section"}>
              <h1 className="hover:text-[#ff0000] transition-all duration-900">
                SERVICE
              </h1>
            </Link>
            <Link href={"#trainers-section"}>
              <h1 className="hover:text-[#ff0000] transition-all duration-900">
                TRAINERS
              </h1>
            </Link>
            <Link href={"#testimony-section"}>
              <h1 className="hover:text-[#ff0000] transition-all duration-900">
                TESTIMONIAL
              </h1>
            </Link>
          </div>
          <Link href={"#register-section"}>
            <h1 className="hidden lg:flex text-[21px] px-7 py-2 bg-[#ff0000] hover:bg-white hover:text-[#ff0000] transition-all duration-900">
              START NOW
            </h1>
          </Link>

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
          <Link href="#">
            <h1 className="hover:text-[#ff0000] transition-all duration-900">
              HOME
            </h1>
          </Link>
          <Link href={"#service-section"}>
            <h1 className="hover:text-[#ff0000] transition-all duration-900">
              SERVICE
            </h1>
          </Link>
          <Link href={"#trainers-section"}>
            <h1 className="hover:text-[#ff0000] transition-all duration-900">
              TRAINERS
            </h1>
          </Link>
          <Link href={"#testimony-section"}>
            <h1 className="hover:text-[#ff0000] transition-all duration-900">
              TESTIMONIAL
            </h1>
          </Link>
          <Link href={"#register-section"}>
            <h1 className="hover:text-[#ff0000] transition-all duration-900">
              START NOW
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
