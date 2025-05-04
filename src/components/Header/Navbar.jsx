import React, {useState} from "react";

function Navbar() {

  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-full">
      <header className="flex justify-between items-center text-black bg-white drop-shadow-md py-4 px-2 md:px-12">
        <div className="flex items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-vector-printer-icon-png-image_5152496.jpg"
            alt="Xerofy logo"
            className="w-16 hover:scale-105 transition-all"
          />
          <h1 className="text-2xl font-bold hover:scale-105 transition-all">
            <span className="text-sky-600">XERO</span>
            <span className="text-slate-700">FY</span>
          </h1>
        </div>
        <div className="relative">
          <button
        onClick={()=> setOpen(!open)}
          className="rounded-full focus:outline-none focus:ring-3 focus:ring-purple-500 transition-all duration-300 ease-in-out"
          aria-label="Profile"
        >
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
        {open && (
          <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg overflow-hidden z-50">
            <button className="block px-4 py-2 text-left hover:bg-gray-100 w-full">My Orders</button>
            <button className="block px-4 py-2 text-left hover:bg-gray-100 w-full">Track Order</button>
            <button className="block px-4 py-2 text-left hover:bg-gray-100 w-full">Settings</button>
            <button className="block px-4 py-2 text-left hover:bg-gray-100 w-full">Upload File</button>
            <button className="block px-4 py-2 text-left hover:bg-gray-100 w-full">Billing History</button>
            <button className="block px-4 py-2 text-red-600 hover:bg-red-50 w-full">Logout</button>
          </div>
        )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
