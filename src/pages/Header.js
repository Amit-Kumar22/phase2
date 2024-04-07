import React from "react";
import "../Css/header.css"
import { NavLink } from "react-router-dom";
import telegram from "../asserts/telegram.png"

function Header() {
  const scrollToFooter = () => {
    const footer = document.getElementById('deails');
    footer.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="header">
    <div className="anus-logo">
      <img src={require("../asserts/anus-logo.png")} alt="anus-logo" height="120px" width="100px" />
    </div>
     <div className="Anus-para">
     <h2>Welcome to The World Of </h2>
      <h1>$ANUS</h1>
      <p>Join Us to The world Of $ANUS</p>
     </div>

     <div className="buttons">
      <button className="paper-btn"><NavLink to="https://anusexplorer.com/brownpaper"> Brawn Paper</NavLink></button>
      <button className="buy-btn" onClick={scrollToFooter}>How to buy $ANUS</button>
      <NavLink to="https://t.me/UranusCommunity">
        <img className="tele-logo" src={telegram} width="40px" height="40px" />
      </NavLink>
     </div>
     
    </div>
  );
}

export default Header;


