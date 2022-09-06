import React from "react";
import "./WorkCardStyles.css";

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
              <a href={props.github} className="btn">
                GitHub
              </a>
              <a href={props.deploy} className="btn">
                Deployed
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
