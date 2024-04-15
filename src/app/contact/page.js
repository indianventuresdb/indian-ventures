import React from "react";
import Image from "next/image";
import contact from "@/assets/contact.jpg";
import ContactForm from "./contactForm";
const page = () => {
  return (
    <>
      <div className="text-justify manrope  ">
        <Image
          src={contact}
          alt="contact"
          className="object-cover w-[1531px] h-[581px] mx-auto"
        />
        <h1 className="text-center font-bold text-lg sm:text-xl uppercase my-10 ">
          Contact US
        </h1>
        <h2 className=" text-center font-medium text-gray-800 text-lg sm:text-xl">
          WE WILL HAPPY TO ASSIST YOU PLEASE REACH US
        </h2>
        <ContactForm />
      </div>
    </>
  );
};

export default page;
