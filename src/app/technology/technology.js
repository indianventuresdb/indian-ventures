import React from "react";
import ImageCard from "../components/technology/ImageCard";
import CarouselSection from "../components/CarouselSection";
import { mobileImages, cmsImages, techImages } from "@/assets";

const Technology = ({ userInfo }) => {
  return (
    <>
      <div className="sm:space-y-0 mb-5" style={{ fontFamily: "sans-serif" }}>
        <div className="absolute sm:flex text-white gap-14 space-y-7 sm:space-y-0 rounded-full">
          <ImageCard imageSrc="/image132.png" scrollTarget=".mobile-section" />
          <ImageCard imageSrc="/image50.png" scrollTarget=".CMS-section" />
          <ImageCard imageSrc="/image133.png" scrollTarget=".tech-section" />
        </div>

        {/* Mobile section */}
        <h1 className="text-4xl text-black text-center mt-4 font-bold mb-4">
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
