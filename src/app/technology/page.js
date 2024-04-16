"use client";
import React from "react";
import Image from "next/image";
import bgImage from "@/assets/bgTech.png";
import Technology from "./technology";
import mobile from "@/assets/IT/Mobile.png";
import cms from "@/assets/IT/cms.png";
import tech from "@/assets/IT/tech.png";
import ImageCard from "./ImageCard";

const Page = () => {
  return (
    <>
      <div className="relative ">
        <Image
          src={bgImage}
          alt="bgImage"
          className="object-cover w-[1531px] h-[621px] mx-auto"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="max-w-4xl mx-auto">
            <div className="sm:flex justify-center space-y-10 sm:space-y-0 sm:gap-x-10">
              <ImageCard imageSrc={mobile} scrollTarget=".mobile-section" />
              <ImageCard imageSrc={cms} scrollTarget=".CMS-section" />
              <ImageCard imageSrc={tech} scrollTarget=".tech-section" />
            </div>
          </div>
        </div>
      </div>
      <Technology />
    </>
  );
};

export default Page;
