import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { setPayRollView } from "../redux-state-management/actionCreators";
import store from "../redux-state-management/store";
import "./css/StaffManagement.css";

const PayRollBreakFC = (props) => {
  //https://reactdatepicker.com/#example-month-picker

  const [selectedMonth, setSelectedMonth] = useState("1");
  const [selectedYear, setSelectedYear] = useState("2020");
  const [totalAmount, setTotalAmount] = useState(5000);
  const [paymentView, setPaymentView] = useState(true);
  const [scroller, setScroller] = useState(false);
  const [paymentType, setPaymentType] = useState();
  const [showView, setShowView] = useState(props.PayrollView);
  const [empData, setEmpData] = useState(store.getState().employeeData);

  const [showModel, setShowModel] = useState(false);

  const [dropdownDate, setMonth] = useState(() => {
    const currentDate = new Date();

    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();

    return year + "-" + month;
  });

  const pay = (paymentType) => {
    console.log(paymentType);
    setPaymentType(paymentType);
    paymentType === "advance" ? setScroller(true) : setScroller(false);
    setPaymentView(true);
    setShowModel((prev) => !prev);
  };

  return (
    <div
      className="payRollView"
      style={{
        display: props.payRollView ? "block" : "none",
        position: "absolute",
        right: "0",
        margin: "70px",
        top: "0",
      }}
    >
      <div>
        <div className="selectors">
          <input
            type="month"
            name="dropdownDate"
            value={dropdownDate}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          />

          {/* <DatePicker
            onChange={(date) => {
              setSelectedYear(date.getFullYear());
            }}
            showYearPicker
            dateFormat="yyyy"
          /> */}
          {/* <DatePicker
            dateFormat="MM"
            onChange={(date) => {
              setSelectedYear(date.getMonth() + 1);
            }}
            showMonthYearPicker
          /> */}
        </div>
        <Button onClick={() => props.closePayRollView()}>Close View</Button>
      </div>
      <div>
        <p>
          Employee Name: {props.firstName} {props.lastName}{" "}
        </p>
        <p>PaySlip Month:{selectedMonth} </p>
        <p>Year: {selectedYear}</p>
        <p>Total Amount : {totalAmount}</p>
        <div className='paymentButtons'>
        <Button onClick={() => pay("advance")}>Pay Advance</Button>
        <Button onClick={() => pay("salary")}>Pay Salary</Button>
        </div>
      </div>

      <div id="model">
        {showModel ? (
          <Modal.Dialog
            className="paymentConfirmation"
            style={{ display: props.payRollView ? "block" : "none" }}
          >
            <Modal.Header
              closeButton
              onClick={() => {
                setShowModel((prev) => !prev);
              }}
            >
              <Modal.Title>Payment Screen</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                Are you sure you want to pay {props.employeeName} {totalAmount}{" "}
                as {paymentType}{" "}
              </p>
              <input
                style={{ display: scroller ? "block" : "none" }}
                type="range"
                id="advSalary"
                min={totalAmount}
                max={3 * totalAmount}
                defaultValue={1.5 * totalAmount}
              ></input>
            </Modal.Body>

            <Modal.Footer >
              <Button variant="secondary">Yes</Button>
              <Button variant="primary" onClick={() => setPaymentView(false)}>No</Button>
            </Modal.Footer>
          </Modal.Dialog>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log({ ...state.payRollView });
  return { ...state.employeeData.employeeData, ...state.payRollView }; // state
};

const mapDispatchToProps = (dispatch) => ({
  closePayRollView() {
    console.log("Closing View");
    dispatch(setPayRollView(false));
  },
});

PayRollBreakFC.defaultProps = {
  dropdownDate: new Date().toLocaleString("default", { month: "long" }),
};

export default connect(mapStateToProps, mapDispatchToProps)(PayRollBreakFC);
