import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
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

  return <div>HEllO: {email}</div>;
};

export default JobDetails;
