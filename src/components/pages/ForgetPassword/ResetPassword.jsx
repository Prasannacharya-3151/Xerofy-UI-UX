import React, { useState } from "react";
import passwordicon from "../../../assets/passwordicon.png";

function ResetPassword() {
  const [passwordData, setPasswordData] = useState({
    password: "",
    confirmPassword: "",
  });

  const add = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = passwordData;
    if (password === "" || confirmPassword === "") {
      alert("All the fields are manditory");
    } else if (password !== confirmPassword) {
      alert("password do not match!");
    } else {
      alert("password succssfully set!");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <img
            src={passwordicon}
            alt="reset password"
            className="w-20 h-20 mx-auto mb-4"
          ></img>
          <h1 className="text-2xl font-md text-indigo-600 mb-2">
            Create a new password
          </h1>
          <p className="text-sm text-gray-500">
            Create a password with at least 6 letters and numbers. you'll
            <br />
            need this password to log in to your account
          </p>

          <form onSubmit={add} className="space-y-4 mt-3">
            <div className="flex flex-col">
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="password"
                value={passwordData.password}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, password: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-1 text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 rounded-lg hover:bg-purple-700 text-white font-semibold transition duration-300 mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;

// minLength={6}
