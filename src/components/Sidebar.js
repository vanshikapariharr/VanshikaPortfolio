import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const links = ["home", "about", "projects", "work", "skills", "contact"];

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Animation for the sidebar container
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.15, // sequential animation for links
      },
    },
    closed: {
      x: "-100%",
      transition: { type: "tween", duration: 0.5, when: "afterChildren" },
    },
  };

  // Animation for each link
  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  return (
    <>
      {/* Menu Button */}
      <div
        style={{
          position: "fixed",
          fontFamily: "Italiana, sans-serif",
          top: "2rem",
          left: "2rem",
          fontSize: "2rem",
          cursor: "pointer",
          zIndex: 1100,
          color: "#5d312aff",
        }}
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "250px",
          fontFamily: "Italiana, sans-serif",
          background: "linear-gradient(135deg, #412727ff, #b98484ff)",
          display: "flex",
          flexDirection: "column",
          padding: "10rem 2rem",
          fontSize: "3rem",
          gap: "2rem",
          zIndex: 1000,
          color: "#e3c4bfff",
        }}
      >
        {links.map((link) => (
          <motion.div key={link} variants={linkVariants}>
            <Link
              to={link}
              smooth={true}
              duration={600}
              spy={true}
              offset={-50}
              onClick={toggleSidebar} // closes sidebar when clicked
              style={{ cursor: "pointer" }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
