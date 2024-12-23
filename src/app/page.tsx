/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Hero from "./components/Hero";
import TrainerSlider from "./components/TrainerSlider";
import TestimonySlider from "./components/TestimonySlider";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="custom-container flex flex-col justify-center items-center">
        <h1 className="text-[91px]">
          WHY <span>CHOOSE US</span>
        </h1>
        <p className="w-full max-w-[570px] text-center mb-20">
          Gym workouts offer a versatile and customisable experience, allowing
          everyone to set specific fitness goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="px-10 py-6 flex flex-col border-solid border-[#ff0000] border-2">
            <h1 className="pb-6 text-[38px]">01</h1>
            <h1 className="text-[28px]">
              <span>PERSONAL TRAINING</span>
            </h1>
            <p>
              Achieve your fitness goals with one-on-one coaching tailored to
              your needs and guided by expert trainers.
            </p>
          </div>
          <div className="px-10 py-6 flex flex-col border-solid border-[#ff0000] border-2">
            <h1 className="pb-6 text-[38px]">02</h1>
            <h1 className="text-[28px]">
              <span>EQUIPMENT AND FACILITIES</span>
            </h1>
            <p>
              Train with state-of-the-art equipment in a clean, modern, and
              fully equipped facility designed for all fitness levels
            </p>
          </div>
          <div className="px-10 py-6 flex flex-col border-solid border-[#ff0000] border-2">
            <h1 className="pb-6 text-[38px]">03</h1>
            <h1 className="text-[28px]">
              <span className="uppercase">nutrition counseling</span>
            </h1>
            <p>
              Fuel your fitness journey with personalized nutrition plans and
              expert advice to complement your workout routine.
            </p>
          </div>
          <div className="px-10 py-6 flex flex-col border-solid border-[#ff0000] border-2">
            <h1 className="pb-6 text-[38px]">04</h1>
            <h1 className="text-[28px]">
              <span>SPECIALITY PROGRAMS</span>
            </h1>
            <p>
              Explore unique programs like weight loss, strength training, or
              sports-specific conditioning to elevate your performance.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full bg-[url('/experience-bg.jpg')] bg-cover bg-top">
        <div className="bg-black/85 mix-blend-normal">
          <div className="custom-container flex flex-col-reverse lg:flex-row justify-between items-center gap-20">
            <div className="flex flex-col justify-start text-center lg:text-start w-full max-w-[600px]">
              <h1 className="text-[91px] leading-[96px] pb-8">
                WE HAVE A LOT OF <span>EXPERIENCE</span>
              </h1>
              <p className="pb-8">
                With a history of helping individuals of all fitness levels,
                we’ve built a reputation for excellence and trust within our
                community. At NextGen Gym, our experience translates into
                results that inspire and transform lives.
              </p>
              <p>
                Experience matters when it comes to fitness, and we’ve got
                plenty of it. Our team of certified trainers has spent years
                empowering people like you to crush their goals, one rep at a
                time. No matter where you start, we’re here to guide you toward
                a healthier, stronger future.
              </p>
            </div>
            <div className="relative w-[330px] h-[450px] ">
              <Image
                src={"/gym-experience.jpg"}
                fill
                objectFit="contain"
                alt="Experience"
                className="z-50"
              />
              <div className="absolute w-[330px] h-[450px] border-solid border-2 -translate-x-1/2 -translate-y-1/2 border-white left-[35%] top-[45%]"></div>
              <div className="absolute w-[330px] h-[450px] border-solid border-2 -translate-x-1/2 -translate-y-1/2 border-red-700 left-[65%] top-[60%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container flex flex-col justify-center items-center text-center">
        <h1 className="text-[91px] leading-[96px] pb-8">
          OUR PROFESSIONAL <span>TRAINERS</span>
        </h1>
        <p className="w-full max-w-[570px] text-center mb-20">
          At NextGen Gym, our trainers are more than just fitness experts,
          they're your partners in health and wellness. They're here to inspire,
          motivatem and support you, no matter where you are in your fitness
          journey. Join us and become the part of our fitness family!
        </p>
        <TrainerSlider />
      </div>
      <div className="w-full max-w-full bg-[url('/experience-bg.jpg')] bg-cover bg-top">
        <div className="bg-black/85 mix-blend-normal">
          <div className="custom-container flex flex-col justify-center items-center gap-20">
            <h1 className="text-[91px] leading-[96px] pb-8 text-center">
              REAL <span>STORIES</span>, REAL <span>RESULTS</span>
            </h1>
            <TestimonySlider />
          </div>
        </div>
      </div>
    </>
  );
}
