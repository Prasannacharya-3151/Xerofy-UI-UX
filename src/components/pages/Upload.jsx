import React, { useState, useRef } from "react";
import Navbar from "../Header/Navbar";
import { useNavigate } from "react-router-dom";

function Upload() {
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const navigate = useNavigate();

  const handleBrowsClick = () => {
    fileInputRef.current?.click();
  };

  const handleCameraClick = () => {
    cameraInputRef.current.click();
  };

  const handleChange = (e) => {
    const fileArray = Array.from(e.target.files);
    setSelectedFiles(fileArray);
  };

  const handleDelete = (fileToDelete) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((file) => file !== fileToDelete)
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
        <h1 className="mb-2 font-bold text-center text-sky-600 text-2xl">
          Easy Document Printing
        </h1>
        <p className="text-sm text-center text-gray-600">
          Upload your files, choose your option, and get your prints from the nearest location.
        </p>

        
        <div className="flex justify-center gap-4 p-4 mt-3">
          {["Upload", "Option", "Location", "Payment"].map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`rounded-full h-12 w-12 flex items-center justify-center shadow-lg font-bold ${
                  index === 0
                    ? "bg-blue-400 text-white"
                    : "border border-gray-100 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <p
                className={`mt-2 text-xs ${
                  index === 0 ? "text-sky-600" : "text-gray-600"
                }`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-center mt-3 font-semibold text-base text-gray-800">
          Please upload your printing files
        </h2>

        
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-5 space-y-5 sm:space-y-0 py-6">
          
          <div className="w-full sm:w-80 bg-blue-200 p-4 rounded-xl shadow-md">
            <div className="text-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mx-auto text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-700 font-medium text-center">
              Drag & drop files here
              <br />
              Support for JPG, PNG, GIF and PDF files
            </p>
            <div className="flex justify-center gap-4 py-6">
              <button
                type="button"
                onClick={handleBrowsClick}
                className="flex items-center px-3 py-2 gap-2 border border-gray-300 rounded-md shadow-sm transition hover:bg-gray-100"
              >
                📂 <span className="text-sm font-medium">Browse Files</span>
              </button>
              <button
                type="button"
                onClick={handleCameraClick}
                className="flex items-center px-3 py-2 gap-2 border border-gray-300 rounded-md shadow-sm transition hover:bg-gray-100"
              >
                📷 <span className="text-sm font-medium">Use Camera</span>
              </button>
            </div>
            <input
              type="file"
              accept="all"
              multiple
              ref={fileInputRef}
              onChange={handleChange}
              className="hidden"
            />
            <input
              type="file"
              accept="image/*"
              capture="user"
              onChange={handleChange}
              ref={cameraInputRef}
              className="hidden"
            />
          </div>

          {/* Selected Files Box */}
          <div className="w-full sm:w-80 bg-green-200 p-6 rounded-xl shadow-md overflow-y-auto max-h-64">
            <h2 className="text-md font-semibold text-gray-700 mb-2 text-center">
              Selected Files:
            </h2>
            {selectedFiles.length === 0 ? (
              <p className="text-sm text-gray-600 text-center">
                No files selected.
              </p>
            ) : (
              <ul className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <li
                    key={index}
                    className="bg-white border rounded-md px-4 py-2 shadow-sm"
                  >
                    <p className="text-gray-800 font-medium truncate">
                      {file.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      <button
                        onClick={() => handleDelete(file)}
                        className="text-red-500"
                      >
                        ❌
                      </button>{" "}
                      type: {file.type || "unknown"} | size:{" "}
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                    {file.type.startsWith("image/") && (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="mt-2 w-full h-24 object-cover rounded"
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
          <button className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">
            Back
          </button>
          <button
            onClick={() => navigate("/option")}
            className="px-4 py-2 rounded bg-blue-400 hover:bg-blue-500 text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
