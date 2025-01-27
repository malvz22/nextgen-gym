"use client";

export default function MemberForm() {
  return (
    <>
      <form className="w-full max-w-[480px] grid grid-cols-2 gap-6">
        <input
          type="text"
          id="name"
          className="bg-black p-4 border-solid border-white border-[1px] text-white placeholder-white col-span-2 md:col-span-1"
          placeholder="Name"
          required
        />
        <input
          type="tel"
          id="phone-number"
          className="bg-black p-4 border-solid border-white border-[1px] text-white placeholder-white col-span-2 md:col-span-1"
          placeholder="Phone Number"
          required
        />
        <input
          type="email"
          id="phone-number"
          className="bg-black p-4 border-solid border-white border-[1px] text-white placeholder-white col-span-2"
          placeholder="Email"
          required
        />
        <button className="py-4 w-full md:w-[180px] border-solid border-[#ff0000] border-[1px] text-[#ff0000]">
          Join Now
        </button>
      </form>
    </>
  );
}
