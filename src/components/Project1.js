import React from "react";
import RocketList from "./Photos/rocketlist.png";

export default function Project1() {
  return (
    <div className="col-start-1 row-start-2 self-center">
      <div className="container rounded-md border-4 border-teal-600 shadow-xl bg-gray-400 mt-4">
        <div className="text-center text-xl underline font-bold uppercase">
          <a
            className="hover:text-teal-600"
            href="https://rocketlist.herokuapp.com/"
            target="_blank"
          >
            RocketList
          </a>
        </div>
        <img
          src={RocketList}
          className="rounded object-scale-down my-2"
          alt="rocketlist"
        />
        <p className="ml-2 mr-2 mt-2 clear-none">
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
