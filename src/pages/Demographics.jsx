import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import ConfidenceChart from "../components/ConfidenceChart";
import BackArrow from "../assets/images/back--arrow.png";
import { Link } from "react-router-dom";

const Demographics = () => {
  const [isRace, setIsRace] = useState(true);
  const [isAge, setIsAge] = useState(false);
  const [isSex, setIsSex] = useState(false);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("dem-data"))
  );

  const [currentValue, setCurrentValue] = useState("");

  // allows user to update data while storing original data to allow reset
  const [originalRace, setOriginalRace] = useState("");
  const [originalAge, setOriginalAge] = useState("");
  const [originalSex, setOriginalSex] = useState("");

  const [currentRace, setCurrentRace] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [currentSex, setCurrentSex] = useState("");

  function getHighestProbKey(object) {
    const entries = Object.entries(object);
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    const topPrediction = sorted[0];
    return topPrediction[0];
  }

  function decToPercentage(val) {
    return (val * 100).toFixed(1) + "%";
  }

  useEffect(() => {
    console.log(data);
    setOriginalRace(getHighestProbKey(data.race));
    setOriginalAge(getHighestProbKey(data.age));
    setOriginalSex(getHighestProbKey(data.gender));

    setCurrentRace(getHighestProbKey(data.race));
    setCurrentAge(getHighestProbKey(data.age));
    setCurrentSex(getHighestProbKey(data.gender));
  }, [data]);

  useEffect(() => {
    console.log("Current value:", currentRace);
    console.log("current prob:", data.race[currentRace.toString()]);
  }, [currentRace]);

  return (
    <div className="main__container--dem">
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
                {currentRace.toUpperCase()}
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
              <h3 className="sidebar--item--label">{currentAge}</h3>
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
                {currentSex.toUpperCase()}
              </h3>
              <h3 className="sidebar--item--label">SEX</h3>
            </div>
          </div>

          <div className="demographics-container">
            <div className="main-panel">
              <div className="category-title">
                {isRace
                  ? currentRace.toUpperCase()
                  : isAge
                  ? currentAge
                  : currentSex.toUpperCase()}
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
                        ? 848.23 * (1 - data.race[currentRace])
                        : isAge
                        ? 848.23 * (1 - data.age[currentAge])
                        : 848.23 * (1 - data.gender[currentSex])
                    } // 50%
                    strokeLinecap="round"
                    transform="rotate(-90 150 150)"
                  />
                </svg>

                <div className="percentage">
                  {isRace
                    ? decToPercentage(data.race[currentRace])
                    : isAge
                    ? decToPercentage(data.age[currentAge])
                    : decToPercentage(data.gender[currentSex])}
                </div>
              </div>
            </div>
          </div>

          <ConfidenceChart
            data={isRace ? data.race : isAge ? data.age : data.gender}
            label={isRace ? "RACE" : isAge ? "AGE" : "SEX"}
            setCurrentValue={setCurrentValue}
          />
        </div>
      </div>

      <Link to="/menu">
        <img className="back--arrow--dem" src={BackArrow} alt="" />
      </Link>
      <div className="footer">
        <h5 className="text__mini">
          If A.I. estimate is wrong, select the correct one.
        </h5>
        <div className="buttons--dem">
          <button
            className="btn"
            onClick={() => {
              setCurrentAge(originalAge);
              setCurrentRace(originalRace);
              setCurrentSex(originalSex);
            }}
          >
            RESET
          </button>
          <button
            className="btn confirm"
            onClick={() => {
              if (isRace) {
                if (data.race[currentValue]) {
                  setCurrentRace(currentValue);
                }
              } else if (isAge) {
                if (data.age[currentValue]) {
                  setCurrentAge(currentValue);
                }
              } else if (isSex) {
                if (data.gender[currentValue]) {
                  setCurrentSex(currentValue);
                }
              }
            }}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
