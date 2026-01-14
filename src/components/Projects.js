import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Review Corporate", url: "https://vanshikapariharr.github.io/ReviewComp/", image: "/images/review.png" },
  { title: "Trek List", url: "https://vanshikapariharr.github.io/TrekList/", image: "/images/trek.png" },
  { title: "Weather App", url: "https://vanshikapariharr.github.io/weather-app/", image: "/images/weather.png" },
  { title: "Music Playlist", url: "https://vanshikapariharr.github.io/Music-Playlist/", image: "/images/music.png" },
  { title: "Portfolio", url: "https://vanshikapariharr.github.io/VanshikaPortfolio/", image: "/images/portfolio.png" },
  { title: "Bakery Shopping Cart", url: "https://vanshikapariharr.github.io/BakeryShoppingCart/", image: "/images/bakery.png" },
  { title: "Todo App", url: "https://vanshikapariharr.github.io/Todo-App-JS/", image: "/images/todo.png" },
  { title: "React Calculator", url: "https://vanshikapariharr.github.io/ReactCalculator/", image: "/images/calculator.png" },
  { title: "Fancy Counter", url: "https://vanshikapariharr.github.io/FancyCounter/", image: "/images/counter.png" },
];


export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "4rem",
          marginTop: "3rem",
          marginBottom: "3rem",
          color: "#bda9a9ff",
          fontFamily: "Italiana, sans-serif",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
        }}
      >
        My Projects
      </h2>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: "200px",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              textDecoration: "none",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              background: "linear-gradient(135deg, #412727ff, #b98484ff)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "12px 16px",
                background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
                color: "#fff",
                fontWeight: "700",
                fontSize: "1.05rem",
              }}
            >
              {project.title}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}