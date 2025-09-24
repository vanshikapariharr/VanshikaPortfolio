import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "80vh",
        color: "#ecd4d4ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
          fontFamily: "Italiana, sans-serif",
          textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
        }}
      >
        Contact Me
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          fontFamily: "Italiana, sans-serif",
          maxWidth: "600px",
        }}
      >
        I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        action="https://formspree.io/f/xdkwoyrd"
        method="POST"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          background: "#fff",
          color: "#000",
          borderRadius: "1rem",
          padding: "2rem",
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            outline: "none",
            transition: "border 0.3s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #5d312aff")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            outline: "none",
            transition: "border 0.3s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #5d312aff")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={{
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            outline: "none",
            transition: "border 0.3s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #5d312aff")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05,
            background:"linear-gradient(135deg, #412727ff, #b98484ff)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "#5d312aff",
            color: "#fff",
            padding: "0.8rem",
            borderRadius: "0.5rem",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;
