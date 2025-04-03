import React, { useState, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import { TbArrowBadgeRight, TbBrandWhatsappFilled } from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const letters = "RAMDUTH. ".split("");

  const AnimatedIcon = ({ children }) => (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="px-4 md:px-16 max-w-screen-2xl mx-auto flex items-center justify-between py-6">
        <Link
          href="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer -ml-4"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`font-extrabold text-2xl ${
                  scrolled ? "text-black" : "text-black"
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </Link>

        <div
          className={`hidden md:flex gap-6 ${
            scrolled ? "text-black" : "text-black"
          }`}
        >
          <Link href="#" className="cursor-pointer">
            Home
          </Link>
          <Link href="#" className="cursor-pointer">
            FAQs
          </Link>
          <div className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer">
            <Link href="#" className="cursor-pointer">
              Industries
            </Link>
            <MdOutlineArrowDropDown />
          </div>
          <Link href="#" className="cursor-pointer">
            Blogs
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <AnimatedIcon>
            <a
              href="https://github.com/Ramduth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={25}
                className={scrolled ? "text-black" : "text-black"}
              />
            </a>
          </AnimatedIcon>
          <AnimatedIcon>
            <a
              href="https://www.linkedin.com/in/ramduth-rajesh-50412324b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin
                size={24}
                className={scrolled ? "text-black" : "text-black"}
              />
            </a>
          </AnimatedIcon>
          <AnimatedIcon>
            <a
              href="https://wa.me/+918547277570"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandWhatsappFilled
                size={24}
                className={scrolled ? "text-black" : "text-black"}
              />
            </a>
          </AnimatedIcon>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
