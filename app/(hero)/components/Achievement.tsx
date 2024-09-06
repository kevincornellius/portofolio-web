"use client";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import React from "react";
import osnLogo from "../../../components/assets/OSN.jpg";
import unpar from "../../../components/assets/unpar.png";
import bnpchs from "../../../components/assets/bnpchs.png";
import schem from "../../../components/assets/schematics.jpg";
import toki from "../../../components/assets/Toki.jpg";

function Achievement() {
  return (
    <div className="py-24">
      <AnimatedSection>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 pb-16">
          My Achievement
        </h1>
      </AnimatedSection>

      <ul className="grid grid-cols-1 lg:grid-cols-3 w-auto   ">
        <AnimatedSection>
          <li
            onClick={() =>
              window.open(
                "https://osn.toki.id/statistik/peserta/1503",
                "_blank"
              )
            }
            className=" cursor-pointer dark:bg-black hover:border-amber-100 dark:hover:border-amber-500  flex flex-col justify-center text-center  items-center gap-6 h-60 mx-2 my-2 bg-white border-4 border-amber-300 px-16 py-8 rounded-3xl"
          >
            <img
              draggable="false"
              src={osnLogo.src}
              alt=""
              className="w-20 rounded-full"
            />
            <div className="flex-col items-center justify-center">
              <h2 className="font-black text-sm sm:text-md">
                Medali Perunggu Olimpiade Sains Nasional Informatika 2024
              </h2>
              {/* <h3 className="font-bold text-black opacity-40 text-xs sm:text-sm dark:text-white  mb-4">
                Ministry of Education, Culture, Research, and Technology
                (Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
                Republik Indonesia)
              </h3> */}
            </div>
          </li>
        </AnimatedSection>
        <AnimatedSection>
          <li
            onClick={() =>
              window.open(
                "https://informatika.unpar.ac.id/chips/chips-2022/",
                "_blank"
              )
            }
            className="cursor-pointer dark:bg-black hover:border-amber-100 dark:hover:border-amber-500  flex flex-col justify-center text-center items-center gap-6   h-60 mx-2 my-2 bg-white border-4 border-amber-300 px-16 py-8 rounded-3xl"
          >
            <img
              draggable="false"
              src={unpar.src}
              alt=""
              className="w-20 rounded-full"
            />
            <div className="flex-col items-center justify-center">
              <h2 className="font-black text-sm sm:text-md">
                3rd Place CHIPS 2022
              </h2>
              <h3 className="font-bold text-black opacity-40 text-xs sm:text-sm dark:text-white  mb-4">
                Universitas Katolik Parahyangan
              </h3>
            </div>
          </li>
        </AnimatedSection>
        <AnimatedSection>
          <li
            onClick={() =>
              window.open(
                "https://competition.binus.ac.id/bnpchs2023/",
                "_blank"
              )
            }
            className="cursor-pointer dark:bg-black hover:border-amber-100 dark:hover:border-amber-500  flex flex-col justify-center text-center items-center gap-6  h-60 mx-2 my-2 bg-white border-4 border-amber-300 px-16 py-8 rounded-3xl"
          >
            <img
              draggable="false"
              src={bnpchs.src}
              alt=""
              className="w-20 rounded-full"
            />
            <div className="flex-col items-center justify-center">
              <h2 className="font-black text-sm sm:text-md">
                Finalis BNPCHS 2023
              </h2>
              <h3 className="font-bold text-black opacity-40 text-xs sm:text-sm dark:text-white  mb-4">
                Bina Nusantara University
              </h3>
            </div>
          </li>
        </AnimatedSection>
        <AnimatedSection>
          <li
            onClick={() => window.open("https://schematics-its.com/", "_blank")}
            className="cursor-pointer dark:bg-black hover:border-amber-100 dark:hover:border-amber-500  flex flex-col justify-center text-center items-center gap-6  h-60 mx-2 my-2 bg-white border-4 border-amber-300 px-16 py-8 rounded-3xl"
          >
            <img
              draggable="false"
              src={schem.src}
              alt=""
              className="w-20 rounded-full"
            />
            <div className="flex-col items-center justify-center">
              <h2 className="font-black text-sm sm:text-md">
                Finalis Schematics 2023
              </h2>
              <h3 className="font-bold text-black opacity-40 text-xs sm:text-sm dark:text-white  mb-4">
                ITS
              </h3>
            </div>
          </li>
        </AnimatedSection>
        <AnimatedSection>
          <li
            onClick={() =>
              window.open(
                "https://osn.toki.id/statistik/peserta/1503",
                "_blank"
              )
            }
            className="cursor-pointer dark:bg-black hover:border-amber-100  dark:hover:border-amber-500  flex flex-col justify-center text-center items-center gap-6  h-60 mx-2 my-2 bg-white border-4 border-amber-300 px-16 py-8 rounded-3xl"
          >
            <img
              draggable="false"
              src={toki.src}
              alt=""
              className="w-20 rounded-full"
            />
            <div className="flex-col items-center justify-center">
              <h2 className="font-black text-sm sm:text-md">
                National Training Stage 2 for IOI
              </h2>
              <h3 className="font-bold text-black opacity-40 text-xs sm:text-xs  mb-4">
                Kemendikbud
              </h3>
            </div>
          </li>
        </AnimatedSection>
      </ul>
    </div>
  );
}

export default Achievement;
