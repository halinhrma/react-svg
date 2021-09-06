import React, { useEffect, useState, useCallback } from "react";
import "./index.css";

export default function Clock() {
  const radius = 80; //bán kính
  const sCircle = Math.PI * (radius * 2); //diện tích
  const PART = 8; //số mảnh đường tròn
  const strokeWidth = 15;
  const [state, setState] = useState(sCircle);

  const onCirce = useCallback(
    (val) => {
      const pct = ((100 - val) / 100) * sCircle;
      return pct;
    },
    [sCircle]
  );

  useEffect(() => {
    const temp = 1;
    const s = (100 / PART) * temp;
    const data = onCirce(s);
    setState(data);
  }, [onCirce]);

  function Line() {
    const n = PART;
    return (
      <>
        {new Array(n).fill(0).map((i, index) => (
          <line
            key={"line" + index}
            x1="100"
            y1="0"
            x2="100"
            y2="28"
            stroke="#fff"
            transform={"rotate(" + (index * 360) / n + " 100 100)"}
          ></line>
        ))}
      </>
    );
  }

  function PathDraw() {
    const n = PART;
    const selects = [0, 2, 4, 6, 8];
    const color = (index) => {
      if (selects.indexOf(index) > -1) return "green";
      return "rgba(0,0,0,0.3)";
    };
    const rotate = (i) => {
      const temp = (i * 360) / n - 90;
      return `rotate(${temp} 100 100)`;
    };
    return (
      <>
        {new Array(n).fill(0).map((i, index) => (
          <circle
            key={index}
            id="bar"
            stroke={color(index)}
            fill="transparent"
            cx="100"
            cy="100"
            r={radius}
            strokeDasharray={sCircle}
            strokeDashoffset={state}
            transform={rotate(index)}
            strokeWidth={strokeWidth}
          />
        ))}
      </>
    );
  }

  return (
    <svg width="100%" height="100%" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#05a" />
          <stop offset="100%" stopColor="#0a5" />
        </linearGradient>
      </defs>

      <g>
        <circle
          id="circle1"
          stroke="blue"
          strokeWidth={strokeWidth}
          fill="transparent"
          cx="100"
          cy="100"
          r={radius}
        />
      </g>
      <PathDraw />
      <Line />
    </svg>
  );
}

// function Path(n) {
//   const selects = [1, 4, 5, 6, 7, 8, 9, 12, 24, 22, 32];
//   const color = (index) => {
//     if (selects.indexOf(index) > -1) return "green";
//     return "rgba(0,0,0,0.3)";
//   };

//   return (
//     <>
//       {new Array(n).fill(0).map((i, index) => (
//         <path
//           key={"path" + index}
//           d="M 100 20 L 100.5 32.5 Q 107 33 108.5 33 L 110 21.2 Q 108 20.5 100.5 20.5"
//           fill={color(index)}
//           transform={"rotate(" + (index * 360) / n + " 100 100)"}
//         />
//       ))}
//     </>
//   );
// }
