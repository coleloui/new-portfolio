import React from "react";
import Me from "../components/Photos/Louis.jpg";

export default function Bio() {
  return (
    <div className="items-baseline col-start-2 self-center">
      <div className="rounded-md border-4 border-teal-600 shadow-2xl bg-gray-400 mt-10 flex-1">
        <img
          src={Me}
          className="rounded w-40 object-fit float-left mr-4 my-4 ml-2"
          alt="Louis"
        />
        <p className="m-2 clear-none">
          Hi, my name is Louis Coleman and I am a passionate Full Stack Web
          Developer. I'm from from Tampa, Florida and currently live in Seattle,
          Washington. I have always had a huge facination in computers with an
          emphasis on gaming which has evolved over time into a love of coding.
          Initially, it was something I lightly dabbled in during my spare time
          which then turned more serious as I recently graduated (May 2020) from
          the University of Washington Full Stack Coding Bootcamp where I became
          proficient in HTML5, CSS, JavaScript, jQuery, Java, Bootstrap,
          Tailwind CSS, Express.js, React.js, Node.js, Database Theory, MongoDB,
          MySQL, CLI, and Git.
        </p>
      </div>
      <div id="projects" className="invisible">
        dedicated to the love of my life, Shannon
      </div>
    </div>
  );
}
