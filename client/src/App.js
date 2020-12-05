import React from "react";
import "./components/styles/AppStyle.css";

import LoginRegisterLayout from "./components/LoginRegisterLayout.js";
import Navbar from "./components/Navbar.js";
import SideBar from "./components/SideBar.js";

const App = () => {
  return (
    <div id="main_style">
      <LoginRegisterLayout />
    </div>
  );
};

export default App;
