import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#f9f9ff] pt-5">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div className="text-left">
          <h1 className="text-7xl font-extrabold leading-tight">
            One Step <br /> Closer To Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
              Dream Job
            </span>
          </h1>
          <p className="text-[#757575] text-base font-medium leading-relaxed py-6">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className="text-base text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg px-6 py-3">
            Get Started
          </button>
        </div>
        <div>
          <img src="assets/images/hardy.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
