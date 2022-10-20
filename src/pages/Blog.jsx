import React from "react";
import { BsSearch } from "react-icons/bs";
import blogImg1 from "../data/blog-image1.jpg";
import blogImg2 from "../data/blog-image2.jpg";
import blogImg3 from "../data/blog-image3.jpg";
import blogImg4 from "../data/blog-image4.jpg";
import blogImg5 from "../data/blog-image5.jpg";
import blogImg6 from "../data/blog-image6.jpg";

const Blog = () => {
  return (
    <div>
      <div className="px-[50px] text-center bg-[#01303F] md:mt-7 text-white py-[30px]">
        <p className="font-medium text-base leading-tight md:text-[10px] md:px-[39px] md:py-[20px]">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs →{" "}
          <a className="text-[#29ABE2]" href="https://portal.tenpluslabs.com">
            Use Coupon Code: FREE
          </a>
        </p>
        <div className="mx-[244px] mt-[90px] mb-[120px]">
          <p className="text-[#29ABE2] text-[14px] mb-[11px]">OUR BLOG</p>
          <h1 className="text-5xl ">Welcome To TenPlus Blog</h1>
          <p
            className="text-base mt-[11px] "
            style={{ color: "rgba(255, 255, 255, 0.5)" }}
          >
            Here you can read articles and get more information about
            Tech-related matters and lots more
          </p>
        </div>
      </div>
      <div className="bg-white pb-[178px] ">
        <div className="  w-screen ">
          <div className="mt-[50px]">
            <hr />
          </div>
          <div className=" mx-[50px] flex justify-between py-[15px]">
            <ul className="flex justify-between">
              <li
                className="py-[10px] px-[23px] rounded-[50px] "
                style={{ backgroundColor: "rgba(41, 171, 226, 0.1)" }}
              >
                All
              </li>
              <li className="py-[10px] px-[23px] rounded-[50px] ">
                Web development
              </li>
              <li className="py-[10px] px-[23px] rounded-[50px] ">Marketing</li>
              <li className="py-[10px] px-[23px] rounded-[50px] ">
                Cryptography
              </li>
              <li className="py-[10px] px-[23px] rounded-[50px] ">
                Data Science
              </li>
            </ul>
            <div
              className="flex items-center w-[45%] rounded-md pl-11 py-3 "
              style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
            >
              <span>
                <BsSearch />
              </span>
              <input
                className="border-0 outline-none bg-transparent ml-3 "
                type="text"
                placeholder="Search blog"
              />
            </div>
          </div>
          <hr />
        </div>

        <div className="mx-[50px] flex gap-[52px] mt-[50px] ">
          <div className="">
            <img
              className="rounded-[10px] object-cover h-[437px] w-[855px]"
              src={blogImg1}
              alt=""
            />
          </div>
          <div className="grow-[1] py-[39px] px-[40px] rounded-[10px] shadow-xl border">
            <h1>Recent Post</h1>
            <hr className="mb-[42px] mt-[21px] " />
            <div className="flex gap-[35px] items-center mb-[50px]">
              <img
                className=" w-[152px] h-[91px] rounded-md "
                src={blogImg4}
                alt=""
              />
              <div className=" flex flex-col gap-2">
                <p className=" text-[#29ABE2] text-xs font-medium ">
                  5 months ago
                </p>
                <p className="uppercase  text-xs font-normal ">
                  KNOW YOUR COLOURS
                </p>
              </div>
            </div>
            <div className="flex gap-[35px] items-center mb-[50px]">
              <img
                className=" w-[152px] h-[91px] rounded-md "
                src={blogImg5}
                alt=""
              />
              <div className=" flex flex-col gap-2">
                <p className=" text-[#29ABE2] text-xs font-medium ">
                  5 months ago
                </p>
                <p className="uppercase  text-xs font-normal ">
                  KNOW YOUR COLOURS
                </p>
              </div>
            </div>
            <div className="flex gap-[35px] items-center">
              <img
                className=" w-[152px] h-[91px] rounded-md "
                src={blogImg6}
                alt=""
              />
              <div className=" flex flex-col gap-2">
                <p className=" text-[#29ABE2] text-xs font-medium ">
                  5 months ago
                </p>
                <p className="uppercase  text-xs font-normal ">
                  KNOW YOUR COLOURS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-[50px] gap-[52px]">
          <div className="grow-[2]">
            <p
              className="inline-block mb-6 rounded-[50px] py-[10px] px-[30px] "
              style={{ backgroundColor: "rgba(41, 171, 226, 0.1)" }}
            >
              Featured
            </p>
            <p className="text-base">
              <span className="text-[#29ABE2]">Marketing,</span> Aug 3, 2022
            </p>
            <h1 className=" font-bold text-4xl mt-[5px] ">
              Inclusive design and why it is important{" "}
            </h1>
            <p
              className="mb-[33px] mt-[25px] text-base font-normal "
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              Today, we announced the expansion of our services in Australia
              detailing how inclusivity is making it easier and safer than ever
              for Aussies to access the crypto economy.
            </p>
            <p className=" text-xs text-[#29ABE2] mb-[102px] ">LEARN MORE</p>
            <img
              className="rounded-[10px] object-cover h-[437px] w-[855px]"
              src={blogImg2}
              alt=""
            />
          </div>
          <div className="mt-[70px] max-h-[304px] grow-[1] py-[39px] px-[40px] rounded-[10px] shadow-xl border">
            <h1>Popular Tags</h1>
            <hr className="mb-[42px] mt-[21px] " />
            <div className=" flex flex-wrap gap-[20px] ">
              <p className="border py-[5px] px-[10px]">Entertainment</p>
              <p className="border py-[5px] px-[10px]">Freelancing</p>
              <p className="border py-[5px] px-[10px]">Traiming</p>
              <p className="border py-[5px] px-[10px]">HTML</p>
            </div>
          </div>
        </div>
        <div className="mx-[50px] ">
          <p
            className="inline-block mt-[50px] mb-6 rounded-[50px] py-[10px] px-[30px] "
            style={{ backgroundColor: "rgba(41, 171, 226, 0.1)" }}
          >
            Featured
          </p>
          <p className="text-base">
            <span className="text-[#29ABE2]">Marketing,</span> Aug 3, 2022
          </p>
          <h1 className=" font-bold text-4xl mt-[5px] ">
            Lines and Typography{" "}
          </h1>
          <p
            className="mb-[33px] mt-[25px] text-base font-normal "
            style={{ color: "rgba(0, 0, 0, 0.5)" }}
          >
            Today, we announced the expansion of our services in Australia
            detailing how inclusivity is making it easier and safer than ever
            for Aussies to access the crypto economy.
          </p>
          <p className=" text-xs text-[#29ABE2] mb-[102px] ">LEARN MORE</p>
          <div>
            <h1 className="mb-[46px] text-[#01303F] text-2xl font-semibold ">
              Recent
            </h1>
            <div className="flex gap-[30px]">
              <div>
                <img className=" rounded-xl " src={blogImg3} alt="" />
                <p className="mt-[26px] text-[14px]">
                  <span className="text-[#29ABE2]">Product,</span> Jun 24, 2022
                </p>
                <p className=" texxt-[16px] font-semibold ">
                  Inclusive design and why it is important{" "}
                </p>
              </div>
              <div>
                <img className=" rounded-xl " src={blogImg3} alt="" />
                <p className="mt-[26px] text-[14px]">
                  <span className="text-[#29ABE2]">Product,</span> Jun 24, 2022
                </p>
                <p className=" texxt-[16px] font-semibold ">
                  Inclusive design and why it is important{" "}
                </p>
              </div>
              <div>
                <img className=" rounded-xl " src={blogImg3} alt="" />
                <p className="mt-[26px] text-[14px]">
                  <span className="text-[#29ABE2]">Product,</span> Jun 24, 2022
                </p>
                <p className=" texxt-[16px] font-semibold ">
                  Inclusive design and why it is important{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
