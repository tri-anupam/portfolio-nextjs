"use client"
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectSection";
import SlideUp from "@/components/SlideUp";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <ParallaxProvider>
        <HeroSection />
        <Parallax speed={-10}>
          <AboutSection />
        </Parallax>
        <ProjectsSection />
        <SlideUp />
      </ParallaxProvider>
    </main>
  )
}
