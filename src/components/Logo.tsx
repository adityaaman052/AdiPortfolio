import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
      <title>Logo</title>
      {/* Outer Circle Shape (Increased size) */}
      <circle cx="75" cy="75" r="80" fill="#000" stroke="#fff" strokeWidth="3" />
      {/* Text "ADI" inside the circle */}
      <text
        x="75"
        y="85"
        textAnchor="middle"
        fontSize="50"
        fontWeight="bold"
        fill="#fff"
        fontFamily="Arial, sans-serif"
      >
        ADI
      </text>
    </svg>
  );
}

export default Logo;
