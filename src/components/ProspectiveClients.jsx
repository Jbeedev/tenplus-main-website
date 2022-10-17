import React from "react";
import { SiAsana, SiGmail, SiSlack, SiTiktok } from "react-icons/si";
import Button from "./Button";
import ClientSlider from "./ClientSlider";

const ProspectiveClients = () => {
  return (
    <div>
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
                className="mb-[30px]  w-[100%] md:w-[100%] bg-white h-[56px] rounded-[5px] pl-7"
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
            <ClientSlider />
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
    </div>
  );
};

export default ProspectiveClients;
