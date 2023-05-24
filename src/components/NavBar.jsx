import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

function NavBar() {
return (
    <div className="navbar">
      <div className="leftSide">
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
    </div>
);
}


export default NavBar;