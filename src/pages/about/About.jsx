import React from "react";
import { MdSchool } from "react-icons/md";

function About() {
  return (
    <section id="about" className="px-4 pb-6 py-25 md:px-16 max-w-screen-2xl mx-auto">
      <div className="section-container">
        <div className="text-center mb-10 animate-on-scroll fade-in-bottom">
          <h2 className="text-3xl md:text-4xl text-black  font-bold mb-2">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="ext-base mb-12 max-w-3xl mx-auto">
            Get to know my journey, education, and aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 animate-on-scroll fade-in-left">
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <div className="space-y-4 text-sm md:text-lg">
              <p>
                I am a passionate MERN Stack Developer with a strong foundation
                in JavaScript, React.js, Node.js, and MongoDB. My journey in
                technology is driven by a deep curiosity and desire to solve
                real-world problems through innovative solutions.
              </p>
              <p>
                What excites me about web development is the perfect blend of
                creativity and logic it requires. I enjoy building applications
                that are not only functional but also deliver exceptional user
                experiences.
              </p>
              <p>
                My goal is to continually expand my knowledge and skillset in
                the ever-evolving tech landscape. I am particularly drawn to
                opportunities that challenge me to learn and grow while making
                meaningful contributions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 animate-on-scroll fade-in-right">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-gray-300">
              <div className="flex items-center gap-2 mb-4">
                <MdSchool size={30} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-8">
                <div className="relative ">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2"></div>
                  <div className="mb-1">
                    <span className="text-sm font-medium px-2 py-1 rounded bg-blue-50 text-blue-500">
                      2022 - 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base md:text-xl font-semibold mb-1">
                      Master of Computer Applications
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    Sree Narayana Institute of Technology, Kollam
                  </p>
                  <p className="text-sm mt-1 font-medium">CGPA: 75%</p>
                </div>

                <div className="">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2"></div>
                  <div className="mb-1">
                    <span className="text-sm font-medium px-2 py-1 rounded bg-blue-50 text-blue-500">
                      2019 - 2022
                    </span>
                  </div>
                  <h4 className="text-base md:text-xl font-semibold mb-1">
                    Bachelor's in Physics and Computer Application
                  </h4>
                  <p className="text-muted-foreground">
                    Sree Narayana College, Kollam
                  </p>
                  <p className="text-sm mt-1 font-medium">CGPA: 75%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
