import React from "react";

const Shop = (props) => {
  const { name, price, img } = props.products;
  return (
    <div className="card">
      <div className="card-body">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-header">{name}</div>
      </div>
    </div>
  );
};

export default Shop;
