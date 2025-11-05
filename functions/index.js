// functions/index.js

const functions = require("firebase-functions");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

//d Get email credentials from environment variables
const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_PASS;
const recipientEmail = process.env.RECIPIENT_EMAIL;

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

    try {
        // Read the HTML template file
        const emailTemplatePath = path.join(__dirname, 'email_template.html');
        const htmlTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');

        // Replace placeholders with actual data
        const htmlToSend = htmlTemplate
            .replace('{name}', name)
            .replace('{email}', email)
            .replace('{message}', message);

        const mailOptions = {
            from: `[UPRM ESPORTS BEAM] - From "${name}" <${email}>`,
            to: recipientEmail,
            subject: `[UPRME-BEAM] - New Message from: ${name}`,
            html: htmlToSend, // Use the HTML content
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

    } catch (error) {
        console.error("Error processing email template:", error);
        return res.status(500).send("Server error processing the request.");
    }
});

// Expose the Express app as a Cloud Function
exports.api = functions.https.onRequest(app);
