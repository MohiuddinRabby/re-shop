import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { CartContext } from "../../global/CartContext";
import "./Cart.css";
const Cart = (props) => {
  const { dispatch, shoppingCart, totalPrice, qty } = useContext(CartContext);
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      className="text-primary"
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>Cart Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cartContainer">
          <div className="cartDetails">
            {shoppingCart.length > 0
              ? shoppingCart.map((cart) => (
                  <div className="cart" key={cart.id}>
                    <span className="cartProImage">
                      <img src={cart.img} alt="" />
                      <span className="imageCount">{cart.qty}</span>
                    </span>
                    <span className="cartProductName">{cart.name}</span>
                    <span className="cartProductPrice">${cart.price}.00</span>
                    <span
                      className="inc"
                      onClick={() =>
                        dispatch({ type: "INC", id: cart.id, cart: cart })
                      }
                    >
                      <i className="fas fa-plus"></i>
                    </span>
                    <span className="productQuantity">{cart.qty}</span>
                    <span
                      className="dec"
                      onClick={() =>
                        dispatch({ type: "DEC", id: cart.id, cart: cart })
                      }
                    >
                      <i className="fas fa-minus"></i>
                    </span>
                    <span className="productTotalPrice">
                      ${cart.qty * cart.price}.00
                    </span>
                    <button className="deleteCartPro">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                ))
              : "Yourr Cart is currently empty!"}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
