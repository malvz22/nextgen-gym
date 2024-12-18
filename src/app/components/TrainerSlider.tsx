"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";

// interface Trainer{
//     name: string;
//     imageSrc: string;
// }

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
        <div className="mx-3">
          <div
            className={`bg-[url('/trainer/alex-carter.jpg')] mx-3 bg-top bg-cover border-solid border-[#ff0000] border-2 flex flex-col justify-center`}
          >
            <div className="flex flex-col bg-black/60 justify-center items-center p-4 mt-[400px]">
              <h1 className="text-[38px]">ALEX CARTER</h1>
              <p>Rate:</p>
              <Image src={"/5 star.png"} width={130} height={0} alt="5 star" />
            </div>
          </div>
        </div>
        <div className="mx-3">
          <div
            className={`bg-[url('/trainer/alex-carter.jpg')] mx-3 bg-top bg-cover border-solid border-[#ff0000] border-2 flex flex-col justify-center`}
          >
            <div className="flex flex-col bg-black/60 justify-center items-center p-4 mt-[400px]">
              <h1 className="text-[38px]">ALEX CARTER</h1>
              <p>Rate:</p>
              <Image src={"/5 star.png"} width={130} height={0} alt="5 star" />
            </div>
          </div>
        </div>
        <div className="mx-3">
          <div
            className={`bg-[url('/trainer/alex-carter.jpg')] mx-3 bg-top bg-cover border-solid border-[#ff0000] border-2 flex flex-col justify-center`}
          >
            <div className="flex flex-col bg-black/60 justify-center items-center p-4 mt-[400px]">
              <h1 className="text-[38px]">ALEX CARTER</h1>
              <p>Rate:</p>
              <Image src={"/5 star.png"} width={130} height={0} alt="5 star" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
