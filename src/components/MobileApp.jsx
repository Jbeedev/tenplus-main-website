import React from "react";
import Button from "../components/Button";
import ProspectiveClients from "../components/ProspectiveClients";
import mobileApp1 from "../data/mobile-app1.jpg";
import mobileApp2 from "../data/mobile-app2.jpg";
import mobileApp3 from "../data/mobile-app3.jpg";
import mobileApp4 from "../data/mobile-app4.jpg";

const MobileApp = () => {
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
        <div className="mx-[244px] mt-[90px]">
          <p className="text-[#29ABE2] text-[14px]">APP SOLUTIONS</p>
          <h1 className="text-5xl">
            Custom software development services from professionals you’ll{" "}
            <br />
            enjoy working with
          </h1>
        </div>
      </div>
      <div className="text-white text-sm font-medium flex items-center justify-center flex-wrap gap-[30px] py-[46px] px-[114px] bg-[#01303F]">
        <div className="border px-[15px] py-[13px] ">Web development</div>
        <div className="border px-[15px] py-[13px]  ">Cyber Security</div>
        <div className="border px-[15px] py-[13px] bg-[#29ABE2] ">
          Web app development
        </div>
        <div className="border px-[15px] py-[13px] ">Graphics design</div>
        <div className="border px-[15px] py-[13px] ">Digital Marketing</div>
        <div className="border px-[15px] py-[13px] ">
          Artificial Intelligence
        </div>
        <div className="border px-[15px] py-[13px] ">Project Management</div>
        <div className="border px-[15px] py-[13px] ">Printing</div>
        <div className="border px-[15px] py-[13px] ">Video Editing</div>
        <div className="border px-[15px] py-[13px] ">Cyber Security</div>
        <div className="border px-[15px] py-[13px] ">
          Laptop and accessories
        </div>
        <div className="border px-[15px] py-[13px] ">IT Training</div>
      </div>
      <div className="text-center mt-[81px]">
        <h1 className="text-[14px] text-[#29ABE2] uppercase font-medium mb-[11px] ">
          A one-stop-shop development partner
        </h1>
        <p className="text-[#01303F] text-4xl px-[245px] ">
          Get accessible, responsive, data-driven web application for your
          business
        </p>
        <div className="flex gap-5 justify-center my-[30px] ">
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
        <p className="text-gray-500 px-[280px] ">
          Mobile apps are more handy and easier to download and use than having
          to constantly remember a web address. Customers will get to constantly
          see your company name on their phone which can even be a motivation to
          do business with you.
        </p>
        <p className="mt-2">We can help you with everything you need to have a mobile app in the shortest possible time.</p>

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
            <div className="mx-[51px] pb-[96px] pt-[71px] ">
              <h1 className="text-base text-[#29ABE2] mb-[10px] ">
                SEE SAMPLES
              </h1>
              <p className="text-4xl mb-16 ">Samples</p>
              <div className="flex gap-8 mb-[50px] ">
                <div className="flex w-[50%] bg-white rounded-[50px] ">
                  <img
                    className=" rounded-l-[50px] w-[292px] h-[313px]"
                    src={mobileApp1}
                    alt=""
                  />
                  <div className="flex flex-col gap-[56px] items-center justify-center pl-[52px] pr-[56px] ">
                    <p className="text-left ">
                      A CMS for one of the biggest events hosting in Lagos,
                      Nigeria.
                    </p>
                    <Button
                      text="View case study"
                      bgColor="white"
                      color="black"
                      size="base"
                      width="207px"
                      border="1px solid black"
                    />
                  </div>
                </div>

                <div className="flex w-[50%] bg-white rounded-[50px] ">
                  <img
                    className=" rounded-l-[50px] w-[292px] h-[313px]"
                    src={mobileApp2}
                    alt=""
                  />
                  <div className="flex flex-col gap-[56px] items-center justify-center pl-[52px] pr-[56px]  ">
                    <p className="text-left ">
                      A CMS for one of the biggest events hosting in Lagos,
                      Nigeria.
                    </p>
                    <Button
                      text="View case study"
                      bgColor="white"
                      color="black"
                      size="base"
                      width="207px"
                      border="1px solid black"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex w-[50%] bg-white rounded-[50px] ">
                  <img
                    className=" rounded-l-[50px] w-[292px] h-[313px]"
                    src={mobileApp3}
                    alt=""
                  />
                  <div className="flex flex-col gap-[56px] items-center justify-center pl-[52px] pr-[56px]  ">
                    <p className="text-left ">
                      A CMS for one of the biggest events hosting in Lagos,
                      Nigeria.
                    </p>
                    <Button
                      text="View case study"
                      bgColor="white"
                      color="black"
                      size="base"
                      width="207px"
                      border="1px solid black"
                    />
                  </div>
                </div>

                <div className="flex w-[50%] bg-white rounded-[50px] ">
                  <img
                    className=" rounded-l-[50px] w-[292px] h-[313px]"
                    src={mobileApp4}
                    alt=""
                  />
                  <div className="flex flex-col gap-[56px] items-center justify-center pl-[52px] pr-[56px]  ">
                    <p className="text-left ">
                      A CMS for one of the biggest events hosting in Lagos,
                      Nigeria.
                    </p>
                    <Button
                      text="View case study"
                      bgColor="white"
                      color="black"
                      size="base"
                      width="207px"
                      border="1px solid black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProspectiveClients />
      </div>
    </div>
  );
};

export default MobileApp;
