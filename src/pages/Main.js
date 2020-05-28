import React from "react";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Main() {
  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 flex">
      <Bio />
      <Projects />
      <Contact />
    </div>
  );
}
