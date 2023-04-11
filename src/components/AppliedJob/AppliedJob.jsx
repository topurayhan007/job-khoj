import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
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
    <div className="border-[1.5px] border-[#E8E8E8] rounded-md md:pl-8 md:pr-10 md:px-0 pt-5 pb-7 md:py-8  my-8 flex md:flex-row flex-col items-center md:gap-8 gap-2">
      <div className="bg-[#F4F4F4] lg:w-56 md:w-48 md:h-48 lg:h-56 h-44 md:my-8 md:mt-0 mt-5 md:mb-0 mb-3 p-8 rounded-lg flex justify-center items-center">
        <img src={companyLogo} className="lg:w-52 w-44" alt="" />
      </div>
      <div className="text-left md:flex-1">
        <h6 className="text-lg text-[#474747] font-extrabold md:mt-8 mb-2">
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
        <div className="mt-4 mb-6 flex lg:flex-row flex-col gap-5 lg:items-center">
          <p className="text-base text-[#757575] font-medium">
            <FontAwesomeIcon icon={faLocationDot} className="pr-1" /> {location}
          </p>
          <p className="text-base text-[#757575] font-medium">
            <FontAwesomeIcon icon={faDollar} className="pr-1" /> Salary:{" "}
            {salary}
          </p>
        </div>
      </div>
      <div className="md:pb-0 pb-6">
        <Link
          to={`/jobs/${id}`}
          className="text-base text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded px-5 py-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
