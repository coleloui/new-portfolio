import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className="grid bg-gray-400 rounded-md font-bold h-10 border-4 border-teal-600 sticky top-0 shadow-2xl">
      <div className="text-center flex justify-around self-center">
        <Link to="/">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
  );
}
