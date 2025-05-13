import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import { faL } from "@fortawesome/free-solid-svg-icons";
import RaceChart from "../components/RaceChart";

const Demographics = () => {
  const [isRace, setIsRace] = useState(true);
  const [isAge, setIsAge] = useState(false);
  const [isSex, setIsSex] = useState(false);

  function getHighestProbKey(object) {
    // Step 1: Convert to array
    const entries = Object.entries(object);

    // Step 2: Sort by value descending
    const sorted = entries.sort((a, b) => b[1] - a[1]);

    // Step 3: Get the top prediction
    const topPrediction = sorted[0];
    return topPrediction[0].toUpperCase();
  }

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("dem-data"))
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="analysis__container--dem">
      <Nav label={"ANALYSIS"} getCode={false}></Nav>
      <div className="analysis__header">
        <h3 className="mini__header">A.I. Analysis</h3>
        <h1 className="dem__header--main">DEMOGRAPHICS</h1>
        <h5 className="dem__header--description">PREDICTED RACE & AGE</h5>
      </div>

      <div className="sub__container">
        <div className="sidebar">
          <div
            className={`sidebar--item ${isRace ? "selected" : ""}`}
            onClick={() => {
              setIsAge(false);
              setIsRace(true);
              setIsSex(false);
            }}
          >
            <h3 className="sidebar--item--label">
              {getHighestProbKey(data.race)}
            </h3>
            <h3 className="sidebar--item--label">RACE</h3>
          </div>
          <div
            className={`sidebar--item ${isAge ? "selected" : ""}`}
            onClick={() => {
              setIsAge(true);
              setIsRace(false);
              setIsSex(false);
            }}
          >
            <h3 className="sidebar--item--label">
              {getHighestProbKey(data.age)}
            </h3>
            <h3 className="sidebar--item--label">AGE</h3>
          </div>
          <div
            className={`sidebar--item ${isSex ? "selected" : ""}`}
            onClick={() => {
              setIsAge(false);
              setIsRace(false);
              setIsSex(true);
            }}
          >
            <h3 className="sidebar--item--label">
              {getHighestProbKey(data.gender)}
            </h3>
            <h3 className="sidebar--item--label">SEX</h3>
          </div>
        </div>
        <div className="demographics-container">
          <div className="main-panel">
            <div className="category-title">$$$$$</div>
            <div className="circle-percentage">
              <div className="percentage">
                96<span>%</span>
              </div>
            </div>
          </div>
        </div>
        {<RaceChart data={data.race}></RaceChart>}
      </div>
      <div className="footer">
        <button className="btn">RESET</button>
        <button className="btn confirm">CONFIRM</button>
      </div>
    </div>
  );
};

export default Demographics;
