"use client";
import React from "react";
import patrickStar from "../../../components/assets/patrick-star.jpg";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Projects() {
  return (
    <div className="min-h-screen ">
      <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300">
        My Projects
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: patrickStar,
    githubLink: "https://www.youtube.com/",
    icons: [
      { icon: FaGithub, link: "https://github.com/stripe" },
      { icon: FaTwitter, link: "https://twitter.com/stripe" },
      { icon: FaLinkedin, link: "https://www.linkedin.com/company/stripe" },
    ],
  },
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: patrickStar,
    githubLink: "https://www.youtube.com/",
    icons: [
      { icon: FaGithub, link: "https://github.com/stripe" },
      { icon: FaTwitter, link: "https://twitter.com/stripe" },
      { icon: FaLinkedin, link: "https://www.linkedin.com/company/stripe" },
    ],
  },
];

export default Projects;
