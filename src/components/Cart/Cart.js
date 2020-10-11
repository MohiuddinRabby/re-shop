import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { CartContext } from "../../global/CartContext";
import "./Cart.css";
const Cart = (props) => {
  const { dispatch, shoppingCart} = useContext(CartContext);
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
        {shoppingCart.length > 0 ? (
          shoppingCart.map((cart) => (
            <table className="table" key={cart.id}>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={cart.img}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </td>
                  <td>{cart.name}</td>
                  <td>Unit price : {cart.price}</td>
                  <td>
                    Qty :
                    <span
                      onClick={() =>
                        dispatch({ type: "DEC", id: cart.id, cart: cart })
                      }
                    >
                      <i className="fas fa-minus"></i>
                    </span>
                    {cart.qty}
                    <span
                      onClick={() =>
                        dispatch({ type: "INC", id: cart.id, cart: cart })
                      }
                    >
                      <i className="fas fa-plus"></i>
                    </span>
                  </td>
                  <td>Total price : {cart.price * cart.qty}</td>
                  <td>
                    <span
                      onClick={() =>
                        dispatch({ type: "DELETE", id: cart.id, cart: cart })
                      }
                    >
                      <i className="fas fa-trash-alt"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <h2 className="text-danger">Your cart is empty</h2>
        )}
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
