import React, { useContext, useState } from "react";
import shop from "../../img/shop.svg";
import cartLogo from "../../img/cart2.svg";
import { CartContext } from "../../global/CartContext";
import Cart from "../Cart/Cart";


const Nav = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { qty, shoppingCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
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
          <li className="nav-item" onClick={handleShowModal}>
            <img
              src={cartLogo}
              alt=""
              style={{ width: "35px", height: "35px" }}
            />
            <span style={{ color: "#fff", fontSize: "20px" }}>
              {shoppingCart.length}
            </span>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {showModal ? (
        <Cart show={showModal} handleClose={handleCloseModal}></Cart>
      ) : (
        false
      )}
    </nav>
  );
};

export default Nav;
