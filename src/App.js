import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
function App() {
  return (
      <div className="App">
        <Helmet>
          <style>{"body { background-color: #22262a; }"}</style>
        </Helmet>
          <Home />
      </div>
  );
}

export default App;
