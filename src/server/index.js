import express from "express";
import bodyParser from "body-parser";
import mailer from "./mailer";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.send("Server is working.");
});

app.post("/", (req, res) => {
  const { email = "", name = "", message = "" } = req.body;

  mailer({ email, name, text: message })
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
