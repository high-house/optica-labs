import React from "react";

function BG({ width, height, position }) {
  return (
    <div
      className="absolute bg-[#001D1B] blur-2xl"
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        top: `${position[0]}%`,
        left: `${position[1]}%`,
      }}
    ></div>
  );
}

export default BG;
