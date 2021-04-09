import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Remainder.css";
import { Button } from "react-bootstrap";
const Reminder = ({ redata, onDelete }) => {
  return (
    <div className="remainder_main">
      <div className="remainder_table">
        <p>{redata.id}</p>
        <div>
          {redata.map((task, index) => (
            <div
              className="financeCard"
              key={index}
              style={{
                padding: "30px",
                border: "1px solid black",
                width: "30vw",
                boxSizing: "border-box",
                borderRadius: "10px",
                margin: "10px",
              }}
            >
              <h5>Name :{task.title}</h5>
              <p>Amount :{task.amount} </p>
              <p style={{ width: "100px" }}>Date :{task.reminderDate}</p>

              <Button>
                <i class="far fa-trash-alt"></i>Delete{" "}
              </Button>
              {"   "}
              <Button>
                <i class="far fa-edit"></i>Edit{" "}
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* <img className="remainder_icon" src={remainderIcon}></img> */}
    </div>
  );
};

export default Reminder;
