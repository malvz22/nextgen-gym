"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";
import "../globals.css";

interface Testimony {
  testimony: string;
  name: string;
  imageSrc: string;
}

const testimonies: Testimony[] = [
  {
    testimony:
      "Joining this gym has been life-changing! The trainers are incredibly supportive, and the equipment is top-notch. I've never felt stronger or healthier",
    name: "CHRIS M.",
    imageSrc: "chris (2).jpg",
  },
  {
    testimony:
      "The personal training sessions are amazing! My coach helped me reach my fitness goals faster than I ever thought possible.",
    name: "samantha t.",
    imageSrc: "samantha.jpg",
  },
  {
    testimony:
      "I love the group classes here! The energy is so motivating, and the instructors always push us to do our best. Highly recommend!",
    name: "Alex R.",
    imageSrc: "alex-r.jpg",
  },
  {
    testimony:
      "This gym has everything—state-of-the-art equipment, clean facilities, and a welcoming community. It's the best fitness experience I've had!",
    name: "Jordan L.",
    imageSrc: "jordan.jpg",
  },
  {
    testimony:
      "The nutrition counseling program has been a game-changer for me. I finally understand how to eat right for my goals. Thank you!",
    name: "Taylor S.",
    imageSrc: "taylor.jpg",
  },
  {
    testimony:
      "The trainers here genuinely care about your progress. They always go the extra mile to ensure you stay motivated.",
    name: "Casey W.",
    imageSrc: "casey.jpg",
  },
];

// const NextArrow = ({onclick}) => {
//   return(

//   )
// }

export default function TestimonySlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full max-w-full mx-auto relative justify-center items-center">
      <Slider {...settings}>
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-full text-center justify-center items-center px-36 py-10"
          >
            <p className="mb-8">&quot;{testimony.testimony}&quot;</p>
            <Image
              src={"/5 star.png"}
              width={128}
              height={0}
              alt="5 star"
              className="mx-auto mb-10"
            />
            <h1 className="text-[38px] mb-4">{testimony.name}</h1>
            <div className="w-[180px] h-[180px] relative border-solid border-2 border-[#ff0000] mx-auto">
              <Image
                src={`/testimony/${testimony.imageSrc}`}
                fill
                objectFit="cover"
                alt="testimony"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
