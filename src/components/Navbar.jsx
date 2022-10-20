import React from "react";
import "./Nav.css";
import TenPlusLogo from "../data/TenPlus logo.png";
import Button from "./Button";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const [active, setActive] = useState('home');

  // const ActiveNavbar = (val) => {
  //   setActive(val);
  // }

  const activeLink = 'underline underline-offset-8 decoration-4 decoration-[#01303F]';
  const activeLinkSolution = 'underline underline-offset-8 decoration-4 decoration-[#01303F] flex items-center';

  return (
    <div className="">
      <div className="md:block 2xl:items-center mt-[30px] 2xl:flex mx-5 2xl:justify-between ">
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
          className={`md:bg-white md:rounded md:py-5 md:border border-black md:text-black md:mr-0 2xl:mr-[373px] ${
            isOpen ? "md:block" : "md:hidden"
          }`}
        >
          <div className="md:flex md:flex-col md:pl-[50px] 2xl:flex 2xl:text-[16px] 2xl:gap-[27px]">
            <NavLink to="/home" className={({isActive}) => isActive ? activeLink : '' }>Home</NavLink>
            <NavLink to="/solutions" className={({isActive}) => isActive ? activeLinkSolution : 'flex items-center' }>Solutions <span className="text-2xl"><RiArrowDropDownLine /></span></NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? activeLink : '' } >Blog</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? activeLink : '' }>About us</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? activeLink : '' }>Contact us</NavLink>
          </div>
        </div>
        <div className="md:mt-7 md:w-[100%] 2xl:w-[207px] 2xl:h-[56px] ">
          <NavLink to="quote">
            <Button
              text="GET QUOTATION"
              bgColor="#29ABE2"
              color="white"
              size="base"
              width="100%"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
