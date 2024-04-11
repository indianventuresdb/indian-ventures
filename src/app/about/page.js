import React from "react";
import Image from "next/image";
import backgroundImage from "@/assets/img.png";

function page() {
  return (
    <div>
      <div className="relative w-full h-full">
        <Image
          src={backgroundImage}
          alt="backgroundImage"
          className="object-cover w-full h-full"
          width={100}
          height={70}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start z-10 mt-10">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center my-15">
        <div className="w-1065 h-172 bg-gray-200 rounded-lg p-8 my-15 shadow-lg">
          <h2 className="text-xl font-bold flex justify-center items-center">
            COLLABORATIVE
          </h2>
          <p className="text-white-600 ">
            Being collaborative makes us innovative. Without coordination and
            constant right communication, we deliver good results which allow us
            to provide flawless service to our clients.
          </p>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center">
        <div className="w-1065 h-172 bg-gray-200 rounded-lg p-8 mb-15 shadow-lg">
          <h2 className="text-xl font-bold flex justify-center items-center">
            PASSIONATE
          </h2>
          <p className="text-gray-600 mt-4">
            Being collaborative makes us innovative. Without coordination and
            constant right communication, we deliver good results which allow us
            to provide flawless service to our clients.
          </p>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center border-gray-300">
        <div className="w-1065 h-172 bg-gray-200 rounded-lg p-8 mt-15 shadow-lg">
          <h2 className="text-xl font-bold flex justify-center items-center">
            RESILIENT
          </h2>
          <p className="text-gray-600 mt-4">
            Being collaborative makes us innovative. Without coordination and
            constant right communication, we deliver good results which allow us
            to provide flawless service to our clients.
          </p>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center border-gray-300">
        <div className="w-1065 h-172 bg-gray-200 rounded-lg p-8 mt-15 shadow-lg">
          <h2 className="text-xl font-bold flex justify-center items-center">
            TEAM
          </h2>
          <p className="text-gray-600 mt-4">
            Being collaborative makes us innovative. Without coordination and
            constant right communication, we deliver good results which allow us
            to provide flawless service to our clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
