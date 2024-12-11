import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="w-full max-w-full relative h-[1024px] flex flex-row justify-center items-start">
        <Image src={"/gym-hero.jpg"} fill objectFit="cover" alt="Hero Image" />

        <div className="absolute w-full max-w-[1240px] px-20 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start">
          <div className="w-full max-w-[600px]">
            <h1 className="text-[122px] leading-[136px]">
              READY TO TRAIN <span>YOUR BODY</span>
            </h1>
            <p className="mb-14">
              Gym training is a structured and disciplined approach to physical
              exercise that focuses on strength, endurance and overall fitness
              improvement.
            </p>
            <button className="p-5 text-[21px] text-[#ff0000] border-solid border-[#ff0000] border-2 mb-20">
              JOIN NOW
            </button>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-[50px]">
                  <span>20+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
              <div className="border-solid border-l-2 "></div>
              <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-[50px]">
                  <span>15K+</span>
                </h1>
                <p>Members Join</p>
              </div>
              <div className="border-solid border-l-2 "></div>
              <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-[50px]">
                  <span>14K+</span>
                </h1>
                <p>Happy Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
