import React from "react";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="">
      <div className=" bg-[#01303F] text-center text-white h-[748px] ">
        <h4 className="text-[16px] font-medium mb-[95px] pt-[30px] ">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs → <span className="text-[#29ABE2]">Use Coupon Code: FREE</span>
        </h4>
        <div>
          <p className="text-[#29ABE2] text-[14px] mb-[11px]">OUR BLOG</p>
          <h1 className="text-5xl mb-[18px]">Contact us</h1>
          <p className="text-[16px]">We are here to help you 24/7</p>
        </div>
      </div>
      <div className="bg-white h-[532px]"></div>

      <div className="absolute top-[466px] mx-[50px] flex ">
        <div className=" drop-shadow-lg screen bg-white">
          <div className="flex w-[730px] gap-[142px] mt-[108px] ml-[72px] mb-[123px] ">
            <div>
              <h1 className=" text-2xl ">Call us</h1>
              <p className="mt-[10px] text-base font-medium ">
                Contact our support team
              </p>
              <p className=" text-[32px] ">+2348139251969</p>
              <div className="mt-[82px]">
                <h1 className=" text-2xl ">Address</h1>
                <div className=" mt-[30px] ">
                  <h1 className="text-[#29ABE2] text-xs ">ILORIN OFFICE</h1>
                  <p className="mt-[8px] text-base font-medium ">
                    No. 29, University Road, Tanke, Ilorin, Kwara State.
                  </p>
                </div>
                <div className=" mt-[40px] ">
                  <h1 className="text-[#29ABE2] text-xs ">ABUJA OFFICE</h1>
                  <p className=" text-base font-medium ">
                    No. 29, University Road, Tanke, Ilorin, Kwara State.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className=" text-2xl ">Chat us</h1>
              <p className="mt-[10px] text-base font-medium ">
                Contact our support team for a quick response on product
                features, pricing, and more.
              </p>
              <div className=" mt-[38px]">
                <Button
                  text="Let's talk"
                  bgColor="#FFFFFF"
                  color="black"
                  size="base"
                  border="2px solid black"
                  width="207px"
                />
              </div>
              <div className="mt-[72px]">
                <h1 className=" text-2xl ">Working days</h1>
                <div className="mt-[30px] mb-5">
                  <p className="text-[#29ABE2] text-xs mb-2 ">
                    MONDAY - FRIDAY
                  </p>
                  <p className=" text-base font-medium ">9am - 5pm</p>
                </div>
                <div className="mb-5">
                  <p className="text-[#29ABE2] text-xs mb-2 ">SATURDAY</p>
                  <p className=" text-base font-medium ">10am - 5pm</p>
                </div>
                <div>
                  <p className="text-[#29ABE2] text-xs mb-2 ">
                    SUNDAY & PUBLIC HOLIDAYS
                  </p>
                  <p className=" text-base font-medium ">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#01303F]">
          <div className="bg-white rounded-xl mt-[59px] ml-[78px] mr-[37px] mb-[73px] ">
            <div>
              <h1 className="text-[29px] mb-8">Have a project in mind?</h1>
              <input
                className="mb-[27px] w-[100%] md:w-[100%] h-[50px] rounded-[5px] pl-7"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                type="text"
                placeholder="Your Name"
              />
              <input
                className="mb-[27px] w-[100%] md:w-[100%] h-[50px] rounded-[5px] pl-7"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                type="text"
                placeholder="Your Email"
              />
              <select
                className="mb-[30px]  w-[100%] md:w-[100%] bg-white h-[50px] rounded-[5px] pl-7"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                name="pets"
                id="pet-select"
              >
                <option className="bg-[#01303F] text-white" value="">
                  Select Services
                </option>
                <option className="bg-[#01303F] text-white" value="web">
                  Web Development
                </option>
                <option className="bg-[#01303F] text-white" value="mobileApp">
                  Mobile App Development
                </option>
                <option className="bg-[#01303F] text-white" value="graphics">
                  Graphics Design
                </option>
                <option className="bg-[#01303F] text-white" value="ai">
                  Artificial Intelligence
                </option>
                <option className="bg-[#01303F] text-white" value="digMkt">
                  Digital Marketing{" "}
                </option>
                <option className="bg-[#01303F] text-white" value="projjectMgt">
                  Project Management
                </option>
                <option
                  className="bg-[#01303F] text-white"
                  value="printingService"
                >
                  Printing Services
                </option>
                <option
                  className="bg-[#01303F] text-white"
                  value="videoEditing"
                >
                  Video Editing
                </option>
                <option
                  className="bg-[#01303F] text-white"
                  value="cuberSecurity"
                >
                  {" "}
                  Cybersecurity
                </option>
                <option className="bg-[#01303F] text-white" value="blockChain">
                  Blockchain
                </option>
                <option
                  className="bg-[#01303F] text-white"
                  value="computerAcessories"
                >
                  Computers and Accessories
                </option>
                <option className="bg-[#01303F] text-white" value="itTraining">
                  IT Training
                </option>
              </select>
              <textarea
                className="w-[100%] md:w-[100%] rounded-[5px]"
                rows="4"
                cols="50"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                type="text"
              />
              <button className="bg-[#29ABE2] w-[100%] text-center uppercase text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
