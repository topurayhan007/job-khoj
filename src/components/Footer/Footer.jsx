import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="md:mt-36 mt-20 bg-black text-left">
      <div className="w-10/12 lg:w-[1320px] mx-auto">
        <div className="mb-12 md:pt-32 pt-20 grid lg:grid-cols-5 md:grid-cols-2 gap-5">
          <div className="text-white text-base leading-9">
            <p className="text-2xl font-extrabold mb-7">JobKhoj</p>
            <p className="text-[#757575] leading-normal">
              There are many variations of passages of Lorem Ipsum, but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex justify-start items-center mt-5 gap-3">
              <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <FontAwesomeIcon
                  className="fa-lg"
                  icon={faFacebookF}
                  style={{ color: "#337fff" }}
                />
              </div>
              <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <FontAwesomeIcon
                  className="fa-lg"
                  icon={faTwitter}
                  style={{ color: "#33ccff" }}
                />
              </div>
              <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <FontAwesomeIcon
                  className="fa-lg text-transparent bg-clip-text bg-gradient-to-tr from-[#f2cf74] via-[#d83c84] to-[#6949e2]"
                  icon={faInstagram}
                  style={{ color: "#d83c84" }}
                />
              </div>
            </div>
          </div>
          <div className="text-white leading-9">
            <p className="font-bold mb-4">Company</p>
            <p className="text-[#757575]">About Us</p>
            <p className="text-[#757575]">Work</p>
            <p className="text-[#757575]">Latest News</p>
            <p className="text-[#757575]">Careers</p>
          </div>
          <div className="text-white leading-9">
            <p className="font-bold mb-4">Product</p>
            <p className="text-[#757575]">Prototype</p>
            <p className="text-[#757575]">Plans & Pricing</p>
            <p className="text-[#757575]">Customers</p>
            <p className="text-[#757575]">Integrations</p>
          </div>
          <div className="text-white leading-9">
            <p className="font-bold mb-4">Support</p>
            <p className="text-[#757575]">Help Desk</p>
            <p className="text-[#757575]">Sales</p>
            <p className="text-[#757575]">Become a Partner</p>
            <p className="text-[#757575]">Developers</p>
          </div>
          <div className="text-white leading-9">
            <p className="font-bold mb-4">Contact</p>
            <p className="text-[#757575]">524 Broadway, NYC</p>
            <p className="text-[#757575]">+1 777-978-5570</p>
          </div>
        </div>
        <hr className="border-[#757575]" />
        <div className="flex md:flex-row flex-col md:gap-0 gap-3 justify-between items-center text-sm text-[#757575] mt-12 pb-24">
          <p className="tracking-wider">
            @2023 <span className="font-extrabold">JobKhoj.</span> All Rights
            Reserved
          </p>
          <p className="tracking-wider">
            Powered by <span className="font-extrabold">JobKhoj</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
