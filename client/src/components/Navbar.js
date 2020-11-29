import React from "react";

import SearchBar from "./SearchBar.js";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div id="main">
      <div id="logo">
        <h3>Klopix</h3>
      </div>

      <SearchBar />

      <div id="account">
        <h4>Account Settings</h4>
      </div>
    </div>
  );
};

export default Navbar;
