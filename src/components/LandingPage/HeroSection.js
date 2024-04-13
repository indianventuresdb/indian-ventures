import React from "react";
import slider1 from "@/assets/slider/slider1.jpeg";
import slider2 from "@/assets/slider/slider2.jpeg";

import Carousel from "../Slider/slider";
import Heading from "../UIElements/Heading";
import ServiceSection from "./ServiceSection";
import service1 from "@/assets/services/service1.png";
import service2 from "@/assets/services/service2.png";
import service3 from "@/assets/services/service3.png";
import service4 from "@/assets/services/service4.png";
import service5 from "@/assets/services/service5.png";
import TechSection from "./Tech/TechSection";
import Industries from "./industries";
import Testimonials from "./Testimonials";
import Form from "./Form";
import Brands from "./Brands";

function HeroSection() {
  return (
    <div className=" justify-center h-auto space-y-10 mb-1 manrope">
      <Carousel images={[slider1, slider2]} h={420} w={1152} />
      <Heading>Our Services</Heading>
      <p className="text-center font-normal text-lg">
        No Compromise Solution To Your Web Or App Development
      </p>
      <ServiceSection
        images={[service1, service2, service3, service4, service5]}
      />
      <button className="bg-black text-white text-sm sm:text-lg manrope sm:px-10 px-7 py-2 rounded-[10px] flex justify-center mx-auto items-center font-bold">
        Read More
      </button>
      <Heading>TECHNOLOGIES</Heading>
      <TechSection />
      <Industries />
      <Form />
      <Testimonials />
      <Brands />
    </div>
  );
}

export default HeroSection;
