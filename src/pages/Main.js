import React from "react";
import Bio from "../components/Bio";
import "./Main.css";

export default function Main() {
  return (
    <div className="lg:grid lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 IAmMain">
      <Bio col={2} row={1} />
    </div>
  );
}
