"use client";
import React from "react";
import logoPPSN from "../../../components/assets/ppsn.png";
import logoTOKI from "../../../components/assets/Toki.jpg";
import logoUI from "../../../components/assets/ui.png";
import logoRICCI from "../../../components/assets/ricci.png";
import { AnimatedSection } from "@/components/ui/animated-reveal";
function Experiences() {
  return (
    <div className="min-h-screen">
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
              className=" cursor-pointer hover:border-amber-100  flex flex-col lg:flex-row justify-start items-center gap-6 w-full bg-white border-4 border-amber-300 px-16 py-8 my-4 rounded-3xl"
            >
              <img src={logoPPSN.src} alt="" className="w-20" />
              <div>
                <h2 className="font-black text-md sm:text-xl">
                  Competitive Programming Problemsetting
                </h2>
                <h3 className="font-bold text-black opacity-40 text-xs sm:text-sm  mb-4">
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
              className=" cursor-pointer hover:border-amber-100  flex flex-col lg:flex-row justify-start items-center gap-6 w-full my-4 bg-white border-4 border-amber-300 px-16 py-8 rounded-3xl"
            >
              <img src={logoTOKI.src} alt="" className="w-20" />
              <div>
                <h2 className="font-black text-md sm:text-xl">
                  Competitive Programming Olympiad Preparation Supervising
                </h2>
                <h3 className="font-bold text-black opacity-40 text-xs sm:text-sm  mb-4">
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

      <AnimatedSection>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-16 mt-32">
          My Education
        </h1>
      </AnimatedSection>
      <ul>
        <AnimatedSection>
          <li
            onClick={() => window.open("https://www.ui.ac.id/", "_blank")}
            className=" cursor-pointer hover:border-amber-100  flex flex-col lg:flex-row justify-start items-center gap-6 w-full bg-white border-4 border-amber-300 px-16 py-8 my-4 rounded-3xl"
          >
            <img src={logoUI.src} alt="" className="w-20" />
            <div>
              <h2 className="font-black text-md sm:text-xl">
                Universitas Indonesia
              </h2>
              <h3 className="font-bold text-black opacity-40 text-xs sm:text-sm  mb-4">
                Computer Science // 2024-2028
              </h3>
            </div>
          </li>
        </AnimatedSection>
        <AnimatedSection>
          <li
            onClick={() =>
              window.open("https://smaricci1.sekolahricci.sch.id/", "_blank")
            }
            className=" cursor-pointer hover:border-amber-100  flex flex-col lg:flex-row justify-start items-center gap-6 w-full my-4 bg-white border-4 border-amber-300 px-16 py-8 rounded-3xl"
          >
            <img src={logoRICCI.src} alt="" className="w-20" />
            <div className="flex-col items-center justify-center">
              <h2 className="font-black text-md sm:text-xl">
                SMA Katolik RICCI 1
              </h2>
              <h3 className="font-bold text-black opacity-40 text-xs sm:text-sm  mb-4">
                IPA // 2021-2024
              </h3>
            </div>
          </li>
        </AnimatedSection>
      </ul>
    </div>
  );
}

export default Experiences;
