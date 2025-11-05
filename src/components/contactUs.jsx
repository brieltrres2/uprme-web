import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // to show sending status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://us-central1-uprmesportsweb.cloudfunctions.net/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.text();
      setStatus(data); // show success message
      setFormData({ name: "", email: "", message: "" }); // clear form
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "80px 20px",
      }}
    >
      <h1
        style={{
          fontWeight: "800",
          letterSpacing: "2px",
          marginBottom: "50px",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        CONTACT US
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            background: "transparent",
            border: "1px solid #444",
            color: "#fff",
            padding: "15px",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            background: "transparent",
            border: "1px solid #444",
            color: "#fff",
            padding: "15px",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            background: "transparent",
            border: "1px solid #444",
            color: "#fff",
            padding: "15px",
            fontSize: "16px",
            resize: "vertical",
            outline: "none",
          }}
        />

        <button
          type="submit"
          style={{
            alignSelf: "center",
            marginTop: "10px",
            background: "transparent",
            border: "1px solid #fff",
            color: "#fff",
            fontWeight: "600",
            letterSpacing: "1px",
            padding: "10px 30px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          SUBMIT
        </button>
      </form>

      {status && (
        <p style={{ marginTop: "20px", color: "#fff", textAlign: "center" }}>{status}</p>
      )}
    </div>
  );
};

export default ContactUs;
