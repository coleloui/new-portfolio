import React from "react";
import { useSelector } from "react-redux";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
// import Project4 from "../components/Project4";
// import Project5 from "../components/Project5";

export default function Main() {
  const Biog = useSelector((state) => state.Biog);
  const Contacter = useSelector((state) => state.Contacter);
  const Projects = useSelector((state) => state.Projects);
  return (
    <div className="lg:grid lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-4 lg:gap-4 lg:flex">
      <Bio col={2} row={1} />
      <Project1 col={1} row={2} />
      <Project2 col={3} row={2} />
      <Project3 col={2} row={3} />
      <Contact col={2} row={4} />
      {/* {Biog ? <Bio col={2} row={1} /> : ""} */}
      {/* {Projects ? <Project1 col={1} row={1} /> : ""} */}
      {/* {Projects ? <Project2 col={2} row={2} /> : ""} */}
      {/* {Projects ? <Project3 col={3} row={1} /> : ""} */}
      {/* <Project4 />
      <Project5 /> */}
      {/* {Contacter ? <Contact col={2} row={1} /> : ""} */}
    </div>
  );
}
