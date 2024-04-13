import React from "react";
import Image from "next/image";
import Link from "next/link";

const TechCards = ({ imageUrl, altText, title, items }) => (
  <>
    <div className="relative flex flex-col justify-center items-center text-black py-5  px-16 w-96 h-auto shadow-2xl  border border-gray-300 rounded-t-2xl manrope font-extrabold">
      <div className="cursor-pointer  ">
        <Image src={imageUrl} height={60} width={180} alt={altText} />
      </div>

      <h4 className=" font-bold  text-sm sm:text-xl">{title}</h4>

      <div className="pt-4 text-sm font-semibold manrope">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link href="#" className="text-black ">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default TechCards;
