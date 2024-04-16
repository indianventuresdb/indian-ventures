import React from "react";
import ImageCard from "./ImageCard";
import CarouselSection from "./carouselSection";
import { mobileImages, cmsImages, techImages } from "@/assets";

const Technology = ({ userInfo }) => {
  return (
    <>
      <div className="sm:space-y-0 mb-5" style={{ fontFamily: "sans-serif" }}>
        {/* Mobile section */}
        <h1 className="text-2xl sm:text-4xl text-black text-center mt-4 font-bold mb-4">
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
