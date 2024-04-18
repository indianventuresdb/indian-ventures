import React from "react";
import { mobileImages, cmsImages, techImages } from "@/assets";
import TechSection from "./techSection";

const Technology = () => {
  return (
    <>
      <div className="sm:space-y-0 mb-5" style={{ fontFamily: "sans-serif" }}>
        {/* Mobile section */}
        <h1 className="text-2xl sm:text-4xl text-black text-center mt-4 font-bold mb-4">
          TECHNOLOGIES
        </h1>
        <TechSection
          title="Mobile Applications"
          images={mobileImages}
          sectionClass="mobile-section"
        />

        {/* CMS section */}
        <TechSection
          title="Content Management System (CMS)"
          images={cmsImages}
          sectionClass="CMS-section"
        />

        {/* Tech section */}
        <TechSection
          title="Technology"
          images={techImages}
          sectionClass="tech-section"
        />
      </div>
    </>
  );
};

export default Technology;
