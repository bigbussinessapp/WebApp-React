import React from "react";
import "./Feature.css";
import invoiceIcon from "../../assets/invoiceIcon.svg";
import staffIcon from "../../assets/staffIcon.svg";
import inventoryIcon from "../../assets/inventoryIcon.svg";
import financeIcon from "../../assets/financeIcon.svg";
import rightLeaves from "../../assets/rightLeaves.svg";
import leftLeaves from "../../assets/leftLeaves.svg";

function Feature() {
  return (
    <div>
      <img className="left_leave_home" src={leftLeaves}></img>
      <h1
        style={{ textAlign: "center", fontSize: "3em", fontWeight: "bolder" }}
      >
        FEATURES
      </h1>
      <div className="invoice">
        <img src={invoiceIcon}></img>
        <div className="invoice_data">
          <h2>INVOICE</h2>
          <p>
            We provide you with a single place to generate invoices manually as
            well as an AI assistant to automate the process. There are
            pre-existing invoice templates available to save time. One can scan
            inward invoices and turn an invoice into a QR code for easy
            transactions.
          </p>
        </div>
      </div>

      <div className="inventory">
        <div className="inventory_data">
          <h2>INVENTORY</h2>
          <p>
            We have automated your business inventory wherein the data gets
            pre-populated. Here, you just need to add the quantity of your
            product and your invoices will be ready. One can also easily
            customize the same.
          </p>
        </div>
        <img src={inventoryIcon}></img>{" "}
      </div>

      <div className="finance">
        <img src={financeIcon}></img>
        <div className="finance_data">
          <h2>FINANCE</h2>
          <p>
            Finance is one of the most crucial activities in businesses, and
            ensuring everything is maintained makes life easy during auditing.
            With Big business App, you can easily track and manage all the
            expenses and incomes, including purchases and returns.
          </p>
        </div>
        <img className="right_leave_feature" src={rightLeaves}></img>
      </div>

      <div className="staff">
        <div className="staff_data">
          <h2>STAFF MANAGEMENT</h2>
          <p>
            Ensuring your relations with staff is key to your business success.
            You can do away with manual registers with a single click marking of
            attendance of your employees. This in turn can help you manage
            payrolls, assign tasks dynamically and manage incentives.
          </p>
        </div>
        <img src={staffIcon}></img>
      </div>
    </div>
  );
}
export default Feature;
