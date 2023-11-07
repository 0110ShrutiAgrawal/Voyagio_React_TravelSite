import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import Register from "./routes/Register";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Voyagio";
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
