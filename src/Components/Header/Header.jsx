import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1 className="logo">Ema john</h1>
      <div className="list">
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
