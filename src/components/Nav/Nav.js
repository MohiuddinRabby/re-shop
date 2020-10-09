import React, { useContext } from "react";
import shop from "../../img/shop.svg";
import cartLogo from "../../img/cart2.svg";
import { CartContext } from "../../global/CartContext";

const Nav = () => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a href="/" className="navbar-brand">
        <img src={shop} style={{ width: "40px", height: "40px" }} alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <img
              src={cartLogo}
              alt=""
              style={{ width: "35px", height: "35px" }}
            />
            <span style={{ color: "#fff", fontSize: "20px" }}>0</span>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
