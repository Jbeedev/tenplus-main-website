import React from "react";
import Button from "../components/Button";
// import Navbar from "../components/Navbar";
import ClientSlider from "../components/ClientSlider";
import designImage from "../data/designImage.png";
import laptopFlowers from "../data/laptopFlowers.jpg";
import blogImage1 from "../data/blogImage1.jpg";
import blogImage2 from "../data/blogImage2.jpg";
import blogImage3 from "../data/blogImage3.jpg";
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

import { SiAsana } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import ProspectiveClients from "../components/ProspectiveClients";

const Home = () => {
  return (
    <div className=" w-[100vw] overflow-x-hidden">
      <div className="text-center bg-[#01303F] md:mt-7 text-white py-[30px]">
        <p className="font-medium text-base leading-tight md:text-[10px] md:px-[39px] md:py-[20px]">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs →{" "}
          <a className="text-[#29ABE2]" href="https://portal.tenpluslabs.com">
            Use Coupon Code: FREE
          </a>
        </p>
      </div>
      {/* <div className="">
        <Navbar />
      </div> */}
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

      <ProspectiveClients />
    </div>
  );
};

export default Home;
