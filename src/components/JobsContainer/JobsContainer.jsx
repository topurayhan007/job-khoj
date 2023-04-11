import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const JobsContainer = () => {
  // console.log(jobs);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const [featureJobs, setFeatureJobs] = useState([]);
  // console.log(featureJobs);

  useEffect(() => {
    // setFeatureJobs(jobs);
    const lessJobs = jobs.slice(0, 4);
    // console.log(lessJobs);
    setFeatureJobs(lessJobs);
  }, [jobs]);

  const handleShowAll = () => {
    setFeatureJobs(jobs);
  };

  return (
    <div className="md:w-10/12 lg:w-[1320px] px-5 mx-auto mb-14">
      <div className="grid md:grid-cols-2 text-left gap-6">
        {featureJobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <button
        onClick={handleShowAll}
        className={
          featureJobs.length > 4
            ? "hidden"
            : "mt-10 text-base text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg px-6 py-3"
        }
      >
        See All Jobs
      </button>
    </div>
  );
};

export default JobsContainer;
