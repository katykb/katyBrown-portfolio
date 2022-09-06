import React from "react";
import './index.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import About from './routes/About'


function App() {

  return  (
  <>
  <Routes>
    <Route path="/katyBrown-Portfolio" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
  </>
);
}


export default App;
