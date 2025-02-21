import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./ModeToggle"; // Adjust the import path as necessary
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-background text-foreground  max-w-[1200px] mx-auto">
      <div className="p-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <SidebarTrigger></SidebarTrigger>
          <Link to="/">
            <h1 className="text-2xl font-bold">Team SW</h1>
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li className="content-center">
            <Link to="/home" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="content-center">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li className="content-center">
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li className="content-center">
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
