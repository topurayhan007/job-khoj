import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";
import JobSummary from "../JobSummary/JobSummary";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    location,
    remoteOrOnsite,
    fulltimeOrParttime,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    contactInformation,
  } = job;
  const { phone, email } = contactInformation;

  return (
    <div className="mb-2">
      <div className="">
        <PageHeader>Job Details</PageHeader>
      </div>
      <div className="md:mt-[450px] mt-[200px] w-10/12 lg:w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          <div className="lg:col-span-2 text-left text-[#757575] leading-loose text-base">
            <p className="mb-6">
              <span className="font-extrabold text-[#1A1919]">
                Job Description:{" "}
              </span>
              {jobDescription}
            </p>
            <p className="mb-6">
              <span className="font-extrabold text-[#1A1919]">
                Job Responsibility:{" "}
              </span>
              {jobResponsibility}
            </p>
            <p className="mb-6">
              <span className="font-extrabold text-[#1A1919]">
                Educational Requirements:
              </span>{" "}
              <br />
              {educationalRequirements}
            </p>
            <p className="mb-6">
              <span className="font-extrabold text-[#1A1919] ">
                Experiences:
              </span>{" "}
              <br />
              {experiences}
            </p>
          </div>
          <div className="">
            <JobSummary job={job}></JobSummary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
