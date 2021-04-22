import React, { useContext } from "react";
import "../Header/Header.css";
import firebase from "../../containers/Firebase";
import { AuthContext } from "../../containers/AuthContext";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import sidebarFinIcon from "../../assets/sidebarFinIcon.svg";
import sidebarInvtIcon from "../../assets/sidebarInvtIcon.svg";
import sidebarStaffIcon from "../../assets/sidebarStaffIcon.svg";
import sidebarInvoIcon from "../../assets/sidebarInvoIcon.svg";
import sidebarRemainIcon from "../../assets/sidebarRemainIcon.svg";
import sidebarDueIcon from "../../assets/sidebarDueIcon.svg";
// import { Link } from "react-scroll";
// import { TransactionsTable } from '../Finance/Tables/TransactionsTable';
//this func returns header and Transaction table as of now
function Header() {
  //   const { loginreducer } = useContext(AuthContext);
  //   const [state] = loginreducer;
  return (
    <ul className="ul_main">
      <li className="li">
        <Link to="/">
          <img className="li_img" src={logo} alt="li_img"></img>
        </Link>
      </li>

      <li className="li_end">
        <button>Sign Up</button>
      </li>
      <li className="li_end about_us">
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          <p>About us</p>
        </Link>
        <i class="fas fa-info"></i>
      </li>
      <li className="li_end li_contacts">
        <a
          href="/#contact_id"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Contact us</p>
        </a>
      </li>
      <li className="li_end li_blogs">
        <a href="/#blog_id" style={{ textDecoration: "none", color: "black" }}>
          <p>Blogs</p>
        </a>
        <i class="fas fa-blog"></i>
      </li>

      <li className="li_end options">
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          <p>Options</p>
        </a>
        <div className="options_dropdown">
          <a
            href="/#blog_id"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>Blogs</p>
          </a>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <p>About us</p>
          </Link>

          <a
            href="/#contact_id"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>Contact us</p>
          </a>

          <button className="option_button">Sign Up</button>
        </div>
      </li>
      <li className="li_end feature">
        <a href="/#" style={{ textDecoration: "none", color: "black" }}>
          <p>Features</p>
        </a>
        <div className="feature_dropdown">
          <Link to="/invoice">
            <img src={sidebarInvoIcon}></img>
            Invoice
          </Link>
          <Link to="/inventory">
            <img src={sidebarInvtIcon}></img>
            Inventory
          </Link>

          <Link to="/mainfinance">
            <img src={sidebarFinIcon}></img>
            Finance
          </Link>

          <Link to="/staff">
            <img src={sidebarStaffIcon}></img>
            Staff
          </Link>

          <Link to="/transactions">
            <img src={sidebarFinIcon}></img>
            Transactions
          </Link>

          <Link to="/remainders">
            <img src={sidebarRemainIcon}></img>
            Remainders
          </Link>

          <Link to="/dues">
            <img src={sidebarDueIcon}></img>
            Dues
          </Link>
        </div>
      </li>

      {/*         

        <li className="li_end">
          <button
            id="logout"
            className={
              state.isUserLoggedin
                ? "btn btn-success !important"
                : "btn btn-danger !important"
            }
            type="button"
            onClick={() =>
              firebase
                .logout(state.isUserLoggedin)
                .then(() => window.location.assign("/"))
            }
          >
            log out
          </button>
        </li> */}
    </ul>
  );
}

export default Header;
