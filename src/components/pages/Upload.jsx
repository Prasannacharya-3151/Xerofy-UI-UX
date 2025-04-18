import React, {useState, useRef} from "react";
import Navbar from "../Header/Navbar";

function Upload(){
  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)
  const [selectedFiles, setSelectedFiles] = useState([])

  const handleBrowsClick =()=>{
    fileInputRef.current?.click();
  }

  const handleCameraClick = ()=>{
    cameraInputRef.current.click();
  }

  const handleChange = (e) =>{
    const fileArray = Array.from(e.target.files)
    console.log("selecteFiles:", fileArray)
    setSelectedFiles(fileArray)
  }


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
        <div className="text-shadow-black text-center justify-items-center mb-2">
        
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>
          </div>
          <p className="text-sm text-gray-700 font-medium text-center">
            Drag & drop files here
            < br/>
            Support for JPG, PNG, GIF and PDF files
            </p>
            <div className="flex justify-center gap-4 py-10">
            <button 
            type="button"
            onClick={handleBrowsClick}
            className="flex items-center px-1 py-2 gap-2 border border-gray-300 rounded-md shadow-sm transition hover:bg-gray-100">
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
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" 
              />
              </svg>
              <span className="text-gray-700 text-sm font-medium">
              Browse Files
              </span>
              <input type="file" className="hidden" multiple accept=".pdf" />
              </button>
              <button
              type="button"
              onClick={handleCameraClick}
              className="flex items-center px-3 py-2 gap-2 border border-gray-300 rounded-md shadow-sm transition hover:bg-gray-100">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="size-6">
                  <path stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" 
                  />
                  <path stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">
                  Use Camera
                  </span>
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
                  type="camera"
                  accept="image/"
                  capture="user"
                  onChange={handleChange}
                  ref={cameraInputRef}
                  className="hidden"
                  /> 
        </div>
      


       {/* Right Box */}
<div className="w-80 h-50 bg-green-200 p-6 rounded-xl shadow-md overflow-y-auto">
  <h2 className="text-md font-semibold text-gray-700 mb-2 text-center">
    Selected Files:
  </h2>

  {selectedFiles.length === 0 ? (
    <p className="text-sm text-gray-600 text-center">No files selected.</p>
  ) : (
    <ul className="space-y-2">
      {selectedFiles.map((file, index) => (
        <li
          key={index}
          className="bg-white border rounded-md px-4 py-2 shadow-sm"
        >
          <p className="text-gray-800 font-medium truncate">{file.name}</p>
          <p className="text-gray-500 text-sm">
            type: {file.type || "unknown"} | size: {(file.size / 1024).toFixed(2)} KB
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
  </div>
</div>
);
}

export default Upload;

