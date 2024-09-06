"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import beautyWeb from "../../../components/assets/beautyweb.png";
import mern from "../../../components/assets/mern.png";
import { MdJavascript } from "react-icons/md";
import { FaCss3Alt, FaReact } from "react-icons/fa6";
import { DiHtml5 } from "react-icons/di";
import { GrCss3 } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
function Projects() {
  return (
    <div className="min-h-screen ">
      <AnimatedSection>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300">
          My Projects
        </h1>
      </AnimatedSection>
      <AnimatedSection>
        <HoverEffect items={projects} />
      </AnimatedSection>
    </div>
  );
}

export const projects = [
  {
    title: "ReactJS Landing Page",
    description:
      "Developed a responsive ReactJS landing page for a beauty website, utilizing React, vanilla JavaScript, and HTML with CSS for styling, and built with Vite. Integrated Web3Forms to ensure smooth form submissions.",
    link: "https://beauty-website-demo.web.app/",
    image: beautyWeb,
    githubLink: "https://github.com/kevincornellius/beautywebsite",
    icons: [
      { icon: FaReact, link: "https://react.dev/" },
      { icon: DiHtml5, link: "https://www.w3schools.com/html/" },
      { icon: FaCss3Alt, link: "https://www.w3schools.com/css/" },
      { icon: IoLogoJavascript, link: "https://www.javascript.com/" },
    ],
  },
  {
    title: "MERN E-Commerce Web",
    description:
      "Created a full-stack e-commerce web app with MERN, integrating Stripe for payments and Cloudinary for image storage, featuring a customer frontend and an admin dashboard for managing products and users.",
    link: "https://ecommerceweb-frontend.vercel.app/",
    image: mern,
    githubLink: "https://github.com/kevincornellius/MERN-ecommerceweb",
    icons: [
      { icon: SiMongodb, link: "https://www.mongodb.com/" },
      { icon: SiExpress, link: "https://expressjs.com/" },
      { icon: FaReact, link: "https://react.dev/" },
      { icon: RiNodejsLine, link: "https://nodejs.org/en" },
      { icon: DiHtml5, link: "https://www.w3schools.com/html/" },
      { icon: FaCss3Alt, link: "https://www.w3schools.com/css/" },
      { icon: IoLogoJavascript, link: "https://www.javascript.com/" },
    ],
  },
];

export default Projects;
