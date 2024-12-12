import Image from "next/image";
import Hero from "./components/Hero";

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
    </>
  );
}
