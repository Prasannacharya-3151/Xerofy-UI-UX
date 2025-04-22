import React, {useState} from "react";
import Navbar from "../Header/Navbar";
import { useNavigate, Link } from "react-router-dom";

function Option(){

    const [selectedSide, setSelectedSide] = useState("false")
    console.log("selectedSide", selectedSide)

    const [colorOption, setColorOption] = useState("")
    console.log("colorOption", colorOption)

    const [paperSize, setPaperSize] = useState("")
    console.log("paperSize", paperSize)

    const navigate = useNavigate();



    return(
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-2xl m-auto p-6 px-4 sm:px-6 bg-white rounded-xl shadow-lg mt-6">
                <h1 className="mb-2 text-center font-bold text-2xl text-sky-600">
                    Easy Document Printing
                    </h1>
                    <p className="text-center text-sm text-gray-600">
                    Upload your files, choose your option,
                    and get your prints from the nearest location.
                    </p>
                    {/* circle 1 */}
                    <div className="flex justify-center gap-4 p-4 mt-3">
                        <div className="flex flex-col items-center">
                            <div className="rounded-full border border-gray-100 h-12 w-12 flex items-center justify-center shadow-lg font-bold text-gray-600">1</div>
                            <p className="mt-2 text-xs text-gray-600">Upload</p>
                        </div>

                    {/* /circle 2 */}
                        <div className="flex flex-col items-center">
                        <div className="rounded-full bg-blue-400 h-12 w-12 flex items-center justify-center shadow-lg text-white font-bold">2</div>
                        <p className="mt-2 text-xs text-sky-600">Option</p>
                        </div>

                        {/* /circle 3 */}
                        <div className="flex flex-col items-center">
                        <div className="rounded-full border border-gray-100 h-12 w-12 flex items-center justify-center shadow-lg font-bold text-gray-600">3</div>
                        <p className="mt-2 text-xs text-gray-600">Location</p>
                        </div>

                        {/* / circle3 */}
                        <div className="flex flex-col items-center">
                        <div className="rounded-full border border-gray-100 h-12 w-12 flex items-center justify-center shadow-lg font-bold text-gray-600">4</div>
                        <p className="mt-2 text-xs text-gray-600">Payment</p>
                        </div>
                    </div>
                    <h2 className="text-center mt-3 font-semibold text-base text-gray-800">Choose Your Print Preferences</h2>
                    <div>
                        <h3 className="text-xs px-3 font-semibold text-gray-700 mb-1 mt-10">Printing Side</h3>
                        <div className="grid grid-cols-2 gap-5">
                            <div 
                            onClick={() => setSelectedSide("single")}
                            className={`px-3 py-3 border rounded-xl border-gray-300 ${selectedSide === "single" ? "border-blue-500 bg-blue-50":""}`}
                                >
                                <div className="flex items-center gap-2">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-6">
                                <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <span className="font-medium text-gray-800">Single Sided</span>
                                </div>
                                </div>
                                <div 
                                onClick={()=> setSelectedSide("double")}
                                className={`px-3 py-3 border rounded-xl border-gray-300 ${selectedSide === "double" ? "border-blue-700 bg-blue-50":""}`}>
                                    <div className="flex items-center gap-2">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-6">
                                        <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                        <span className="font-medium text-gray-800">Double Sided</span>
                                        </div>
                                </div>
                                </div>
                        </div>
                        <div>
                        <h3 className="text-xs px-3 font-semibold text-gray-700 mb-1 mt-5">Color Options</h3>
                        <div className="grid grid-cols-2 gap-5">
                            <div 
                            onClick={()=> setColorOption("Black")}
                            className={`px-3 py-3 border rounded-xl border-gray-300 ${colorOption === "Black" ? "bg-blue-50 border-blue-700":""}`}>
                                <div className="flex items-center gap-2">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-6">
                                <path stroke-linecap="round"  
                                stroke-linejoin="round" 
                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                                </svg>

                                <span className="font-medium text-gray-800">Black & White</span>
                                </div>
                                </div>
                                <div 
                                onClick={()=> setColorOption("color")}
                                className={`px-3 py-3 border rounded-xl border-gray-300 ${colorOption === "color" ? "border-blue-500 bg-blue-50":""}`}>
                                    <div className="flex items-center gap-3">
                                        <div className="h-5 w-5">
                                    <img src="https://cdn-icons-png.flaticon.com/512/881/881419.png" />
                                    </div>
                                        <span className="font-medium text-gray-800">Color</span>
                                        </div>
                                </div>
                                </div>
                        </div>
                        <div>
                        <h3 className="text-xs px-3 font-semibold text-gray-700 mb-1 mt-5">Paper Sizes</h3>
                        <div className="grid grid-cols-2 gap-5">
                            <div 
                            onClick={()=> setPaperSize("fullpage")}
                            className={`px-3 py-3 border rounded-xl border-gray-300 ${paperSize === "fullpage" ? "bg-blue-50 border-blue-500":""}`}>
                                <div className="flex items-center gap-2">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-6">
                                <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                </svg>

                                <span className="font-medium text-gray-800">Full Page</span>
                                </div>
                                </div>
                                <div 
                                onClick={()=> setPaperSize("1/2")}
                                className={`px-3 py-3 border rounded-xl border-gray-300 ${ paperSize === "1/2" ? "border-blue-500 bg-blue-50":""}`}>
                                    <div className="flex items-center gap-2">
                                        <div className="h-6 w-7">
                                            <img src="" alt="" />
                                        </div>
                                        <span className="font-medium text-gray-800">1/2 Page</span>
                                        </div>
                                </div>
                                </div>
                        </div>
                        <div>
                        <div className="grid grid-cols-2 gap-5 mt-3">
                            <div 
                            onClick={()=> setPaperSize("1/3")}
                            className={`px-3 py-3 border rounded-xl border-gray-300 ${ paperSize === "1/3" ? "border-blue-500 bg-blue-50":""}`}>
                                <div className="flex items-center gap-2">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-6">
                                <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <span className="font-medium text-gray-800">1/3 Page</span>
                                </div>
                                </div>
                                <div 
                                onClick={()=> setPaperSize("1/4")}
                                className={`px-3 py-3 border rounded-xl border-gray-300 ${ paperSize === "1/4" ? "border-blue-500 bg-blue-50":""}`}>
                                    <div className="flex items-center gap-2">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-6">
                                        <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                        <span className="font-medium text-gray-800">1/4 Page</span>
                                        </div>
                                </div>
                                </div>
                        </div>

                        <div className="flex items-center justify-between mt-6 bg-white p-3 rounded-2xl shadow-md">
                            <label className="text-gray-800 font-semibold text-lg">Number of Copies</label>
                            <select
                            className="border border-gray-300 bg-gray-50 text-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200">
                                <option>1 Copy</option>
                                <option>2 Copies</option>
                                <option>3 Copies</option>
                                <option>4 Copies</option>
                                <option>5 Copies</option>
                                <option>6 Copies</option>
                                <option>7 Copies</option>
                                <option>8 Copies</option>
                                <option>9 Copies</option>
                                <option>10 Copies</option>
                            </select>
                            </div>
                            <div className="flex justify-between mt-6">
                                <button
                                onClick={()=> navigate(-1)}
                                className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">
                                    Back
                                    </button>
                                    <button 
                                    disable={!selectedSide || !colorOption || !paperSize}
                                    className={`px-4 py-2 rounded text-white transition ${!selectedSide || !colorOption || !paperSize ? "bg-blue-200 cursor-not-allowed":"bg-blue-400 hover:bg-blue-500"}`}>
                                        Next
                                        </button>
                                        </div>
                                        </div>
                                        </div>
                                        )
                                    }

export default Option;