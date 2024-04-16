import React from "react";
import Image from "next/image";
import Carousel from "@/components/Slider/slider";
import slider1 from "@/assets/slider/slider1.jpeg";
import slider2 from "@/assets/slider/slider2.jpeg";

const CarouselSection = ({ title, sectionClass }) => {
  const images = [slider1, slider2];

  return (
    <section className={sectionClass}>
      <div className=" mt-16">
        <h4 className="my-5 font-bold leading-5 tracking-widest px-5 text-2xl sm:text-4xl uppercase text-center">
          {title}
        </h4>
        <div className="bg-[#ECECEC] shadow-md shadow-black w-full flex flex-wrap">
          <div className="w-full sm:w-1/2">
            <Carousel images={images} h={250} w={960 / 3} />
          </div>
          <div className="relative">
            {images.map((image, index) => (
              <div key={index} className="absolute">
                <div className="flex flex-col items-center">
                  <Image
                    src={image}
                    alt={`Image ${index}`}
                    title={`Image ${index}`}
                    width={80}
                    height={40}
                    className="max-w-42 max-h-28"
                  />
                  <p className="text-center text-xs sm:text-lg font-medium">
                    Image {index}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
