import React, { useContext } from "react";
import "../Header1/Header1.css";
import { AuthContext } from "../../containers/AuthContext";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import sidebarFinIcon from "../../assets/sidebarFinIcon.svg";
import sidebarInvtIcon from "../../assets/sidebarInvtIcon.svg";
import sidebarStaffIcon from "../../assets/sidebarStaffIcon.svg";
import sidebarInvoIcon from "../../assets/sidebarInvoIcon.svg";

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
          id="main"
          style={{
            textDecoration: "none",
            color: "white",
            margin: "10px 10px 0px 30px",
            fontSize: "25px",
            display: "none",
          }}
          className="li_header1"
          onMouseEnter={openNav}
        >
          <img className="li_img" src={logo} alt="li_img"></img>
        </li>
        <li className="li_header1">
          <Link to="/">
            <img className="li_img li_img_logo" src={logo} alt="li_img"></img>
          </Link>
        </li>

        <li className="li_end_header1">
          <Link to="/page">
            <i class="fas fa-user-circle"></i>
          </Link>
        </li>
        <li className="li_end_header1">
          <a href="/#contact_id" style={{ textDecoration: "none" }}>
            <p>Contact Us</p>
          </a>
        </li>
        <li className="li_end_header1">
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
          <Link to="/inventory">
            <img src={sidebarInvtIcon}></img>
            Inventory
          </Link>
        </li>
        <li className="li_side ">
          <Link to="/mainfinance">
            <img src={sidebarFinIcon}></img>
            Finance
          </Link>
        </li>

        <li className="li_side">
          <Link to="/staff">
            <img src={sidebarStaffIcon}></img>
            Staff
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
