import React from "react";
import { useState } from "react";
import data from "../../data";
import HomeProducts from "../Products/HomeProducts";

const Home = () => {
  const [homeProducts, setHomeProducts] = useState(data);
  const hotProducts = homeProducts.filter((pd) => pd.popularity === "hot");
  // console.log(hotProducts);
  return (
    <div className="container py-5 mt-3">
      <div className="row py-5">
        {hotProducts.map((hotProduct) => (
          <div className="col-md-4 py-3">
            <HomeProducts hotProduct={hotProduct}></HomeProducts>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
