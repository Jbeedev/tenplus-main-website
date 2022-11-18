import React, { useState } from "react";
import { FaIdCardAlt, FaUser } from "react-icons/fa";
import CurrentBtn from "./QuoteForm/CurrentBtn";
import CurrentForm from "./QuoteForm/CurrentForm";
import NextForm from "./QuoteForm/NextForm";
import PreviousBtn from "./QuoteForm/PreviousBtn";



const RequestQuote = () => {
  const [currentform, setCurrentForm] = useState(0);
  const forms = [
    <React.Fragment key={1}><CurrentForm /></React.Fragment>,
    <React.Fragment key={2}><NextForm /></React.Fragment>,
  ]
  
  const handleNext = () => {
    if(currentform === forms.length - 1){
      return;
    }
    setCurrentForm(prev => prev+1);
  }

  const handlePreviuos = () => {
    if(currentform === 0){
      return;
    }
    setCurrentForm(prev => prev-1)
  }

  return (
    <div className="">
      <div className="relativ">
        <div className=" bg-[#01303F] text-center text-white h-[748px] py-[30px]">
        <p className="font-medium text-base leading-tight md:text-[10px] md:px-[39px] md:py-[20px]">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs →{" "}
          <a className="text-[#29ABE2]" href="https://portal.tenpluslabs.com">
            Use Coupon Code: FREE
          </a>
        </p>
          <div className="mt-[90px]">
            <h1 className="text-5xl mb-[18px]">Request a quote</h1>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          
        </div>
        <div  className=" -mt-60 top-[466p] md:top-[570px] rounded-lg md:mx-5 mx-[277px] drop-shadow-lg bg-white">
          <div className=" w-[100%] ">
            <div className="my-[37px] mx-[160px] md:mx-0 flex md:flex-col gap-4 justify-center items-center">
              <div className="flex items-center gap-3">
                <i
                  className="h-[32px] w-[32px] rounded-full text-[#29ABE2] flex items-center justify-center "
                  style={{ backgroundColor: "rgba(41, 171, 226, 0.1)" }}
                >
                  <FaUser />
                </i>
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

              <div className="flex items-center gap-3">
                <i
                  className="h-[32px] w-[32px] rounded-full text-[#29ABE2] flex items-center justify-center "
                  style={{ backgroundColor: "rgba(41, 171, 226, 0.1)" }}
                >
                  <FaIdCardAlt />
                </i>
                Business Payment
              </div>
            </div>
            <hr />

            <div>{forms[currentform]}</div>
            <div className=" mx-[78px] flex flex-wrap gap-[50px] justify-between"></div>
            <div className=" mx-[78px]">
              <div className="w-[100%] mb-[72px] pb-5">
                {currentform < 1 ? <CurrentBtn onClick= {handleNext}  /> : <PreviousBtn onClick={handlePreviuos} />}

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white min-h-[70]"></div> */}
    </div>
  );
};

export default RequestQuote;
