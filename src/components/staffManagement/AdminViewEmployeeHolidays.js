import { getDate, getDay, getMonth } from "date-fns";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { connect } from "react-redux";
import "./css/AdminViewEmployeeHolidays.css";
import "./css/StaffManagement.css";

const AdminViewEmployeeHolidays = (props) => {
  const [leaveList, setLeaveList] = useState([10, 1, 5, 6]);

  let modifiers = {
    disabled: (date) => getDay(date) === 6,
    leaves: (date) => getDate(date) === 3,
  };
  let holidays = [new Date(2021, 2, 12), new Date(2021, 2, 14)];
  console.log(modifiers);
  let modifiersClassNames = {
    holidays: "-holidays",
    leaves: "leaves",
  };
  function updateLaves(e) {
    getMonth(e);
    console.log(getMonth(e));
  }

  let no_of_leaves_left = 4;

  return (
    <div id="payroll_attendance_view">
      <div id="day_picker_container">
        <div id="calendar_view">
          <DayPicker
            className="attendanceCalender"
            modifiers={modifiers}
            modifiersClassNames={modifiersClassNames}
            selectedDays={holidays}
            onMonthChange={(e) => updateLaves(e)}
          />
        </div>
      </div>
      <div id="leave_request_container">
        <div id="remaining_leaves">
          <p>Leave Request History</p>
          <p>Remaining Leaves : {no_of_leaves_left}d </p>
        </div>
        <Table id="leave_request_table">
          <thead>
            <th>From Date</th>
            <th>To Date</th>
            <th>From Time</th>
            <th>To Time</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>21-01-2021</td>
              <td>22-01-2021</td>
              <td>9:00AM</td>
              <td>6:00PM</td>
              <td>Leave</td>
            </tr>
            <tr>
              <td>21-01-2021</td>
              <td>22-01-2021</td>
              <td>9:00AM</td>
              <td>6:00PM</td>
              <td>Leave</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let x1 = { ...state.adminEmployeeDataView.adminEmployeeDataView };
  return x1.staffMember; // state
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminViewEmployeeHolidays);
