import React, { useEffect, useState } from "react";
import PageHeader from "../PageHeader/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getAppliedJobs } from "../../utilities/fakedb";
import jobsLoader from "../../utilities/jobsLoader";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const options = [{ value: "Remote" }, { value: "Onsite" }];

  const [toggler, setToggler] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  // console.log(jobs);

  useEffect(() => {
    const storedJobs = getAppliedJobs();
    // console.log(storedJobs);
    const savedJobs = [];

    for (const id in storedJobs) {
      const addedJobs = jobs.find((job) => job.id === parseInt(id));
      if (addedJobs) {
        savedJobs.push(addedJobs);
      }
    }

    setAppliedJobs(savedJobs);
    setFilteredJobs(savedJobs);
  }, [jobs]);

  // console.log(appliedJobs);
  console.log(filteredJobs);

  const handleDropdownToggle = () => {
    setToggler(!toggler);
  };

  const handleOptionSelect = (value) => {
    setToggler(false);

    console.log(value);

    const filtered = appliedJobs.filter(
      (appliedJob) => appliedJob.remoteOrOnsite === value
    );
    console.log(filtered);
    setFilteredJobs(filtered);
  };

  // console.log(appliedJobs);
  // console.log(filteredJobs);

  return (
    <div className="mb-2">
      <div className="">
        <PageHeader>Applied Jobs</PageHeader>
      </div>
      <div className="mt-[450px] w-10/12 mx-auto">
        <div className="flex justify-end">
          <div className="flex flex-col justify-end relative w-32">
            <button
              onClick={handleDropdownToggle}
              className="rounded-lg bg-[#e8e9ee] px-5 py-4 font-bold cursor-pointer"
            >
              Filter By <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <ul
              className={
                toggler
                  ? "z-50 absolute top-full right-0 left-0 rounded-br-lg rounded-bl-lg text-center px-1 font-medium bg-slate-100"
                  : "hidden"
              }
            >
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionSelect(option.value)}
                  className="py-2 rounded hover:bg-slate-200 my-1 cursor-pointer"
                >
                  {option.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          {filteredJobs.map((filteredJob) => (
            <AppliedJob key={filteredJob.id} job={filteredJob}></AppliedJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
