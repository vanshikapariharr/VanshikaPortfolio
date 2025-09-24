import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import { linearGradient } from "framer-motion/client";
import { color } from "framer-motion";

function App() {
  return (
    <div 
    style={{background: "rgba(45, 25, 25, 1)",}}
    >
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Projects />
      <Work />
      <Skills />
      <Contact /> 
    </div>
  );
}

export default App;
