import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";

function Page() {
  return (
    <div>
      <Profile
        name="Aaryan Arhiyanth"
        emailId="boppesricharan@gmail.com"
        mobileNumber="+916309833542"
        businessType="Small Scale"
      />
    </div>
  );
}
export default Page;
