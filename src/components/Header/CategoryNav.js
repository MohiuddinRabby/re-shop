import React from "react";
import "./Header.css";
const CategoryNav = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">Desktop</li>
          <li className="nav-item">Laptop</li>
          <li className="nav-item">Monitor</li>
          <li className="nav-item">Office Equipment</li>
          <li className="nav-item">Camera</li>
          <li className="nav-item">Gaming</li>
        </ul>
      </nav>
    </div>
  );
};

export default CategoryNav;
