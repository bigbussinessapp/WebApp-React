import React from "react";
import "./feedback.css";
function Feedback() {
  return (
    <div className="feedback_form">
      <div className="feedback_head">
        <h2>Feedback Form</h2>
        <p>
          We would love to hear your thoughts, suggestions, concerns or problems
          with anything so we can improve!
        </p>
      </div>
      <hr />
      <div className="feedback_rating">
        <h3>Ratings</h3>
        <input type="checkbox" name="rating1" value="Bad" />
        <label for="rating1"> Hate it</label>
        <input type="checkbox" name="rating2" value="Good" />
        <label for="rating2"> Like it</label>
        <input type="checkbox" name="rating3" value="Best" />
        <label for="rating3"> Love it</label>
      </div>
      <div className="feedback_section">
        <h3>Give your feedback</h3>
        <textarea rows="5" cols="90"></textarea>
      </div>
      <div className="feedback_name">
        <h3>Name</h3>
        <div className="fullname">
          <div className="fname">
            <input type="text" id="fname" name="fname" />
            <label>First Name</label>
          </div>
          <div className="lname">
            <input type="text" id="fname" name="fname" />
            <label>Last Name</label>
          </div>
        </div>
      </div>
      <div className="feedback_email">
        <h3>E-mail</h3>
        <input type="text" id="email" name="email" />
        <label>example@example.com</label>
      </div>
      <hr />
      <button className="feedback_submit">Submit</button>
    </div>
  );
}

export default Feedback;
