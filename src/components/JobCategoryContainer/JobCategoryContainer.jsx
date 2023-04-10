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
    <div className="w-10/12 mx-auto flex justify-center items-center gap-6">
      {categories.map((category) => (
        <JobCategory key={category.id} category={category}></JobCategory>
      ))}
    </div>
  );
};

export default JobCategoryContainer;
