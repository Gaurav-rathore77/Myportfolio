require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Verify email transporter
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Your Email
    pass: process.env.EMAIL_PASS   // App Password
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error setting up email transport:", error);
  } else {
    console.log("Email transporter ready to send messages.");
  }
});

// Contact Form Route
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const fullName = `${firstName} ${lastName}`;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Replace with your email
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${fullName}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`
  };
  router.get("/test", (req, res) => {
    res.json({ success: true, message: "Test route is working!" });
    // res.send("test");
    
  });
  

  contactEmail.sendMail(mailOptions, (error) => {
    if (error) {
      console.error("Email send error:", error);
      res.status(500).json({ success: false, message: "Failed to send email", error });
    } else {
      res.json({ success: true, message: "Message Sent Successfully" });
    }
  });
});
