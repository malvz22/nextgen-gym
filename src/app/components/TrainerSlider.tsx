"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";
import "../globals.css";

interface Trainer {
  name: string;
  imageSrc: string;
}

const trainers: Trainer[] = [
  {
    name: "ALEX CARTER",
    imageSrc: "alex-carter.jpg",
  },
  {
    name: "JORDAN TAYLOR",
    imageSrc: "jordan-taylor.jpg",
  },
  {
    name: "AVERY PARKER",
    imageSrc: "avery-parker.jpg",
  },
  {
    name: "JAMIE HUNTER",
    imageSrc: "jamie-hunter.jpg",
  },
];

export default function TrainerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full max-w-full">
      <Slider {...settings}>
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-0 md:px-4"
          >
            <div
              className={`w-full max-w-full h-[450px] border-solid border-[#ff0000] border relative overflow-hidden`}
            >
              <Image
                src={`/trainer/${trainer.imageSrc}`}
                fill
                alt="test"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 flex flex-col bg-black/60 justify-center items-center w-full max-w-full py-4">
                <h1 className="text-[38px]">{trainer.name}</h1>
                <p>Rate:</p>
                <Image
                  src={"/5 star.png"}
                  width={130}
                  height={0}
                  alt="5 star"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
