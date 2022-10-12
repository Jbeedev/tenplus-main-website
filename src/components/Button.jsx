import React from "react";

const Button = ({ text, bgColor, color, size, border, width, icon }) => {
  return (
    <div
      className={`p-2.5 rounded-sm text-center text-${size}`}
      style={{ backgroundColor: bgColor, color, border, width, }}
    >
      <button className="flex items-center justify-center font-semibold w-[100%]">{text}<span className="ml-3 font-semibold">{icon}</span></button>
    </div>
  );
};

export default Button;
