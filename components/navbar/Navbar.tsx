import React from "react";
import ThemeToggle from "../general/ThemeToggle";

const Navbar = () => {
  return (
    <header className="backdrop-blur-3xl shadow-2xl p-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          HMNN's
        </a>
        <nav className="flex items-center space-x-6 ">
          <a
            href="/dashboard"
            className="hover:text-green-500 hover:border-b-2  rounded-sm m-1 p-1 "
          >
            DASHBOARD
          </a>
          <a
            href="/projects"
            className="hover:text-green-500 hover:border-b-2  rounded-sm m-1 p-1 "
          >
            PROJECTS
          </a>
          <a
            href="/about"
            className="hover:text-green-500 hover:border-b-2  rounded-sm m-1 p-1 "
          >
            ABOUT
          </a>
          <a
            href="/admin"
            className="hover:text-green-500 hover:border-b-2  rounded-sm m-1 p-1 "
          >
            ADMIN
          </a>
          <a
            href="/contact"
            className="hover:text-green-500 hover:border-b-2  rounded-sm m-1 p-1 "
          >
            CONTACT
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;

{
  /* <div className="container mx-auto flex justify-between items-center">
  <a href="/" className="text-2xl font-bold">
    Portfolio
  </a>
  <nav className="flex items-center space-x-4">
    <a href="/dashboard" className="hover:underline">
      Dashboard
    </a>
    <a href="/projects" className="hover:underline">
      Projects
    </a>
    <a href="/about" className="hover:underline">
      About
    </a>
    <a href="/admin" className="hover:underline">
      Admin
    </a>
    <ThemeToggle />
  </nav>
</div>; */
}
