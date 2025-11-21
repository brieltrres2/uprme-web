// functions/index.js
const httpsV2 = require("firebase-functions/v2/https");
const fns = require("firebase-functions"); // for functions.config()
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

// You can restrict this to your site, or allow all for testing
const ALLOWED_ORIGIN = "https://uprmesportsweb.web.app";

// cors middleware — restrict to ALLOWED_ORIGIN
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); 
      if (origin === ALLOWED_ORIGIN) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    optionsSuccessStatus: 204,
  })
);

// OPTIONS preflight handler (explicit)
app.options("*", (req, res) => res.sendStatus(204));


const emailConfig = (() => {
  const cfg = (fns && fns.config && fns.config().email) || {};
  return {
    user: process.env.EMAIL_USER || cfg.user,
    pass: process.env.EMAIL_PASS || cfg.pass,
    receivers: (process.env.EMAIL_RECEIVERS && process.env.EMAIL_RECEIVERS.split(",")) ||
               (cfg.receivers && cfg.receivers.split(",")) ||
               [],
  };
})();

// POST handler (root)
app.post("/", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).send("Missing fields.");
  }

  // Validate emailConfig
  if (!emailConfig.user || !emailConfig.pass || emailConfig.receivers.length === 0) {
    console.error("Email config missing:", emailConfig);
    return res.status(500).send("Server email configuration error.");
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass,
      },
    });

    const mailOptions = {
      from: email, // the sender (user's email)
      to: emailConfig.receivers, // array or comma-separated list
      subject: `New message from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).send("Message sent successfully!");
  } catch (err) {
    console.error("nodemailer error:", err);
    return res.status(500).send("Error sending email.");
  }
});

// Export the express app as a 2nd-gen HTTPS function named "send"
exports.send = httpsV2.onRequest(app);
