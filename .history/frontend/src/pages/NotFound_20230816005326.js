import React from "react";
import Navbar from "../component/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[81vh]">
        <p className="fort-semibold text-4xl">OOPSPage Not Found</p>
      </div>
    </>
  );
};

export default NotFound;
