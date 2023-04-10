import { ToastContainer, toast } from "react-toastify";

// use local storage to manage cart data

const addToDb = (id) => {
  let appliedJobs = getAppliedJobs();
  let message = "";
  // add quantity
  const quantity = appliedJobs[id];
  if (!quantity) {
    appliedJobs[id] = 1;
    message = "success";
  } else {
    // const newQuantity = quantity + 1;
    // appliedJobs[id] = newQuantity;
    message = "error";
  }
  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
  message === "success"
    ? toast.success("Application Sent!", {
        position: toast.POSITION.TOP_CENTER,
      })
    : toast.warning("You have already applied!", {
        position: toast.POSITION.TOP_CENTER,
      });
};

const removeFromDb = (id) => {
  const appliedJobs = getappliedJobs();
  if (id in appliedJobs) {
    delete appliedJobs[id];
    localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
  }
};

const getAppliedJobs = () => {
  let appliedJobs = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    appliedJobs = JSON.parse(storedCart);
  }
  return appliedJobs;
};

const deleteappliedJobs = () => {
  localStorage.removeItem("applied-jobs");
};

export { addToDb, removeFromDb, getAppliedJobs, deleteappliedJobs };
