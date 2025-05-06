import React from "react";
import "./Nav.css";

export default function Nav({ label, getCode }) {
  return (
    <div className="nav__container">
      <div className="nav__header--container">
        <span className="nav__header">SKINSTRIC</span>
        <span className="nav__header--label nav__header">{`[ ${label} ]`}</span>
      </div>
      {getCode && <button className="code__button">GET CODE</button>}
    </div>
  );
}
