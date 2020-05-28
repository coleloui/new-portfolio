import React from "react";
import Me from "../components/Photos/Louis.jpg";

export default function Bio() {
  return (
    <div className="flex items-baseline">
      <div className="rounded-md border-4 border-teal-600 shadow-xl bg-gray-400 col-start-2 mt-10 flex-1">
        <img
          src={Me}
          className="rounded w-40 float-left mr-4 my-2 ml-2"
          alt="Louis"
        />
        <p className="ml-2 mr-2">
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
    </div>
  );
}
