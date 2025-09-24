import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";

export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "97%",
      display: "flex",
      justifyContent: "space-between",
      opacity: 0.9,
      alignItems: "center",
      padding: "1rem 2rem",
      color: "#ca9697ff", 
      background: "rgba(89, 67, 67, 0.6)", 
      fontFamily: "Italiana, sans-serif",
      zIndex: 1000,
      backdropFilter: "blur(5px)" 
    }}>
     

      <div style={{ fontWeight: "bold", color: "#c2bbbbff" , fontSize: "3.2rem", gap: "10px", marginLeft:"4%", paddingRight: "2rem" }}>
  Vanshika Parihar
</div>

<div
  style={{
    marginTop: "1rem",
    display: "flex",
    marginRight: "3.4rem",
    gap: "1.5rem",
    fontSize: "2.5rem",
    color: "#e8bec5ff" ,

  }}
>
  <a
    href="https://github.com/vanshikapariharr/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#e8bec5ff" }}
  >
    <FaGithub />
  </a>
  <a
    href="https://linkedin.com/in/vanshikaparihar205/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#e8bec5ff" }}
  >
    <FaLinkedin />
  </a>
  <a href="mailto:vanshikapariha2005@gmail.com" style={{ color: "#e8bec5ff"  }}>
    <SiGmail />
  </a>
</div>


    </nav>
  );
}
