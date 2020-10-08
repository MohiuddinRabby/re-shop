import React, { useState } from "react";
import Cart from "../Cart/Cart";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
          </div>
          <div className="col-md-6">
            <form>
              <input type="text"/>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
// {showModal ? (
//   <Cart show={showModal} handleClose={handleCloseModal}></Cart>
// ) : (
//   false
// )}
export default Header;
