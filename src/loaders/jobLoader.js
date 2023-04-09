const jobLoader = async (id) => {
  const loadedJobs = await fetch("jobs.json");
  const jobs = await loadedJobs.json();

  const job = jobs.find((job) => job.id === parseInt(id));

  return job;
};

export default jobLoader;
