import React from "react";
import RocketList from "./Photos/newrocketlist.png";

export default function Project1() {
  return (
    <div className="col-start-1 row-start-2 self-center">
      <div className="container rounded-md border-4 border-teal-600 shadow-xl bg-gray-400 mt-4">
        <div className="text-center text-xl underline font-bold uppercase">
          <a
            className="hover:text-teal-600"
            href="https://rocketlist.herokuapp.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            RocketList
          </a>
        </div>
        <img
          src={RocketList}
          className="rounded object-scale-down my-2"
          alt="rocketliskt"
        />
        <p className="ml-2 mr-2 mt-2 clear-none">
          RocketList is a React website in which we pulled inspiration from
          Craigslist, Yahoo Answers, and Reddit. It allows for different topics
          and for people to make a post where others can make comments. We also
          added a feature that allows users to join chat rooms within a specific
          post where they can discuss the topic at hand in more depth. This was
          built using{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.apollographql.com/"
          >
            apollo
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/graphql"
          >
            graphql
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://react-redux.js.org/"
          >
            React Redux
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/popper.js"
          >
            popper.js
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/query-string"
          >
            query-string
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/react"
          >
            react
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/react-emoji"
          >
            react-emoji
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/react-scroll-to-bottom"
          >
            react-scroll-to-bottom
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/react-spinners"
          >
            react-spinners
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/socket.io-client"
          >
            socket.io-client
          </a>
          , and{" "}
          <a
            rel="noopener noreferrer"
            className="hover:underline"
            target="_blank"
            href="https://www.npmjs.com/package/tailwindcss"
          >
            tailwindcss.
          </a>
        </p>
      </div>
    </div>
  );
}
