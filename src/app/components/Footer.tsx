import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col justi-center items-center w-full max-w-full mx-auto bg-black">
        <div className="flex flex-col gap-10 justify-center items-center py-[72px]">
          <h1 className="text-[32px]">
            NEXTGEN<span>GYM</span>
          </h1>
          <div className="flex flex-row gap-10 text-[21px] text-white">
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
          </div>
        </div>
        <hr className="border-solid border-[1px] border-[#484848] w-full max-w-full" />
        <p className="text-[12px] p-6">
          Ⓒ 2023 All rights reserved. NextGen Gym Company
        </p>
      </div>
    </>
  );
}
