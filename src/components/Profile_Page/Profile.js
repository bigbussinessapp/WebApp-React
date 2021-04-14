import React from "react";
import "./Profile.css";
import profileAvtar from "../../assets/profileAvtar.svg";
import leftLeaves from "../../assets/leftLeaves.svg";
import rightLeaves from "../../assets/rightLeaves.svg";
// import Avtar from "../../assets/avtar.webp";

function Profile(props) {
  return (
    <div className="profile">
      <img className="left_leave_home" src={leftLeaves}></img>
      <img className="right_leave" src={rightLeaves}></img>
      <div className="user_info">
        <div className="user_image">
          <img src={profileAvtar}></img>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <i class="fas fa-user"></i>
            <p>Name:</p>
          </div>
          <p>{props.name}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <i class="fas fa-envelope"></i>
            <p>E-mail:</p>
          </div>
          <p>{props.emailId}</p>
        </div>
      </div>

      <div className="business_info">
        <div className="profile_css">
          <div className="profile_css_name">
            <i class="fas fa-business-time"></i>
            <p>Organization Name:</p>
          </div>
          <p>{"Big Business App"}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <i class="fas fa-user-friends"></i>
            <p>Organization Type:</p>
          </div>
          <p>{props.businessType}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <i class="fas fa-mobile"></i>
            <p>Mobile:</p>
          </div>
          <p>{props.mobileNumber}</p>
        </div>

        <button className="profile_button">Update</button>
      </div>
    </div>
  );
}
export default Profile;
