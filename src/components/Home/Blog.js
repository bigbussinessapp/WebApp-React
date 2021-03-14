import React from "react";
import "./Blog.css";
import blogImg1 from "../../assets/blogImg1.svg";
import blogImg2 from "../../assets/blogImg2.svg";
import blogImg3 from "../../assets/blogImg3.svg";
import leftLeave from "../../assets/leftLeave.svg";
import rightLeave from "../../assets/rightLeave.svg";
function Blog() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Blogs</h1>
      <img className="blog_left_leave" src={leftLeave}></img>

      <div className="blog_images">
        <img src={blogImg1}></img>
        <img src={blogImg3}></img>
        <img src={blogImg2}></img>
        <img src={blogImg3}></img>
        <img className="blog_right_leave" src={rightLeave}></img>
      </div>
    </div>
  );
}
export default Blog;