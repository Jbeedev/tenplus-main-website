import React from "react";
import Button from "../components/Button";
import Partners from "../components/Partners";
import ProspectiveClients from "../components/ProspectiveClients";
import sampleImage1 from "../data/sampleImage1.jpg";
import { NavLink } from "react-router-dom";
import sampleImage2 from "../data/sampleImage2.jpg";
import sampleImage3 from "../data/sampleImage3.jpg";
import sampleImage4 from "../data/sampleImage4.jpg";
import ServicesLink from "./ServicesLink";

const Services = () => {
 

  return (
    <div>
      <div className="text-center bg-[#01303F] md:mt-7 text-white py-[30px]">
        <p className="font-medium text-base leading-tight md:text-[10px] md:px-[39px] md:py-[20px]">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs →{" "}
          <a className="text-[#29ABE2]" href="https://portal.tenpluslabs.com">
            Use Coupon Code: FREE
          </a>
        </p>
        <div className="md:mx-[20px] mx-[244px] mt-[90px]">
          <p className="text-[#29ABE2] text-[14px]">WEB SOLUTIONS</p>
          <h1 className="md:text-xl text-4xl">
            Custom software development services from professionals you’ll{" "}
            <br />
            enjoy working with
          </h1>
        </div>
      </div>
      <ServicesLink />

      <div className="text-center mt-[81px]">
        <h1 className="text-[14px] text-[#29ABE2] uppercase font-medium mb-[11px] ">
          A one-stop-shop development partner
        </h1>
        <p className="text-[#01303F] md:text-xl md:px-5 text-4xl px-[245px] ">
          Get accessible, responsive, data-driven web application for your
          business
        </p>
        <div className="flex flex-wrap gap-5 justify-center my-[30px] ">
          <p
            className="text-base py-[10px] px-5 rounded-[10px] "
            style={{ backgroundColor: "rgba(41, 171, 226, 0.1)" }}
          >
            HTML
          </p>
          <p
            className="text-base py-[10px] px-5 rounded-[10px] "
            style={{ backgroundColor: "rgba(239, 116, 120, 0.1)" }}
          >
            CSS
          </p>
          <p
            className="text-base py-[10px] px-5 rounded-[10px] "
            style={{ backgroundColor: "rgba(233, 237, 50, 0.1)" }}
          >
            Kotlin
          </p>
          <p
            className="text-base py-[10px] px-5 rounded-[10px] "
            style={{ backgroundColor: "rgba(39, 180, 62, 0.1)" }}
          >
            Javascript
          </p>
        </div>
        <p className="text-gray-500 px-[280px] md:px-4 ">
          The benefit of owning a website today cannot be overemphasized.
          Website have grown to be one of the trusted tools to drive businesses
          and brands. Competition is on the high side and one of the ways to
          stand out is through a strategically optimized website for your target
          audience. We build highly responsive websites that meet all our
          clients target audience and their needs
        </p>

        <div className="flex justify-center mt-[30px] mb-[111px]">
          <Button
            text="Order Now"
            bgColor="#29ABE2"
            color="white"
            size="base"
            width="207px"
          />
        </div>
        <div
          className=""
          style={{ backgroundColor: "rgba(41, 171, 226, 0.1)" }}
        >
          <div className=" w-[100%]">
            <div className="mx-[51px] md:mx-[20px] pb-[96px] pt-[71px] ">
              <h1 className="text-base text-[#29ABE2] mb-[10px] ">
                SEE SAMPLES
              </h1>
              <p className="text-4xl mb-16 ">Samples</p>
              <div className="flex flex-wrap md:block gap-8 mb-[50px] ">
                <div className="flex md:mb-6 grow basis-[45%]  rounded-[50px] ">
                  <img
                    className=" rounded-l-[50px] md:w-[50%]  w-[292 h-[313px]"
                    src={sampleImage1}
                    alt=""
                  />
                  <div className="bg-white md:w-[50%] flex flex-col gap-[56px] items-center justify-center pl-[20px] pr-[5px] ">
                    <p className="text-left ">
                      A CMS for one of the biggest events hosting in Lagos,
                      Nigeria.
                    </p>
                    <button className="bg-white border rounded-[5px] md:text-sm text-base p-3 font-semibold border-black ">
                      View case study
                    </button>
                  </div>
                </div>
                <div className="flex grow basis-[45%]  rounded-[50px] ">
                  <img
                    className=" rounded-l-xl md:w-[50%]  w-[292p h-[313px]"
                    src={sampleImage1}
                    alt=""
                  />
                  <div className="bg-white rounded-r-xl md:w-[50%] flex flex-col gap-[56px] items-center justify-center pl-[20px] pr-[5px] ">
                    <p className="text-left ">
                      A CMS for one of the biggest events hosting in Lagos,
                      Nigeria.
                    </p>
                    <button className="bg-white border rounded-[5px] text-base md:text-sm p-3 font-semibold border-black ">
                      View case study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[126px]">
        <Partners />
      </div>
      <ProspectiveClients />
    </div>
  );
};

export default Services;
