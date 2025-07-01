"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-green-500 border-b-2 border-green-500 hover:text-green-500 capitalize font-medium transition-all"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
