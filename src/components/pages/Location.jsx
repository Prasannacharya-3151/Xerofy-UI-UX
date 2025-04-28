import React from "react";
import Navbar from "../Header/Navbar";
import { useNavigate, Link } from "react-router-dom";

function Location() {
  const navigate = useNavigate();

  navigate("/payment")

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl m-auto p-6 px-4 sm:px-6 bg-white rounded-xl shadow-lg mt-6">
        <h1 className="mb-2 text-center font-bold text-2xl text-sky-600">
          Easy Document Printing
        </h1>
        <p className="text-center text-sm text-gray-600">
          Upload your files, choose your option, and get your prints from the
          nearest location.
        </p>
        {/* circle 1 */}
        <div className="flex justify-center gap-4 p-4 mt-3">
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-gray-100 h-12 w-12 flex items-center justify-center shadow-lg font-bold text-gray-600">
              1
            </div>
            <p className="mt-2 text-xs text-gray-600">Upload</p>
          </div>

          {/* /circle 2 */}
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-gray-100 h-12 w-12 flex items-center justify-center shadow-lg font-bold text-gray-600">
              2
            </div>
            <p className="mt-2 text-xs text-gray-600">Option</p>
          </div>

          {/* /circle 3 */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-400 h-12 w-12 flex items-center justify-center shadow-lg text-white font-bold">
              3
            </div>
            <p className="mt-2 text-xs text-sky-600">Location</p>
          </div>

          {/* / circle3 */}
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-gray-100 h-12 w-12 flex items-center justify-center shadow-lg font-bold text-gray-600">
              4
            </div>
            <p className="mt-2 text-xs text-gray-600">Payment</p>
          </div>
        </div>
        <h2 className="text-center mt-3 font-semibold text-base text-gray-800">
          Select Your Location
        </h2>
        <div className="flex items-center justify-between mt-6 bg-white p-3 rounded-2xl shadow-md">
          <label className="text-gray-800 font-semibold text-lg">
            Number of Copies
          </label>
          <button
            type="sumbit"
            className="border border-gray-300 bg-gray-50 text-gray-700 px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          >
            📍Use Current Location
          </button>
        </div>
        <div>
          <h3 className="text-xs px-3 font-semibold text-gray-700 mb-1 mt-10">
            Choose Your Nearest Location
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="px-3 py-3 border rounded-xl border-gray-400 hover:border-sky-500 hover:bg-sky-50">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">---</span>
              </div>
            </div>
            <div className="px-3 py-3 border rounded-xl border-gray-400 hover:border-sky-500 hover:bg-sky-50">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">---</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="px-3 py-3 border rounded-xl border-gray-400 hover:border-sky-500 hover:bg-sky-50">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">---</span>
              </div>
            </div>
            <div className="px-3 py-3 border rounded-xl border-gray-400 hover:border-sky-500 hover:bg-sky-50">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">---</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="px-3 py-3 border rounded-xl border-gray-400 hover:border-sky-500 hover:bg-sky-50">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">---</span>
              </div>
            </div>
            <div className="px-3 py-3 border rounded-xl border-gray-400 hover:border-sky-500 hover:bg-sky-50">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">---</span>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white p-4 rounded-2xl shadow-md border border-gray-300">
            <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
              Cost Breakdown
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Estimated price for your order
            </p>
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center gap-2 text-gray-700">
                1-Page
              </span>
              <span className="text-gray-800 font-medium">Rs.15</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center gap-2 text-gray-700">
                Single-Sided
              </span>
              <span className="text-gray-800 font-medium">Rs.0</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center gap-2 text-gray-700">
                Color Print
              </span>
              <span className="text-gray-800 font-medium">Rs.10</span>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">Total</span>
              <span className="text-sky-600 font-bold text-lg">Rs.25</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              Back
            </button>
            <button
            onClick={()=> navigate("/payment")} className="px-4 py-2 rounded text-white transition bg-blue-400 hover:bg-blue-500">
              Next
            </button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Location;
