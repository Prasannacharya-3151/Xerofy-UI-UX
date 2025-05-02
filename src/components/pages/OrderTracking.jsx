import React from "react";
import Navbar from "../Header/Navbar";
import { useNavigate } from "react-router-dom";

function OrderTracking() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
        {/* <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-5 md:p-8 mt-6"> */}

          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Order Tracking
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Estimate Pickup:{" "}
              <span className="font-medium text-gray-800">Today, 12PM</span>
            </p>
          </div>

        
          <div className="space-y-6 border-l-2 border-gray-200 pl-4 md:pl-6">
            {[
              { status: "Order Received", time: "10:15", message: "Order received! We're now processing it." },
              { status: "Printing", time: "10:30", message: "Your order is being printed. Hang tight!" },
              { status: "Ready for Pickup", time: "11:00", message: "Your order is ready for pickup." },
              { status: "Completed", time: "11:30", message: "Your order has been completed." },
            ].map((item, index) => (
              <div className="relative" key={index}>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-base md:text-lg text-gray-800">
                    {item.status}
                  </p>
                  <span className="text-xs md:text-sm text-gray-500">{item.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.message}</p>
              </div>
            ))}
          </div>

          
          <div className="bg-white shadow-lg rounded-xl p-4 md:p-5 mt-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <h4 className="font-semibold text-lg md:text-xl text-gray-800">
                Pickup Instructions
              </h4>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Your order has been successfully completed. Please visit the selected pickup location and present your order number to collect your printed documents. Thank you for choosing our service!
            </p>

            <div className="bg-gray-200 rounded-lg text-center text-lg md:text-xl font-bold py-3 mt-5 tracking-wide">
              #UX3Y8OYZ
            </div>
          </div>

          
          <button
            onClick={() => navigate("/upload")}
            className="w-full rounded-lg text-white bg-purple-600 hover:bg-purple-700 py-3 text-base md:text-lg font-semibold mt-6"
          >
            Place Another Order
          </button>

        </div>
      </div>
    // </div>
  );
}

export default OrderTracking;
