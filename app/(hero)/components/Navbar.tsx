"use client";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import beautyWeb from "../../../components/assets/beautyweb.png";
import mern from "../../../components/assets/mern.png";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

// function Navbar() {
//   return (
//     // <div className="py-8 min-h-screen">
//     //   <h1 className="text-2xl font-black underline underline-offset-4 decoration-amber-300">
//     //     cornellius
//     //   </h1>
//     // </div>
//   );
// }

function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-sm sm:max-w-lg  mx-auto z-50 border rounded-full flex justify-evenly bg-white"
      )}
    >
      <Menu setActive={setActive}>
        <div className="mr-5 sm:mr-20">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Kevin Cornellius"
          >
            <div className="flex flex-col space-y-4 text-sm items-start">
              <HoveredLink href="https://www.instagram.com/kevin_cornelliuss/">
                <div className="mr-1">
                  <AiFillInstagram />
                </div>
                Instagram
              </HoveredLink>
              <HoveredLink href="https://github.com/kevincornellius">
                <div className="mr-1">
                  <FaGithub />
                </div>
                Github
              </HoveredLink>
              <HoveredLink href="https://www.linkedin.com/in/kevincornellius/">
                <div className="mr-1">
                  <FaLinkedinIn />
                </div>
                LinkedIn
              </HoveredLink>
              <HoveredLink href="https://discord.com/users/324513234604523530">
                <div className="mr-1">
                  <FaDiscord />
                </div>
                Discord
              </HoveredLink>
            </div>
          </MenuItem>
        </div>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  grid grid-cols-1 gap-10 p-4)">
            <ProductItem
              title="Beauty Frontend Landing Page"
              href="https://beauty-website-demo.web.app/"
              src={beautyWeb.src}
              description=" Made With React Javascript"
            />
            <ProductItem
              title="MERN E-Commerce Page"
              href="https://ecommerceweb-frontend.vercel.app/"
              src={mern.src}
              description="Integrated with Stripe and Cloudinary"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">About Me</HoveredLink>
            <HoveredLink href="/interface-design">Experiences</HoveredLink>
            <HoveredLink href="/seo">Education</HoveredLink>
            <HoveredLink href="/branding">Achievement</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
