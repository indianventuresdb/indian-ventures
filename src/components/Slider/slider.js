"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const Carousel = ({ images, h, w }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const carouselRef = useRef(null);

  const aspectRatio = w / h;
  const calculateHeight = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      return width / aspectRatio;
    }
    return h;
  };

  const [carouselHeight, setCarouselHeight] = useState(calculateHeight());

  useEffect(() => {
    setCarouselHeight(calculateHeight());
  }, [carouselRef, calculateHeight]);

  useEffect(() => {
    const handleResize = () => {
      setCarouselHeight(calculateHeight());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateHeight]);

  const nextImage = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransitioning(false);
    }, 500);
  };

  const prevImage = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  // Inside your Carousel component

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: `${carouselHeight}px` }}
      ref={carouselRef}
    >
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl.src}
            alt={`Image ${index}`}
            width={w}
            height={h}
            className="w-full h-full "
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black  rounded-full focus:outline-none"
        onClick={prevImage}
      >
        <GrFormPreviousLink />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black  rounded-full focus:outline-none"
        onClick={nextImage}
      >
        <GrFormNextLink />
      </button>
    </div>
  );
};

export default Carousel;
