// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.email,
//     pass: process.env.password,
//   },
// });

// const send = ({ email, name, text }) => {
//   const person = name && email ? `${name} <${email}>` : `${name || email}`;
//   const message = {
//     from: process.env.email,
//     to: process.env.sendto,
//     subject: `New message from ${person} at your portfolio`,
//     text,
//     replyTo: person,
//   };

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(message, (error, info) =>
//       error ? reject(error) : resolve(info)
//     );
//   });
// };

// export default send;
