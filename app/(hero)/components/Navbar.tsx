"use client";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import PatrickStar from "../../../components/assets/patrick-star.jpg";
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
        "fixed top-10 inset-x-0 max-w-lg mx-auto z-50 border rounded-full flex justify-evenly bg-white"
      )}
    >
      <Menu setActive={setActive}>
        <div className="mr-20">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Kevin Cornellius"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Instagram</HoveredLink>
              <HoveredLink href="/interface-design">Github</HoveredLink>
              <HoveredLink href="/seo">LinkedIn</HoveredLink>
              <HoveredLink href="/branding">Discord</HoveredLink>
            </div>
          </MenuItem>
        </div>{" "}
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src={PatrickStar.src}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src={PatrickStar.src}
              description="Production ready Tailwind css components for your next project"
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
