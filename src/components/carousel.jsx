import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import blogImage1 from "../data/blogImage1.jpg";
import blogImage2 from "../data/blogImage2.jpg";
import clientImage from "../data/clientImage.jpg";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="flex gap-10 items-center mb-[24px]">
              <img
                className="rounded-full object-cover h-[75px] w-[75px]"
                src={clientImage}
                alt=""
              />
              <span className="text-2xl md:text-[12px] text-white">
                Adekunle O.{" "}
                <span className="text-[#29ABE2] md:text-[10px] text-base">
                  - Brand O Textiles
                </span>
              </span>
            </div>
            <p className="text-white font-medium text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              dictum massa faucibus et viverra ac egestas sed vitae. Congue
              tempus nisl, fermentum mauris, arcu adipiscing aliquam. Elit
              sollicitudin hendrerit fringilla nunc, faucibus aliquet morbi
              morbi id. Non at habitasse enim urna, felis. Purus massa massa,
              maecenas fermentum mauris sed amet quis.{" "}
            </p>
          </div>
          <div>
            <div className="flex gap-10 items-center mb-[24px]">
              <img
                className="rounded-full object-cover h-[75px] w-[75px]"
                src={blogImage1}
                alt=""
              />
              <span className="text-2xl md:text-[12px] text-white">
                Adekunle O.{" "}
                <span className="text-[#29ABE2] md:text-[10px] text-base">
                  - Brand O Textiles
                </span>
              </span>
            </div>
            <p className="text-white font-medium text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              dictum massa faucibus et viverra ac egestas sed vitae. Congue
              tempus nisl, fermentum mauris, arcu adipiscing aliquam. Elit
              sollicitudin hendrerit fringilla nunc, faucibus aliquet morbi
              morbi id. Non at habitasse enim urna, felis. Purus massa massa,
              maecenas fermentum mauris sed amet quis.{" "}
            </p>
          </div>
          <div>
            <div className="flex gap-10 items-center mb-[24px]">
              <img
                className="rounded-full object-cover h-[75px] w-[75px]"
                src={clientImage}
                alt=""
              />
              <span className="text-2xl md:text-[12px] text-white">
                Adekunle O.{" "}
                <span className="text-[#29ABE2] md:text-[10px] text-base">
                  - Brand O Textiles
                </span>
              </span>
            </div>
            <p className="text-white font-medium text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              dictum massa faucibus et viverra ac egestas sed vitae. Congue
              tempus nisl, fermentum mauris, arcu adipiscing aliquam. Elit
              sollicitudin hendrerit fringilla nunc, faucibus aliquet morbi
              morbi id. Non at habitasse enim urna, felis. Purus massa massa,
              maecenas fermentum mauris sed amet quis.{" "}
            </p>
          </div>
          <div>
            <div className="flex gap-10 items-center mb-[24px]">
              <img
                className="rounded-full object-cover h-[75px] w-[75px]"
                src={blogImage2}
                alt=""
              />
              <span className="text-2xl md:text-[12px] text-white">
                Adekunle O.{" "}
                <span className="text-[#29ABE2] md:text-[10px] text-base">
                  - Brand O Textiles
                </span>
              </span>
            </div>
            <p className="text-white font-medium text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              dictum massa faucibus et viverra ac egestas sed vitae. Congue
              tempus nisl, fermentum mauris, arcu adipiscing aliquam. Elit
              sollicitudin hendrerit fringilla nunc, faucibus aliquet morbi
              morbi id. Non at habitasse enim urna, felis. Purus massa massa,
              maecenas fermentum mauris sed amet quis.{" "}
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}

<div>
  <div>
    <div className="flex gap-10 items-center mb-[24px]">
      <img
        className="rounded-full object-cover h-[75px] w-[75px]"
        src={clientImage}
        alt=""
      />
      <span className="text-2xl md:text-[12px] text-white">
        Adekunle O.{" "}
        <span className="text-[#29ABE2] md:text-[10px] text-base">
          - Brand O Textiles
        </span>
      </span>
    </div>
    <p className="text-white font-medium text-base mb-[117px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, dictum
      massa faucibus et viverra ac egestas sed vitae. Congue tempus nisl,
      fermentum mauris, arcu adipiscing aliquam. Elit sollicitudin hendrerit
      fringilla nunc, faucibus aliquet morbi morbi id. Non at habitasse enim
      urna, felis. Purus massa massa, maecenas fermentum mauris sed amet quis.{" "}
    </p>
  </div>
  <div>
    <div className="flex gap-10 items-center mb-[24px]">
      <img
        className="rounded-full object-cover h-[75px] w-[75px]"
        src={clientImage}
        alt=""
      />
      <span className="text-2xl md:text-[12px] text-white">
        Omisore O.{" "}
        <span className="text-[#29ABE2] md:text-[10px] text-base">
          - Brand O Textiles
        </span>
      </span>
    </div>
    <p className="text-white font-medium text-base mb-[117px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, dictum
      massa faucibus et viverra ac egestas sed vitae. Congue tempus nisl,
      fermentum mauris, arcu adipiscing aliquam. Elit sollicitudin hendrerit
      fringilla nunc, faucibus aliquet morbi morbi id. Non at habitasse enim
      urna, felis. Purus massa massa, maecenas fermentum mauris sed amet quis.{" "}
    </p>
  </div>
  <div>
    <div className="flex gap-10 items-center mb-[24px]">
      <img
        className="rounded-full object-cover h-[75px] w-[75px]"
        src={clientImage}
        alt=""
      />
      <span className="text-2xl md:text-[12px] text-white">
        Ajibade O.{" "}
        <span className="text-[#29ABE2] md:text-[10px] text-base">
          - Brand O Textiles
        </span>
      </span>
    </div>
    <p className="text-white font-medium text-base mb-[117px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, dictum
      massa faucibus et viverra ac egestas sed vitae. Congue tempus nisl,
      fermentum mauris, arcu adipiscing aliquam. Elit sollicitudin hendrerit
      fringilla nunc, faucibus aliquet morbi morbi id. Non at habitasse enim
      urna, felis. Purus massa massa, maecenas fermentum mauris sed amet quis.{" "}
    </p>
  </div>
</div>;
