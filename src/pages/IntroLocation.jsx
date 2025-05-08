import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import BackArrow from "../assets/images/back--arrow.png";
import ProceedArrow from "../assets/images/proceed--arrow.png";
import { Link, useNavigate } from "react-router-dom";

export default function IntroLocation() {
  const [name, setName] = useState();
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  async function sendUserData() {
    localStorage.setItem("userLocation", location); // Save to localStorage

    const url =
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne";
    const data = {
      name: name,
      location: location,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response:", result);
    } catch (error) {
      console.error("Error:", error);
    }

    navigate("/options");
  }

  useEffect(() => {
    setName(localStorage.getItem("userName"));
  }, []);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="intro-name__container">
      <Nav label={"INTRO"} getCode={false}></Nav>
      <div className="mini__header">TO START ANALYSIS</div>
      <div className="info__input--container">
        <h3 className="click-here__text">CLICK TO TYPE</h3>
        <input
          type="text"
          placeholder="Where are you from?"
          className="info__input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="box--outer"></div>
        <div className="box--middle"></div>
        <div className="box--inner"></div>
      </div>
      <Link to={"/name"}>
        <figure className="back--arrow">
          <img src={BackArrow} alt="" />
        </figure>
      </Link>
      <figure className="proceed--arrow" onClick={() => sendUserData()}>
        <img src={ProceedArrow} alt="" />
      </figure>
    </div>
  );
}
