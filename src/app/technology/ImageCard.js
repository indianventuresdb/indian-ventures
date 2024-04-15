import React from "react";
import Image from "next/image";

const ImageCard = ({ imageSrc, scrollTarget }) => {
  const handleImageClick = () => {
    const targetSection = document.querySelector(scrollTarget);
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="rounded-full shadow-2xl border-[1px] border-gray-900 shadow-black w-36 h-36 sm:w-44 sm:h-44 bg-white"
      onClick={handleImageClick}
    >
      <div className="w-42 h-42 absolute inset-0 m-auto rounded-full">
        <Image
          src={imageSrc}
          alt="technology image"
          title="tech image"
          width={300}
          height={300}
          className="max-w-full max-h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default ImageCard;
