import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-between items-center h-20 px-24">
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
  );
}
