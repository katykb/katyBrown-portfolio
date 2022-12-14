import React from "react";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Recent Work</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) =>{
            return(
                <WorkCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                github={val.github}
                deploy={val.deploy}/>
            )
        })}
      </div>
    </div>
  );
};

export default Work;
