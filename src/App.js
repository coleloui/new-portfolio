import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  document.title = "Louis Coleman Portfolio";
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Route exact path="/">
          {" "}
          <Main />
        </Route>
        <Route exact path="/bio">
          {" "}
          <Main />
        </Route>
        <Route exact path="/projects">
          {" "}
          <Projects />
        </Route>
        <Route exact path="/contact">
          {" "}
          <ContactMe />
        </Route>
      </Wrapper>
    </Router>
  );
};

export default App;
