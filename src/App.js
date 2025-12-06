import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre/Pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certificate from "./components/Certificate/Certificate";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";
import Particle from "./components/Particle/Particle";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Particle />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Projects />
              <Certificate />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={
            <>
              <Home />
              <About />
              <Projects />
              <Certificate />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
