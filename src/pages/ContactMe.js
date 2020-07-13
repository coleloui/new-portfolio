import React from "react";
import Contact from "../components/Contact";
// import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className="lg:grid lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 ContactMe">
      <Contact col={2} row={1} />
    </div>
  );
}
