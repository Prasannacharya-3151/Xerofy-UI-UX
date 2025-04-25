import React from "react";
import Navbar from "./Header/Navbar";

function Payment() {
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
            <div className="rounded-full border border-gray-100 h-12 w-12 flex items-center justify-center shadow-lg font-bold text-gray-600">
              3
            </div>
            <p className="mt-2 text-xs text-gray-600">Location</p>
          </div>

          {/* / circle3 */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-400 h-12 w-12 flex items-center justify-center shadow-lg text-white font-bold">
              4
            </div>
            <p className="mt-2 text-xs text-sky-600">Payment</p>
          </div>
        </div>
        <h2 className="text-center mt-3 font-semibold text-base text-gray-800">
          Select Your Payment Method
        </h2>
        <div>
          <h3 className="text-xs px-3 font-semibold text-gray-700 mb-1 mt-10">
            Payment method
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="px-3 py-3 border rounded-xl border-gray-400 hover:border-sky-500 hover:bg-sky-50">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">Phone Pay</span>
              </div>
            </div>
            <div className="px-3 py-3 border rounded-xl border-gray-400 hover:border-sky-500 hover:bg-sky-50">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">Google Pay</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="px-3 py-3 border rounded-xl border-gray-400 hover:border-sky-500 hover:bg-sky-50">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">Paytm</span>
              </div>
            </div>
            <div className="px-3 py-3 border rounded-xl border-gray-400 hover:border-sky-500 hover:bg-sky-50">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">Pay at Pickup</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-2xl p-4 border border-gray-300 shadow-md">

        </div>
      </div>
    </div>
  );
}

export default Payment;
