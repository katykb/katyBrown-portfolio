import React from "react";
import "./WorkCardStyles.css";

import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="work-container">
      <div className="project-container">
        <div className="project-card">
          <img src={props.imgsrc} alt="project" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <NavLink to={props.github} className="btn">
                GitHub
              </NavLink>
              <NavLink to={props.deploy} className="btn">
                Deployed
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
