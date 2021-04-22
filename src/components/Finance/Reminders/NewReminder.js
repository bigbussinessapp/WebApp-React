import React, { useState } from "react";
import "./newRemainder.css";
import { Modal} from "react-bootstrap";
const NewReminder = ({ onSaveReminder }) => {
  const [title, setName] = useState("");
  const [paymentType, setTransType] = useState("");
  const [amount, setAmount] = useState("");
  const [reminderDate, setDate] = useState("");
  let [showModal, setShowModal] = useState(true);
      function handleShow() {
    // if (props.valChange === "Delete") {
      setShowModal(false);
    // } else setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a name!");
      return;
    }
    onSaveReminder({
      title,
      amount,
      paymentType,
      reminderDate,
      status: "Unpaid",
    });
    setName("");
    setAmount("");
    setDate("");
  };


  return (

    <div style={{ margin: "30px" }}>
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Remainder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <form onSubmit={onSubmit}>
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <label className="col-2.5">
            Name :{" "}
            <span>
              <input
                type="text"
                name="name"
                value={title}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a Business Name."
              />
            </span>{" "}
          </label>
        </div>
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <label className="col-2.5">Transaction Type:</label>
          <label className="col-2">
            Receive :{" "}
            <span>
              <input
                type="radio"
                value={paymentType}
                onChange={(e) => setTransType(e.target.value)}
              />
            </span>
          </label>{" "}
          <label className="col-8">
            Pay :{" "}
            <span>
              <input type="radio" />
            </span>
          </label>
        </div>
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <label className="col-2.5">
            Amount :{" "}
            <span>
              {" "}
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter a Amount."
              />
            </span>
          </label>
        </div>
        <div className="row">
          <label>
            Date :{" "}
            <span>
              {" "}
              <input
                type="Date"
                name="date"
                value={reminderDate}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Pick a Date."
              />
            </span>
          </label>
        </div>
        <input
          className="row btn btn-primary"
          type="submit"
          name="Add"
          value="Save Reminder"
        />
      </form>
      </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewReminder;
