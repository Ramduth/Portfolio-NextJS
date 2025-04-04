import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import git from "../../assets/Git.png";
import tailwind from "../../assets/tailwindcss.png";
import Bootstrap from "../../assets/bootstrap.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import jave from "../../assets/java.png";
import javascript from "../../assets/js.png";
import mongodb from "../../assets/Mongodb.png";
import node from "../../assets/Node.png";
import React12 from "../../assets/React.png";
import vite from "../../assets/vite.jpeg";
import Image from "next/image";

function SkillsCarousel() {
  // Create the autoplay plugin
  const plugin = useRef(
    Autoplay({
      delay: 1500,
      stopOnInteraction: true,
      stopOnMouseEnter: true, // Make sure it stops on mouse enter
      playOnInit: true, // Start playing right away when initialized
    })
  );

  // Reference to store the API
  const [emblaApi, setEmblaApi] = React.useState(null);

  // Ensure the autoplay works properly when mouse leaves
  const handleMouseLeave = () => {
    if (plugin.current && plugin.current.reset && emblaApi) {
      plugin.current.reset();
      plugin.current.play();
    }
  };

  const skills = [
    { id: 1, image: tailwind, title: "Tailwind CSS" },
    { id: 2, image: mongodb, title: "Mongo DB" },
    { id: 3, image: node, title: "Node JS" },
    { id: 4, image: vite, title: "React Vite" },
    { id: 5, image: git, title: "Git" },
    { id: 6, image: Bootstrap, title: "Bootstrap" },
    { id: 7, image: css, title: "CSS" },
    { id: 8, image: html, title: "HTML" },
    { id: 9, image: jave, title: "Java" },
    { id: 10, image: javascript, title: "Javascript" },
  ];

  // Add a style to prevent text selection in the entire carousel
  useEffect(() => {
    // Add a global style to prevent content selection during dragging
    const style = document.createElement('style');
    style.innerHTML = `
      .embla-carousel-container * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full py-25 overflow-hidden bg-white relative px-4 md:px-16 max-w-screen-2xl mx-auto">
      <div className="text-center mb-10 animate-on-scroll fade-in-bottom">
        <h2 className="text-3xl md:text-4xl text-black font-bold">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <p className="text-base mb-12 max-w-3xl mx-auto">
          A showcase of my technical abilities and expertise.
        </p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-screen embla-carousel-container"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={handleMouseLeave}
        setApi={setEmblaApi}
      >
        <CarouselContent className="select-none">
          {skills.map((skill) => (
            <CarouselItem
              key={skill.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <div className="p-1">
                <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 group">
                  <CardContent className="relative flex flex-col items-center justify-center aspect-square p-6 cursor-grab">
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      className="object-cover w-16 h-16 transition-transform duration-300 group-hover:-translate-y-4 pointer-events-none"
                      draggable="false"
                    />
                    <div className="absolute bottom-0 w-full opacity-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 pt-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <h1 className="text-center font-medium text-white">
                        {skill.title}
                      </h1>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}

export default SkillsCarousel;