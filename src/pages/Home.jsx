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

import { MdOutlineLocationSearching } from "react-icons/md";
import { BiLowVision } from "react-icons/bi";

import { SiAsana } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import ProspectiveClients from "../components/ProspectiveClients";
import Partners from "../components/Partners";

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

      <div className="mx-10 md:mx-5 flex flex-grow justify-between flex-wrap">
        <div className="mt-[78px] basis-7/12 flex-grow">
          <h1 className="text-[48px] text-[#01303F] md:text-[36px] md:leading-tight  font-normal">
            <p className="py-0 ">Cutting edge solutions within reach</p>
            {/* <p className="py-0">solutions within reach</p> */}
          </h1>
          <p
            className="text-[18px] md:text-[14px] font-normal my-5"
            style={{ color: "rgba(0, 0, 0, 0.5)" }}
          >
            We are constantly driven by passion and readiness to create custom
            solutions to help our clients achieve their business and corporate
            objectives in a sustainable and profitable way.
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
        <div className="basis-5/12 flex-grow">
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
                Our team of tech experts have helped hundreds of businesses
                achieve success online.
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
                We are committed to providing result driven and well tailored
                solutions to our clients
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
                The high quality solutions we provide keeps our clients
                patronizing over and over. Seeing our clients win is what gets
                us excited.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-24">
        <div className="basis-5/12 flex-grow">
          <img className="h-full" src={laptopFlowers} alt="" />
        </div>

        <div className="bg-[#01303F] flex-grow basis-7/12 p-20 md:px-5">
          <p className="text-[#29ABE2] text-base font-normal">WHY CHOOSE US </p>
          <h2 className="text-white text-3xl md:text-[32px]">
            Excellent services that help businesses succeed.
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
                Affordable price
              </p>
              <p className="mb-5 flex items-center">
                <span className="mr-5">
                  <FaRegCheckSquare />
                </span>
                Attention To Project Details
              </p>
            </div>
            <div>
              <p className="mb-5 flex items-center">
                <span className="mr-5">
                  <FaRegCheckSquare />
                </span>
                Full Time Support
              </p>
              <p className="mb-5 flex items-center">
                <span className="mr-5">
                  <FaRegCheckSquare />
                </span>
                Delivery on schedule
              </p>
              <p className="mb-5 flex items-center">
                <span className="mr-5">
                  <FaRegCheckSquare />
                </span>
                Team of Tech Experts
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

        <div className="flex md:gap-5 flex-wrap space-between">
          <div className="basis-4/12 flex-grow ">
            <p className="text-[#01303F] text-5xl font-normal 2xl:mb-[30px]">
              Experience Creativity At Its Peak
            </p>
            <p
              className="text-base 2xl:mb-[61px] md:text-[12px] md:leading-tight"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              Let’s create a digital experience for the expansion of your
              business
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

          <div className="basis-8/12 md:basis-[100%] md:pl-5 pl-[50px]">
            <div className="flex  flex-wrap ">
              <div className="basis-5/12 md:basis-[100%] border-b-2 pb-6">
                <h4 className="flex items-center md:text-base text-xl text-black">
                  <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                    <FaCode />
                  </span>
                  Software Development
                </h4>
                <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                  Our bespoke and custom-rich software solutions are built to
                  provide the best user experience possible.
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

              <div className="basis-5/12 md:basis-[100%] border-b-2 pb-6">
                <h4 className="flex items-center md:text-base text-xl text-black">
                  <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                    <FaCode />
                  </span>
                  Digital Marketting
                </h4>
                <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                  The importance of digital marketing is increasing day by day
                  as the global economy moves towards digitization which has
                  greatly transformed the way businesses operate.
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
            <div className="flex  flex-wrap justify-between">
              <div className="basis-5/12 md:basis-[100%] border-b-2 py-6 ">
                <h4 className="flex items-center md:text-base text-xl text-black">
                  <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                    <FaCode />
                  </span>
                  Computers and Accessories
                </h4>
                <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                  We specialize in Sales, Maintenance and Distribution of
                  World-Class IT products such as Tablets, Laptops, Desktops,
                  Printers, Computer Hardware and other computer accessories at
                  affordable prices.
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

              <div className="basis-5/12 md:basis-[100%] border-b-2 py-6">
                <h4 className="flex items-center md:text-base text-xl text-black">
                  <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                    <FaCode />
                  </span>
                  Real Estate
                </h4>
                <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                  Real estate is one of the most popular, profitable, and stable
                  investment choices that can generate a high profit return.
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
            <div className="flex  flex-wrap justify-between">
              <div className="basis-5/12 md:basis-[100%] border-b-2 py-6 ">
                <h4 className="flex items-center md:text-base text-xl text-black">
                  <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                    <FaCode />
                  </span>
                  Printing
                </h4>
                <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                  We create beautiful and interactive designs to communicate
                  your brand messages or ideas to your target audience.
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

              <div className="basis-5/12 md:basis-[100%] border-b-2 py-6">
                <h4 className="flex items-center md:text-base text-xl text-black">
                  <span className="flex items-center justify-center text-white text-2xl mr-6 w-11 h-11 rounded-full bg-[#01303F]">
                    <FaCode />
                  </span>
                  Training
                </h4>
                <p className="my-[13.25px] 2xl:text-[12px] md:mt-7 md:text-sm">
                  Learn valuable technology skills with our wide range of
                  courses.
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

      <div className="flex flex-wrap mt-[113px]">
        <div className="basis-1/2 flex-grow bg-[#01303F] py-[136px] px-12 md:px-5">
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
              To solve challenging performance problems of business and
              organizations using Information and Communication Technology. To
              Promote African Development by encouraging Business Sector and
              Entrepreneurship in Africa. To Provide Quality Hardware Solutions
              (Prints and IT Hardware) to promote societal Growth and
              Development.
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
        <div className="basis-1/2 grow bg-[#29ABE2] py-[136px] px-12 md:px-5">
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
              To be the most sought after and best Innovation Tech Company In
              Nigeria.
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

      <div className=" mt-[113px]">
        <div className=" bg-white md:px-[20px] px-[166px]">
          <div className="mb-[173px]">
            <h1 className=" text-base text-[#29ABE2] font-normal mb-[11px] ">
              OUR PARTNERS
            </h1>
            <div className="flex md:flex-col items-center gap-[136px] ">
              <div className=" grow basis-1/4">
                <h1
                  className=" text-[#01303F] font-normal mb-[30px] leading-[48px]"
                  style={{ fontSize: "clamp(2rem, 1rem + 10vw, 3rem)" }}
                >
                  We Work With The Most Innovative Companies
                </h1>
                <p className="text-base mb-[61px] ">
                  Our partners are among the best in their field. We know our
                  clients want technology that is reliable and easy-to-use.
                  That's why we are very selective about the partners we choose.
                  Our purpose is to create the perfect technological
                  infrastructure to accomplish your business KPIs and
                  goals.Together we provide an array of solutions that ensures
                  our clients goals are met and ultimately surpassed.
                </p>
                <div>
                  <Button
                    text="LEARN MORE"
                    bgColor="#29ABE2"
                    color="#ffffff"
                    size="base"
                    width="207px"
                  />
                </div>
              </div>
              <div className=" flex md:block flex-wrap grow basis-1/2">
                <svg
                  className="mr-[61px] md:mb-[50px] mb-[100px]"
                  width="262"
                  height="53"
                  viewBox="0 0 262 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_979_1827)">
                    <path
                      d="M255.396 40.0275L255.397 40.0316C255.555 41.8659 257 44.1999 259.503 44.1999H260.967C261.535 44.1999 262 43.7271 262 43.1503V10.4478H261.994C261.98 10.1806 261.865 9.92899 261.675 9.74448C261.484 9.55998 261.231 9.45653 260.967 9.45533H256.429C256.166 9.45665 255.913 9.56012 255.722 9.74459C255.531 9.92906 255.417 10.1806 255.402 10.4478H255.397V13.1051C252.617 9.62524 248.233 8.18073 243.837 8.18073C233.846 8.18073 225.746 16.4113 225.746 26.5655C225.746 36.7197 233.846 44.9508 243.837 44.9508V44.9518C248.233 44.9518 253.023 43.2189 255.396 40.028V40.0275ZM243.855 38.5154C237.5 38.5154 232.348 33.1656 232.348 26.5645C232.348 19.9654 237.5 14.6145 243.855 14.6145C250.209 14.6145 255.36 19.9654 255.36 26.565C255.36 33.0996 250.312 38.4089 244.045 38.5144L243.855 38.516V38.5154ZM220.009 41.1566L220.007 24.234H220.008C220.008 14.6945 214.086 8.25919 204.642 8.25919C200.134 8.25919 196.439 10.9081 195.134 13.1835L195.112 13.0536L195.088 12.9227C195.083 12.901 195.079 12.8793 195.074 12.8577L195.046 12.7273L195.015 12.5974L194.982 12.4675L194.945 12.3386C194.92 12.2527 194.893 12.1675 194.863 12.083L194.817 11.9567C194.316 10.638 193.254 9.53431 191.039 9.53431H189.57C189.002 9.53431 188.537 10.0071 188.537 10.5839V43.2901H188.543C188.558 43.5573 188.672 43.8088 188.863 43.9933C189.054 44.1778 189.307 44.2812 189.57 44.2826H194.108C194.178 44.2826 194.246 44.2737 194.311 44.2607L194.341 44.2529L194.399 44.2342L194.467 44.2145C194.478 44.211 194.489 44.207 194.5 44.2025L194.539 44.1838L194.669 44.1095C194.7 44.0896 194.729 44.0677 194.756 44.0441L194.797 44.0077C194.803 44.0009 194.811 43.9968 194.817 43.9905C195.008 43.8069 195.121 43.5562 195.135 43.2901H195.14V23.9711C195.14 18.8478 199.228 14.6945 204.27 14.6945C209.312 14.6945 213.399 18.8483 213.399 23.9716L213.403 40.1195L213.404 40.1137L213.407 40.1579V43.2901H213.413C213.427 43.5573 213.541 43.8088 213.732 43.9933C213.923 44.1778 214.176 44.2812 214.44 44.2826H218.978C219.047 44.2826 219.115 44.2737 219.181 44.2607C219.208 44.2555 219.232 44.2452 219.259 44.2374L219.333 44.2155L219.37 44.2025C219.407 44.187 219.441 44.1651 219.476 44.1454C219.497 44.1329 219.52 44.1236 219.541 44.1095C219.582 44.082 219.62 44.0482 219.658 44.0144L219.688 43.9895C219.716 43.9614 219.743 43.9323 219.768 43.9012L219.812 43.844C219.913 43.7015 219.977 43.5353 219.998 43.3608L220.005 43.2901H220.01V41.1571L220.009 41.1566ZM172.75 40.0275V40.0316C172.909 41.8659 174.354 44.1999 176.857 44.1999H178.321C178.889 44.1999 179.353 43.7271 179.353 43.1503V10.4478H179.348C179.333 10.1806 179.219 9.92899 179.028 9.74448C178.838 9.55998 178.585 9.45653 178.321 9.45533H173.783C173.52 9.45652 173.266 9.55993 173.075 9.74441C172.884 9.92889 172.77 10.1805 172.756 10.4478H172.751V13.1051C169.97 9.62524 165.586 8.18073 161.191 8.18073C151.199 8.18073 143.1 16.4113 143.1 26.5655C143.1 36.7197 151.199 44.9508 161.191 44.9508V44.9518C165.586 44.9518 170.377 43.2189 172.75 40.028V40.0275ZM161.208 38.5154C154.854 38.5154 149.703 33.1656 149.703 26.5645C149.703 19.9654 154.854 14.6145 161.208 14.6145C167.563 14.6145 172.714 19.9654 172.714 26.565C172.714 33.0996 167.666 38.4089 161.399 38.5144L161.208 38.516V38.5154ZM116.264 35.3479C119.294 37.4804 122.601 38.516 125.778 38.516C126.402 38.516 127.03 38.4484 127.635 38.3164L127.816 38.2749C127.906 38.253 127.995 38.2302 128.084 38.2052L128.26 38.1543C128.318 38.1366 128.376 38.1185 128.434 38.0997L128.606 38.041C129.005 37.9002 129.384 37.7287 129.734 37.5277L129.883 37.4398C131.103 36.6937 131.935 35.5765 131.935 34.1455C131.935 32.2183 130.091 31.1375 127.718 30.3358L127.442 30.2448C127.396 30.2292 127.349 30.2147 127.302 30.1996L127.02 30.1118L126.734 30.0261L126.446 29.9419L126.007 29.8182L125.564 29.6982L124.97 29.5413L123.483 29.1568L122.898 29.0019L122.466 28.884L122.182 28.804L121.903 28.7229L121.765 28.6819L121.491 28.5987C121.446 28.585 121.401 28.5711 121.357 28.5571L121.09 28.4709C121.003 28.4418 120.916 28.4127 120.83 28.3831C116.545 26.9038 112.854 23.8443 112.854 18.8909C112.854 11.3103 119.501 8.17969 125.704 8.17969C129.635 8.17969 133.69 9.49689 136.32 11.3836C136.817 11.7665 136.874 12.1801 136.826 12.4758L136.814 12.5371L136.799 12.5943L136.783 12.6478L136.765 12.6966L136.747 12.7403L136.722 12.7959L136.699 12.8385L136.674 12.8811L134.164 16.5235C134.148 16.5464 134.132 16.5693 134.115 16.5911L134.062 16.6576C133.779 16.9922 133.338 17.224 132.739 16.8795L132.652 16.8265L132.214 16.5459L132.057 16.4487L131.885 16.3448L131.761 16.2721L131.631 16.1978C131.608 16.1849 131.585 16.1721 131.563 16.1593L131.422 16.0819L131.275 16.0039L131.121 15.9239L130.96 15.8439L130.793 15.7634L130.619 15.6828C130.559 15.6557 130.499 15.629 130.439 15.6028L130.252 15.5233L130.059 15.4454C128.671 14.8952 127.194 14.6132 125.704 14.614C121.919 14.614 119.64 16.391 119.64 18.5921C119.64 19.8428 120.304 20.6872 121.373 21.3252L121.518 21.4094C121.739 21.5336 121.975 21.6495 122.225 21.7596L122.394 21.8319L122.48 21.8672L122.654 21.9368L122.743 21.9711L122.923 22.0387L123.107 22.1047L123.293 22.1691L123.388 22.2008L123.58 22.2631L123.873 22.3556L124.172 22.4455L124.477 22.5339L124.683 22.592L124.892 22.6497L125.316 22.764L126.073 22.9625L126.801 23.1631L127.349 23.3169L127.715 23.4219L127.897 23.4749L128.262 23.5824L128.444 23.637L128.808 23.7482L129.17 23.8625C134.175 25.4566 138.72 27.8915 138.72 34.1455C138.72 40.8246 132.572 44.9518 125.778 44.9518C120.629 44.9518 116.245 43.4605 112.569 40.7186C112.106 40.2478 112.118 39.7978 112.2 39.5152L112.218 39.459L112.237 39.4081L112.257 39.3624L112.276 39.3224L112.302 39.2735L112.338 39.2164L114.835 35.5921C115.264 35.0216 115.785 35.099 116.107 35.2554L116.165 35.2855L116.217 35.3167L116.264 35.3479ZM98.8194 40.0275V40.0316C98.978 41.8659 100.423 44.1999 102.926 44.1999H104.391C104.959 44.1999 105.424 43.7271 105.424 43.1503V10.4478H105.418C105.403 10.1806 105.289 9.92899 105.098 9.74448C104.908 9.55998 104.655 9.45653 104.391 9.45533H99.8531C99.5895 9.45652 99.3363 9.55993 99.1453 9.74441C98.9543 9.92889 98.8399 10.1805 98.8256 10.4478H98.8204V13.1051C96.0403 9.62524 91.6564 8.18073 87.2607 8.18073C77.2699 8.18073 69.1699 16.4113 69.1699 26.5655C69.1699 36.7197 77.2699 44.9508 87.2612 44.9508V44.9518C91.6569 44.9518 96.4466 43.2189 98.8199 40.028L98.8194 40.0275ZM87.2781 38.5154C80.9236 38.5154 75.7721 33.1656 75.7721 26.5645C75.7721 19.9654 80.9236 14.6145 87.2781 14.6145C93.6326 14.6145 98.7836 19.9654 98.7836 26.565C98.7836 33.0996 93.735 38.4089 87.4685 38.5144L87.2781 38.516V38.5154Z"
                      fill="#F06A6A"
                    />
                    <path
                      d="M43.8057 27.8156C37.0817 27.8156 31.6309 33.3505 31.6309 40.1782C31.6309 47.0058 37.0817 52.5407 43.8057 52.5407C50.5297 52.5407 55.98 47.0058 55.98 40.1782C55.98 33.3505 50.5297 27.8156 43.8057 27.8156ZM12.1748 27.8167C5.45083 27.8167 0 33.3505 0 40.1782C0 47.0058 5.45083 52.5407 12.1748 52.5407C18.8988 52.5407 24.3501 47.0058 24.3501 40.1782C24.3501 33.3505 18.8988 27.8167 12.1748 27.8167ZM40.1648 12.3615C40.1648 19.1896 34.714 24.725 27.99 24.725C21.266 24.725 15.8157 19.1896 15.8157 12.3615C15.8157 5.53538 21.266 0 27.99 0C34.714 0 40.1648 5.53538 40.1648 12.362V12.3615Z"
                      fill="#F06A6A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_979_1827">
                      <rect width="262" height="53" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className="md:mb-[50px]"
                  width="240"
                  height="71"
                  viewBox="0 0 240 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_979_1830)">
                    <path
                      d="M45.8643 25.4905C50.3798 28.748 55.9115 30.665 61.8857 30.665V19.0622C60.755 19.0622 59.6274 18.9433 58.5211 18.7072V27.8401C52.5473 27.8401 47.0165 25.9231 42.4996 22.6656V46.3442C42.4996 58.1893 32.9859 67.7909 21.2503 67.7909C16.8717 67.7909 12.8015 66.4547 9.4209 64.1633C13.2792 68.1454 18.6609 70.6157 24.614 70.6157C36.3506 70.6157 45.8648 61.0142 45.8648 49.169V25.49L45.8643 25.4905ZM50.0151 13.785C47.6411 11.1737 46.1827 7.84704 45.8643 4.31688V2.82446H42.6759C43.4784 7.44514 46.2159 11.3923 50.0151 13.785ZM16.8436 55.0734C15.5543 53.3673 14.8575 51.28 14.8607 49.134C14.8607 43.7167 19.2121 39.3241 24.5812 39.3241C25.5815 39.3241 26.5762 39.4785 27.5296 39.7837V27.922C26.4154 27.7677 25.2908 27.7022 24.1664 27.7261V36.9594C23.2123 36.654 22.2174 36.4989 21.2165 36.4998C15.8475 36.4998 11.4961 40.8918 11.4961 46.3101C11.4961 50.1408 13.6711 53.4574 16.8436 55.0734Z"
                      fill="#FF004F"
                    />
                    <path
                      d="M42.4997 22.6656C47.0166 25.9231 52.5474 27.8397 58.5216 27.8397V18.7067C55.248 18 52.2743 16.2795 50.0152 13.785C46.216 11.3923 43.4785 7.44467 42.676 2.82446H34.3013V49.1676C34.2825 54.5702 29.9377 58.9448 24.5808 58.9448C21.4238 58.9448 18.6188 57.4258 16.8427 55.0734C13.6711 53.4574 11.4957 50.1408 11.4957 46.3101C11.4957 40.8923 15.8471 36.4998 21.2161 36.4998C22.2446 36.4998 23.2364 36.6616 24.166 36.9594V27.7265C12.6366 27.967 3.36426 37.4748 3.36426 49.1681C3.36426 55.0052 5.67332 60.2966 9.42098 64.1633C12.9187 66.5347 17.0379 67.7977 21.2508 67.7904C32.9864 67.7904 42.5002 58.1884 42.5002 46.3437V22.6656H42.4997Z"
                      fill="black"
                    />
                    <path
                      d="M58.5211 18.7061V16.2368C55.5141 16.2414 52.5664 15.3916 50.0152 13.7844C52.2735 16.2798 55.2472 18.0006 58.5211 18.7066V18.7061ZM42.6759 2.82485C42.5994 2.38346 42.5406 1.93911 42.4997 1.49289V0H30.9361V46.3436C30.9173 51.7453 26.5739 56.1198 21.2161 56.1198C19.6972 56.1223 18.1991 55.7639 16.8427 55.0737C18.6192 57.4262 21.4238 58.9447 24.5808 58.9447C29.9372 58.9447 34.2825 54.5706 34.3013 49.168V2.82438H42.6759V2.82485ZM24.1664 27.7269V25.098C23.2002 24.9646 22.226 24.8979 21.2508 24.8983C9.51422 24.8973 0 34.4994 0 46.3436C0 53.7688 3.73922 60.3131 9.42141 64.1627C5.67375 60.2965 3.36469 55.0046 3.36469 49.1675C3.36469 37.4747 12.6366 27.9669 24.1664 27.7264V27.7269Z"
                      fill="#00F2EA"
                    />
                    <path
                      d="M192.51 58.0803C200.908 58.0803 207.715 51.262 207.715 42.8513C207.715 34.4411 200.908 27.6213 192.51 27.6213H190.219C198.616 27.6213 205.424 34.4411 205.424 42.8513C205.424 51.262 198.616 58.0803 190.219 58.0803H192.51H192.51Z"
                      fill="#FF004F"
                    />
                    <path
                      d="M190.012 27.6213H187.721C179.324 27.6213 172.515 34.4411 172.515 42.8513C172.515 51.262 179.324 58.0803 187.721 58.0803H190.012C181.613 58.0803 174.805 51.262 174.805 42.8513C174.805 34.4411 181.613 27.6213 190.012 27.6213Z"
                      fill="#00F2EA"
                    />
                    <path
                      d="M125.027 20.7383V38.0514L133.773 29.29H144.395L133.356 40.1388L145.645 58.08H136.274L127.735 45.7705L125.027 48.2759V57.8717H116.279V20.7383H125.027ZM219.379 20.7383V38.0514L228.127 29.29H238.749L227.71 40.1388L240 58.081H230.626L222.086 45.7714L219.379 48.2768V57.8727H210.629V20.7383H219.379ZM190.218 27.6215C198.616 27.6215 205.424 34.4413 205.424 42.8515C205.424 51.2621 198.616 58.0805 190.218 58.0805H190.011C181.613 58.0805 174.805 51.2621 174.805 42.8515C174.805 34.4413 181.613 27.6215 190.011 27.6215H190.218ZM102.117 20.7383L99.6169 28.6661H92.3278V57.8722H83.3696V28.4579H74.415V20.7378H102.116L102.117 20.7383ZM175.432 20.7383L172.933 28.6661H165.644V57.8722H156.685V28.4579H147.731V20.7378H175.432V20.7383ZM112.529 32.6298V57.8727H103.784V32.6298H112.529ZM190.116 35.4466C186.032 35.4466 182.72 38.7604 182.72 42.8515C182.72 46.9425 186.032 50.2577 190.116 50.2586C194.198 50.2586 197.509 46.9425 197.509 42.8515C197.509 38.7604 194.198 35.4466 190.116 35.4466ZM108.154 20.7383C110.572 20.7383 112.529 22.7002 112.529 25.119C112.529 27.5377 110.573 29.4997 108.154 29.4997C105.739 29.4987 103.784 27.5382 103.784 25.119C103.784 22.7002 105.739 20.7383 108.154 20.7383Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_979_1830">
                      <rect width="240" height="71" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className="md:mb-[50px]"
                  width="112"
                  height="112"
                  viewBox="0 0 112 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_979_1838)">
                    <path
                      d="M23.5555 70.5776C23.5555 77.0666 18.3112 82.3114 11.8222 82.3114C5.33318 82.3114 0.0888672 77.0666 0.0888672 70.5776C0.0888672 64.089 5.33318 58.8447 11.8226 58.8447H23.5551V70.578L23.5555 70.5776ZM29.4224 70.5776C29.4224 64.089 34.6667 58.8447 41.1557 58.8447C47.6447 58.8447 52.889 64.089 52.889 70.578V99.9111C52.889 106.4 47.6447 111.645 41.1552 111.645C34.6671 111.645 29.4224 106.4 29.4224 99.9111V70.578V70.5776Z"
                      fill="#E01E5A"
                    />
                    <path
                      d="M41.1556 23.4666C34.6666 23.4666 29.4219 18.2223 29.4219 11.7333C29.4219 5.24431 34.6671 0 41.1556 0C47.6442 0 52.8889 5.24431 52.8889 11.7333V23.4671H41.1552L41.1556 23.4666ZM41.1556 29.4223C47.6446 29.4223 52.8889 34.6666 52.8889 41.1556C52.8889 47.6446 47.6446 52.8889 41.1552 52.8889H11.7337C5.24431 52.8889 0 47.6446 0 41.1552C0 34.6671 5.24431 29.4223 11.7333 29.4223H41.1552H41.1556Z"
                      fill="#36C5F0"
                    />
                    <path
                      d="M88.1782 41.1556C88.1782 34.6666 93.4225 29.4219 99.9111 29.4219C106.4 29.4219 111.645 34.6666 111.645 41.1556C111.645 47.6446 106.4 52.8889 99.9111 52.8889H88.1782V41.1552V41.1556ZM82.3114 41.1556C82.3114 47.6446 77.0666 52.8889 70.5776 52.8889C64.089 52.8889 58.8447 47.6446 58.8447 41.1552V11.7337C58.8447 5.24431 64.089 0 70.5776 0C77.0662 0 82.3109 5.24431 82.3109 11.7333V41.1552L82.3114 41.1556Z"
                      fill="#2EB67D"
                    />
                    <path
                      d="M70.5776 88.1782C77.0666 88.1782 82.3113 93.4225 82.3113 99.9111C82.3113 106.4 77.0666 111.645 70.5776 111.645C64.089 111.645 58.8447 106.4 58.8447 99.9111V88.1782H70.578H70.5776ZM70.5776 82.3114C64.089 82.3114 58.8447 77.0666 58.8447 70.5776C58.8447 64.089 64.089 58.8447 70.578 58.8447H99.9999C106.489 58.8447 111.734 64.089 111.734 70.578C111.734 77.0666 106.489 82.3114 99.9999 82.3114H70.578H70.5776Z"
                      fill="#ECB22E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_979_1838">
                      <rect width="112" height="112" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className=" ml-[90px] md:ml-[0] md:mb-[50px]"
                  width="126"
                  height="96"
                  viewBox="0 0 126 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_979_1843)">
                    <path
                      d="M28.6365 95.0323V46.346L13.5386 32.5327L0 24.8672V86.4405C0 91.1944 3.85137 95.0323 8.59113 95.0323H28.6365Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M97.3633 95.0323H117.409C122.163 95.0323 126 91.1801 126 86.4405V24.8677L110.665 33.6475L97.3633 46.346V95.0323Z"
                      fill="#34A853"
                    />
                    <path
                      d="M28.6364 46.3461L26.582 27.323L28.6364 9.11597L63 34.891L97.3635 9.11597L99.6615 26.34L97.3635 46.3461L63 72.1211L28.6364 46.3461Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M97.3633 9.11605V46.3462L126 24.8673V13.4117C126 2.78698 113.872 -3.26988 105.382 3.10201L97.3633 9.11605Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M0 24.8668L13.1704 34.7459L28.6365 46.3457V9.11554L20.6177 3.1015C12.1127 -3.27088 0 2.78648 0 13.4107V24.8663V24.8668Z"
                      fill="#C5221F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_979_1843">
                      <rect
                        width="126"
                        height="95"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className=" ml-[90px] md:ml-[0]"
                  width="108"
                  height="108"
                  viewBox="0 0 108 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M75.9037 80.0212H50.4562C48.9372 80.079 47.4237 79.8073 46.0196 79.2247C44.6156 78.6422 43.3543 77.7625 42.3225 76.6462C38.8141 72.8063 35.9223 68.4458 33.75 63.7199C29.3625 54.9449 25.1775 46.1024 20.8575 37.3274C19.5412 34.6274 18.09 32.0624 16.5375 29.4974C14.3195 25.1266 10.9311 21.4577 6.75 18.8999H18.7988C26.715 18.9779 34.6134 19.6662 42.4237 20.9587C47.1892 21.6788 51.6791 23.6475 55.4373 26.6647C59.1955 29.682 62.0881 33.6403 63.8213 38.1374C66.9146 46.211 69.3635 54.517 71.145 62.9774C72.1529 68.8045 73.7472 74.5148 75.9037 80.0212ZM94.8375 89.0324C92.4879 88.8909 90.2658 87.9159 88.5707 86.2827C86.8756 84.6495 85.8187 82.4651 85.59 80.1224C85.1113 74.6238 84.9535 69.1019 85.1175 63.5849C85.1089 55.0164 84.4205 46.462 83.0588 38.0024C82.8091 35.5259 81.8347 33.178 80.2575 31.2524H89.2012C91.0238 31.2524 91.665 32.5012 92.205 33.8849C93.4674 37.4075 94.2396 41.087 94.5 44.8199C95.4788 53.9999 95.5462 63.2136 95.6137 72.4274C95.5457 73.7203 95.5457 75.0158 95.6137 76.3087C95.9175 78.9412 96.9638 80.0212 99.5625 79.9537C101.25 79.9537 101.25 79.7512 101.25 79.7512V88.8299C99.1265 89.1336 96.9759 89.2015 94.8375 89.0324Z"
                    fill="#29ABE2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProspectiveClients />
    </div>
  );
};

export default Home;
