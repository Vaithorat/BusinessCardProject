import React from "react";
import Mail from './Icons/Icon.png'
import LinkedIn from './Icons/Vector.png'
export default function Main() {
  return (
    <div className="main">
      <div className="name"> Vaibhav Thorat </div>
      <div className="job">Frontend Developer</div>
      <div className="website">Vaibhav.website</div>
      <div className="buttons">
        <div className="email">
          <img
            className="emailIMG"src={Mail}width="12.8px"height="9.6px"alt=""/>
          <button className="emailBtn">Email</button>
        </div>
        <div className="linkedin">
        <img className = "LinkedImg"src={LinkedIn} alt="" />
        <button className="linkedBtn">LinkedIn</button>

        </div>
      </div>
      <div className="about">
        <div className="headAbout">About</div>
        <p className="pAbout">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          back end, and am always looking for new things to learn.
        </p>
      </div>
      <div className="interest">
        <div className="headInterest">Interests</div>
        <p className="iAbout">
          Music scholar. Avid Reader. Internet fanatic. Entrepreneur. Coding geek. Pop culture ninja. Coffee fanatic. Gamer in disguise.
        </p>
      </div> 
    </div>
  );
}
