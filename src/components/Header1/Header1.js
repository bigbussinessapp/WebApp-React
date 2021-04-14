import React, { useContext } from "react";
import "../Header1/Header1.css";
import { AuthContext } from "../../containers/AuthContext";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import sidebarFinIcon from "../../assets/sidebarFinIcon.svg";
import sidebarInvtIcon from "../../assets/sidebarInvtIcon.svg";
import sidebarStaffIcon from "../../assets/sidebarStaffIcon.svg";
import sidebarInvoIcon from "../../assets/sidebarInvoIcon.svg";
import sidebarRemainIcon from "../../assets/sidebarRemainIcon.svg";
import sidebarDueIcon from "../../assets/sidebarDueIcon.svg";

function Header() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "30px";
  }
  return (
    <div>
      <ul className="ul_main_header1">
        <li
          className="li_header1"
          id="main"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
            display: "none",
          }}
          className="li_header1"
          onClick={openNav}
        >
          <img className="li_img" src={logo} alt="li_img"></img>
        </li>
        <li className="li_header1">
          <Link to="/">
            <img className="li_img li_img_logo" src={logo} alt="li_img"></img>
          </Link>
        </li>

        <li className="li_end_header1 li_end_web dot_menu">
          <Link to="#" className="menu" style={{ textDecoration: "none" }}>
            <i class="fas fa-ellipsis-v"></i>
          </Link>
          <div className="menu_dropdown">
            <a href="/#contact_id" style={{ textDecoration: "none" }}>
              <p>Contact Us</p>
            </a>
            <a href="/#blog_id" style={{ textDecoration: "none" }}>
              <p>Blogs</p>
            </a>
            <Link to="/page">
              <i class="fas fa-user-circle"></i>
            </Link>
          </div>
        </li>
        <li className="li_end_header1 li_end_header_1_home">
          <Link to="/">Home</Link>
        </li>
        <li className="li_end_header1 li_end_mobile">
          <Link to="/page">
            <i class="fas fa-user-circle"></i>
          </Link>
        </li>
        <li className="li_end_header1 li_end_mobile">
          <a href="/#contact_id" style={{ textDecoration: "none" }}>
            <p>Contact Us</p>
          </a>
        </li>
        <li className="li_end_header1  li_end_mobile">
          <a href="/#blog_id" style={{ textDecoration: "none" }}>
            <p>Blogs</p>
          </a>
          <i class="fas fa-blog"></i>
        </li>
      </ul>
      <div id="mySidenav" class="sidenav" onClick={closeNav}>
        <a href="#" className="closebtn">
          &times;
        </a>
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
            <img src={sidebarRemainIcon}></img>
            Remainders
          </Link>
        </li>
        <li className="li_side ">
          <Link to="/dues">
            <img src={sidebarDueIcon}></img>
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

export default Header;
