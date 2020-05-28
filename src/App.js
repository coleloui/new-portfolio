import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  document.title = "Louis Coleman Portfolio";
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Route path="/">
          <Main />
        </Route>
      </Wrapper>
    </Router>
  );
};

export default App;
