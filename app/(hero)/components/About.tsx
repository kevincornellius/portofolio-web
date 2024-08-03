import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

function About() {
  const words = [
    "Software Engineer",
    "Graphic Designer",
    "Competitive Programmer",
    "Problem Solver",
    "Fullstack Developer",
    "Lifelong Learner",
    "Web Developer",
  ];
  return (
    <div className="min-h-full mt-24 mb-32">
      <h1 className="font-black text-4xl sm:text-7xl">Kevin Cornellius</h1>
      <FlipWords
        className="font-medium text-xl sm:text-4xl mt-3"
        words={words}
      />
      <br />
      <p className="pt-10 ">
        Hi, my name is
        <span className="font-bold"> Kevin Cornellius Widjaja! </span> I was
        born in <span className="font-bold">2006</span> and have a strong
        passion for programming and design. I enjoy{" "}
        <a
          className="font-bold underline underline-offset-2 decoration-amber-300"
          target="_blank"
          href="https://codeforces.com/profile/worthytacos"
          rel="noopener noreferrer"
        >
          competitive programming
        </a>
        and always like learning new things. Whether it's making websites,
        designing visuals, or creating games, I love turning ideas into reality
        with technology and creativity.
      </p>
    </div>
  );
}

export default About;
