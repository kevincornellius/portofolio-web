import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Projects from "./components/Projects";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import Experiences from "./components/Experiences";
import Achievement from "./components/Achievement";
import Contacts from "./components/Contacts";

function page() {
  return (
    <div className=" min-h-screen dark:bg-black bg-white overflow-hidden  dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
      <div className=" max-w-xs sm:max-w-sm mx-auto xl:max-w-5xl lg:max-w-3xl   ">
        <Navbar />
        <TracingBeam className="">
          <div className="pt-40 max-w-7xl ">
            {/*Content is here> */}

            <AnimatedSection>
              <About />
            </AnimatedSection>

            <Projects />
            <Experiences />
            <Achievement />
            <Contacts />
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

export default page;
