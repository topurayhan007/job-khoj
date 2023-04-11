import React from "react";

const PageHeader = ({ children }) => {
  return (
    <div className="bg-[#f9f9ff] absolute top-0 w-full -z-50 ">
      <div className="flex justify-end">
        <img
          src="/assets/images/Vector-1.png"
          className="lg:w-auto w-2/5"
          alt=""
        />
      </div>
      <h3 className="md:text-4xl text-2xl font-extrabold">{children}</h3>
      <div className="flex justify-start">
        <img
          src="/assets/images/Vector.png"
          className="lg:w-auto w-2/5"
          alt=""
        />
      </div>
    </div>
  );
};

export default PageHeader;
