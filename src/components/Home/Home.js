import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../global/CartContext";
import { ProductContext } from "../../global/ProductContext";
import HotProducts from "../Products/HotProducts";
import "./Home.css";
const Home = () => {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);
  const filterHotProducts = products.filter((pd) => pd.popularity === "hot");
  const [selectCat, setCat] = useState(products);
  const [hotP, setHotP] = useState(true);
  const desktopItems = () => {
    const desktop = products.filter((pd) => pd.category === "desktop");
    setCat(desktop);
    setHotP(false);
  };
  const laptopItems = () => {
    const laptop = products.filter((pdl) => pdl.category === "laptop");
    setCat(laptop);
    setHotP(false);
  };
  const monitorItems = () => {
    const monitor = products.filter((pd) => pd.category === "monitor");
    setCat(monitor);
    setHotP(false);
  };
  const officeItems = () => {
    const office = products.filter((pd) => pd.category === "office-eq");
    setCat(office);
    setHotP(false);
  };
  const gamingItems = () => {
    const gaming = products.filter((pd) => pd.category === "gaming");
    setCat(gaming);
    setHotP(false);
  };
  const cameraItems = () => {
    const camera = products.filter((pd) => pd.category === "camera");
    setCat(camera);
    setHotP(false);
  };
  const upsItems = () => {
    const ups = products.filter((pd) => pd.category === "ups");
    setCat(ups);
    setHotP(false);
  };
  return (
    <div>
      <ul
        className="nav nav-tabs justify-content-center navbar-dark bg-dark fixed-top"
        id="cat-navs"
      >
        <li className="nav-item">
          <span className="nav-link" onClick={desktopItems}>
            Desktop
          </span>
        </li>
        <li className="nav-item" onClick={monitorItems}>
          <span className="nav-link">Monitor</span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={laptopItems}>
            Laptop
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={officeItems}>
            Office Equipment
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={gamingItems}>
            Gaming
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={cameraItems}>
            Camera
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={upsItems}>
            UPS
          </span>
        </li>
      </ul>
      <div className="container py-5">
        <div className="row py-5">
          {hotP
            ? filterHotProducts.map((products) => (
                <div key={products.id} className="col-md-4 py-4">
                  <HotProducts products={products}></HotProducts>
                </div>
              ))
            : selectCat.map((products) => (
                <div key={products.id} className="col-md-3 py-4">
                  <div>
                    <div className="card text-center">
                      <div className="card-body">
                        <img
                          src={products.img}
                          className="card-img-top"
                          alt=""
                        />
                        <p className="card-header">{products.name}</p>
                        <p className="card-header">Price: ${products.price}</p>
                      </div>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            id: products.id,
                            products,
                          })
                        }
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
