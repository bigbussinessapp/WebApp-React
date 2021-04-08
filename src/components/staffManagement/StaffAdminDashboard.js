import { getDate, getDay } from "date-fns";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import "react-nice-dates/build/style.css";
import { connect } from "react-redux";
import firebase from "../../containers/Firebase";
import Header1 from "../Header1/Header1";
import { setAdminEmployeeDataView } from "../redux-state-management/actionCreators";
import Sidebar from "../Sidebar/Sidebar";
import AdminViewEmployeeHolidays from "./AdminViewEmployeeHolidays";
import ChatView from "./ChatView";
import person from "./css/person.jpg";
import "./css/StaffManagement.css";

const StaffAdminDashboard = (props) => {
  let holidayList = [];
  let modifiers = {
    disabled: (date) => getDay(date) === 6, // Disables Saturdays
    holidays: (date) => getDate(date) === 2, // Highlights Tuesdays
    leaves: (date) => getDate(date) === 3,
  };

  const [employeesData, setEmployeesData] = useState([]);

  let [selectedStaffMember, setSelectedStaffMember] = useState({
    firstName: "Your",
    lastName: "Name",
  });

  useEffect(() => {
    firebase.database
      .ref("Users/uid1")
      .child("staffDetails")
      .on("value", function (snapshot) {
        let json = snapshot.val();
        let keys = Object.keys(json);
        let vals = Object.values(json);
        for (let i = 0; i < keys.length; i++) {
          vals[i].id = keys[i];
        }
        setEmployeesData(vals);
        setSelectedStaffMember(vals[0]);
      });
    console.log("Inside Useffect");
    console.log(selectedStaffMember);
  }, []);
  let leaves = ["23-01-2020", "21-01-2019"];
  let holidays = ["23-01-2020", "21-01-2019"];

  return (
    <div>
      <Header1 />
      <div className="web_body">
        <Sidebar />
        <div className='sideContent'>
          <h2 className='serviceHeader'>Staff Management</h2>
        <div className="adminDashboard" id="div_container">
          <div className="admin_staff" id="image_list_container">
            <div id="emp_image_container">
              <img className="emp_image" src={person} alt="Employee's Image" />
              <span>
                {selectedStaffMember.firstName} {selectedStaffMember.lastName}
              </span>
              {/* <span>{"(post)"}</span> */}
            </div>
            <div id="emp_list_container">
              <span id="active_conv_title">
                Active Conversations
                <span className="no_of_emp">{employeesData.length}</span>
              </span>
              {employeesData.map((staffMember) => {
                return (
                  <ListGroup.Item
                    className={
                      selectedStaffMember === staffMember
                        ? "emp_item selected"
                        : "emp_item"
                    }
                    onClick={(e) => {
                      setSelectedStaffMember(staffMember);
                      props.changeEmployeeData({ staffMember });
                    }}
                  >
                    <img
                      className="emp_image"
                      src={person}
                      alt="Employee's Image"
                    />
                    {staffMember.firstName} {staffMember.lastName}
                  </ListGroup.Item>
                );
              })}
              <span id="archive_chats_title">
                Archive Chats
                <span className="no_of_emp">2</span>
              </span>
            </div>
          </div>

          <ChatView
            className="chatView"
            id="chat_container"
            staffMember={selectedStaffMember}
          ></ChatView>

          <AdminViewEmployeeHolidays leaves={leaves} holidays={holidays} />
        </div>
      </div>
    </div>
    </div>
  );
};
const mapStateToProps = (state) => ({ employeeData: state.employeeData });
const mapDispatchToProps = (dispatch) => ({
  changeEmployeeData(employeeData) {
    dispatch(setAdminEmployeeDataView(employeeData));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffAdminDashboard);
