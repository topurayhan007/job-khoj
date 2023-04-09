import React from "react";

const JobCategory = ({ category }) => {
  const { image, name, num_jobs } = category;
  // console.log(image);
  return (
    <div className="text-left bg-[#f9f9ff] p-10 rounded-lg flex-1">
      <div className="bg-[#efecff] w-max p-3 rounded-lg">
        <img src={image} alt="" />
      </div>
      <h6 className="text-lg text-[#474747] font-extrabold mt-8 mb-2">
        {name}
      </h6>
      <p className="text-base text-[#A3A3A3] font-medium">
        {num_jobs} Jobs Available
      </p>
    </div>
  );
};

export default JobCategory;
