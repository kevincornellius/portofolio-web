import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Projects from "./components/Projects";

function page() {
  return (
    <div className=" min-h-screen dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
      <div className=" max-w-xs sm:max-w-sm mx-auto xl:max-w-5xl lg:max-w-3xl  ">
        <Navbar />

        <div className="py-40 max-w-xl ">
          {/*Content is here> */}
          <TracingBeam className=" ">
            <About />
            <Projects />
          </TracingBeam>
        </div>
      </div>
    </div>
  );
}

export default page;
