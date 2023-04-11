import React from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const location = useLocation();

  return (
    <header
      className={location.pathname === "/" ? "bg-[#f9f9ff]" : "bg-transparent"}
    >
      <nav className="flex md:flex-row flex-col justify-between md:items-center items-start md:text-center text-left md:w-10/12 md:px-0 px-3 mx-auto pt-10 md:gap-0 gap-4">
        <div>
          <h3 className="md:text-4xl text-3xl text-[#1A1919] font-extrabold">
            Job
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
              Khoj
            </span>
          </h3>
        </div>
        <div className="md:flex md:flex-row hidden flex-col gap-8 justify-center text-base font-bold">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/statistics">Statistics</ActiveLink>
          <ActiveLink to="/appliedjobs">Applied Jobs</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
        </div>
        <div>
          <button className="text-base md:block hidden text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg px-6 py-3">
            Start Applying
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
