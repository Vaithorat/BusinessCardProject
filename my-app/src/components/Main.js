import React from "react";
export default function Main() {
  return (
    <div className="main">
      <div className="name"> Vaibhav Thorat </div>
      <div className="job">Frontend Developer</div>
      <div className="website">Vaibhav.website</div>
      <div className="buttons">
        <div className="email">
          <img
            className="emailIMG"
            src="./Icons/Icon.png"
            width="12.8px"
            height="9.6px"
            alt=""
          />
          <button className="emailBtn">Email</button>
        </div>
        <img src="./Icons/Vector.png" alt="" />
        <button className="linkedin">LinkedIn</button>
      </div>
      <div className="about">
        <div className="headAbout">About</div>
        <p className="pAbout">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="interest">
        <div className="headInterest">Interests</div>
        <p className="iAbout">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div> 
    </div>
  );
}
