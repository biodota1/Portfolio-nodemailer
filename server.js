const express = require("express");
const nodemailer = require("nodemailer");
const corsOptions = require("./config/corsOption");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors(corsOptions));

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Hostinger SMTP server
  port: 587, // Port number
  secure: false, // Use TLS
  auth: {
    user: "jamesmyergeonzon@jamesmyerdev.online", // Your Hostinger email address
    pass: "Petforest123@", // Your Hostinger email password
  },
});

app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: "jamesmyergeonzon@jamesmyerdev.online", // Your Hostinger email address
    to: to, // Recipient email address
    subject: subject, // Email subject
    text: text, // Email content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
