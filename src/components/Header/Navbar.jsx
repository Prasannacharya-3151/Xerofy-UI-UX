import React from "react";

function Navbar() {
  return (
    <div className="w-full h-full">
      <header className="flex justify-between items-center text-black bg-white drop-shadow-md py-4 px-2 md:px-12">
        <div className="flex items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-vector-printer-icon-png-image_5152496.jpg"
            alt="logo"
            className="w-15 hover:scale-105 transition-all"
          />
          <h1 className="text-2xl font-bold hover:scale-105 transition-all">
            <span className="text-sky-600">XERO</span>
            <span className="text-slate-700">FY</span>
          </h1>
        </div>

        {/* <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-blue-400 hover:text-white rounded-md">Home</li>
          <li className="p-3 hover:bg-blue-400 hover:text-white rounded-md">Services</li>
          <li className="p-3 hover:bg-blue-400 hover:text-white rounded-md">Locations</li>
          <li className="p-3 hover:bg-blue-400 hover:text-white rounded-md">Help</li>
        </ul> */}
  <button className="rounded-full hover:bg-gray-200 transition duration-300">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-10 h-10 text-gray-700 hover:text-gray-600 hover:scale-110 transition duration-300"
    >
      <path 
        fillRule="evenodd" 
        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" 
        clipRule="evenodd" 
      />
    </svg>
  </button>
</header>
</div>
  )
}

export default Navbar;
