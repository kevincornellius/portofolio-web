"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons/lib";
// Update the type definition for the items
type Project = {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
  githubLink: string;
  icons: Array<{
    icon: IconType;
    link: string;
  }>;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: Project[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          target="_blank"
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-amber-200 dark:bg-amber-300 dark:bg-opacity-80 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="">
            <CardImage src={item.image} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardIcons icons={item.icons} />
            <div className="flex justify-between pt-6 ">
              <button className=" z-10 px-6 py-2  bg-opacity-0 border-2 border-amber-300 bg-white dark:bg-black transition-colors duration-500 ease-in-out hover:bg-amber-300 dark:hover:bg-amber-300 text-black dark:text-white font-bold rounded-xl  text-xs sm:text-sm">
                Demo
              </button>
              <div
                // href={item.githubLink}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  window.open(item.githubLink, "_blank");
                }}
                className=" flex  items-center gap-2 z-10 px-6 py-2 border-2 border-black dark:border-white dark:bg-white bg-black transition-colors duration-500 ease-in-out hover:bg-white dark:hover:bg-black dark:text-black dark:hover:text-white   text-white hover:text-black font-bold rounded-xl text-xs sm:text-sm"
              >
                <FaGithub /> <h1>Github Page</h1>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border-2 border-amber-300 group-hover:border-black relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardImage = ({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) => {
  return (
    <div className="relative w-full h-48 mb-4">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "font-black text-xl sm:text-2xl underline underline-offset-4 decoration-amber-300 tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "font-black text-xs sm:text-sm mt-8 text-black-400 tracking-wide leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardIcons = ({
  icons,
}: {
  icons: Array<{ icon: IconType; link: string }>;
}) => {
  return (
    <div className="flex mt-4 gap-2 space-x-2">
      {icons.map((iconData, index) => (
        <div
          key={index}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(iconData.link, "_blank");
          }}
          className=" text-amber-300 hover:text-amber-100 transition-colors"
        >
          <iconData.icon size={30} />
        </div>
      ))}
    </div>
  );
};
