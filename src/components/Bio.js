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
          Hi, I'm Louis Coleman, a passionate Full Stack Web Developer, I'm from
          from Tampa, FL and currently live in Seattle, Wa. Growing up I always
          had a huge facination in computers, mainly gaming. This evolved over
          time into a love of coding, at first it was something I looked into on
          my own however recently I was able to take part in a coding bootcamp
          through the University of Washington where I became proficient in
          HTML5, CSS, JavaScript, jQuery, Java, Bootstrap, Tailwind CSS,
          Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, CLI,
          and Git.
        </p>
      </div>
      <div id="projects" className="invisible">
        dedicated to the best gf ever, Shannon
      </div>
    </div>
  );
}
