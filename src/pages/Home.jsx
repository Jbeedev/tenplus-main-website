import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Test from "../components/Test";
import designImage from "../data/designImage.png";
import laptopFlowers from "../data/laptopFlowers.jpg";
import blogImage1 from "../data/blogImage1.jpg";
import blogImage2 from "../data/blogImage2.jpg";
import blogImage3 from "../data/blogImage3.jpg";
import footerImage from "../data/footerImage.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaRegCheckSquare } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { VscMultipleWindows } from "react-icons/vsc";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdOutlineModelTraining } from "react-icons/md";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { MdOutlineLocationSearching } from "react-icons/md";
import { BiLowVision } from "react-icons/bi";
import { AiTwotoneHome } from "react-icons/ai";

import { BsTelephoneFill } from "react-icons/bs";
import { SiAsana } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { SiSlack } from "react-icons/si";

const Home = () => {
  return (
    <div className=" w-[100vw] overflow-x-hidden">
      <div className="">
        <Navbar />
      </div>

      <div className="mx-10 md:mx-5 flex justify-between flex-wrap">
        <div className="mt-[78px]">
          <h1 className="text-[48px] text-[#01303F] md:text-[36px] md:leading-tight  font-normal">
            <p className="py-0">Cutting edge digital</p>
            <p className="py-0">solutions within reach</p>
          </h1>
          <p
            className="text-[18px] md:text-[14px] font-normal my-5"
            style={{ color: "rgba(0, 0, 0, 0.5)" }}
          >
            Discover the fastest, most effective way to get <br /> experts from
            your needs
          </p>
          <Button
            text="Let's talk"
            bgColor="white"
            color="#000000"
            size="base"
            border="2px solid #000000"
            width="207px"
            icon={<BsArrowRightCircle />}
          />
        </div>
        <div>
          <img src={designImage} alt="" />
        </div>
      </div>
      {/* ///////////// */}
      <div className="flex md:block justify-around bg-slate-900 text-white p-20 md:px-5">
        <div className="border-r-2 md:border-b-2 md:border-r-0">
          <div className="mx-10 md:mx-0 md:pb-[30px] md:pt-2">
            <h1 className="text-[#29ABE2] text-5xl mb-5">400+</h1>
            <div className="text-base">
              <p>Clients served</p>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Vivamus magna justo, lacinia eget consectetur sed
              </p>
            </div>
          </div>
        </div>
        <div className="border-r-2 md:border-b-2 md:border-r-0">
          <div className="mx-10 md:mx-0 md:pb-[30px] md:pt-2">
            <h1 className="text-[#29ABE2] text-5xl mb-5">100+</h1>
            <div className="text-base">
              <p>Clients served</p>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Vivamus magna justo, lacinia eget consectetur sed
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="ml-10 md:mx-0 md:pt-2">
            <h1 className="text-[#29ABE2] text-5xl mb-5">80%</h1>
            <div className="text-base">
              <p>Loyal clients</p>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Vivamus magna justo, lacinia eget consectetur sed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:flex md:flex-wrap mt-24">
        <img className="w-[45%] md:w-[100%]" src={laptopFlowers} alt="" />
        <div className="bg-[#01303F] w-[100%] p-20 md:px-5">
          <p className="text-[#29ABE2] text-base font-normal">WHY CHOOSE US </p>
          <h2 className="text-white text-3xl md:text-[32px]">
            The best services at <br /> affordable rates
          </h2>
          <div
            className="flex md:block w-[100%] gap-10 wrap my-10"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            <div>
              <p className="mb-5 flex items-center">
                <span className="mr-5">
                  <FaRegCheckSquare />
                </span>
                Innovation and creativity
              </p>
              <p className="mb-5 flex items-center">
                <span className="mr-5">
                  <FaRegCheckSquare />
                </span>
                Affordable pricing
              </p>
              <p className="mb-5 flex items-center">
                <span className="mr-5">
                  <FaRegCheckSquare />
                </span>
                Expert delivery
              </p>
            </div>
            <div>
              <p className="mb-5 flex items-center">
                <span className="mr-5">
                  <FaRegCheckSquare />
                </span>
                Attention to Project Details
              </p>
              <p className="mb-5 flex items-center">
                <span className="mr-5">
                  <FaRegCheckSquare />
                </span>
                Plan for success
              </p>
              <p className="mb-5 flex items-center">
                <span className="mr-5">
                  <FaRegCheckSquare />
                </span>
                Delivery on schedule
              </p>
            </div>
          </div>
          <Button
            text="Learn more"
            bgColor="#29ABE2"
            color="white"
            size="base"
            width="207px"
            icon={<BiRightArrowAlt />}
          />
        </div>
      </div>

      <div className="mt-24 px-20 md:px-5">
        <h3 className="text-[#29ABE2] text-base font-normal mb-4">
          OUR SERVICES
        </h3>

        <div className="2xl:flex w-[100%] md:flex-wrap 2xl:gap-[134px]">
          <div className="w-[30%] md:w-[100%] ">
            <p className="text-[#01303F] text-5xl font-normal 2xl:mb-[30px]">
              Build Your Custom Software For Your Business
            </p>
            <p
              className="text-base 2xl:mb-[61px] md:text-[12px] md:leading-tight"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Button
              text="Learn more"
              bgColor="#29ABE2"
              color="white"
              size="base"
              width="207px"
              icon={<BiRightArrowAlt />}
            />
          </div>

          <div className="flex md:block w-[100%]">
            <div className="">
              <div className="border-b-2 md:border-b-0 pb-5 mb-4">
                <div className="mr-[101px]">
                  <h4 className="flex items-center md:text-base text-xl text-black">
                    <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                      <FaCode />
                    </span>
                    Software Development
                  </h4>
                  <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis,{" "}
                  </p>
                  <a
                    className="text-[#29ABE2] flex items-center text-xs uppercase"
                    href="//"
                  >
                    <span className="md:mr-[18px] text-2xl">
                      <BiRightArrowAlt />
                    </span>
                    Learn more
                  </a>
                </div>
              </div>
              <div className="border-b-2 md:border-b-0 pb-5 mb-4">
                <div className="mr-[101px]">
                  <h4 className="flex items-center md:text-base text-xl text-black">
                    <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                      <FaMobileAlt />
                    </span>
                    Software Development
                  </h4>
                  <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis,{" "}
                  </p>
                  <a
                    className="text-[#29ABE2] flex items-center text-xs uppercase"
                    href="//"
                  >
                    <span className="md:mr-[18px] text-2xl">
                      <BiRightArrowAlt />
                    </span>
                    Learn more
                  </a>
                </div>
              </div>
              <div className="">
                <div className="mr-[101px]">
                  <h4 className="flex items-center md:text-base text-xl text-black">
                    <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                      <VscMultipleWindows />
                    </span>
                    Software Development
                  </h4>
                  <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis,{" "}
                  </p>
                  <a
                    className="text-[#29ABE2] flex items-center text-xs uppercase"
                    href="//"
                  >
                    <span className="md:mr-[18px] text-2xl">
                      <BiRightArrowAlt />
                    </span>
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="border-b-2 md:border-b-0 pb-5 mb-4 md:mt-8">
                <div className="mr-[101px]">
                  <h4 className="flex items-center md:text-base text-xl text-black">
                    <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                      <AiOutlinePrinter />
                    </span>
                    Software Development
                  </h4>
                  <p className="my-[13.25px] md:mt-7 2xl:text-[12px] md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis,{" "}
                  </p>
                  <a
                    className="text-[#29ABE2] flex items-center text-xs uppercase"
                    href="//"
                  >
                    <span className="md:mr-[18px] text-2xl">
                      <BiRightArrowAlt />
                    </span>
                    Learn more
                  </a>
                </div>
              </div>
              <div className="border-b-2 md:border-b-0 pb-5 mb-4">
                <div className="mr-[101px]">
                  <h4 className="flex items-center md:text-base text-xl text-black">
                    <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                      <MdOutlineModelTraining />
                    </span>
                    Software Development
                  </h4>
                  <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis,{" "}
                  </p>
                  <a
                    className="text-[#29ABE2] flex items-center text-xs uppercase"
                    href="//"
                  >
                    <span className="md:mr-[18px] text-2xl">
                      <BiRightArrowAlt />
                    </span>
                    Learn more
                  </a>
                </div>
              </div>
              <div className="">
                <div className="mr-[101px] md:mr-0">
                  <h4 className="flex items-center md:text-base text-xl text-black">
                    <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                      <MdOutlineRealEstateAgent />
                    </span>
                    Software Development
                  </h4>
                  <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis,{" "}
                  </p>
                  <a
                    className="text-[#29ABE2] flex items-center text-xs uppercase"
                    href="//"
                  >
                    <span className="md:mr-[18px] text-2xl">
                      <BiRightArrowAlt />
                    </span>
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:block mt-[113px]">
        <div className="bg-[#01303F] py-[136px] px-12 md:px-5">
          <h3 className="mb-5 text-[#29ABE2] flex items-center text-4xl">
            <span
              className="mr-5 rounded-full md:text-sm md:p-[7px] "
              style={{ backgroundColor: "rgba(41, 171, 226, 0.1)" }}
            >
              <MdOutlineLocationSearching />
            </span>
            Our Mission
          </h3>
          <div className="text-base mb-5 text-white">
            <p>
              To solve challenging performance problems for businesses and
              organizations using reliable digital strategies.
            </p>
            <p>
              To Promote African Development by encouraging Business Sector and
              Entrepreneurship in Africa.
            </p>
          </div>
          <Button
            text="Learn more"
            bgColor="#01303F"
            color="#ffffff"
            size="base"
            border="2px solid #ffffff"
            width="207px"
          />
        </div>
        <div className="bg-[#29ABE2] py-[136px] px-12 md:px-5">
          <h3 className="mb-5 text-black text-4xl flex items-center">
            <span
              className="mr-5 rounded-full md:text-sm md:p-[7px] "
              style={{ backgroundColor: "rgba(1, 48, 63, 0.1)" }}
            >
              <BiLowVision />
            </span>
            Our Vission
          </h3>
          <div className="text-base mb-5 text-white">
            <p>
              To solve challenging performance problems for businesses and
              organizations using reliable digital strategies.
            </p>
            <p>
              To Promote African Development by encouraging Business Sector and
              Entrepreneurship in Africa.
            </p>
          </div>
          <Button
            text="Learn more"
            bgColor="#29ABE2"
            color="#ffffff"
            size="base"
            border="2px solid #ffffff"
            width="207px"
            icon={<BiRightArrowAlt />}
          />
        </div>
      </div>

      <div
        className="pt-[111px] pb-[58.5px] "
        style={{ backgroundColor: "rgba(41, 171, 226, 0.1)" }}
      >
        <div className="mx-10  md:mx-5">
          <h1 className="text-center text-[#29ABE2] text-base mb-2.5">
            FROM OUR BLOG
          </h1>
          <h3 className="text-center text-4xl mb-[31px]">News And Article</h3>
          <div className="flex md:block gap-5 flex-wrap">
            <div className="w-[400px] md:w-[100%] md:mb-[31px]">
              <img className="rounded-[10px]" src={blogImage1} alt="blog" />
              <p className="text-xl mt-[31px] font-normal md:text-[12px] mb-[18.5]">
                What Are Design Systems And How Building a mail chimp
              </p>
              <a
                className="text-[#29ABE2] mt-[13px] flex items-center uppercase text-xs"
                href="//"
              >
                <span className="md:mr-[18px] text-2xl">
                  <BiRightArrowAlt />
                </span>
                Read more
              </a>
            </div>
            <div className="w-[400px] md:w-[100%] md:mb-[31px]">
              <img className="rounded-[10px]" src={blogImage2} alt="blog" />
              <p className="text-xl mt-[31px] font-normal md:text-[12px]  mb-[18.5]">
                What Are Design Systems And How Building Frontend Architectures
              </p>
              <a
                className="text-[#29ABE2] mt-[13px] flex items-center uppercase text-xs"
                href="//"
              >
                <span className="md:mr-[18px] text-2xl">
                  <BiRightArrowAlt />
                </span>
                Read more
              </a>
            </div>
            <div className="w-[400px] md:w-[100%] md:mb-[31px]">
              <img className="rounded-[10px]" src={blogImage3} alt="blog" />
              <p className="text-xl mt-[31px] font-normal md:text-[12px] mb-[18.5]">
                What Are Design Systems And How Building Business
              </p>
              <a
                className="text-[#29ABE2] mt-[13px] flex items-center uppercase text-xs"
                href="//"
              >
                <span className="md:mr-[18px] text-2xl">
                  <BiRightArrowAlt />
                </span>
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] pt-[164px] pb-[116px] bg-[#01303F]">
        <div className="ml-[50px] md:mx-[21px] md:block flex gap-[113px]">
          <div className="bg-white rounded-[10px] pr-[58px] md:pr-[33px] pl-[57px] md:pl-[33px]">
            <h1 className="text-[32px] pt-8 pb-[37px]">
              Have a project in mind?
            </h1>
            <div className="mb-[39px]">
              <input
                className="mb-[30px] w-[100%] md:w-[100%] h-[56px] rounded-[5px] pl-7"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                type="text"
                placeholder="Your Name"
              />
              <input
                className="mb-[30px] w-[100%] md:w-[100%] h-[56px] rounded-[5px] pl-7"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                type="text"
                placeholder="Your Email"
              />
              <select
                className="mb-[30px] w-[100%] md:w-[100%] bg-white h-[56px] rounded-[5px] pl-7"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                name="pets"
                id="pet-select"
              >
                <option value="">Select Services</option>
                <option value="web">Web Development</option>
                <option value="mobileApp">Mobile App Development</option>
                <option value="graphics">Graphics Design</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="digMkt">Digital Marketing </option>
                <option value="projjectMgt">Project Management</option>
                <option value="printingService">Printing Services</option>
                <option value="videoEditing">Video Editing</option>
                <option value="cuberSecurity"> Cybersecurity</option>
                <option value="blockChain">Blockchain</option>
                <option value="computerAcessories">
                  Computers and Accessories
                </option>
                <option value="itTraining">IT Training</option>
              </select>
              <textarea
                className="w-[100%] md:w-[100%] rounded-[5px]"
                rows="4"
                cols="50"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                type="text"
              />
            </div>
            <div className="mb-[35px] md:pb-[46px]">
              <Button text="Submit" bgColor="#29ABE2" color="#ffffff" />
            </div>
          </div>
          <div className="w-[55%] md:w-[100%] mt-10 pr-2">
            <h3 className="text-[#29ABE2] text-base mb-[11px]">
              OUR HAPPY CLIENTS
            </h3>
            <h1 className="text-[32px] md:text-[20px] text-white mb-[50px]">
              What Clients Say About Us
            </h1>
            <Test />
            <h1 className="font-normal mt-[82px] md:text-[10px] md:tracking-widest text-base text-[#29ABE2]">
              OUR TRUSTED CLIENTS
            </h1>
            <div className="flex gap-7 items-center mt-[25px]">
              <p className="flex items-center gap-1 text-white font-medium text-xl">
                <span className="text-[#F06A6A]">
                  <SiAsana />
                </span>{" "}
                asana
              </p>
              <p className="flex items-center gap-1 text-black font-medium text-xl">
                <span className="text-white">
                  <SiTiktok />
                </span>
                Tiktok
              </p>
              <p className="text-xl">
                <span className="text-white">
                  <SiGmail />
                </span>
              </p>
              <p className="text-xl">
                <span className="text-[#fc5151]">
                  <SiSlack />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-medium text-base text-center py-[30px] md:py-5 md:px-[39px] md:text-[10px]">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs →{" "}
          <a href="/#" className="text-[#29ABE2]">
            Use Coupon Code: FREE
          </a>
        </p>
      </div>

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
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <div className="mb-[177px] md:hidde border w-[100%] border-[gray] flex justify-between">
                <input
                  className="bg-[#01303F] h-[55px] w-[100%]  border-solid border-0 border-[gray] p-0 placeholder:pl-7"
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
              <li>Portal</li>
              <li>Blog</li>
              <li>Terms And Conditions</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
              <li>Contact Us</li>
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
  );
};

export default Home;
