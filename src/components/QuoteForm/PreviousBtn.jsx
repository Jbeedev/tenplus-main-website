import React from "react";

const PreviousBtn = (props) => {
  return (
    <div>
      <button {...props} className="text-white flex rounded p-[10px] text-center items-center gap-3 justify-center w-[100%] bg-[#29AbE2]">
        Previous{" "}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.45825 10H15.5416"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 4.45831L15.5417 9.99998L10 15.5416"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default PreviousBtn;
