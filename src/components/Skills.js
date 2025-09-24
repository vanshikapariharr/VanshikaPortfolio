import React from "react";
import { motion } from "framer-motion";

const technicalSkills = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "HTML/CSS",
  "JavaScript",
  "Python",
  "C++",
  "Git"
];

const softSkills = [
  "Communication",
  "Leadership",
  "Teamwork",
  "Problem-solving",
  "Adaptability",
  "Time Management",
  "Creativity",
];

const chipVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "60vh",
        padding: "5rem 2rem",
        textAlign: "center",
        color: "#d6d1ccff",
        fontWeight: "bold",
        fontSize: "4rem",
        fontFamily: "Italiana, sans-serif",
      }}
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ fontSize: "4rem", marginBottom: "3rem", textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
      >
        My Skills
      </motion.h1>

      {/* Technical Skills */}
      <h2 style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>Technical Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.2rem" }}>
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={skill}
            custom={index}
            variants={chipVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              padding: "0.7rem 1.5rem",
              background: "linear-gradient(135deg, #412727ff, #b98484ff)",
              color: "#fff",
              borderRadius: "25px",
              fontWeight: "bold",
              fontSize: "1.3rem",
              cursor: "default",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "transform 0.3s",
            }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <h2 style={{ margin: "3rem 0 2rem 0", fontSize: "1.5rem" }}>Soft Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.2rem" }}>
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill}
            custom={index}
            variants={chipVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              padding: "0.7rem 1.5rem",
      
              color: "#fff",
              borderRadius: "25px",
              fontWeight: "bold",
              fontSize: "1.3rem",
              background: "linear-gradient(135deg, #412727ff, #b98484ff)",
              cursor: "default",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "transform 0.3s",
            }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
