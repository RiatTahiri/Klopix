import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./styles/LoginRegisterStyle.css";
import Login from "./Login";
import Register from "./Register";

import HomePage from "./HomePage";

const Home = () => {
  return (
    <div>
      <h1>index page</h1>
    </div>
  );
};

const LoginRegisterLayout = () => {
  return (
    <div id="main">
      <h1 id="title">Klopix</h1>
      {/* 
      <Login />
      <Register /> */}

      {/* <Router> */}
      {/* <Link to="/homepage">Home</Link> */}

      {/* <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/homepage" component={HomePage}></Route>
        </Switch>
      </Router> */}
    </div>
  );
};

export default LoginRegisterLayout;
