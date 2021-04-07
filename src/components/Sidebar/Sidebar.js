import React, { useContext } from "react";
import { AuthContext } from "../../containers/AuthContext";
import { Link } from "react-router-dom";
import sidebarFinIcon from "../../assets/sidebarFinIcon.svg";
import sidebarInvtIcon from "../../assets/sidebarInvtIcon.svg";
import sidebarStaffIcon from "../../assets/sidebarStaffIcon.svg";
import sidebarInvoIcon from "../../assets/sidebarInvoIcon.svg";

import "./Sidebar.css";
function Sidebar() {
  const { loginreducer } = useContext(AuthContext);
  const [state] = loginreducer;
  return (
    <div className="sidebar">
      <div className="ul">
        <li className="li_side">
          <Link to="/invoice">
            <img src={sidebarInvoIcon}></img>
            Invoice
          </Link>
        </li>
        <li className="li_side">
          <Link to="/invoicemanage">
            <img src={sidebarStaffIcon}></img>
            Invoice 2
          </Link>
        </li>
        <li className="li_side">
          <Link to="/inventory">
            <img src={sidebarInvtIcon}></img>
            Inventory
          </Link>
        </li>
        <li className="li_side ">
          <Link to="/transactions">
            <img src={sidebarFinIcon}></img>
            Transactions
          </Link>
        </li>
        <li className="li_side ">
        <Link to="/remainders">
          <img src={sidebarFinIcon}></img>
          Remainders
        </Link>
      </li>
      <li className="li_side ">
      <Link to="/dues">
        <img src={sidebarFinIcon}></img>
         Dues
      </Link>
    </li>

        <li className="li_side">
          <Link to="/staff">
            <img src={sidebarStaffIcon}></img>
            Staff
          </Link>
        </li>
        <li className="li_side">
          <Link to="/admin">
            <img src={sidebarStaffIcon}></img>
            Staff 2
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
