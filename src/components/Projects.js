import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Music Playlist",
    url: "https://vanshikapariharr.github.io/Music-Playlist/",
  },
  {
    title: "Todo App",
    url: "https://vanshikapariharr.github.io/Todo-App-JS/",
  },
  {
    title: "Bakery Shopping Cart",
    url: "https://vanshikapariharr.github.io/BakeryShoppingCart/",
  },
  {
    title: "React Calculator",
    url: "https://vanshikapariharr.github.io/ReactCalculator/",
  },
  {
    title: "Weather App",background: "linear-gradient(135deg, #331212ff 0%, #4e3232ff 100%)",
    url: "https://vanshikapariharr.github.io/weather-app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "80vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "2rem",
        color: "#471c1cff",
      }}
    >
      <h2
        style={{
          fontSize: "4rem",
          marginTop: "3rem",
          marginBottom: "5rem",
          color: "#bda9a9ff",
          fontFamily: "Italiana, sans-serif",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
        }}
      >
        My Projects
      </h2>

      {/* Projects Slider */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "2rem",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minWidth: "300px",
                height: "200px",
                background: "linear-gradient(135deg, #412727ff, #b98484ff)",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1rem",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.2rem",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
              }}
            >
              {project.title}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
