import React from "react";
import Image from "next/image";
import Carousel from "@/components/Slider/slider";
import cms1 from "@/assets/cms1.webp";
import cms2 from "@/assets/cms2.webp";
import cms3 from "@/assets/cms3.webp";
import tech1 from "@/assets/tech1.webp";
import tech2 from "@/assets/tech2.webp";
import tech3 from "@/assets/tech3.webp";
import mobile1 from "@/assets/mobile1.webp";
import mobile2 from "@/assets/mobile2.webp";
import mobile3 from "@/assets/mobile3.webp";
import {
  image146,
  image147,
  image148,
  image149,
  image150,
  image151,
  image155,
  image156,
  image157,
  image158,
  image140,
  image141,
  image152,
  image153,
  image154,
} from "@/assets";

const TechSection = ({ title, sectionClass, heading }) => {
  const mobileLinks = [
    { text: "Android", imageUrl: image146 },
    { text: "iOS", imageUrl: image147 },
    { text: "React", imageUrl: image148 },
    { text: "Full Stack", imageUrl: image149 },
    { text: "App Development", imageUrl: image150 },
    { text: "Web App (PWA) Development", imageUrl: image151 },
  ];

  const cmsLinks = [
    { text: "WordPress", imageUrl: image155 },
    { text: "Joomla", imageUrl: image156 },
    { text: "Drupal", imageUrl: image157 },
    { text: "Squarespace", imageUrl: image158 },
  ];

  const techLinks = [
    { text: "Javascript", imageUrl: image152 },
    { text: "Angular", imageUrl: image140 },
    { text: "NodeJs", imageUrl: image153 },
    { text: "React.Js", imageUrl: image148 },
    { text: "MongoDB", imageUrl: image154 },
    { text: "Express.Js", imageUrl: image141 },
  ];

  const cmsSlide = [cms1, cms2, cms3];
  const techSlide = [tech1, tech2, tech3];
  const mobileSlide = [mobile1, mobile2, mobile3];

  let displayedImages;
  if (sectionClass === "CMS-section") {
    displayedImages = cmsSlide;
  } else if (sectionClass === "tech-section") {
    displayedImages = techSlide;
  } else if (sectionClass === "mobile-section") {
    displayedImages = mobileSlide;
  }
  const getImages = () => {
    switch (sectionClass) {
      case "mobile-section":
        return mobileLinks;
      case "CMS-section":
        return cmsLinks;
      case "tech-section":
        return techLinks;
      default:
        return [];
    }
  };
  const renderImages = () => {
    return getImages().map((link, index) => (
      <div
        key={index}
        className="flex flex-col items-center manrope justify-center"
      >
        <Image
          src={link.imageUrl}
          alt={`Image ${index}`}
          title={`Image ${index}`}
          width={90}
          height={50}
          className="max-w-60 max-h-60"
        />
        <p className="text-center text-sm font-semibold sm:text-lg">
          {link.text}
        </p>
      </div>
    ));
  };

  return (
    <section className={sectionClass}>
      <div className="mt-10 mx-4 sm:mx-10 manrope">
        <h3 className="my-5 font-bold px-5 text-2xl sm:text-4xl uppercase text-center">
          {title}
        </h3>
        <div className="bg-[#ECECEC] shadow-md shadow-black w-full flex flex-wrap">
          <div className="w-full xl:w-1/2 ">
            <div className="">
              <Carousel images={displayedImages} h={250} w={340} />
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="max-h-[20rem] sm:max-h-[30rem] lg:max-h-[40rem] flex justify-center text-center sm:text-xl text-lg px-5 pt-7 sm:pt-2">
              <p className="py-2 font-bold">
                Exclusive{" "}
                {sectionClass === "mobile-section"
                  ? "mobile application"
                  : sectionClass === "CMS-section"
                  ? "CMS"
                  : "Tech"}{" "}
                services we provide to enhance your growth
              </p>
            </div>
            <div className="flex justify-center mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  pt-10 sm:pt-16 gap-x-16 gap-y-16 pb-5 sm:pb-0">
                {renderImages()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
