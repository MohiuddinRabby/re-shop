import React, { useContext } from "react";
import { CartContext } from "../../global/CartContext";
import { ProductContext } from "../../global/ProductContext";
import "./Home.css";
const Home = () => {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <ul
        className="nav nav-tabs justify-content-center navbar-dark bg-dark fixed-top"
        id="cat-navs"
      >
        <li className="nav-item">
          <a href="#" className="nav-link">
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
            Laptop
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
        <li className="nav-item">
          <a className="nav-link" href="#">
            UPS
          </a>
        </li>
      </ul>
      <div className="container py-5">
        <div className="row py-5">
          {products.map((products) => (
            <div key={products.id} className="col-md-4 py-3">
              <img
                src={products.img}
                className="img-fluid"
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
              <h4>{products.name}</h4>
              <h5>Price: ${products.price}</h5>
              <button
                className="btn btn-info"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
