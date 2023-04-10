import React from "react";
import { addToDb } from "../../utilities/fakedb";

const JobSummary = ({ job }) => {
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

  const handleAddToDb = (id) => {
    // console.log(id);
    addToDb(id);
  };

  return (
    <div className="">
      <div className="text-left p-8 bg-gradient-to-r from-[#f2f4ff] to-[#f5f1ff] rounded-lg">
        <h5 className="text-lg text-[#1A1919] font-extrabold mb-6">
          Job Details
        </h5>
        <hr className="border border-indigo-200" />
        <div className="flex mt-6 items-center">
          <img src="/assets/icons/Frame.png" alt="" />
          <p className="font-bold text-[#757575] ml-2">
            <span className="text-[#474747]">Salary : </span>
            {salary} (Per Year)
          </p>
        </div>
        <div className="flex mt-4 items-center">
          <img src="/assets/icons/Frame-1.png" alt="" />
          <p className="font-bold text-[#757575] ml-2">
            <span className="text-[#474747]">Job Title : </span>
            {jobTitle}
          </p>
        </div>
        <h5 className="text-lg text-[#1A1919] font-extrabold my-6">
          Contact Information
        </h5>
        <hr className="border border-indigo-200" />
        <div className="flex mt-6 items-center">
          <img src="/assets/icons/Frame-2.png" alt="" />
          <p className="font-bold text-[#757575] ml-2">
            <span className="text-[#474747]">Phone : </span>
            {phone}
          </p>
        </div>
        <div className="flex mt-6 items-center">
          <img src="/assets/icons/Frame-3.png" alt="" />
          <p className="font-bold text-[#757575] ml-2">
            <span className="text-[#474747]">Email : </span>
            {email}
          </p>
        </div>
        <div className="flex mt-6 items-center">
          <img src="/assets/icons/Frame-4.png" alt="" />
          <p className="font-bold text-[#757575] ml-2">
            <span className="text-[#474747]">Address : </span>
            {location}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleAddToDb(id)}
        className="w-full mt-6 text-base text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg px-6 py-4"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobSummary;
