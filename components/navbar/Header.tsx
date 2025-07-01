import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme/ModeToggle";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            HMNN<span>.</span>
          </h1>
        </Link>
        {/* desktop nav && hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
          <ModeToggle />
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">Mobile Nav</div>
      </div>
    </header>
  );
};

export default Header;
