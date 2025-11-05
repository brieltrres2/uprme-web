// functions/index.js (or your main functions file)

const functions = require("firebase-functions");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({ origin: true })); // Important for Cloud Functions
app.use(express.json());

// Get email credentials from Firebase environment configuration
// Set them using the CLI:
// firebase functions:config:set gmail.user="your-email@gmail.com"
// firebase functions:config:set gmail.pass="your-app-password"
// firebase functions:config:set recipient.email="recipient-email@example.com"
const gmailUser = functions.config().gmail.user;
const gmailPass = functions.config().gmail.pass;
const recipientEmail = functions.config().recipient.email;

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmailUser,
        pass: gmailPass,
    },
});

// POST route to handle form submission
app.post("/send", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send("All fields are required.");
    }

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: recipientEmail,
        subject: `New Contact Form Submission from ${name}`,
        text: `You have a new message from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).send("Failed to send message.");
        }
        console.log("Email sent: " + info.response);
        res.status(200).send("Message sent successfully!");
    });
});

// Expose the Express app as a Cloud Function
// The name 'api' will be part of the URL.
exports.api = functions.https.onRequest(app);
