import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React, { useContext } from "react";
import "./css/ItemDetailsTable.css";
import { InvoiceContext } from "./InvoiceGeneration";

const ItemDetailsTable = (props) => {
  const { itemInputs } = props;
  const { handleItemInputsEdit, handleItemInputsDelete } = useContext(
    InvoiceContext
  );
  return (
    <table className="tableDetail">
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Rate</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {itemInputs.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.rate}</td>
            <td>
              <button
                style={{
                  outline: " none",
                  border: " none",
                  backgroundColor: "white",
                  fontSize: "1.5em",
                }}
                onClick={() => handleItemInputsEdit(item.id)}
              >
                <i class="far fa-edit"></i>
              </button>
            </td>
            <td>
              <button
                style={{
                  outline: " none",
                  border: " none",
                  backgroundColor: "white",
                  fontSize: "2em",
                }}
                onClick={() => handleItemInputsDelete(item.id)}
              >
                <HighlightOffIcon />
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default ItemDetailsTable;
