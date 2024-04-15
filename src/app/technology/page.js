import React from "react";
import Image from "next/image";
import bgImage from "@/assets/bgTech.png";
import Technology from "./technology";
const page = () => {
  return (
    <>
      <div className="text-justify manrope  ">
        <Image
          src={bgImage}
          alt="bgImage"
          className="object-cover w-[1531px] h-[581px] mx-auto"
        />
        <Technology />
      </div>
    </>
  );
};

export default page;
