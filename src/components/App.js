import React, { Component } from "react";
import Header from "./Header";
import Page from "./Page";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import '../scss/App.scss';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header className="header" />
        <Page className="main" />
      </div>
    </Router>
  );
};

export default App;
