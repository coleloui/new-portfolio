import React from "react";
import "./Projects.css";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
// import Project4 from "../components/Project4";
// import Project5 from "../components/Project5";

export default function Projects() {
  return (
    <div className="lg:grid lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 Projects">
      <Project1 col={1} row={1} />
      <Project2 col={3} row={1} />
      <Project3 col={2} row={2} />
    </div>
  );
}
