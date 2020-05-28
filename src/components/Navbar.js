import React from "react";
import { Link, useState, useEffect } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      id="top-of-page"
      className="grid bg-teal-400 rounded-md font-bold h-10 border-4 border-teal-600 sticky top-0"
    >
      <div className="text-center flex justify-around self-center">
        Louis Coleman
        {/* <Link to="/" className="hover:underline hover:text-gray-600">
          Home
        </Link>
        <Link to="/projects" className="hover:underline hover:text-gray-600">
          Projects
        </Link>
        <Link to="/contact" className="hover:underline hover:text-gray-600">
          Contact Me
        </Link> */}
      </div>
    </div>
  );
}
