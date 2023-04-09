import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="flex justify-between items-center pt-10">
      <div>
        <h3 className="text-3xl text-[#1A1919] font-extrabold">JobKhoj</h3>
      </div>
      <div className="flex gap-8 justify-center text-base font-bold">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/statistics">Statistics</ActiveLink>
        <ActiveLink to="/appliedjobs">Applied Jobs</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </div>
      <div>
        <button className="text-base text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg px-6 py-3">
          Start Applying
        </button>
      </div>
    </nav>
  );
};

export default Header;
