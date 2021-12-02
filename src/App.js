import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
      </Router>
    </React.Fragment>
  );
}

export default App;
