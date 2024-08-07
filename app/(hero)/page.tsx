"use client";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Projects from "./components/Projects";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import Experiences from "./components/Experiences";
import Achievement from "./components/Achievement";
import Contacts from "./components/Contacts";
import Educations from "./components/Educations";

function Page() {
  const AboutRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);
  const ExperiencesRef = useRef<HTMLDivElement>(null);
  const AchievementRef = useRef<HTMLDivElement>(null);
  const ContactsRef = useRef<HTMLDivElement>(null);
  const EducationsRef = useRef<HTMLDivElement>(null);

  const ScrollToSection = (section: string) => {
    const RefMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
      About: AboutRef,
      Projects: ProjectsRef,
      Experiences: ExperiencesRef,
      Education: EducationsRef,
      Achievement: AchievementRef,
      Contacts: ContactsRef,
    };

    const Ref = RefMap[section]?.current;
    if (Ref) {
      const offset = 180;
      const top = Ref.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <div className=" min-h-screen dark:bg-black bg-white overflow-hidden  dark:bg-grid-white/[0.09] bg-grid-black/[0.05]">
      <div className=" max-w-xs sm:max-w-sm mx-auto xl:max-w-5xl lg:max-w-3xl   ">
        <TracingBeam className="">
          <Navbar OnSectionClick={ScrollToSection} />
          <div className="pt-40 max-w-7xl ">
            {/*Content is here> */}

            <AnimatedSection>
              <div ref={AboutRef}>
                <About OnSectionClick={ScrollToSection} />
              </div>
            </AnimatedSection>

            <div ref={ProjectsRef}>
              <Projects />
            </div>

            <div ref={ExperiencesRef}>
              <Experiences />
            </div>
            <div ref={EducationsRef}>
              <Educations />
            </div>

            <div ref={AchievementRef}>
              <Achievement />
            </div>

            <div ref={ContactsRef}>
              <Contacts />
            </div>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

export default Page;
