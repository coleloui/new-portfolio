import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div id="top-of-page" className="grid bg-teal-400 rounded font-bold h-10">
      <div className="text-center flex justify-around self-center">
        <Link to="/" className="hover:underline hover:text-gray-400">
          Home
        </Link>
        <Link to="/projects" className="hover:underline hover:text-gray-400">
          Projects
        </Link>
        <Link to="/contact" className="hover:underline hover:text-gray-400">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
