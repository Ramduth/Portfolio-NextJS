import React from "react";
import Pic from "../../assets/Ram.jpg";
import Image from "next/image";

function Hero() {
  return (
    <div className="min-h-screen w-full flex items-center pt-20 px-4 md:px-16 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12 items-center">
        <div className="order-2 lg:order-1 animate-on-scroll fade-in-left">
          <div className="mb-6">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-50 text-blue-500">
              MERN Stack Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-Manrope mb-4 text-black">
              Hi, I'm
              <span className="text-blue-500"> Ramduth Rajesh</span>
            </h1>
            <p className="text-base md:text-lg  text-muted-foreground font-Roboto mb-6 w-full md:max-w-xl text-black-400"> passion for learning and
              exploring new technologies. Skilled in building scalable web apps,
              RESTful APIs, and user-friendly solutions using React, Node.js,
              Express, and MongoDB.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/RamFinalOneM.pdf" // Path to your CV file
                download="Ramduth_CV.pdf" // Suggested file name when downloaded
                className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-blue/30 transition-all duration-300 hover:-translate-y-1"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg text-blue-600 bg-white border border-blue-500 font-medium hover:bg-secondary/80 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center animate-on-scroll fade-in-right">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-60 h-60 sm:w-64 sm:h-64  md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-blue-200 shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Image src={Pic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
