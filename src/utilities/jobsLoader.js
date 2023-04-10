const jobsLoader = async () => {
  const loadedJobs = await fetch("jobs.json");
  // const loadedJobs = await fetch("/jobs.json");
  const jobs = await loadedJobs.json();

  return jobs;
};

export default jobsLoader;
