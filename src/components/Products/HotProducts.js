import React from "react";
import "./Products.css";
const HotProducts = (props) => {
  const { img } = props.products;
  return (
    <div className="hot-items">
      <div className="card">
        <img src={img} className="card-img" alt="" />
      </div>
    </div>
  );
};

export default HotProducts;
