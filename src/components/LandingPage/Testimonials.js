"use client";
import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testimonialsData from "@/data/testimonials";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1424 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1424, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 740 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 740, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonialsData.length - 1 ? 0 : prevSlide + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonialsData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonialsData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="w-full text-black manrope">
      <div className="max-w-screen-2xl mx-auto p-4">
        <h3 className="text-center font-bold text-lg sm:text-2xl uppercase">
          Why choose indian ventures
        </h3>
        <Carousel
          autoPlay={true}
          responsive={responsive}
          infinite={true}
          arrows={false}
          containerClass="carousel-container"
        >
          {testimonialsData.map((review, index) => (
            <div
              key={index}
              className="px-2 mt-10 max-w-xs max-h-36 mx-auto bg-card rounded-sm overflow-hidden p-6 py-6 bg-[#D9D9D9] shadow-2xl manrope"
            >
              <h3 className="text-sm sm:text-xl font-bold text-center">
                {review.heading}
              </h3>
              <p className="text-gray-700 text-sm mb-4 text-center pt-4">
                {review.review}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
