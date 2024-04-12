import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/social/facebook.png";
import instagram from "@/assets/social/insta.png";
import linkedin from "@/assets/social/linkedin.png";

const Footer = () => {
  return (
    <footer className="mt-16 bottom-0 w-full">
      <div className="flex justify-center gap-4 mb-10">
        <SocialLink
          href="https://www.instagram.com/indian.ventures/"
          src={instagram}
          alt="Instagram"
        />
        <SocialLink
          href="https://www.facebook.com/Indianventure"
          src={facebook}
          alt="Facebook"
        />
        <SocialLink
          href="https://www.linkedin.com/Indianventure"
          src={linkedin}
          alt="LinkedIn"
        />
      </div>
      <div className="bg-gray-900 text-white px-1 md:px-10 lg:px-20 py-2">
        <div className="text-center mt-1">
          <Link href={"/privacy_and_policy"}>
            <span className="text-sm">Privacy & Policy</span>
          </Link>
        </div>

        <div className="text-center mt-3">
          <p className="text-sm">
            © Copyright 2024, All rights reserved | A Unit of&nbsp;
            <Link
              href={"https://www.driftofthread.com/"}
              title="Drift of Thread"
              target="blank"
            >
              Drift of Thread
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, src, alt }) => (
  <a href={href} target="_blank" className="transition-all duration-500 ">
    <Image
      src={src}
      alt={alt}
      width={36}
      height={36}
      className="rounded-full"
    />
  </a>
);

export default Footer;
