import React from "react";
import { Button, Modal } from "react-bootstrap";

const Cart = (props) => {
  return (
    <Modal show={props.show} className="text-primary text-center">
      <Modal.Header>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>This is Modal BOdy</h1>
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
