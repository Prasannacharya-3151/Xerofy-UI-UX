import React from "react";
import Navbar from "../Header/Navbar";
import { useNavigate, Link } from "react-router-dom";


function OrderTracking() {

  const navigate = useNavigate();


  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-start">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-8">

          
          <div className="flex justify-center mb-10">
            
          </div>

          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
                Order Tracking
                </h2>
            <p className="text-sm text-gray-600">
                Estimate Pickup: 
                <span className="font-medium text-gray-800">{" "}
                    Today, 12PM
                    </span>
                </p>
          </div>

          
          <div className="space-y-6  border-l-2 border-gray-200 pl-6">
            <div className="relative">
              
              <p className="font-semibold text-lg text-gray-800">
                Order Received 
                <span className="text-sm text-gray-500 ml-120">
                    10:15
                    </span>
                    </p>
              <p className="text-sm text-gray-600">
                Order received! We're now processing it.
                </p>
            </div>
            <div className="relative">
             
              <p className="font-semibold text-lg text-gray-800">
                Printing 
                <span className="text-sm text-gray-500 ml-135">
                    10:30
                    </span>
                    </p>
              <p className="text-sm text-gray-600">
                Your order is being printed. Hang tight!
                </p>
            </div>
            <div className="relative">
              
              <p className="font-semibold text-lg text-gray-800">
                Ready for Pickup 
                <span className="text-sm text-gray-500 ml-117">
                    11:00
                    </span>
                    </p>
              <p className="text-sm text-gray-600">
                Your order is ready for pickup.
                </p>
            </div>
            <div className="relative">
              
              <p className="font-semibold text-lg text-gray-800">
                Completed 
                <span className="text-sm text-gray-500 ml-129">
                    11:30
                    </span></p>
              <p className="text-sm text-gray-600">
                Your order has been completed.
                </p>
            </div>
          </div>

          
          <div className="bg-white shadow-lg rounded-xl p-6 mt-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              
              <h4 className="font-semibold text-xl text-gray-800">
                Pickup Instructions
                </h4>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Your order has been successfully completed. Please visit the selected pickup location and present your order number to collect your printed documents. Thank you for choosing our service!
            </p>

            <div className="bg-gray-200 rounded-lg text-center text-xl font-bold py-3 mt-5 tracking-wide">
              #UX3Y8OYZ
            </div>
          </div>

          
          <button
          onClick={()=> navigate("/upload")}
            className="w-full rounded-lg text-white bg-purple-600 hover:bg-purple-700 py-3 text-lg font-semibold mt-8"
          >
            Place Another Order
          </button>

        </div>
      </div>
    </div>
  );
}

export default OrderTracking;
