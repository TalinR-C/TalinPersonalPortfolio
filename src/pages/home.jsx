import React from "react";
import HeroSection from "../components/home/HeroSection";
import SkillsSection from "../components/home/SkillsSection";
import EducationSection from "../components/home/EducationSection";
import ProjectsSection from "../components/home/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
    </div>
  );
}