import React from "react";
import "./Project.css";

const Project = ({ title, description, code, site, photo }) => {
  return (
    <div className="card">
      <img src={photo} alt="" />
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="buttons">
          <button>
            <a href={code} target="_blank" rel="noopener noreferrer">
              Show Code
            </a>
          </button>
          <button>
            <a href={site} target="_blank" rel="noopener noreferrer">
              Open Site
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
