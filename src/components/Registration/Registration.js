import React from "react";
import "./Registration.css";
import profileAvtar from "../../assets/profileAvtar.svg";
import locationIcon from "../../assets/locationIcon.svg";
import gstIcon from "../../assets/gstIcon.svg";
import pinIcon from "../../assets/pinIcon.svg";
import businessIcon from "../../assets/businessIcon.svg";
import businessAddressIcon from "../../assets/businessAddressIcon.svg";

function Registration(props) {
  return (
    <div className="profile">
      {/* <div className="profile_box"> */}
      <img src={profileAvtar} className="profile_img"></img>
      <div className="user_info">
        <div className="profile_css">
          <div className="profile_css_name">
            <i class="fas fa-user"></i>
            <p>First Name</p>
          </div>
          <p>{props.name}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <img src={businessIcon}></img>
            <p>Business Name</p>
          </div>
          <p>{props.emailId}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name" style={{ display: "block" }}>
            <img src={businessAddressIcon}></img>
            <p>Business Address</p>
          </div>
          <p>{props.emailId}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <img src={pinIcon}></img>
            <p>Pin Code</p>
          </div>
          <p>{props.mobileNumber}</p>
        </div>
      </div>

      <div className="business_info">
        <div className="profile_css">
          <div className="profile_css_name">
            <i class="fas fa-business-time"></i>
            <p>Last Name</p>
          </div>
          <p>{"Big Business App"}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <img src={gstIcon}></img>
            <p>GST(Optional)</p>
          </div>
          <p>{props.businessType}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <img src={locationIcon}></img>
            <p>Location</p>
          </div>
          <p>{props.businessType}</p>
        </div>

        <button className="profile_button">Update</button>
      </div>
      {/* </div> */}
    </div>
  );
}
export default Registration;
