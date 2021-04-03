import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Reminder from "./Reminder";
import { SiAddthis } from "react-icons/si";
import NewReminder from "./NewReminder";
import firebase from "../../../containers/Firebase";

import Header1 from "../../Header1/Header1";
import Sidebar from "../../Sidebar/Sidebar";

const PaymentReminders = (props) => {
  const [showNewReminder, setshowNewReminder] = useState(false);
  const [redata, setReminder] = useState([]);
  useEffect(() => {
    firebase.database
      .ref("Users/uid1")
      .child("reminders")
      .on("value", function (snapshot) {
        let json = snapshot.val();
        let keys = Object.keys(json);
        let vals = Object.values(json);
        for (let i = 0; i < keys.length; i++) {
          vals[i].id = keys[i];
        }
        setReminder(vals);
      });

    console.log(redata);
  }, []);

  const AddNewReminder = (redat) => {
    firebase.database.ref("Users/uid1").child("reminders").push(redat);
  };

  const DeleteReminder = (id) => {
    setReminder(redata.filter((task) => task.id !== id));
  };

  return (
    <div>
    <Header1 />
    <div className='web_body'>
      <Sidebar />
      <h2 style={{ fontWeight: "lighter",marginLeft:"20px"}}>
        {props.title}{" "}
        <SiAddthis
          style={{ color: !showNewReminder ? "blue" : "red" }}
          onClick={() => setshowNewReminder(!showNewReminder)}
          title="Click to Add New Reminder."
        />
      </h2>
      {showNewReminder && <NewReminder onSaveReminder={AddNewReminder} />}
      <Reminder redata={redata} onDelete={DeleteReminder} />
    </div>
    </div>
  );
};

PaymentReminders.defaultProps = {
  title: "Add Reminder",
};

PaymentReminders.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PaymentReminders;
