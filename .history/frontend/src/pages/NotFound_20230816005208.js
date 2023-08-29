import React from "react";
import Navbar from "../component/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <p className="fort-semibold text-3xl">Page Not Found</p>
      </div>
    </>
  );
};

export default NotFound;
