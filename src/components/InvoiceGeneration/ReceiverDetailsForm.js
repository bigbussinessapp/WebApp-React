import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import "../inventoryManagement/card.css";
import "./css/ReceiverDetailsForm.css";
import { InvoiceContext } from "./InvoiceGeneration";

const ReceiverDetailsForm = (props) => {
  const { handleReceiverChange } = useContext(InvoiceContext);
  const { receiver } = props;

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const objvalue = target.value;
    handleReceiverChange({ [name]: objvalue });
  };

  // Get the ReceiverArray Values from db
  // Working : Show Existing values + Allow user to add
  const [ReceiverArray, setReceiverArray] = useState([]);
  const handleSave = (receiver) => {
    setReceiverArray([...ReceiverArray, receiver]);
    setShowModal(false);
    // handleReceiverChange({
    //   name: "",
    //   mobile: "",
    //   address: "",
    //   gstin: "",
    //   email: "",
    //   region: "",
    // });
  };

  // const handleOptionSelect=(event)=>{
  //   handleReceiverChange()
  // setShowModal(true);
  // }

  const formname = "Receiver Details";

  let [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    handleReceiverChange({
      id: Math.random(),
      name: "",
      mobile: "",
      address: "",
      gstin: "",
      email: "",
      region: "",
    });
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  const [SelectInvoiceValue, setSelectInvoiceValue] = useState("default");

  return (
    <div className="receive_form">
      <legend>{formname.toUpperCase()}</legend>{" "}
      <select
        name="invoice_names"
        id="invoice_names--select"
        defaultValue={SelectInvoiceValue}
        onChange={(event) => {
          let index = event.target.value;
          handleReceiverChange(ReceiverArray[index]);
          setSelectInvoiceValue(receiver.name);
          setShowModal(true);
        }}
      >
        <option value="default" disabled>
          Select Invoice Name
        </option>
        {ReceiverArray.length !== 0 &&
          ReceiverArray.map((receiver, index) => (
            <option key={index} value={index}>
              {receiver.name}
            </option>
          ))}
      </select>
      <Button variant="primary" id="add_paying--button" onClick={handleShow}>
        Add Paying
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Paying</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <fieldset>
              <div id="form_input_elements">
                <div className="label_input_container" id="name">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={receiver["name"]}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    required
                  />
                </div>
                <div className="label_input_container" id="mobile">
                  <label>Mobile</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={receiver["mobile"]}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    required
                  />
                </div>
                <div className="label_input_container" id="address">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={receiver["address"]}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    required
                  />
                </div>
                <div className="label_input_container" id="gstin">
                  <label>GSTIN</label>
                  <input
                    type="text"
                    name="gstin"
                    value={receiver["gstin"]}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    required
                  />
                </div>
                <div className="label_input_container" id="email">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={receiver["email"]}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    required
                  />
                </div>
                <div className="label_input_container" id="region">
                  <label>Region</label>
                  <input
                    type="text"
                    name="region"
                    value={receiver["region"]}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    required
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSave(receiver);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReceiverDetailsForm;
