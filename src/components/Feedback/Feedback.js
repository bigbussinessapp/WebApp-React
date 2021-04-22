import React from "react";
import "./feedback.css";
function Feedback() {
  return (
    <div>
      <h2>Feedback Form</h2>
      <p>
        We would love to hear your thoughts, suggestions, concerns or problems
        with anything so we can improve!
      </p>
      <hr />
      <h3>Ratings</h3>
      <h3>Give your feedback</h3>
      <textarea></textarea>
      <h3>Name</h3>
      <input></input>
      <input></input>
      <h3>E-mail</h3>
      <input></input>
      <hr />
      <button>Submit</button>
    </div>
  );
}

export default Feedback;
