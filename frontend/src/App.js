import { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Remove BrowserRouter import

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "../src/components/Login/login";
import Project from "../src/components/Projects/Projects";
import About from "./components/About/About";
import { themeContext } from "./Context";

import "./App.css";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const location = useLocation(); // useLocation should be valid now

  // State to control when the main sections should be rendered
  const [renders, setRenders] = useState(true);

  // Update renders based on the current path
  useEffect(() => {
    if (location.pathname === "/") {
      setRenders(true);
    } else {
      setRenders(false);
    }
  }, [location.pathname]);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />

      {/* Main Routing */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Intro />} />
      </Routes>

      {/* Conditionally render main sections */}
      {renders && (
        <>
          <Services />
          <Experience />
          <Works />
          <Portfolio />
          <Testimonial />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
