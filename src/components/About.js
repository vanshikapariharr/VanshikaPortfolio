import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const aboutText = "I'm Vanshika, a Computer Science student at ASU, graduating May 2026. I specialize in front-end development, crafting responsive and visually appealing websites, and love exploring new technologies to enhance user experience.";

  return (
    <section
      id="about"
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 2rem",
        fontSize: "3rem",
        color: "#b7a1a1ff",
        fontFamily: "Italiana, sans-serif",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
        style={{ fontSize: "3.5rem", marginBottom: "2rem", fontWeight: "bold", textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
      >
        About Me
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        style={{ fontSize: "2.5rem", maxWidth: "800px", lineHeight: "1.5" }}
      >
        {aboutText}
      </motion.p>
    </section>
  );
}
