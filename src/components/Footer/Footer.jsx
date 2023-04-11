import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="mt-36 bg-black text-left">
      <div className="w-10/12 mx-auto">
        <div className="mb-12 pt-32 grid lg:grid-cols-5 gap-5">
          <div className="text-white text-base leading-9">
            <p className="text-2xl font-bold mb-7">JobKhoj</p>
            <p className="text-[#757575] leading-normal">
              There are many variations of passages of Lorem Ipsum, but the
              majority have suffered alteration in some form.
            </p>
            <div>
              <div className="bg-white rounded-full">
                <FontAwesomeIcon
                  icon="fa-brands fa-instagram"
                  style={{ color: "#337fff" }}
                />
              </div>
              <div className="bg-white rounded-full">
                <FontAwesomeIcon
                  icon="fa-brands fa-twitter"
                  style={{ color: "#33ccff" }}
                />
              </div>
              <div className="bg-white rounded-full">
                <FontAwesomeIcon
                  icon="fa-brands fa-instagram"
                  style={{ color: "#e74582" }}
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
        <div className="flex justify-between items-center text-sm text-[#757575] mt-12 pb-24">
          <p>
            @2023 <span className="font-bold">JobKhoj.</span> All Rights
            Reserved
          </p>
          <p>
            Powered by <span className="font-bold">JobKhoj</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
