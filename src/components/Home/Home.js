import React, { useContext } from "react";
import "./Home.css";
import aboutIcon from "../../assets/aboutIcon.svg";
import homeIcon from "../../assets/homeIcon.svg";
import joinIcon from "../../assets/joinIcon.svg";
import Feature from "./Feature";
import BlogImg from "./Blog_img";
import Contact from "./Contact";
import Header from "../Header/Header";
import Footer from "./Footer";
import LoginMain from "../login/LoginMain";
import Toast from "react-bootstrap/Toast";

import { AuthContext } from "../../containers/AuthContext";

function Home() {
  const { loginreducer } = useContext(AuthContext);
  const [state] = loginreducer;
  return (
    <div className="home_main">
      <Header />
      {/* <img
        src={aboutIcon}
        className="head_main_icon"
        alt="head_main_icon"
      ></img> */}

      <div className="head">
        <div className="head_data">
          <h2>Building An Ecosystem For Trustworthy Businesses.</h2>
          <div className="join_home">
            <div className="join_home_button">
              <img src={joinIcon}></img>
              <p>Join Now</p>
            </div>
            <p>
              Join our community to <strong>get unlimited</strong> benefits
            </p>
          </div>
          {/* <div className="login_option">
            {state.loginsuccess === false ? <LoginMain /> : <div></div>}
            {state.loginsuccess === true ? (
              <div>
                <div>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">Authentication Status</strong>
                  <small> 1 mins ago</small>
                </div>
                <Toast.Body>
                  {state.UserPhoneNumber + " logged in successfully."}
                </Toast.Body>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div> */}
        </div>
      </div>

      {/* <Slider /> */}
      <div id="feature_id">
        <Feature />
      </div>
      <div id="blog_id">
        <BlogImg />
      </div>

      <div id="contact_id">
        <Contact />
      </div>
      {/* <Sign />*/}
      <Footer />
    </div>
  );
}
export default Home;
