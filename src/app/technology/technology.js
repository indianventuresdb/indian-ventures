"use client";
import React from "react";
import CarouselSection from "./carouselSection";
import { mobileImages } from "@/assets";
import { cmsImages } from "@/assets";
import { techImages } from "@/assets";
const Technology = ({ userInfo }) => {
  return (
    <>
      <div className=" sm:space-y-0 mb-5 manrope">
        {/* Mobile section */}
        <h1 className="text-2xl sm:text-5xl text-black text-center mt-4 font-extrabold mb-4">
          TECHNOLOGIES
        </h1>
        <CarouselSection
          title="Mobile Applications"
          images={mobileImages}
          sectionClass="mobile-section"
        />

        {/* CMS section */}
        <CarouselSection
          title="Content Management System (CMS)"
          images={cmsImages}
          sectionClass="CMS-section"
        />

        {/* Tech section */}
        <CarouselSection
          title="Technology"
          images={techImages}
          sectionClass="tech-section"
        />
      </div>
    </>
  );
};

export default Technology;
