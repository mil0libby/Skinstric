import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import BackArrow from "../assets/images/back--arrow.png";
import ProceedArrow from "../assets/images/proceed--arrow.png";
import { Link, useNavigate } from "react-router-dom";

export default function IntroName() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleProceed = () => {
    localStorage.setItem("userName", name); // Save to localStorage
    navigate("/location"); // Programmatic navigation
    console.log(name);
  };

  return (
    <div className="intro-name__container">
      <Nav label={"INTRO"} getCode={false} />
      <div className="mini__header">TO START ANALYSIS</div>
      <div className="info__input--container">
        <h3 className="click-here__text">CLICK TO TYPE</h3>
        <input
          type="text"
          placeholder="Introduce Yourself"
          className="info__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="box--outer"></div>
        <div className="box--middle"></div>
        <div className="box--inner"></div>
      </div>
      <Link to={"/"}>
        <figure className="back--arrow">
          <img src={BackArrow} alt="" />
        </figure>
      </Link>
      <figure className="proceed--arrow" onClick={handleProceed}>
        <img src={ProceedArrow} alt="Proceed" />
      </figure>
    </div>
  );
}
