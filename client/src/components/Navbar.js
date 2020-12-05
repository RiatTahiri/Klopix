import React from "react";
import { AiOutlineUser } from 'react-icons/ai'

import SearchBar from "./SearchBar.js";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div id="main">
      <div className='container'>

        <div id="logo">
          <h2>Klopix</h2>
        </div>

        <SearchBar />

        <div id="account">
          <AiOutlineUser size={35} style={{fill: 'white'}}/>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
