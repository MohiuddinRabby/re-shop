import React from "react";
import { useState } from "react";
import data from "../../data";
import Shop from "../Shop/Shop";
import "./Header.css";
const CategoryNav = () => {
  const [product, setProduct] = useState(data);
  const desktopItems = () => {
    const desktops = data.filter((pd) => pd.category === "desktop");
    setProduct(desktops);
  };
  const laptopItems = () => {
    const laptop = data.filter((pd) => pd.category === "laptop");
    setProduct(laptop);
  };
  const monitorItems = () => {
    const monitor = data.filter((pd) => pd.category === "monitor");
    setProduct(monitor);
  };
  const officeItems = () => {
    const office = data.filter((pd) => pd.category === "office-eq");
    setProduct(office);
  };
  const upsItems = () => {
    const ups = data.filter((pd) => pd.category === "ups");
    setProduct(ups);
  };
  const cameraItems = () => {
    const camera = data.filter((pd) => pd.category === "camera");
    setProduct(camera);
  };
  const gamingItems = () => {
    const gaming = data.filter((pd) => pd.category === "gaming");
    setProduct(gaming);
  };
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm">
        <ul className="navbar-nav m-auto">
          <li className="nav-item" onClick={desktopItems}>
            Desktop
          </li>

          <li className="nav-item" onClick={laptopItems}>
            Laptop
          </li>

          <li className="nav-item" onClick={monitorItems}>
            Monitor
          </li>

          <li className="nav-item" onClick={officeItems}>
            Office Equipment
          </li>

          <li onClick={upsItems}>UPS</li>

          <li className="nav-item" onClick={cameraItems}>
            Camera
          </li>

          <li className="nav-item" onClick={gamingItems}>
            Gaming
          </li>
        </ul>
      </nav>
      <div className="container py-3">
        <div className="row">
          {product.map((pd) => (
            <div className="col-md-3">
              <Shop products={pd}></Shop>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
