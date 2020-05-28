import React from "react";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import Project4 from "../components/Project4";
import Project5 from "../components/Project5";

export default function Main() {
  return (
    <div className="lg:grid lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-3 lg:gap-4 lg:flex">
      <Bio />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Project5 />
      <Contact />
    </div>
  );
}
