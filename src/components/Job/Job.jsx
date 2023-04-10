import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
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
    <div className="border-[1.5px] border-[#E8E8E8] rounded-md p-10">
      <img src={companyLogo} className="h-10" alt="" />
      <h6 className="text-lg text-[#474747] font-extrabold mt-8 mb-2">
        {jobTitle}
      </h6>
      <p className="text-base text-[#757575] font-medium">{companyName}</p>
      <div className="my-4 flex gap-4 items-center">
        <button className="rounded px-3 py-1 font-bold border-[1.5px] border-indigo-400  text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          {remoteOrOnsite}
        </button>
        <button className="rounded px-3 py-1 font-bold border-[1.5px] border-indigo-400  text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          {fulltimeOrParttime}
        </button>
      </div>
      <div className="mt-4 mb-6 flex gap-5 items-center">
        <p className="text-base text-[#757575] font-medium">
          <FontAwesomeIcon icon={faLocationDot} className="pr-1" /> {location}
        </p>
        <p className="text-base text-[#757575] font-medium">
          <FontAwesomeIcon icon={faDollar} className="pr-1" /> Salary: {salary}
        </p>
      </div>
      <Link
        to={`/jobs/${id}`}
        className="text-base text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded px-4 py-2.5"
      >
        View Details
      </Link>
    </div>
  );
};

export default Job;
