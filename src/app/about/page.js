import React from "react";
import Image from "next/image";
import backgroundImage from "@/assets/about.png";

const Page = () => {
  return (
    <>
      <div className="relative ">
        <Image
          src={backgroundImage}
          alt="backgroundImage"
          className="object-cover w-[1531px] h-[621px] mx-auto"
        />
        <div className="absolute inset-0  flex flex-col justify-center items-center text-white bg-gray-900 bg-opacity-75 manrope">
          <h1 className="text-3xl  md:text-xl lg:text-xl xl:text-3xl font-extrabold sm:mb-6 mb-2 uppercase">
            About Us
          </h1>
          <p className="text-center sm:mb-6 mb-2 text-sm sm:text-xl  ">
            At the interaction of art technology and bussiness , We create
            design and <br />
            solution geared towards bussiness success.
          </p>
          <p className="text-center sm:mb-6 mb-2 text-sm sm:text-xl  px-2">
            We are growing in design technology. Our services range from
            experience designing,
            <br /> identity development, product strategy, branding, user
            experience design, user interface design, technology
            <br />
            development to digital marketing and SEO.
          </p>
          <p className="text-center sm:mb-6 mb-2 text-sm sm:text-xl  px-2">
            Our work has inspired positive business growth for many of our
            clients, including Decathlon,
            <br /> Dios, Max, Unity World Pageants, United Nations Pageants, and
            more.
          </p>
          <p className="text-center sm:mb-6 mb-2 text-sm sm:text-xl  px-2">
            Today, when a brand's virtual persona is imperative to business
            success, Indian Ventures strives to
            <br /> provide insightful and future-forward solutions designed
            specifically for your brand.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 manrope  justify-center sm:mx-32 mx-2 my-10 py-10">
        <div className="card bg-[#D9D9D9] shadow-md shadow-black py-6 px-4 mb-10">
          <h2 className="text-xl font-bold mb-2 text-center ">COLLABORATIVE</h2>
          <p className="text-gray-900 text-justify sm:px-10 px-2">
            Being collaborative makes us innovative. Without coordination and
            constant right communication, we deliver good results which allow us
            to provide flawless service to our clients.
          </p>
        </div>

        <div className="card bg-[#D9D9D9] shadow-md shadow-black py-6 px-4 mb-10">
          <h2 className="text-xl font-bold mb-2 text-center ">PASSIONATE</h2>
          <p className="text-gray-900 text-justify sm:px-10 px-2">
            Being passionate drives our innovation. It enables us to stay
            dedicated to our craft and deliver exceptional results for our
            clients.
          </p>
        </div>

        <div className="card bg-[#D9D9D9] shadow-md shadow-black py-6 px-4 mb-10">
          <h2 className="text-xl font-bold mb-2 text-center ">RESILIENT</h2>
          <p className="text-gray-900 text-justify sm:px-10 px-2">
            Resilience is our strength. In the face of challenges, we adapt and
            persevere, ensuring our clients receive top-notch service
            consistently.
          </p>
        </div>

        <div className="card bg-[#D9D9D9] shadow-md shadow-black py-6 px-4 mb-10">
          <h2 className="text-xl font-bold mb-2 text-center ">TEAM</h2>
          <p className="text-gray-900 text-justify sm:px-10 px-2">
            Our team is our backbone. With diverse expertise and a shared
            passion, we collaborate seamlessly to exceed client expectations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
