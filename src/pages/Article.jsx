import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsSearch, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import blogImg1 from "../data/blog-image1.jpg";
import blogImg4 from "../data/blog-image4.jpg";
import blogImg5 from "../data/blog-image5.jpg";
import blogImg6 from "../data/blog-image6.jpg";

const Article = () => {
  return (
    <div>
      <div className="px-[50px] md:px-0 text-center bg-[#01303F] md:mt-7 text-white py-[30px]">
        <p className="font-medium text-base leading-tight md:text-[10px] md:px-[39px] md:py-[20px]">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs →{" "}
          <a className="text-[#29ABE2]" href="https://portal.tenpluslabs.com">
            Use Coupon Code: FREE
          </a>
        </p>
        <div className="mx-[244px] md:mx-5 mt-[90px] mb-[120px]">
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
          <div className=" mx-[40px] flex flex-wrap justify-between py-[15px]">
            <ul className="flex flex-wrap justify-between">
              <li
                className="py-[10px] px-[23px] rounded-xl "
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
              className="flex items-center md:w-full w-[45%] rounded-md pl-11 py-3 "
              style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
            >
              <span>
                <BsSearch />
              </span>
              <input
                className="border-0 outline-none bg-transparent ml-4 "
                type="text"
                placeholder="Search blog"
              />
            </div>
          </div>
          <hr />
        </div>

        <div className="mx-[50px] md:mx-[20px]  flex flex-wrap gap-[52px] mt-[50px] ">
          <div className="basis-[62%] md:flex-grow">
            <img
              className="rounded-[10px] object-fill w-full md:h-[350px] h-[437px] "
              src={blogImg1}
              alt=""
            />
          </div>
          <div className="basis-1/3 py-[39px] px-[40px] md:flex-grow rounded-[10px] shadow-xl border">
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

        <div className="mt-5 flex md:mx-[20px] flex-wrap mx-[50px] gap-[52px]">
          <div className="basis-[62%] md:flex-grow">
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
              TBehind every good design is a good choice of colour. You don’t
              need to be well versed in colours to notice when a design has got
              its colours all wrong. Try to imagine this, a flyer with a mixture
              of red, blue and wine. I am sure if you see something like that,
              you will ask yourself what exactly is going on in the design. But
              it is not every time that it is evident when the wrong colour is
              used or when the wrong choice of colour is made. Because a colour
              looks good in the design does not make the colour the right
              choice. There is a principle to colours; as I first hinted in the
              previous post (Link to previous post: LINES AND TYPOGRAPHY),
              colour should align with the need and want of the user. Colour
              should be properly represented in alignment with the event in
              which they are to be used. Imagine you want to design a Christmas
              flyer and your choice of colours happens to be yellow and peach as
              well as wine. It is wine again, don’t pay me any attention, I just
              really like wine. Everyone knows Christmas colours are red, green
              and white. So even if the flyer or design is as beautiful as Mona
              Lisa, if it does not effectively incorporate the meaning and
              message to be passed across then the design is as good as wrong.
              When it comes to colours, the beauty should be considered but the
              meaning should also be considered; this is a room for thought for
              designers. Let it not be heard that you chose a colour because you
              thought it looked good, if I ask you about your design, you should
              be able to give me clear and concise reasons why you chose each
              colour that you are using. The importance of a good choice of
              colour to a design: It sets the mood: A colour can also set the
              mood, be it a sober or happy mood, certain colours represent
              sadness and some represents happiness. It communicates a message:
              A colour communicates a message to those who see it; it
              communicates the occasion, events and season. A colour
              communicates goals and objectives of a company or organization. I
              know it is not really easy to dig deep into the principle and
              meaning behind a colour, I mean the users themselves don’t really
              care; they only care about the beauty and catchiness of the
              design. But believe me when I say the design is not just for the
              consumption of the users, but for many other people. So, you
              should consider what would go through the minds of people who
              actually know colours As a designer, do not be a one in a sea of
              others. Let your design speak for you wherever it gets to. Be a
              unique and different designer. And if you are yet to be a designer
              and you are really interested in learning and becoming not just a
              designer but a very good and unique one, then check out this skill
              acquisition program that is currently being held by TenPlus
              Digital Labs (Link to skill program – Digital Skills Acquisition).
            </p>
            <div className="flex gap-4">
              <p className="text-[#29ABE2] text-[21px] ">
                <FaFacebook />
              </p>
              <p className="text-[#29ABE2] text-[21px] ">
                <AiFillTwitterCircle />
              </p>
              <p className=" text-blue-600 text-[21px] ">
                <TiSocialLinkedinCircular />
              </p>
              <p className="text-green-300 text-[21px] ">
                <RiWhatsappFill />
              </p>
              <p className=" text-blue-500 text-[21px] ">
                <FaFacebook />
              </p>
            </div>
          </div>
          <div className="basis-1/3 mt-[70px] md:flex-grow max-h-[304px] grow-[1] py-[39px] px-[40px] rounded-[10px] shadow-xl border">
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

        {/* <div className="flex mx-[50px] gap-[52px]">
          <div className="w-[855px]">
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
              TBehind every good design is a good choice of colour. You don’t
              need to be well versed in colours to notice when a design has got
              its colours all wrong. Try to imagine this, a flyer with a mixture
              of red, blue and wine. I am sure if you see something like that,
              you will ask yourself what exactly is going on in the design. But
              it is not every time that it is evident when the wrong colour is
              used or when the wrong choice of colour is made. Because a colour
              looks good in the design does not make the colour the right
              choice. There is a principle to colours; as I first hinted in the
              previous post (Link to previous post: LINES AND TYPOGRAPHY),
              colour should align with the need and want of the user. Colour
              should be properly represented in alignment with the event in
              which they are to be used. Imagine you want to design a Christmas
              flyer and your choice of colours happens to be yellow and peach as
              well as wine. It is wine again, don’t pay me any attention, I just
              really like wine. Everyone knows Christmas colours are red, green
              and white. So even if the flyer or design is as beautiful as Mona
              Lisa, if it does not effectively incorporate the meaning and
              message to be passed across then the design is as good as wrong.
              When it comes to colours, the beauty should be considered but the
              meaning should also be considered; this is a room for thought for
              designers. Let it not be heard that you chose a colour because you
              thought it looked good, if I ask you about your design, you should
              be able to give me clear and concise reasons why you chose each
              colour that you are using. The importance of a good choice of
              colour to a design: It sets the mood: A colour can also set the
              mood, be it a sober or happy mood, certain colours represent
              sadness and some represents happiness. It communicates a message:
              A colour communicates a message to those who see it; it
              communicates the occasion, events and season. A colour
              communicates goals and objectives of a company or organization. I
              know it is not really easy to dig deep into the principle and
              meaning behind a colour, I mean the users themselves don’t really
              care; they only care about the beauty and catchiness of the
              design. But believe me when I say the design is not just for the
              consumption of the users, but for many other people. So, you
              should consider what would go through the minds of people who
              actually know colours As a designer, do not be a one in a sea of
              others. Let your design speak for you wherever it gets to. Be a
              unique and different designer. And if you are yet to be a designer
              and you are really interested in learning and becoming not just a
              designer but a very good and unique one, then check out this skill
              acquisition program that is currently being held by TenPlus
              Digital Labs (Link to skill program – Digital Skills Acquisition).
            </p>
            <div className="flex gap-4">
              <p className="text-[#29ABE2] text-[21px] ">
                <FaFacebook />
              </p>
              <p className="text-[#29ABE2] text-[21px] ">
                <AiFillTwitterCircle />
              </p>
              <p className=" text-blue-600 text-[21px] ">
                <TiSocialLinkedinCircular />
              </p>
              <p className="text-green-300 text-[21px] ">
                <RiWhatsappFill />
              </p>
              <p className=" text-blue-500 text-[21px] ">
                <FaFacebook />
              </p>
            </div>
          </div>
          <div className="mt-[70px] w-[433px] max-h-[304px] py-[39px] px-[40px] rounded-[10px] shadow-xl border">
            <h1>Popular Tags</h1>
            <hr className="mb-[42px] mt-[21px] " />
            <div className=" flex flex-wrap gap-[20px] ">
              <p className="border py-[5px] px-[10px]">Entertainment</p>
              <p className="border py-[5px] px-[10px]">Freelancing</p>
              <p className="border py-[5px] px-[10px]">Traiming</p>
              <p className="border py-[5px] px-[10px]">HTML</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Article;
