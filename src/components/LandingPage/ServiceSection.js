import React from "react";
import Image from "next/image";

const ServiceCard = ({ image }) => {
  return (
    <div className="bg-white shadow-inner shadow-current rounded-lg p-4 m-2 ">
      <Image src={image} alt="Service" className="w-full h-auto " />
    </div>
  );
};

function ServiceSection({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center mx-2 px-2 sm:mx-auto">
      {images.map((image, index) => (
        <ServiceCard key={index} image={image} />
      ))}
    </div>
  );
}

export default ServiceSection;
