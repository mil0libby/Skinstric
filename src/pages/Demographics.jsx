import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import ConfidenceChart from "../components/ConfidenceChart";

const Demographics = () => {
  const [isRace, setIsRace] = useState(true);
  const [isAge, setIsAge] = useState(false);
  const [isSex, setIsSex] = useState(false);

  function getHighestProbKey(object) {
    const entries = Object.entries(object);
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    const topPrediction = sorted[0];
    return topPrediction[0].toUpperCase();
  }

  function getHighestProbVal(object) {
    const entries = Object.entries(object);
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    const topPrediction = sorted[0];
    return (topPrediction[1] * 100).toFixed(1) + "%";
  }

  function getHighestProbValDec(object) {
    const entries = Object.entries(object);
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    const topPrediction = sorted[0];
    return topPrediction[1];
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
            <div className="category-title">
              {isRace
                ? getHighestProbKey(data.race)
                : isAge
                ? getHighestProbKey(data.age)
                : getHighestProbKey(data.gender)}
            </div>
            <div className="circle-percentage">
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="150"
                  cy="150"
                  r="135"
                  stroke="white"
                  strokeWidth="30"
                  fill="none"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="135"
                  stroke="#000000"
                  strokeWidth="30"
                  fill="none"
                  strokeDasharray="848.23"
                  strokeDashoffset={
                    isRace
                      ? 848.23 * (1 - getHighestProbValDec(data.race))
                      : isAge
                      ? 848.23 * (1 - getHighestProbValDec(data.age))
                      : 848.23 * (1 - getHighestProbValDec(data.gender))
                  } // 50%
                  strokeLinecap="round"
                  transform="rotate(-90 150 150)"
                />
              </svg>

              <div className="percentage">
                {isRace
                  ? getHighestProbVal(data.race)
                  : isAge
                  ? getHighestProbVal(data.age)
                  : getHighestProbVal(data.gender)}
              </div>
            </div>
          </div>
        </div>

        <ConfidenceChart
          data={isRace ? data.race : isAge ? data.age : data.gender}
          label={isRace ? "RACE" : isAge ? "AGE" : "SEX"}
        />
      </div>

      <div className="footer">
        <button className="btn">RESET</button>
        <button className="btn confirm">CONFIRM</button>
      </div>
    </div>
  );
};

export default Demographics;
