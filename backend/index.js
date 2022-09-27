if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
import express from "express";
const app = express();
import cors from "cors";
import { json } from "body-parser";
import { createTransport } from "nodemailer";
const port = process.env.PORT || 4000;

app.use(cors());
app.use(json());

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.post("/sendContact", (req, res) => {
  console.log(req.body);
  res.json({ status: 200 });
  const transporter = createTransport({
    port: 465, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: "youremail@gmail.com",
      pass: "password",
    },
    secure: true,
  });
});
