import React from "react";
import Image from "next/image";
import service from "@/assets/services.png";
import Services from "./services";

const page = () => {
  return (
    <>
      <div className="text-justify manrope  ">
        <Image
          src={service}
          alt="service"
          className="object-cover w-[1531px] h-[581px] mx-auto"
        />
        <h1 className="text-center font-bold text-lg sm:text-xl uppercase my-10 ">
          Our Services
        </h1>
        <h2 className="text-center font-medium text-lg sm:text-xl uppercase my-10">
          A No Compromise Solution to Your Web Or App Development
        </h2>
        <h2 className="text-center font-medium text-lg sm:text-xl uppercase my-10">
          “By failing to prepare, you are preparing to fail.”
          <br /> (Benjamin Franklin).
        </h2>
        <Services />
      </div>
    </>
  );
};

export default page;
