import React from "react";
import { AiOutlineUser } from "react-icons/ai";

import SearchBar from "./SearchBar.js";
import "./styles/Navbar.css";

const Navbar = () => {
  const popup = () => {};

  return (
    <div id="navbar_main">
      <div className="navbar_container">
        <div id="navbar_logo">
          <h2>Klopix</h2>
        </div>
        <SearchBar />

        <button onClick={popup}>
          <div id="navbar_account">
            <AiOutlineUser size={35} style={{ fill: "white" }} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
