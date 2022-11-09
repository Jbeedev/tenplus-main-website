import React from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFacebook, FaTelegram } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import { SiTiktok } from 'react-icons/si'
import { Link } from 'react-router-dom'
import footerImage from "../data/footerImage.png";


const Footer = () => {
  return (
    <div>
        <div className="bg-[#01303F] pt-[71px]">
        <div className="mx-10 md:mx-5 grid gap-[47px] md:grid-cols-1 grid-cols-5 ">
          <div className="col-span-2 md:col-span-1 ">
            <div>
              <img
                className="w-[204px] md:w-[154px]"
                src={footerImage}
                alt="footer logo"
              />
              <p className="my-[32px] text-white font-light text-base  ">
              Get updates and ideas about tech in your inbox.
              </p>
              <div className="mb-[177px] md:hidde border w-[100%] pl-5 border-[gray] flex justify-between">
                <input
                  className="bg-[#01303F] h-[55px] w-[100%]  border-solid border-0 border-[gray] p-0"
                  placeholder="Subscribe"
                  type="text"
                />
                <button className="bg-[#29ABE2] h-[56px] w-[65px] text-[#29ABE2] p-0 border-none">
                  .
                </button>
              </div>
            </div>
          </div>

          <div className="text-white">
            <h1 className="mb-[30px] text-[20px] font-normal">SERVICES</h1>
            <ul
              className="text-base font-light"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Graphics Design</li>
              <li>Digital Marketing</li>
              <li>Artificial Intelligence</li>
              <li>Project Management</li>
              <li>Printing Services</li>
              <li>Video Editing</li>
              <li>Cybersecurity</li>
              <li>Blockchain</li>
              <li>Computers and Accessories</li>
              <li>IT Training</li>
            </ul>
          </div>
          <div className="text-white md:mt-12">
            <h1 className="mb-[30px] text-[20px] font-normal">USEFUL LINKS</h1>
            <ul
              className="text-base font-light"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              Portfolio
              <li to="">Portal</li>
              <li to="">Blog</li>
              <li to="/terms">Terms And Conditions</li>
              <li to="">Privacy Policy</li>
              <li to="">About Us</li>
              <li to="">Contact Us</li>
            </ul>
          </div>
          <div className="text-white md:mt-12">
            <h1 className="mb-[30px] text-[20px] font-normal">CONTACT</h1>
            <ul
              className="text-base font-light"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              <li className="flex items-center mb-[36px] ">
                <span className="text-2xl mr-4">
                  <AiTwotoneHome />
                </span>
                No. 29, University Road, Tanke, Ilorin, Kwara State.
              </li>
              <li className="flex items-center mb-[39px]">
                <span className="text-2xl mr-4">
                  <AiTwotoneHome />
                </span>{" "}
                4th floor, Church-Gate Tower C, Constitution Avenue, Abuja
              </li>
              <li className="flex items-center mb-[43px]">
                <span className="text-2xl mr-4">
                  <BsTelephoneFill />
                </span>
                info@tenpluslabs.com
              </li>
              <li className="flex items-center mb-[43px]">
                <span className="text-2xl mr-4">
                  <BsTelephoneFill />
                </span>
                08139251969
              </li>
              <li className="flex items-center ">
                <span className="text-2xl mr-4">
                  <BsTelephoneFill />
                </span>
                07051146553
              </li>
            </ul>
          </div>
        </div>
        <div className="md:mt-[114px] mx-10 pb-6">
          <div className="flex items-center text-white mb-[26.5px]">
            <div className="mr-[23px]">Follow us:</div>
            <div className="mr-3">
              <FaFacebook />
            </div>
            <div className="mr-3">
              <IoLogoTwitter />
            </div>
            <div className="mr-3">
              <IoLogoInstagram />
            </div>
            <div className="mr-3">
              <FaTelegram />
            </div>
            <div className="mr-3">
              <ImLinkedin />
            </div>
            <div>
              <SiTiktok />
            </div>
          </div>
          <p className="text-white text-basee font-light mb-[64px]">
            © Copyright 2022 TenPlus Digital Labs
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer