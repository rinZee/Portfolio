import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { Button } from "./components/Button";
import { Socials } from "./components/Socials";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: #22262A; }"}</style>
      </Helmet>
      <div className="showcase">
        <div className="content">
          <h1>Hi, it’s Tsheten Sherpa</h1>
          <p>
            I’m a self-taught web developer based in Kathmandu, Nepal with
            passion for learning new web technologies.
          </p>
          <Button>View Projects</Button>
          <Socials></Socials>
        </div>
      </div>
      <div className="footer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          qui!
        </p>
      </div>
    </div>
  );
}

export default App;
