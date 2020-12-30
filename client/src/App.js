import React from "react";

import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./components/styles/AppStyle.css";
import LoginRegisterLayout from "./components/LoginRegisterLayout.js";
import Navbar from "./components/Navbar.js";
import SideBar from "./components/SideBar.js";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Auth from "./components/Auth";
import Video from "./components/Video.js";

const App = () => {
  return (
    <div id="main_style">
      <Router>
        <Switch>
          <Route path="/" exact component={Profile}></Route>
          <Route path="/homepage" component={HomePage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/checkToken" component={Auth}></Route>
          <Route path="/video" component={Video}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
