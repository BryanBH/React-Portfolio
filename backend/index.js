if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../portfolio/build")));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "bryanbenjumeaportfolio@gmail.com",
    pass: "uwwkhfbgnjlocrwc",
  },
});

transporter.verify((err) => (err ? console.log(err) : null));

const todaysDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return (today = mm + "/" + dd + "/" + yyyy);
};
app.post("/sendContact", (req, res) => {
  const { firstName, lastName, email, message } = req.body.inputValues;
  const mailData = {
    from: process.env.EMAIL, // sender address
    to: "bryanbenjumea@gmail.com", // list of receivers
    subject: `Portfolio Contact Request ${firstName} ${todaysDate()}`,
    text: message,
    html: `<h2>Message from: ${firstName} ${lastName}</h2>
    <h5>Email: ${email}</h5>
    <p>${message}</p>`,
    envelope: {
      from: email, // sender address
      to: "bryanbenjumea@gmail.com", // list of receivers
    },
  };
  transporter.sendMail(mailData, (err) => {
    if (err) console.log(err);
  });

  res.json({ sent: true });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../portfolio/build", "index.html"));
});
