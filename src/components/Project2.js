import React from "react";
import MapleValley from "./Photos/MapleValley.png";

export default function Project2(props) {
  return (
    <div
      className={`col-start-${props.col} row-start-${props.row} self-center`}
    >
      <div className="container rounded-md border-4 border-teal-600 shadow-2xl bg-gray-400 mt-4">
        <div className="text-center text-xl underline font-bold uppercase">
          <a
            rel="noopener noreferrer"
            className="hover:text-teal-600"
            href="https://protected-lowlands-08660.herokuapp.com/"
            target="_blank"
          >
            MapleValley
          </a>
        </div>
        <img
          src={MapleValley}
          className="rounded object-scale-down my-2"
          alt="rocketlist"
        />
        <p className="ml-2 mr-2 mt-2 clear-none">
          Maple Valley is an online registration system for volunteers and
          parents of campers of Girl Scouts Maple Valley Day Camp that will
          replace paper registration and facilitate camp planning by allowing
          registration details to be easily shared to camp planning committee.
          This was built using{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://expressjs.com/"
          >
            express
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/express-handlebars"
          >
            express-handlebars
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/express-session"
          >
            express-session
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://sequelize.org/"
          >
            sequelize
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/connect-session-sequelize"
          >
            connect-session-sequelize
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/mysql2"
          >
            mysql2
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/bcrypt"
          >
            bcrypt
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://nodemailer.com/about/"
          >
            nodemailer
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
