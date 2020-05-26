import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Router,
  Route,
} from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  document.title = "Louis Coleman Portfolio";
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default App;
