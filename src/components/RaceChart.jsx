import React, { useEffect, useState } from "react";

export default function RaceChart({ data }) {
  const [isSelected1, setIsSelected1] = useState(true);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false);
  const [isSelected5, setIsSelected5] = useState(false);
  const [isSelected6, setIsSelected6] = useState(false);
  const [isSelected7, setIsSelected7] = useState(false);

  const [sortedData, setSortedData] = useState([]);

  function getSortedArray(object) {
    // Step 1: Convert to array
    const entries = Object.entries(object);

    // Step 2: Sort by value descending
    const sorted = entries.sort((a, b) => b[1] - a[1]);

    // Step 3: Get the top prediction

    return sorted;
  }

  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  useEffect(() => {
    console.log(getSortedArray(data));
    setSortedData(getSortedArray(data));
  }, [data]);
  return (
    <div className="confidence-panel">
      <div className="confidence-header">
        <span>RACE</span>
        <span>A.I. CONFIDENCE</span>
      </div>
      <div
        className={`confidence-item ${isSelected1 ? "selected" : ""}`}
        onClick={() => {
          setIsSelected1(true);
          setIsSelected2(false);
          setIsSelected3(false);
          setIsSelected4(false);
          setIsSelected5(false);
          setIsSelected6(false);
          setIsSelected7(false);
        }}
      >
        <span>{capitalizeWords(sortedData[0][0])}</span>
        <span>{(sortedData[0][1] * 100).toFixed(1)}%</span>
      </div>
      <div
        className={`confidence-item ${isSelected2 ? "selected" : ""}`}
        onClick={() => {
          setIsSelected1(false);
          setIsSelected2(true);
          setIsSelected3(false);
          setIsSelected4(false);
          setIsSelected5(false);
          setIsSelected6(false);
          setIsSelected7(false);
        }}
      >
        <span>{capitalizeWords(sortedData[1][0])}</span>
        <span>{(sortedData[1][1] * 100).toFixed(1)}%</span>
      </div>
      <div
        className={`confidence-item ${isSelected3 ? "selected" : ""}`}
        onClick={() => {
          setIsSelected1(false);
          setIsSelected2(false);
          setIsSelected3(true);
          setIsSelected4(false);
          setIsSelected5(false);
          setIsSelected6(false);
          setIsSelected7(false);
        }}
      >
        <span>{capitalizeWords(sortedData[2][0])}</span>
        <span>{(sortedData[2][1] * 100).toFixed(1)}%</span>
      </div>
      <div
        className={`confidence-item ${isSelected4 ? "selected" : ""}`}
        onClick={() => {
          setIsSelected1(false);
          setIsSelected2(false);
          setIsSelected3(false);
          setIsSelected4(true);
          setIsSelected5(false);
          setIsSelected6(false);
          setIsSelected7(false);
        }}
      >
        <span>{capitalizeWords(sortedData[3][0])}</span>
        <span>{(sortedData[3][1] * 100).toFixed(1)}%</span>
      </div>
      <div
        className={`confidence-item ${isSelected5 ? "selected" : ""}`}
        onClick={() => {
          setIsSelected1(false);
          setIsSelected2(false);
          setIsSelected3(false);
          setIsSelected4(false);
          setIsSelected5(true);
          setIsSelected6(false);
          setIsSelected7(false);
        }}
      >
        <span>{capitalizeWords(sortedData[4][0])}</span>
        <span>{(sortedData[4][1] * 100).toFixed(1)}%</span>
      </div>
      <div
        className={`confidence-item ${isSelected6 ? "selected" : ""}`}
        onClick={() => {
          setIsSelected1(false);
          setIsSelected2(false);
          setIsSelected3(false);
          setIsSelected4(false);
          setIsSelected5(false);
          setIsSelected6(true);
          setIsSelected7(false);
        }}
      >
        <span>{capitalizeWords(sortedData[5][0])}</span>
        <span>{(sortedData[5][1] * 100).toFixed(1)}%</span>
      </div>
      <div
        className={`confidence-item ${isSelected7 ? "selected" : ""}`}
        onClick={() => {
          setIsSelected1(false);
          setIsSelected2(false);
          setIsSelected3(false);
          setIsSelected4(false);
          setIsSelected5(false);
          setIsSelected6(false);
          setIsSelected7(true);
        }}
      >
        <span>{capitalizeWords(sortedData[6][0])}</span>
        <span>{(sortedData[6][1] * 100).toFixed(1)}%</span>
      </div>
    </div>
  );
}
