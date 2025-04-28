import React from "react"
import Navbar from "../Header/Navbar";
import {useNavigate, Link} from "react-router-dom"
import check from "../../assets/check.png"


function Confirm(){

    const navigate= useNavigate();

    const handleDownloadReceipt=()=>{
        alert("Receipt downloading...")

        setTimeout(()=>{
            navigate("/ordertracking")
        }, 2000)
    };

    return(
        <div>
            <Navbar />
        <div className="max-w-2xl m-auto p-6 px-4 sm:px-6 bg-white rounded-xl shadow-lg mt-6">
            <button 
            onClick={()=> navigate("/upload")}
            className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
                Back to home
                </button>
                <div className="flex items-center justify-center mt-15">
                    <img src={check} alt="check icon" className="h-20 w-20"></img>
                    </div>
                    <div>
                    <h1 className="text-center mt-5 text-2xl font-serif">Order Confirmed!</h1>
                    <p className="text-center mt-2 text-gray-400">Your order <span class="font-md">#UX3Y80YZ</span> has been successfully placed.</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 mt-20">
                        <div className="bg-white rounded-xl shadow p-4 border border-gray-100">
                           <h3 className="flex item-center gap-1 text-gray-800 font-semibold mb-1">Pickup Location</h3>
                           <p className="text-gray-700 text-sm">Prasad Printers</p>
                           <p className="text-gray-600 text-xs">Kulsekhar, Mangalore</p>
                           <p className="text-xs text-gray-500 mt-1">8km away</p>
                           <p className="text-xs text-gray-500">Open until{" "}
                            <span className="font-medium">8PM</span></p>  
                        </div>
                        <div className="bg-white rounded-xl shadow p-4 border border-gray-100">
                        <h3 className="text-gray-800 font-semibold mb-2">Order Details</h3>
                        <div classNAme="text-sm text-gray-700 space-y-1">
                            <div className="flex justify-between">
                                <span>Print Type:</span>
                                <span>Single-sided, Color</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Copies:</span>
                                <span>1</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Files:</span>
                                <span>1 document</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Payment Method:</span>
                                <span>Phone Pay</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Paper Size:</span>
                                <span>1/2</span>
                            </div>
                            <div className="border-t pt-2 flex justify-between font-bold mt-3">
                                <span>Total:</span>
                                <span>Rs.20</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="mt-8 flex text-center justify-center flex-col sm:flex-row gap-3">
                        <button
                        onClick={handleDownloadReceipt}
                        className="rounded-lg text-white bg-purple-600 hover:bg-purple-700 py-2 px-4 text-sm mt-5">
                            Download Receipt
                        </button>
                    </div>
                    
                </div>
                </div>
    )
}

export default Confirm;