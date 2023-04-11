import React, { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

const JobCategoryContainer = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("jobCategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="md:w-10/12 lg:w-[1320px] px-5 mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <JobCategory key={category.id} category={category}></JobCategory>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryContainer;
