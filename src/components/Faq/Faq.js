import React from "react";
import "./Faq.css";
import helpIcon from "../../assets/helpIcon.svg";
import Header1 from "../Header1/Header1";
import Accordion from "./Accordion";

function Faq() {
  return (
    <div>
      <Header1 />
      <div className="faq_main">
        <img src={helpIcon} className="help_img"></img>
        <p>Have any questions?</p>
      </div>
      <Accordion />
    </div>
  );
}
export default Faq;
