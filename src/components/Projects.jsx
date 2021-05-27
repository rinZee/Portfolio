import React from "react";
import "./Projects.css";
import Project from "./Project";
import firebase from "../assets/firebase-chat.png";
import foodbook from "../assets/Foodbook.png";
import Microsoft from "../assets/Microsoft Homepage clone.png";

export const Projects = () => {
  return (
    <div className={"projects"}>
      <div id="content">
        <h1>Projects</h1>
        <p>
          These are my favorite projects I've worked on for the past year. Have
          a look around and make sure to hit me up!
        </p>
      </div>
      <div className="cards">
        <Project
          title={"FoodBook"}
          code={"https://github.com/rinZee/React-recipe"}
          site={"https://rinzee.github.io/React-recipe/"}
          photo={foodbook}
          description={
            "This is a recipe app that uses react-router and context api"
          }
        />
        <Project
          title={"Microsoft Clone"}
          code={"https://github.com/rinZee/Microsoft-Homepage"}
          site={"https://rinzee.github.io/Microsoft-Homepage/"}
          photo={Microsoft}
          description={
            "This is a responsive microsoft homepage clone app build with html, css and js"
          }
        />
        <Project
          title={"ChatUp"}
          code={"https://github.com/rinZee/react-chat"}
          site={"https://chatupp.netlify.app/"}
          photo={firebase}
          description={
            "This is a chat application built with react and firebase"
          }
        />
      </div>
    </div>
  );
};
