import React from "react";
import Banner from "../Banner/Banner";
import SectionHeader from "../SectionHeader/SectionHeader";
import JobCategoryContainer from "../JobCategoryContainer/JobCategoryContainer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { categories, jobs } = useLoaderData();
  // console.log(categories);
  return (
    <div>
      <Banner></Banner>
      <SectionHeader>Job Category List</SectionHeader>
      <JobCategoryContainer categories={categories}></JobCategoryContainer>
    </div>
  );
};

export default Home;
