import React from "react";

const RequestQuote = () => {
  return (
    <div className="">
      <div className=" bg-[#01303F] text-center text-white h-[748px] ">
        <h4 className="text-[16px] font-medium mb-[95px] pt-[30px] ">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs → <span className="text-[#29ABE2]">Use Coupon Code: FREE</span>
        </h4>
        <div>
          <h1 className="text-5xl mb-[18px]">Request a quote</h1>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className="bg-white h-[532px]"></div>
      <div className="absolute top-[466px]  rounded-lg mx-[277px] drop-shadow-lg screen bg-white">
        <div className=" w-[100%] ">
          <div className="my-[37px] mx-[177px] flex gap-4 items-center justify-between">
            <div className="flex gap-5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#29ABE2"
                  fill-opacity="0.1"
                />
              </svg>
              Personal Information
            </div>
            <svg
              width="36"
              height="1"
              viewBox="0 0 36 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.5"
                x2="36"
                y2="0.5"
                stroke="black"
                stroke-dasharray="2 2"
              />
            </svg>

            <div className="flex gap-5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#29ABE2"
                  fill-opacity="0.1"
                />
              </svg>
              Business Payment
            </div>
          </div>
          <hr />
          <div className=" mx-[78px] mt-10 flex wrap gap-[50px] justify-between">
            <div className="w-[50%] flex flex-col mb-10">
              <label className="mb-[17px] text-base " htmlFor="">
                First Name
              </label>
              <input className="border rounded" type="text" />
            </div>
            <div className="w-[50%] flex flex-col mb-10">
              <label className="mb-[17px] text-base" htmlFor="">
                Last Name
              </label>
              <input className="border rounded" type="text" />
            </div>
          </div>
          <div className=" mx-[78px] flex wrap gap-[50px] justify-between">
            <div className="w-[50%] flex flex-col mb-10">
              <label className="mb-[17px] text-base" htmlFor="">
                First Name
              </label>
              <input className="border rounded" type="text" />
            </div>
            <div className="w-[50%] flex flex-col mb-10">
              <label className="mb-[17px] text-base" htmlFor="">
                Last Name
              </label>
              <input className="border rounded" type="text" />
            </div>
          </div>
          <div className=" mx-[78px] flex wrap gap-[50px] justify-between">
            <div className="w-[100%] flex flex-col mb-10">
              <label className="mb-[17px] text-base" htmlFor="">
                Address
              </label>
              <input className="border rounded" type="text" />
            </div>
          </div>
          <div className=" mx-[78px] flex wrap gap-[50px] justify-between">
            <div className="w-[50%] flex flex-col mb-10">
              <label className="mb-[17px] text-base" htmlFor="">
                Country
              </label>
              <input className="border rounded" type="text" />
            </div>
            <div className="w-[50%] flex flex-col mb-10">
              <label className="mb-[17px] text-base" htmlFor="">
                State
              </label>
              <input className="border rounded" type="text" />
            </div>
          </div>
          <div className=" mx-[78px]">
            <div className="w-[100%] mb-[72px]">
              <button className="text-white flex rounded p-[10px] text-center items-center gap-3 justify-center w-[100%] bg-[#29AbE2]">
                Next{" "}
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
          </div>
          {/* <button className="mx-[78px] flex items-center justify-center w-[100%] bg-[#29AbE2]">
            Next{" "}
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.45831L6.54167 6.99998L1 12.5416"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
