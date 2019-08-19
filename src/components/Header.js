import React, { Component } from "react";
import {BrowserRouter as Router, Route,Link, Redirect, withRouter } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

class Header extends Component {
  render() {
    return (
        <Nav>
          <NavItem>
            <Link className="nav-link" to="/">
              My Todo list
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/add">
              Add Todo
            </Link>
          </NavItem>
        <NavItem>
          <Link className="nav-link" to="/query">
            Search To Do
            </Link>
        </NavItem>
        </Nav>
    );
  }
}

export default Header;
