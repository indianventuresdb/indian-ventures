import React from "react";
import Image from "next/image";

const ServiceCard = ({ image }) => {
  return (
    <div className="max-w-xs overflow-hidden justify-center items-center mx-auto">
      <div className="flex items-center justify-center bg-white shadow-inner rounded-md py-3 mx-4 shadow-black px-4">
        <Image src={image} alt={`Image `} className="w-48 h-48" />
      </div>
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
