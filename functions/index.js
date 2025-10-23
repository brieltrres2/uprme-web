const functions = require("firebase-functions");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const admin = require("firebase-admin");


admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
});

const receivers = functions.config().email.receivers.split(",");


app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;


  const logEntry = {
    timestamp: new Date().toISOString(),
    name,
    email,
    message,
    status: "pending",
  };

  try {

    const docRef = await db.collection("contactLogs").add(logEntry);


    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVERS,
      subject: `New message from ${name}`,
      text: message,
    };


    await transporter.sendMail(mailOptions);

   
    await db.collection("contactLogs").doc(docRef.id).update({ status: "sent" });

    console.log("Email sent and logged:", docRef.id);
    res.status(200).send("Message sent successfully!");
  } catch (error) {
    console.error("Error sending email or logging:", error);
    res.status(500).send("Error sending email.");
  }
});

// Export as Firebase Cloud Function
exports.api = functions.https.onRequest(app);


