"use client";

import React from "react";
import ModeToggle from "../theme/ModeToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Project",
    href: "/project",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Admin",
    href: "/admin",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  // console.log("Current Pathname:", pathname);
  return (
    <div className="">
      <div className="gap-8">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`${
              link.href === pathname && "text-green-800 p-2 border-b-2"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
