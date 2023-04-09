import React from "react";

const SectionHeader = ({ children }) => {
  return (
    <div className="mt-32">
      <h2 className="text-4xl font-extrabold mb-4">{children}</h2>
      <p className="text-base font-medium text-[#757575] mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
    </div>
  );
};

export default SectionHeader;
