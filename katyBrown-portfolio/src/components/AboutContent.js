import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import aboutImage from "../assets/canvaPic.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Hello!</h1>
        <p className="about-paragraph">
          My name is Katy. Thanks for taking a look at my work! I appreciate
          your time! Software Engineer / Full Stack Developer bringing over 10
          years of merchandising, management, operations and a service-oriented
          mindset to a career in technology. I am creative, hard-working and
          ingenuitive. I am excited about building applications that are UI/UX
          focused and efficient.
          <br />
          <br />
          Through my years of professional experience, I have acquired several
          transferable skills that I will bring to your organization. I will
          apply time management, organization, teamwork and communication to all
          future endeavors.
          <br />
          <br />
          In addition to professional experience, I have held several volunteer
          roles with schools for five plus years. I have had the privilege of
          assisting teachers in the classroom, planning school-wide fundraising
          events, being a member of a parent and teacher committee and assisting
          with administrative duties.
          <br />
          <br />I look forward to putting my tech skills and previous
          experiences to work!
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
          <button className="btn">Resume</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-containter">
          <div className="img-stack top">
            <img src={aboutImage} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
