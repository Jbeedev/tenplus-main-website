import React from "react";
import "./Nav.css";
import TenPlusLogo from "../data/TenPlus logo.png";
import Button from "./Button";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="md:block 2xl:items-center 2xl:flex mx-5 2xl:justify-between ">
        <div className="md:flex md:justify-between md:items-center md:w-[100%]">
          <img
            className="md:w-[112px] md:h-[30px] 2xl:w-[161px] 2xl:h-[43px]"
            src={TenPlusLogo}
            alt="tenplus logo"
          />
          <div className="md:block 2xl:hidden">
            <Hamburger
              color="black"
              size="40"
              rounded
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
        </div>
        <div
          className={`md:bg-[#29ABE2] md:rounded md:py-5 md:text-white md:mr-0 2xl:mr-[373px] ${
            isOpen ? "md:block" : "md:hidden"
          }`}
        >
          <ul className="md:flex md:flex-col md:items-center 2xl:flex 2xl:text-[16px] 2xl:gap-[27px]">
            <li>Home</li>
            <li>Solutions</li>
            <l1>Portfolio</l1>
            <l1>Blog</l1>
            <l1>About us</l1>
            <l1>Contact us</l1>
          </ul>
        </div>
        <div className="md:mt-7 md:w-[100%] 2xl:w-[207px] 2xl:h-[56px] ">
          <Button
            text="GET QUOTATION"
            bgColor="#29ABE2"
            color="white"
            size="base"
            width="100%"
          />
        </div>
      </div>
      {/* <div className="h-20 items-center md:relative mb-7 mx-10 md:mx-5 md:mt-[52px] md:block flex justify-between flex-wrap">
        <div className="flex md:block gap-20">
          <div className="w-40 md:w-[112px]">
            <img src={TenPlusLogo} alt="tenplus logo" />
          </div>
          <div className={`flex gap-10 text-8 ${isOpen? 'md:block mb-10 flex-col bg-slate-400 md:z-40 -[100%] px-8 ' : 'hidden'} `}>
            <ul>
              <li>Home</li>
              <li>Solutions</li>
              <l1>Portfolio</l1>
              <l1>Blog</l1>
              <l1>About us</l1>
              <l1>Blog us</l1>
            </ul>
          </div>
        </div>
        <div className="md:mt-[28px]">
        <Button
          text="GET QUOTATION"
          bgColor="#29ABE2"
          color="white"
          size="base"
          width="100%"
        />
        </div>
        
        <div className={`mobile-nav md:absolute md:top-[42px] hidden lg:block  md:right-5 `}>
          <Hamburger
            color="black"
            size="40"
            rounded
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
      </div>
      <div className="text-center bg-[#01303F] md:mt-[56px] text-white py-[30px]">
        <p className="font-medium text-base leading-tight md:text-[10px] md:px-[39px] md:py-[20px]">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs →{" "}
          <a className="text-[#29ABE2]" href="https://portal.tenpluslabs.com">
            Use Coupon Code: FREE
          </a>
        </p>
      </div> */}

      <div className="text-center bg-[#01303F] md:mt-7 text-white py-[30px]">
        <p className="font-medium text-base leading-tight md:text-[10px] md:px-[39px] md:py-[20px]">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs →{" "}
          <a className="text-[#29ABE2]" href="https://portal.tenpluslabs.com">
            Use Coupon Code: FREE
          </a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
