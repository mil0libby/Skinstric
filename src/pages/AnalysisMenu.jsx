import React from "react";
import Nav from "../components/Nav/Nav";
import { Link } from "react-router-dom";

export default function AnalysisMenu() {
  return (
    <div className="analysis__container">
      <Nav label={"ANALYSIS"} getCode={false}></Nav>

      <div className="diamond__container">
        <div className="mini__header mini__header--abs">A.I. ANALYSIS</div>
        <p className="analysis__description--abs">
          A. I. HAS ESTIMATED THE FOLLOWING. <br></br> FIX ESTIMATED INFORMATION
          IF NEEDED.
        </p>
        <div className="box--inner box--ai"></div>
        <div className="box--middle box--am"></div>
        <div className="box--outer box--ao"></div>
        <Link to="/dem">
          <div className="diamond demographics">
            <h3 className="diamond--text">DEMOGRAPHICS</h3>
          </div>
        </Link>
        <div className="diamond skin-type">
          <h3 className="diamond--text">
            SKIN TYPE<br></br>DETAILS
          </h3>
        </div>
        <div className="diamond cosmetic">
          <h3 className="diamond--text">
            COSMETIC<br></br>CONCERNS
          </h3>
        </div>
        <div className="diamond weather">
          <h3 className="diamond--text">WEATHER</h3>
        </div>
      </div>
    </div>
  );
}
