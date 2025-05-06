import React from "react";
import "./LandingMain.css";
import ArrowLeft from "./../../assets/images/discover--arrow.png";
import ArrowRight from "./../../assets/images/take-test--arrow.png";
import { Link } from "react-router-dom";

export default function LandingMain() {
  return (
    <div className="main__container">
      <figure className="arrow__container--left">
        <img src={ArrowLeft} alt="" />
      </figure>
      <div className="landing__header--container">
        <h1 className="landing__header--main">Sophisticated skincare</h1>
      </div>
      <Link to={"/name"}>
        <figure className="arrow__container--right">
          <img src={ArrowRight} alt="" />
        </figure>
      </Link>
      <div className="box--left"></div>
      <div className="box--right"></div>
    </div>
  );
}
