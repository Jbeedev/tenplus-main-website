import React from "react";
import Button from "../components/Button";
import Partners from "../components/Partners";
import ProspectiveClients from "../components/ProspectiveClients";
import sampleImage1 from "../data/sampleImage1.jpg";
import sampleImage2 from "../data/sampleImage2.jpg";
import sampleImage3 from "../data/sampleImage3.jpg";
import sampleImage4 from "../data/sampleImage4.jpg";
import ServicesLink from "./ServicesLink";

const Graphics = () => {
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
          <p className="text-[#29ABE2] text-[14px]">CYBER SOLUTIONS</p>
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

              <div className="flex md:flex-col flex-wrap justify-between mb-[50px] ">
                <div className=" h-[313px] flex basis-[48%] mb-[50px]">
                  <div
                    className=" basis-[40%] bg-cover rounded-l-[10px] "
                    style={{ backgroundImage: `url(${sampleImage1})` }}
                  ></div>
                  <div className="md:px-[20px] px-[50px] md:py-5 flex items-center justify-center flex-col basis-[60%] bg-white shadow-sm  rounded-r-[10px]">
                    <p className=" mb-[50px] text-left ">
                      A CMS for one of the biggest events hosting in Lagos,
                      Nigeria.
                    </p>
                    <button className=" border border-black md:text-sm rounded-[9px] py-2 px-3 ">View case study</button>
                  </div>
                </div>
                <div className=" h-[313px] flex basis-[48%] mb-[50px]">
                  <div
                    className=" basis-[40%] bg-cover rounded-l-[10px] "
                    style={{ backgroundImage: `url(${sampleImage2})` }}
                  ></div>
                  <div className="md:px-[20px] px-[50px] md:py-5 flex items-center justify-center flex-col basis-[60%] bg-white shadow-sm  rounded-r-[10px]">
                    <p className=" mb-[50px] text-left ">
                      A CMS for one of the biggest events hosting in Lagos,
                      Nigeria.
                    </p>
                    <button className=" border border-black md:text-sm rounded-[9px] py-2 px-3 ">View case study</button>
                  </div>
                </div>
                <div className=" h-[313px] flex basis-[48%] mb-[50px]">
                  <div
                    className=" basis-[40%] bg-cover rounded-l-[10px] "
                    style={{ backgroundImage: `url(${sampleImage3})` }}
                  ></div>
                  <div className="md:px-[20px] px-[50px] md:py-5 flex items-center justify-center flex-col basis-[60%] bg-white shadow-sm  rounded-r-[10px]">
                    <p className=" mb-[50px] text-left ">
                      A CMS for one of the biggest events hosting in Lagos,
                      Nigeria.
                    </p>
                    <button className=" border border-black md:text-sm rounded-[9px] py-2 px-3 ">View case study</button>
                  </div>
                </div>
                <div className=" h-[313px] flex basis-[48%]">
                  <div
                    className=" basis-[40%] bg-cover rounded-l-[10px] "
                    style={{ backgroundImage: `url(${sampleImage4})` }}
                  ></div>
                  <div className="md:px-[20px] px-[50px] md:py-5 flex items-center justify-center flex-col basis-[60%] bg-white shadow-sm  rounded-r-[10px]">
                    <p className=" mb-[50px] text-left ">
                      A CMS for one of the biggest events hosting in Lagos,
                      Nigeria.
                    </p>
                    <button className=" border border-black md:text-sm rounded-[9px] py-2 px-3 ">View case study</button>
                  </div>
                </div>
                <div className="bg-blue-300 basis-[48%]"></div>
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

export default Graphics;
