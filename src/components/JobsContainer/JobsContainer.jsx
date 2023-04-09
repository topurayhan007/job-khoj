import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const JobsContainer = ({ jobs }) => {
  // console.log(jobs);
  const [featureJobs, setFeatureJobs] = useState([]);

  useEffect(() => {
    const lessJobs = jobs.slice(0, 4);
    // console.log(lessJobs);
    setFeatureJobs(lessJobs);
  }, []);

  const handleShowAll = () => {
    setFeatureJobs(jobs);
  };

  return (
    <div className="w-10/12 mx-auto mb-14">
      <div className="grid grid-cols-2 text-left gap-6">
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
