import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import sidebarFinIcon from "../../assets/sidebarFinIcon.svg";
import sidebarInvtIcon from "../../assets/sidebarInvtIcon.svg";
import sidebarStaffIcon from "../../assets/sidebarStaffIcon.svg";
import sidebarInvoIcon from "../../assets/sidebarInvoIcon.svg";
import sidebarRemainIcon from "../../assets/sidebarRemainIcon.svg";
import sidebarDueIcon from "../../assets/sidebarDueIcon.svg";

const Header = () => {
  return (
    <ul id="header" className="header_lists">
      <li className="header_link_logo">
        <Link to="/">
          <img className="logo" src={logo} alt="li_img"></img>
        </Link>
      </li>

      <li className="header_link">
        <Link to="/invoice">Invoice</Link>
      </li>
      <li className="header_link">
        <Link to="/invoicemanage">Manage Invo</Link>
      </li>
      <li className="header_link">
        <Link to="/inventory">Inventory</Link>
      </li>
      <li className="header_link">
        <Link to="/mainfinance">Finance</Link>
      </li>
      <li className="header_link">
        <Link to="/staff">Staff</Link>
      </li>
      <li className="header_link">
        <Link to="/admin">Admin</Link>
      </li>
      <li className="header_link">
        <Link href="/#blog_id">Blogs</Link>
      </li>
      <li className="header_link">
        <Link to="/page">
          <i class="fas fa-user-circle"></i>
        </Link>
      </li>
    </ul>
  );
};
export default Header;
