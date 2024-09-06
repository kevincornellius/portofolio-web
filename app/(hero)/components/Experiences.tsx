"use client";
import React from "react";
import logoPPSN from "../../../components/assets/ppsn.png";
import logoTOKI from "../../../components/assets/Toki.jpg";

import { AnimatedSection } from "@/components/ui/animated-reveal";
function Experiences() {
  return (
    <div className="min-h-full">
      <AnimatedSection>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-12">
          My Experiences
        </h1>
      </AnimatedSection>

      <div>
        <ul>
          <AnimatedSection>
            <li
              onClick={() =>
                window.open("https://www.ppsnindonesia.com/", "_blank")
              }
              className=" cursor-pointer hover:border-amber-100 dark:hover:border-amber-500  flex flex-col lg:flex-row justify-start items-center gap-6 w-full bg-white dark:bg-black border-4 border-amber-300 px-16 py-8 my-4 rounded-3xl"
            >
              <img
                draggable="false"
                src={logoPPSN.src}
                alt=""
                className="w-20"
              />
              <div>
                <h2 className="font-black dark:text-white text-md sm:text-xl">
                  Competitive Programming Problemsetting
                </h2>
                <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                  Perhimpunan Pelajar Sains Nasional - 2024
                </h3>
                <p className="text-xs">
                  Successfully managed and created challenging tasks for the
                  Informatics Olympiad (Competitive Programming) Try-out ,
                  organized by PPSN.
                </p>
              </div>
            </li>
          </AnimatedSection>
          <AnimatedSection>
            <li
              onClick={() => window.open("https://alumni.toki.id/", "_blank")}
              className=" cursor-pointer hover:border-amber-100  flex flex-col lg:flex-row justify-start items-center gap-6 w-full my-4 bg-white border-4 dark:hover:border-amber-500  dark:bg-black  border-amber-300 px-16 py-8 rounded-3xl"
            >
              <img
                draggable="false"
                src={logoTOKI.src}
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h2 className="font-black text-md sm:text-xl">
                  Competitive Programming Olympiad Preparation Supervising
                </h2>
                <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                  Ikatan Alumni Tim Olimpiade Komputer Indonesia - 2024
                </h3>
                <p className="text-xs">
                  Managed tasks, created editorial content, and helped OSN
                  finalists learn more for the Competitive Programming Olympiad
                  preparation with Ikatan Alumni Tim Olimpiade Komputer
                  Indonesia.
                </p>
              </div>
            </li>
          </AnimatedSection>
        </ul>
      </div>
    </div>
  );
}

export default Experiences;
