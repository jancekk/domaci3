import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";
import {MdReorder} from 'react-icons/md';

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <h1 style={{color:'rgb(228, 147, 241)'}}>ZADA</h1>
        <div className="hiddenLinks">
          <Link to="/" className="link"> Home </Link>
          <Link to="/contact" className="link"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/" className="links"> Home</Link>
        <Link to="/contact" className="links"> Contact </Link>
        <button onClick={toggleNavbar}>
          <MdReorder />
        </button>
      </div>
    </div>
  );
}


export default NavBar;