import React from "react";
import Image from "next/image";
import slider1 from "@/assets/slider/slider1.jpeg";
import slider2 from "@/assets/slider/slider2.jpeg";
import Carousel from "@/components/Slider/slider";
const CarouselSection = ({ title, images, sectionClass }) => {
  return (
    <section className={sectionClass}>
      <div className="sm:mx-10 mt-16">
        <h4 className="my-5 font-bold leading-5 tracking-widest px-5 text-2xl">
          {title}
        </h4>
        <Carousel images={[slider1, slider2]} h={220} w={320} />
        <div className="relative">
          {images.map((link, index) => (
            <div key={index} className="absolute">
              <div className="flex flex-col items-center">
                <Image
                  src={link.imageUrl}
                  alt={`Image ${index}`}
                  title={`Image ${index}`}
                  width={80}
                  height={40}
                  className="max-w-42 max-h-28"
                />
                <p className="text-center text-xs sm:text-lg font-medium">
                  {link.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
