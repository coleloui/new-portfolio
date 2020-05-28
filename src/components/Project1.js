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
          >
            Rocket List
          </a>
        </div>
        <img
          src={RocketList}
          className="rounded object-scale-down my-2"
          alt="rocketlist"
        />
      </div>
    </div>
  );
}
