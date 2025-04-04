import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "./Hero/Hero";
import SkillsCarousel from "./skills/SkillsCarousel";
import Projects from "./projects/Projects";
import About from "./about/About";
import ContactMe from "./contactme/ContactMe";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Projects />
      <SkillsCarousel/>
      <About />
      {/* <ContactMe /> */}
    </div>
  );
}
