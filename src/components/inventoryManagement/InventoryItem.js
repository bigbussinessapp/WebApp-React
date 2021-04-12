import React, { useState, useEffect } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { addInventoryItem } from "../redux-state-management/actionCreators";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "./card.css";
import firebase from "../../containers/Firebase";

const InventoryItem = (props) => {
  let [name, setProductName] = useState(props.name);
  let [price, setProductPrice] = useState(props.price);
  let [quantity, setProductQuantity] = useState(props.quantity);
  let id = useState(props.id);
  let [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(props.prodName);
    setProductName(props.prodName);
    setProductPrice(props.price);
    setProductQuantity(props.quantity);
    if (props.valChange == "Delete") {
      setShowModal(false);
    }
  }, []);
  function handleShow() {
    if (props.valChange === "Delete") {
      setShowModal(false);
    } else setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  function firebaseAction(data) {
    if (props.itemState.includes("Add")) {
      delete data.id;
      firebase.database.ref("Users/uid1").child("inventory").push(data);
    } else {
      let id = data.id[0];
      delete data.id;
      firebase.database.ref("Users/uid1/inventory").child(id).update(data);
    }

    props.submission(data);
    setShowModal(false);
  }

  return (
    <div className="buttonStyle">
      <div style={{ padding: "10px" }}>
        <Button variant="primary" onClick={handleShow} size="sm">
          {props.valChange === "Delete" ? <DeleteIcon /> : ""}
          {props.valChange === "Update" ? <EditIcon /> : ""}
          {props.valChange === "Add" ? <AddCircleOutlineIcon /> : ""}
          {"    "}
          {props.itemState}
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.itemState}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Product Name</label>
            <input
              style={{ display: "block" }}
              type="text"
              name="name"
              placeholder="Product Name"
              defaultValue={name}
              onChange={(e) => setProductName(e.target.value)}
            />
            <label>Product Price</label>
            <input
              style={{ display: "block" }}
              type="number"
              name="price"
              placeholder="Product Price"
              defaultValue={price}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <label>Product Quantity</label>
            <input
              style={{ display: "block" }}
              type="number"
              name="quantity"
              placeholder="Product Quantity"
              defaultValue={quantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(e) => {
              firebaseAction({
                name: name,
                price: price,
                quantity: quantity,
                id: id,
              });
            }}
          >
            {" "}
            {props.valChange}{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({ name: state.name });
const mapDispatchToProps = (dispatch) => ({
  submission(inventoryItem) {
    console.log("Inside Redux");
    dispatch(addInventoryItem(inventoryItem));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InventoryItem);
