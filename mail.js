const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Hostinger SMTP server
  port: 587, // Port number
  secure: false, // Use TLS
  auth: {
    user: "your-email@yourdomain.com", // Your Hostinger email address
    pass: "your-email-password", // Your Hostinger email password
  },
});

app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: "your-email@yourdomain.com", // Your Hostinger email address
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
