import "./HeroStyles.css";
import React from "react";
import introImg from "../assets/longPic.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="Intro" />
      </div>
      <div className="content">
        <p>Hello, I'm Katy Brown</p>
        <h1>Full Stack Developer/ Software Engineer</h1>
        <div>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
