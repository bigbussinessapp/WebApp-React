import React from "react";
import { useState, useEffect } from "react";
import "./Dues.css";
import { Button } from "react-bootstrap";
import firebase from "../../../containers/Firebase";
import Header1 from "../../Header1/Header1";
import Sidebar from "../../Sidebar/Sidebar";
const PaymentDues = () => {
  const [dues, setDues] = useState([]);
  useEffect(() => {
    firebase.database
      .ref("Users/uid1")
      .child("dues")
      .on("value", function (snapshot) {
        let json = snapshot.val();
        let keys = Object.keys(json);
        let vals = Object.values(json);
        for (let i = 0; i < keys.length; i++) {
          vals[i].id = keys[i];
        }
        setDues(vals);
      });
  }, []);
  return (
    <div>
      <Header1 />
      <div className="web_body">
        <Sidebar />
        <div className="sideContent">
          <h2 className="serviceHeader">Dues</h2>
          <div className="dues">
            {dues.map((task, index) => (
              <div
                key={index}
                style={{
                  padding: "30px",
                  border: "1px solid black",
                  width: "15vw",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                  margin: "10px",
                }}
              >
                <h5>Name :{task.title}</h5>
                <p>Amount :{task.amount} </p>
                <p>Date :{task.reminderDate}</p>
                <Button>Pay Now</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDues;
