import React from "react";
import { motion } from "framer-motion";

const workExperiences = [
  {
    title: "Front-End Development Intern",
    company: "PaniPuri Soft Limited, India",
    duration: "May 2025 - Aug 2025",
    responsibilities: [
      "Designed and prototyped responsive UI layouts in Figma, focusing on accessibility, visual hierarchy, and user flow optimization.",
      "Built and styled reusable components using HTML, Tailwind CSS, and JavaScript, ensuring mobile responsiveness and cross-browser compatibility.",
      "Worked in an agile team using Git and GitHub for version control, contributing to sprints and UI iterations based on stakeholder feedback.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Nexus Info, India",
    duration: "May 2024 - Aug 2024",
    responsibilities: [
      "Developed interactive web apps using Node.js and JavaScript.",
      "Designed multiple web projects including login systems, restaurant and company websites.",
      "Used Git for version control and conducted testing/debugging for performance and reliability.",
    ],
  },
  {
    title: "Event Attendant",
    company: "Sun Devil Athletics, Tempe, AZ",
    duration: "Oct 2024 - Present",
    responsibilities: [
      "Delivered guest services and enforced safety protocols for 10,000+ attendees.",
      "Partnered with staff to create a secure and welcoming event atmosphere.",
    ],
  },
  {
    title: "Gammage Security Aide",
    company: "ASU Gammage, Tempe, AZ",
    duration: "Sept 2024 - Present",
    responsibilities: [
      "Provided front-of-house support during live performances with 2,000+ attendees.",
      "Ensured guest safety and smooth crowd flow.",
      "Maintained adherence to emergency protocols and accessibility accommodations.",
    ],
  },
  {
    title: "Office Assistant",
    company: "Private Law Office, India",
    duration: "Aug 2021 - July 2022",
    responsibilities: [
      "Managed front-desk tasks, organized case documents, and scheduled appointments.",
      "Communicated professionally with clients and maintained confidential records.",
      "Developed time management skills in a legal office setting.",
    ],
  },
  {
    title: "Volunteer, Programming Activities and Board",
    company: "ASU Campus",
    duration: "",
    responsibilities: [
      "Assisted with campus events like Devilpalooza.",
      "Ordered supplies and food for events.",
    ],
  },
];

export default function Work() {
  return (
    <section
      id="work"
      style={{
        minHeight: "100vh",
        padding: "5rem 2rem",
       
        color: "#f0e6de",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          fontSize: "4rem",
          marginBottom: "3rem",
          textAlign: "center",
          color: "#e2c1c1ff",
          fontWeight: "bold",
          fontFamily: "Italiana, sans-serif",

          textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        Work Experience
      </motion.h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {workExperiences.map((job, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              padding: "1.5rem 2rem",
              background: "linear-gradient(135deg, #412727ff, #b98484ff)",
              borderRadius: "1rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ fontSize: "1.6rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
              {job.title}
            </h2>
            <h3 style={{ fontSize: "1.3rem", color: "#f5e8e0", marginBottom: "1rem" }}>
              {job.company} {job.duration && `| ${job.duration}`}
            </h3>
            <ul style={{ paddingLeft: "1.2rem", listStyleType: "disc" }}>
              {job.responsibilities.map((resp, i) => (
                <li key={i} style={{ marginBottom: "0.5rem", lineHeight: "1.4" }}>
                  {resp}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
