import React, { useEffect } from "react";

export default function Clock() {
  useEffect(() => {}, []);
  const PART = 48;
  function Line() {
    const n = PART;
    return (
      <>
        {new Array(n).fill(0).map((i, index) => (
          <line
            key={"line" + index}
            x1="100"
            y1="20"
            x2="100"
            y2="33"
            stroke="#fff"
            transform={"rotate(" + (index * 360) / n + " 100 100)"}
          ></line>
        ))}
      </>
    );
  }

  function Path() {
    const n = PART;
    const selects = [1, 4, 5, 6, 7, 8, 9, 12, 24, 22, 32];
    const color = (index) => {
      if (selects.indexOf(index) > -1) return "green";
      return "rgba(0,0,0,0.3)";
    };
    return (
      <>
        {new Array(n).fill(0).map((i, index) => (
          <path
            key={"path" + index}
            d="M 100.5 20 L 100.5 32.5 Q 107 33 108.5 33 L 110 21.2 Q 108 20.5 100.5 20.5"
            fill={color(index)}
            transform={"rotate(" + (index * 360) / n + " 100 100)"}
          />
        ))}
      </>
    );
  }
  return (
    <svg width="500" height="500" viewBox="0 0 200 200">
      <g>
        <circle
          id="circle"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="1"
          fill="none"
          cx="100"
          cy="100"
          r="80"
        ></circle>
      </g>
      <g>
        <circle
          id="circle"
          stroke="#D1CDCC"
          strokeWidth="0"
          fill="none"
          cx="100"
          cy="100"
          r="67"
        />
      </g>
      <Line />
      <Path />
    </svg>
  );
}

// <svg width="100%" height="100%" style={{ background: "red" }}>
//   <polygon
//     points="250,0 197,190 0,200 151,311 100,500 250,400 400,500 350,309 500,200 311,191"
//     fill="yellow"
//     stroke="blue"
//   />
//   <polyline
//     points="250,0 197,190 0,200 151,311 100,500 250,400 400,500 350,309 500,200 311,191"
//     fill="none"
//     stroke="#FFD600"
//     stroke-width="4"
//   />
// </svg>;

// <svg
//   width="100%"
//   height="100%"
//   viewBox="0 0 100 100"
//   preserveAspectRatio="none"
//   style={{ backgroundColor: "whitesmoke" }}
// >
//   <polygon points="60,0 60,0 90,30 90,0" />
//   <polyline points="0,0 20,40 60,0" stroke="blue" fill="none"></polyline>
// </svg>
