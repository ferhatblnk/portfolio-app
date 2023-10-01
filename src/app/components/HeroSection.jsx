'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> Merhaba, Ben </span>
          <br/>
        <TypeAnimation
        sequence={[
            'Ferhat',
            1000,
            'Web Developer',
            1000,
            'Mobile Developer',
            1000,
            'Backend Developer',
            1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dolorum totam et?
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-orange-500 via-yellow-500 to-amber-500 sm:w-fit w-full bg-white hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-4">
             <span className=""> Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px]">
            <Image
              className="absolute transform"
              src="/images/developer-img.png"
              alt="Developer Image"
              width={255}
              height={255}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
