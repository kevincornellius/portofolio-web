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

function page() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const achievementRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const educationsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
      about: aboutRef,
      projects: projectsRef,
      experiences: experiencesRef,
      education: educationsRef,
      achievement: achievementRef,
      contacts: contactsRef,
    };

    const ref = refMap[section]?.current;
    if (ref) {
      const offset = 180;
      const top = ref.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <div className=" min-h-screen dark:bg-black bg-white overflow-hidden  dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
      <div className=" max-w-xs sm:max-w-sm mx-auto xl:max-w-5xl lg:max-w-3xl   ">
        <TracingBeam className="">
          <Navbar onSectionClick={scrollToSection} />
          <div className="pt-40 max-w-7xl ">
            {/*Content is here> */}

            <AnimatedSection>
              <div ref={aboutRef}>
                <About />
              </div>
            </AnimatedSection>

            <div ref={projectsRef}>
              <Projects />
            </div>

            <div ref={experiencesRef}>
              <Experiences />
            </div>
            <div ref={educationsRef}>
              <Educations />
            </div>

            <div ref={achievementRef}>
              <Achievement />
            </div>

            <div ref={contactsRef}>
              <Contacts />
            </div>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

export default page;
