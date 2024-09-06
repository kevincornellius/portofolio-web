"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onClick,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  const handleClick = () => {
    setActive(item);
    if (onClick) onClick();
  };
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer  text-sm sm:text-lg text-black dark:text-white font-bold"
        onClick={handleClick}
      >
        {item === "icon" ? (
          <span className="flex justify-center mt-0.5 md:mt-1 mr-5">
            <MdLightMode className="absolute dark:scale-0 scale-100" />
            <MdDarkMode className="absolute dark:scale-100 scale-0" />
          </span>
        ) : (
          <span className="cursor-pointer text-sm sm:text-lg text-black hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:z-0	 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-amber-300 before:absolute before:left-0 before:-bottom-2 dark:text-white font-bold">
            {item}
          </span>
        )}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full  dark:bg-black  bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link
      href={href}
      target={href !== "" ? "_blank" : undefined}
      className=" flex flex-col sm:flex-row space-x-2"
    >
      <Image
        src={src}
        width={140}
        height={50}
        alt={title}
        className="flex-shrink-0 rounded-md mx-auto sm:mx-0 sm:shadow-2xl"
      />
      <div>
        <h4 className="text-lg sm:text-xl py-2 text-center sm:text-left sm:mx-0 sm:py-0 font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 mx-auto text-center sm:text-left  sm:mx-0 sm:text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      target="_blank"
      className="text-neutral-700 dark:text-neutral-200 hover:text-black flex justify-between items-center"
    >
      {children}
    </Link>
  );
};
