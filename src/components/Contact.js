import React from "react";

function getRandomString() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

const initialFormData = { name: "", email: "", message: "" };
Object.freeze(initialFormData);

export default function Contact() {
  const [contactSubject, setContactSubject] = React.useState("placeholder");
  const [formData, updateFormData] = React.useState({
    ...initialFormData,
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };
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
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(e.target);
            formData.subject = contactSubject;
            const res = await fetch("/.netlify/functions/contact", {
              method: "POST",
              body: JSON.stringify(formData),
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (res.ok) {
              // alert("Message Sent");
              // window.location.reload(false);
              updateFormData(() => initialFormData);
              console.log("hi dave");
            }
            console.log("res", res);
          }}
        >
          <input
            type="hidden"
            className="form-control"
            name={getRandomString()}
            autoComplete={getRandomString()}
            value={contactSubject}
            onChange={(e) => setContactSubject(e.target.value)}
            style={{ display: "none" }}
          />
          <div className="mb-2 ml-4 mr-4">
            <label htmlFor="name" className="block text-sm font-bold underline">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 w-full mb-2 leading-tight focus:outline-non focus:shadow-outline"
              name="name"
              type="text"
              value={formData.name}
              placeholder="John Snow"
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              className="block text-sm font-bold underline"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 w-full mb-2 leading-tight focus:outline-non focus:shadow-outline"
              name="email"
              type="email"
              value={formData.email}
              placeholder="john.snow@placeholder.com"
              onChange={handleChange}
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
              value={formData.message}
              placeholder="Hello!"
              onChange={handleChange}
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
