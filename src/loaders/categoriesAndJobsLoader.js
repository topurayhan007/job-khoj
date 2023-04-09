const categoriesAndJobsLoader = async () => {
  const loadedCatergories = await fetch("jobCategories.json");
  const categories = await loadedCatergories.json();

  const loadedJobs = await fetch("jobs.json");
  const jobs = await loadedJobs.json();

  return { categories, jobs };
};

export default categoriesAndJobsLoader;
