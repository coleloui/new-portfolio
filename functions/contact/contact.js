const mongoose = require("mongoose");
const mailer = require("@sendgrid/mail");
const { escape, isEmail, normalizeEmail } = require("validator");
const { inspect } = require("util");

const Schema = mongoose.Schema;
const uri = `mongodb+srv://${process.env.PORTFOLIO_DB_LOGIN}.mongodb.net/test?retryWrites=true&w=majority`;

mailer.setApiKey(process.env.PORTFOLIO_SENDGRID_KEY);

mongoose.connect(uri, { useNewUrlParser: true });

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    required: true,
  },
  time: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", messageSchema);

exports.handler = async function (event, context) {
  try {
    const req = JSON.parse(event.body);
    console.log("req");
    console.log(req);

    if (!(req.subject === "placeholder")) {
      throw new Error("Invalid honeypot.");
    }

    const checkEmail = isEmail(req.email);
    const message = new Message();

    if (checkEmail) {
      message.email = normalizeEmail(req.email);
    } else {
      throw new Error("Invalid email address.");
    }

    message.name = escape(req.name);
    message.message = escape(req.message);

    console.log("saving message... message: ", message);
    const savedMessage = await message.save();
    console.log("message saved! savedMessage:", savedMessage);

    const mail = {
      from: "noreply@louiscolemancoding.me",
      to: "coleloui123@gmail.com",
      subject: "Portfolio Contact Form Submission",
      html: `<h1>Portfolio Contact Form Submission</h1>
<h3><b>Name:</b> ${message.name}</h3>
<h3><b>Email:</b> ${message.email}</h3>
<h3><b>Message:</b></h3>
<p>${message.message}</p>
<h3><b>savedMessage:</b></h3>
<p>${JSON.stringify(savedMessage, null, 4)}</p>`,
    };

    try {
      console.log("sending email... email:", mail);
      const mailInfo = await mailer.send(mail);

      if (mailInfo[0].statusCode >= 400) {
        console.warn("problem sending contact form notification email");
        console.log("mail:", mail);
        console.log("mailInfo:", mailInfo);
        console.log("\n\n");
      } else {
        console.log("email sent! mailInfo:", mailInfo);
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.body && err.response.body.errors) {
        console.log("err.body.errors");
        console.log(JSON.stringify(err.response.body.errors));
        console.log();
      }
      console.warn("failed to send contact form notification email");
      console.log("mail:", mail);
    } finally {
      return { statusCode: 200, body: "" };
    }
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "" };
  }
};
