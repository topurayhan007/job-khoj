import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import ActiveLink from "../ActiveLink/ActiveLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const [toggler, setToggler] = useState(false);

  const handleToggler = () => {
    setToggler(!toggler);
  };

  return (
    <header
      className={location.pathname === "/" ? "bg-[#f9f9ff]" : "bg-transparent"}
    >
      <nav className="flex lg:flex-row flex-col relative justify-between lg:items-center items-start text-center md:w-10/12 lg:w-[1320px]  mx-auto md:pt-10 pt-6 md:gap-0 gap-4">
        <div className="relative">
          <h3 className="lg:text-4xl md:px-0 px-3 text-3xl text-[#1A1919] font-extrabold">
            Job
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
              Khoj
            </span>
          </h3>
        </div>
        <div
          className={`flex z-50 absolute top-full lg:mt-0 mt-4 right-0 left-0 lg:flex-row flex-col flex-1 py-8 lg:py-0 lg:pt-0 lg:bg-transparent bg-[#ebeeff] justify-center items-center lg:relative w-full ${
            toggler ? "hidden lg:block" : "block"
          } `}
        >
          <div
            className={`flex md:px-0 px-3 lg:flex-row flex-col gap-8 justify-center text-lg font-bold w-full`}
          >
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/statistics">Statistics</ActiveLink>
            <ActiveLink to="/appliedjobs">Applied Jobs</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </div>
          <div className="pt-8 lg:pt-0  lg:absolute lg:right-0">
            <button
              className={`text-base lg:hidden ${
                toggler ? "hidden lg:block" : "block"
              } text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg px-6 py-3`}
            >
              Start Applying
            </button>
          </div>
        </div>
        <div>
          <button className="text-base lg:block hidden text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg px-6 py-3">
            Start Applying
          </button>
        </div>
        <button
          onClick={handleToggler}
          className="bg-[#ebeeff] rounded absolute right-0 mr-3 lg:hidden px-3 py-1 text-[#9d79ff] cursor-pointer"
        >
          {toggler ? (
            <FontAwesomeIcon icon={faBars} className="fa-lg"></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faXmark} className="fa-lg"></FontAwesomeIcon>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
