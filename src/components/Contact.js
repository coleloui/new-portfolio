import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex items-baseline col-start-2 row-start-4 self-center"
    >
      <div className="container rounded-md border-4 border-teal-600 shadow-xl bg-gray-400 mt-4">
        <h1 className="underline text-center font-bold mt-2 mb-2">
          Contact Me!
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Post Submitted");
          }}
        >
          <div className="mb-2 ml-4 mr-4">
            <label htmlFor="name" className="block text-sm font-bold underline">
              Name
            </label>
            <input
              className="shadown appearance-none border rounded py-2 px-3 w-full mb-2 leading-tight focus:outline-non focus:shadow-outline"
              name="name"
              type="text"
              placeholder="John Snow"
            />
            <label
              htmlFor="email"
              className="block text-sm font-bold underline"
            >
              Email
            </label>
            <input
              className="shadown appearance-none border rounded py-2 px-3 w-full mb-2 leading-tight focus:outline-non focus:shadow-outline"
              name="email"
              type="email"
              placeholder="john.snow@placeholder.com"
            />
            <label
              htmlFor="message"
              className="block text-sm font-bold underline"
            >
              Message
            </label>
            <textarea
              className="form-textarea block shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              name="message"
              placeholder="Hello!"
            ></textarea>
            <button
              className="bg-teal-400 hover:bg-teal-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-4 border-teal-600"
              type="submit"
            >
              Send
            </button>
            <div>
              {window.location.hash === "#success" && (
                <div id="success">
                  <p>Your message has been sent!</p>
                </div>
              )}
              {window.location.hash === "#error" && (
                <div id="error">
                  <p>An error occured while submitting the form.</p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
