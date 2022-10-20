import React from "react";
import Button from "../components/Button";
import Partners from "../components/Partners";
import aboutImg1 from "../data/about-image1.jpg";
import aboutImg2 from "../data/about-image2.jpg";
import aboutImg3 from "../data/about-image3.jpg";
import aboutImg4 from "../data/about-image4.jpg";
import aboutImg5 from "../data/about-image5.jpg";
import aboutImg6 from "../data/about-image6.jpg";
import aboutImg7 from "../data/about-image7.jpg";
import aboutImg8 from "../data/about-image8.jpg";

const About = () => {
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
          <p className="text-[#29ABE2] text-[14px] mb-[11px]">
            KNOW MORE ABOUT US
          </p>
          <h1 className="text-5xl ">About us</h1>
        </div>
      </div>
      <div
        className=" pt-[73px] pb-[83px] "
        style={{ backgroundColor: "rgba(41, 171, 226, 0.1)" }}
      >
        <div className="mx-[50px] flex gap-[124px] justify-center items-center">
          <div className="relative">
            <img className="object-cover rounded-xl " src={aboutImg1} alt="" />
            <div
              className=" absolute h-36 w-36 right-[-20px] rounded-tr-lg -z-10 top-[-20px] "
              style={{ backgroundColor: "#29ABE2" }}
            ></div>
          </div>
          <div className="">
            <h1 className=" mb-[30px] text-4xl text-[#01303F] ">Our Mission</h1>
            <p className="mb-10 text-base font-medium text-gray-400 ">
              To solve challenging performance problems for business and
              organization using reliable digital strategies. To Promote African
              Development by encouraging Business Sector and Entrepreneurship in
              Africa.
            </p>
            <div>
              <Button
                text="Contact us"
                bgColor="#29ABE2"
                color="#ffffff"
                size="base"
                width="207px"
              />
            </div>
          </div>
        </div>

        <div className="mx-[50px] mt-[93px] flex gap-[124px] justify-center items-center">
          <div className="">
            <h1 className=" mb-[30px] text-4xl text-[#01303F] ">Our Vission</h1>
            <p className="mb-10 text-base font-medium text-gray-400 ">
              To solve challenging performance problems for business and
              organization using reliable digital strategies. To Promote African
              Development by encouraging Business Sector and Entrepreneurship in
              Africa.
            </p>
            <div>
              <Button
                text="Contact us"
                bgColor="#29ABE2"
                color="#ffffff"
                size="base"
                width="207px"
              />
            </div>
          </div>
          <div className="relative">
            <img className="object-cover rounded-xl " src={aboutImg2} alt="" />
            <div
              className=" absolute h-36 w-36 rounded-tl-lg -z-10 left-[-20px] top-[-20px] "
              style={{ backgroundColor: "#29ABE2" }}
            ></div>
          </div>
        </div>
        <div className="mx-[50px] mt-[93px] flex gap-[124px] justify-center items-center">
          <div className="relative">
            <img className="object-cover rounded-xl " src={aboutImg3} alt="" />
            <div
              className=" absolute h-36 w-36 right-[-20px] rounded-tr-lg -z-10 top-[-20px] "
              style={{ backgroundColor: "#29ABE2" }}
            ></div>
          </div>
          <div className="">
            <h1 className=" mb-[30px] text-4xl text-[#01303F] ">
              Our Customer
            </h1>
            <p className="mb-10 text-base font-medium text-gray-400 ">
              We do what we do in order to deliver compelling and efficient
              digital solutions, remarkable experiences, and outstanding results
              for our clients to promote their personal or business growth.
            </p>
            <div>
              <Button
                text="Contact us"
                bgColor="#29ABE2"
                color="#ffffff"
                size="base"
                width="207px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" px-[50px] bg-white pt-[111px] pb-[178px] ">
        <div className=" text-center mb-[50px] ">
          <h1 className=" mb-[11px] text-xs font-medium text-[#29ABE2] ">
            MEET OUR TEAM
          </h1>
          <h3 className=" text-4xl ">Our team</h3>
        </div>

        <div className="flex gap-[124px] justify-center items-center">
          <img
            className=" object-cover rounded-lg w-[556px] h-[567px] "
            src={aboutImg4}
            alt=""
          />
          <div className="">
            <h1 className=" text-[32px] mb-[30px] ">
              Founder’s Note{" "}
              <span className=" text-[#29ABE2] text-sm font-medium ">
                - Jibril Abdullahi Aduojo
              </span>
            </h1>
            <p className=" text-gray-400 ">
              Businesses must work together to bridge poverty and
              underdevelopment, and this is more important now, more than ever.
              Something greater tend to be achieved through collective efforts.
              There are countless benefits in exploring digital skills or
              solutions to our lives and businesses. Taking advantage of these
              can drive an economy to greater success. And taking these
              opportunities in a large number can cause rapid increase in the
              development of the society. A few number of successful companies
              cannot do it all alone. We are more about trying our best to
              increase the number of successful businesses, and also find ways
              to increase the gross income of individuals, to be able to have
              greater positive impact to our society.
            </p>
            <div className="mt-10">
              <Button
                text="View profile"
                bgColor="#29ABE2"
                color="#ffffff"
                size="base"
                width="207px"
              />
            </div>
          </div>
        </div>
        <div className=" mt-[107px] ">
          <div>
            <div className="flex gap-[30px]">
              <div className="grow flex flex-col justify-center items-center">
                <img
                  className=" rounded-xl object-cover w-[264px] h-[305px] "
                  src={aboutImg5}
                  alt=""
                />
                <p className="mt-[17px] text-base text-[#29ABE2] ">
                  Cyber Security Expert
                </p>
                <p className=" mt-[10px] text-2xl font-semibold ">
                  Ajibade Ajibola
                </p>
                <div className="mt-[25px]">
                  <Button
                    text="View profile"
                    bgColor="white"
                    color="black"
                    size="base"
                    width="207px"
                    border=" 1px solid black"
                  />
                </div>
              </div>
              <div className="grow flex flex-col justify-center items-center">
                <img
                  className=" rounded-xl object-cover w-[264px] h-[305px] "
                  src={aboutImg6}
                  alt=""
                />
                <p className="mt-[17px] text-base text-[#29ABE2] ">
                  Chief Marketing officer
                </p>
                <p className=" mt-[10px] text-2xl font-semibold ">
                  Ladele Omolabeke
                </p>
                <div className="mt-[25px]">
                  <Button
                    text="View profile"
                    bgColor="white"
                    color="black"
                    size="base"
                    width="207px"
                    border=" 1px solid black"
                  />
                </div>
              </div>
              <div className="grow flex flex-col justify-center items-center">
                <img
                  className=" rounded-xl object-cover w-[264px] h-[305px] "
                  src={aboutImg7}
                  alt=""
                />
                <p className="mt-[17px] text-base text-[#29ABE2] ">
                  Chief technology officer
                </p>
                <p className=" mt-[10px] text-2xl font-semibold ">
                  Busari Ahmad
                </p>
                <div className="mt-[25px]">
                  <Button
                    text="View profile"
                    bgColor="white"
                    color="black"
                    size="base"
                    width="207px"
                    border=" 1px solid black"
                  />
                </div>
              </div>
              <div className="grow flex flex-col justify-center items-center">
                <img
                  className=" rounded-xl object-cover w-[264px] h-[305px] "
                  src={aboutImg8}
                  alt=""
                />
                <p className="mt-[17px] text-base text-[#29ABE2] ">
                  Marketing and SEO expert
                </p>
                <p className=" mt-[10px] text-2xl font-semibold ">
                  Moshood Taofeeq
                </p>
                <div className="mt-[25px]">
                  <Button
                    text="View profile"
                    bgColor="white"
                    color="black"
                    size="base"
                    width="207px"
                    border=" 1px solid black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Partners />
    </div>
  );
};

export default About;
