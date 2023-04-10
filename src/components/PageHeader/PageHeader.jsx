import React from "react";

const PageHeader = ({ children }) => {
  return (
    <div className="bg-[#f9f9ff] absolute top-0 w-full -z-50 ">
      <div className="flex justify-end">
        <img src="/assets/images/Vector-1.png" className="" alt="" />
      </div>
      <h3 className="text-3xl font-bold">{children}</h3>
      <div className="flex justify-start">
        <img src="/assets/images/Vector.png" alt="" />
      </div>
    </div>
  );
};

export default PageHeader;
