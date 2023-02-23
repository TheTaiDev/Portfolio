import "./App.css";
import Headesr from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import React, { useState } from "react";
import Qualificaiton from "./components/qualification/Qualificaiton";
import Skills from "./components/skills/Skills";
import Servicse from "./components/servicse/Servicse";
import Contact from "./components/contact/Contact";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import Work from "./components/work/Work";
function App() {
  return (
    <div>
      <Headesr />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Servicse />
        <Qualificaiton />
        <Work />
        <Testimonial />
        <Contact />

        <Footer />
        <button className="btn__clickk">Click me</button>

      </main>
    </div>
  );
}

export default App;
