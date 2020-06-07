import React from "react";
import Pogodex from "./Photos/pogodex.png";

export default function Project3() {
  return (
    <div className="col-start-2 row-start-3 self-center">
      <div className="container rounded-md border-4 border-teal-600 shadow-xl bg-gray-400 mt-4">
        <div className="text-center text-xl underline font-bold uppercase">
          <a
            className="hover:text-teal-600"
            href="https://dionleung14.github.io/Pokemon-GO-Virtual-Dex/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Pok&eacute;GoDex
          </a>
        </div>
        <img
          src={Pogodex}
          className="rounded object-scale-down my-2"
          alt="rocketlist"
        />
        <p className="ml-2 mr-2 mt-2 clear-none">
          Pok&eacute;GoDex is an application that pulls from two different API's
          which then compares the arrays that they receive. You can filter
          through a list of all Pok&eacute;mon and grab specific information
          about them. The stats that you receive are the name, type, generation,
          and the Pokédex entry. The filtered list allows you to see which
          Pok&eacute;mon are available in the mobile game Pok&eacute;mon GO.
          This was built using{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://github.com/pokeapi"
          >
            Pok&eacute;API
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://rapidapi.com/user/brianiswu"
          >
            Pok&eacute;mon Go
          </a>
          , and{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API#Extensions_to_other_interfaces"
          >
            Web Animations API
          </a>
          , and{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://bulma.io/"
          >
            Bulma.
          </a>
        </p>
      </div>
    </div>
  );
}
