import React from "react";
import JobCategory from "../JobCategory/JobCategory";

const JobCategoryContainer = ({ categories }) => {
  return (
    <div className="w-10/12 mx-auto flex justify-center items-center gap-6">
      {categories.map((category) => (
        <JobCategory key={category.id} category={category}></JobCategory>
      ))}
    </div>
  );
};

export default JobCategoryContainer;
