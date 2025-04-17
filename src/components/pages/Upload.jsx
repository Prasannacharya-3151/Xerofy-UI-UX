import React from "react";
import Navbar from "../Header/Navbar";

function Upload(){


return (
  <div>
    <Navbar />
  <div className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen p-10">
    <h1 className=" flex items-center justify-center text-3xl sm:text-4xl md:text-4xl font-bold p-4 text-sky-600 drop-shadow-lg">
      Easy Document Printing
    </h1>
    <p className="flex items-center justify-center text-black z-10 mt-xl text-sm font-bold">
          Upload your files, choose your option,
          <br />
          and get your prints from the nearest location.
        </p>
        <div className="flex item-center justify-center space-x-5 py-40">
        {/* Left Box */}

        <div className="w-80 h-50 bg-blue-200 p-6 rounded-xl shadow-md">
          <div className="">
            {/* <img src={} alt="Upload Icon" className=""/> */}
          </div>
        </div>

        {/* Right Box */}

        <div className="w-80 h-50 bg-green-200 p-6 rounded-xl shadow-md">
        </div>
      </div>
  </div>
   
  </div>
);
}

export default Upload;

