import React, { useEffect, useState } from "react";

export default function ConfidenceChart({ data, label }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sortedData, setSortedData] = useState([]);

  function getSortedArray(object) {
    return Object.entries(object).sort((a, b) => b[1] - a[1]);
  }

  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  useEffect(() => {
    const sorted = getSortedArray(data);
    setSortedData(sorted);
    setSelectedIndex(0); // reset selection when data changes
  }, [data]);

  return (
    <div className="confidence-panel">
      <div className="confidence-header">
        <span>{label}</span>
        <span>A.I. CONFIDENCE</span>
      </div>
      {sortedData.map(([label, value], index) => (
        <div
          key={label}
          className={`confidence-item ${
            selectedIndex === index ? "selected" : ""
          }`}
          onClick={() => setSelectedIndex(index)}
        >
          <span>{capitalizeWords(label)}</span>
          <span>{(value * 100).toFixed(1)}%</span>
        </div>
      ))}
    </div>
  );
}
