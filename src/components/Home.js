import React from "react";
import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";
import myImage from "../assets/myImage.jpeg";

const projects = [
  { title: "Music Playlist", url: "https://vanshikapariharr.github.io/Music-Playlist/" },
  { title: "Todo App", url: "https://vanshikapariharr.github.io/Todo-App-JS/" },
  { title: "Bakery Shopping Cart", url: "https://vanshikapariharr.github.io/BakeryShoppingCart/" },
  { title: "React Calculator", url: "https://vanshikapariharr.github.io/ReactCalculator/" },
  { title: "Weather App", url: "https://vanshikapariharr.github.io/weather-app/" },
];

const aboutText =
  "Front-End Developer passionate about experimenting with colors, layouts, and modern web technologies to build engaging and dynamic user experiences.";

function Home() {
  return (
    <section id="home" style={{ position: "relative" }}>
      {/* Inline CSS Media Queries */}
      <style>{`
        .home-section {
          height: 100vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ceb3b3ff;
          padding: 2rem 5rem;
          padding-right: 12rem;
        }
        .home-text {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-top: 1rem;
          margin-bottom: 6rem;
          max-width: 900px;
          margin-left: 20rem;
        }
        .home-heading {
          font-size: 7rem;
          margin-bottom: 2rem;
          font-family: "Italiana", sans-serif;
          font-weight: bold;
          text-align: right;
        }
        .home-about {
          font-size: 36px;
          font-family: "Italiana", sans-serif;
          margin-left: 20px;
          margin-right: 15px;
          font-weight: bold;
          text-align: right;
          line-height: 1.5;
          word-wrap: break-word;
        }
        .home-right {
          flex: 1;
          text-align: center;
        }
        .home-image {
          width: 600px;
          height: 625px;
          border-radius: 0.5rem;
          object-fit: cover;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
        .projects-slider {
          width: 600px;
          overflow: hidden;
          position: relative;
          margin: 0 auto;
        }
        .projects-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
        }
        .project-card {
          min-width: 200px;
          height: 120px;
          background: linear-gradient(135deg, #412727ff, #b98484ff);
          color: #c7a7a2ff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1rem;
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }

        /* Media Queries */
        @media (max-width: 1440px) {
          .home-section { padding-right: 5rem; }
        }
        @media (max-width: 1200px) {
          .home-text { margin-left: 10rem; }
          .home-heading { font-size: 5rem; }
          .home-about { font-size: 28px; }
          .home-image { width: 500px; height: 520px; }
          .projects-slider { width: 500px; }
        }
        @media (max-width: 992px) {
          .home-section { padding: 2rem; }
          .home-text { margin-left: 5rem; margin-bottom: 3rem; }
          .home-heading { font-size: 4rem; }
          .home-about { font-size: 24px; }
          .home-image { width: 400px; height: 420px; }
          .projects-slider { width: 400px; }
        }
        @media (max-width: 768px) {
          .home-section { flex-direction: column; align-items: center; padding: 2rem 1rem; }
          .home-text { align-items: center; margin-left: 0; margin-bottom: 2rem; }
          .home-heading, .home-about { text-align: center; }
          .home-image { width: 300px; height: 320px; }
          .projects-slider { width: 300px; }
        }
        @media (max-width: 480px) {
          .home-heading { font-size: 2.5rem; }
          .home-about { font-size: 18px; }
          .home-image { width: 250px; height: 260px; }
          .projects-slider { width: 250px; }
          .project-card { min-width: 120px; height: 90px; font-size: 0.8rem; }
        }
      `}</style>

      <div className="home-section">
        {/* Left: Text Content */}
        <div className="home-text">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="home-heading"
          >
            <ReactTyped
              strings={["Hello", "Namaste", "Bonjour", "Salve", "Hola", "Ciao"]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="home-about"
          >
            {aboutText}
          </motion.p>
        </div>

        {/* Right: Image + Projects */}
        <div className="home-right">
          <motion.img
            src={myImage}
            alt="Vanshika Parihar"
            className="home-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          />

          {/* Projects Slider */}
          <div className="projects-slider">
            <motion.div
              className="projects-track"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...projects, ...projects].map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  {project.title}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
