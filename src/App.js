import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Certifications from "./pages/Certifications/Certifications";
import SinglePageApp from "./pages/SinglePageApp/SinglePageApp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SinglePageApp} />
      </Switch>
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/certifications" component={Certifications} />
      </Switch> */}
    </div>
  );
}

export default App;
