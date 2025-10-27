'use client';

import React from "react";
import Image from "next/image";
import Marquee from "./Marquee"; 
import logo1 from "../../public/images/logo-25.png";
import logo2 from "../../public/images/logo-27.png";
import logo3 from "../../public/images/logo-30.png";
import logo4 from "../../public/images/logo-53.png";
import logo5 from "../../public/images/logo-77.png";
import logo6 from "../../public/images/logo-8.png";

export default function MarqueeSection() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="py-16 bg-white">
      <div >
        

        <Marquee
          speed={60}
          pauseOnHover={true}
          className="opacity-70 hover:opacity-100 transition-all"
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8"
            >
              <Image
                src={logo}
                alt={`logo-${i}`}
                className="w-35 h-auto grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
