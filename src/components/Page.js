import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import Query from './Query';


const Page = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddItem} />
      <Route path="/edit_item/:id" component={EditItem} />
      <Route path="/query/" component={Query} />      
    </div>
  );
};

export default Page;
