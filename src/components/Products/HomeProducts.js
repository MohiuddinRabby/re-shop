import React from "react";

const HomeProducts = (props) => {
  const { img } = props.hotProduct;
  return (
    <div className="card">
      <img src={img} className="card-img" alt="" />
    </div>
  );
};

export default HomeProducts;
