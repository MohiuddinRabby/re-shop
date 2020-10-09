import React from "react";
import "./Nav.css";
const CategoryNav = () => {
  return (
    <ul className="nav nav-tabs justify-content-center navbar-dark bg-dark fixed-top" id="cat-navs">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Desktop
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Monitor
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          UPS
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Office Equipment
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Gaming
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Camera
        </a>
      </li>
    </ul>
  );
};

export default CategoryNav;
