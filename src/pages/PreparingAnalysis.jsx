import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PrepIMG from "../assets/images/preparing.png";

export default function PreparingAnalysis() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/menu");
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // cleanup in case component unmounts early
  }, [navigate]);

  return (
    <div className="preparing-analysis__container">
      <h2 className="pa__text">PREPARING ANALYSIS ...</h2>
      <img src={PrepIMG} alt="" className="pa__img" />
    </div>
  );
}
