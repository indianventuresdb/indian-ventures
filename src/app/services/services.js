import React from "react";
import Image from "next/image";
import service1 from "@/assets/services/service6.webp";
import service2 from "@/assets/services/service7.webp";
import service3 from "@/assets/services/service8.webp";
import service4 from "@/assets/services/service9.webp";
import service5 from "@/assets/services/service10.webp";
import service6 from "@/assets/services/service11.webp";

const pageData = [
  {
    image: service1,
    heading: "Innovative Web Solutions",
    content: `No matter what type of website you want to build, our designers can help you with their mastery in designing small or large websites alike.
    The process of website development typically begins with the creation of a website design and layout, which outlines the overall structure and content of the website with tools wireframe software, Adobe Photoshop, or Illustrator.`,
  },
  {
    image: service2,
    heading: "Mobile Application Design",
    content: `We eat, sleep & breathe Mobile - ever since June 29th, 2007 (Yes, that’s when the first iPhone was launched), we’ve geeked about smartphones - each one of us, and that’s why our clients love us.
    Whether it’s mapping out the Product Vision, Business Objectives, KPIs,End-User Needs, Stakeholder Analysis, Product Roadmap, Ideation, Architecture, Technical Documentation, RFP Preparation & Evaluation or a Complete Technical/Financial Feasibility Assessment, Indian Ventures mobile app development services have you covered.
    `,
  },
  {
    image: service3,
    heading: "UI / UX Designing",
    content: `Creating a new project -Build a world class UI/UX Design before you start.`,
  },
  {
    image: service4,
    heading: "Creative Agency",
    content: `Provoking powerful decisions with Branding solutions `,
  },
  {
    image: service5,
    heading: "Startup Solutions",
    content: `Planning for a Startup - You are at the right place.

    Name Search - Logo Design - Trademark Registration - Website design - Catelog design
    
    We have everything you need..`,
  },
  {
    image: service6,
    heading: "Digital Marketing",
    content: `We as digital marketers allows businesses to target specific audiences and track the success of their campaigns in real-time, making it a valuable tool for reaching and acquiring new customers.`,
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mx-3 md:mx-10">
      {pageData.map((service, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 border-4 border-[#D9D9D9] shadow-md md:rounded-3xl bg-[#ECECEC] "
        >
          <div className=" w-full lg:w-[80%] relative  min-h-[16rem] md:rounded-t-3xl md:rounded-bl-3xl ">
            <Image
              src={service.image}
              alt={`Service ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className=" md:rounded-l-3xl sm:rounded-none"
            />
          </div>
          <div className="w-full lg:w-[80%] min-h-[16rem] flex flex-col justify-center py-6">
            <h2 className="text-xl font-bold mb-4 text-center">
              {service.heading}
            </h2>
            <p className="text-justify  justify-center px-4  mx-auto">
              {service.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
