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
    <div className="border-[1.5px] border-[#E8E8E8] rounded-md pl-8 pr-10 my-8 flex items-center gap-8">
      <div className="bg-[#F4F4F4] w-56 h-56 my-8 p-8 rounded-lg flex justify-center items-center">
        <img src={companyLogo} className="w-52" alt="" />
      </div>
      <div className="text-left flex-1">
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
            <FontAwesomeIcon icon={faDollar} className="pr-1" /> Salary:{" "}
            {salary}
          </p>
        </div>
      </div>
      <div>
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
