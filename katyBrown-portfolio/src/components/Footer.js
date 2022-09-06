import React from "react";
import "./FooterStyle.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={40} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Based in Dallas/Fort Worth area</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              817-454-3409
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              katybr35@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>
            Front end: HTML5, CSS, JavaScript, React, Bootstrap <br />
            Back end: Node.js, Express.js, APIs, MongoDB, SQL <br /> Control
            Systems: Git, Git Hub
          </p>
          <div className="social">
            <a id="social-icon" href="https://github.com/katykb">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              id="social-icon"
              href="https://www.linkedin.com/in/katy-b-a7984084/"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <div className="copyright">
              &copy;{new Date().getFullYear()} | Katy Brown{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
