import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <style>{"body { background-color: #22262a; }"}</style>
        </Helmet>
        <Switch>
          <Route path="/Portfolio" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
