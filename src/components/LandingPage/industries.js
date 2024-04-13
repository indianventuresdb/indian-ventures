"use client";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import ecom from "@/assets/industry/ecom.png";
import healthcare from "@/assets/industry/healthcare.png";

// Constants
const INDUSTRIES = [
  { image: ecom, name: "E-Commerce" },
  { image: healthcare, name: "Healthcare" },
  { image: ecom, name: "E-Commerce" },
  { image: healthcare, name: "Healthcare" },
  { image: ecom, name: "E-Commerce" },
  { image: healthcare, name: "Healthcare" },
  { image: ecom, name: "E-Commerce" },
  { image: healthcare, name: "Healthcare" },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1424 }, items: 7 },
  desktop: { breakpoint: { max: 1424, min: 1000 }, items: 3 },
  tablet: { breakpoint: { max: 1000, min: 740 }, items: 2 },
  mobile: { breakpoint: { max: 740, min: 0 }, items: 1 },
};

const Industries = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % INDUSTRIES.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (step) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + step + INDUSTRIES.length) % INDUSTRIES.length
    );
  };

  return (
    <div className="w-full text-black">
      <div className="max-w-screen-2xl mx-auto px-3 ">
        <Carousel
          autoPlay={true}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
        >
          {INDUSTRIES.map((industry, index) => (
            <div className="max-w-xs overflow-hidden justify-center items-center mx-auto ">
              <div className="flex items-center justify-center">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  className="w-28 h-32 "
                />
              </div>
              <p className="justify-center text-center manrope font-bold text-lg">
                {industry.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Industries;
