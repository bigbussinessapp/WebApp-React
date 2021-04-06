import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import "./css/ChatView.css";

const ChatView = (props) => {
  const {
    staffMember: { firstName, lastName },
  } = props;
  return (
    <div className="chatView" id="chat_container">
      <div id="chat_header">
        {firstName} {lastName}
      </div>
      <div className="textBoxView" id="chat_box_view">
        <div id="chat_messages_view"></div>
        <input
          id="send_message--input"
          type="text"
          placeholder="Write Message...."
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  let x1 = { ...state.adminEmployeeDataView.adminEmployeeDataView };
  console.log(x1.staffMember);
  return x1.staffMember; // state
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ChatView);
