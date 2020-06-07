const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const PRODUCTION = process.env.PRODUCTION === "true";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (PRODUCTION) {
  app.use(express.static(path.join(__dirname, "public")));

  // Handles any requests that don't match the ones above
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  });
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "coleloui123@gmail.com",
    pass: process.env.password,
  },
});

const send = ({ email, name, text }) => {
  const person = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from: "coleloui123@gmail.com",
    to: process.env.sendto,
    subject: `New message from ${person} at your portfolio`,
    text,
    replyTo: person,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

app.post("/", (req, res) => {
  const { email = "", name = "", message = "" } = req.body;

  send({ email, name, text: message })
    .then(() => {
      console.log(`Sent the message "${message}" from <${name}> ${email}.`);
    })
    .catch((error) => {
      console.log(
        `Failed to send the message "${message}" from <${name}> ${email} with the error ${
          error && error.message
        }`
      );
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
