import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="w-full max-w-full relative h-[1024px] flex flex-row justify-center lg:justify-start items-center bg-[url('/gym-hero.jpg')] bg-cover bg-top filter">
        <div className="lg:bg-gradient-to-r bg-gradient-to-b from-black/60 to-black/20 mix-blend-normal w-full max-w-full h-full flex justify-center items-center px-24">
          <div className="w-full max-w-[1240px] mx-auto flex lg:justify-start justify-center items-center">
            <div className="flex flex-col w-full max-w-[600px] lg:px-0 justify-center items-center lg:justify-start lg:items-start text-center lg:text-start">
              <h1 className="text-[70px] md:text-[122px] md:leading-[136px]">
                READY TO TRAIN <span>YOUR BODY</span>
              </h1>
              <p className="mb-14">
                Gym training is a structured and disciplined approach to
                physical exercise that focuses on strength, endurance and
                overall fitness improvement.
              </p>
              <Link href={"#register-section"}>
                <button className="p-5 text-[21px] text-[#ff0000] border-solid border-[#ff0000] border-2 mb-20">
                  JOIN NOW
                </button>
              </Link>

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
      </div>
    </>
  );
}
