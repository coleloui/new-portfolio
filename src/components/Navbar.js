import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className="grid bg-teal-400 rounded-md font-bold h-10 border-4 border-teal-600 sticky top-0">
      <div className="text-center flex justify-around self-center">
        <Link smooth to="/#bio">
          About Me
        </Link>
        <Link smooth to="/#projects">
          Projects
        </Link>
        <Link smooth to="/#contact">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
