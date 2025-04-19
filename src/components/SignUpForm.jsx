import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUpForm() {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    phoneNo: "",
    password: "",
  });
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    const { Username, Email, phoneNo, password } = formData;
    if (!Username || !Email || !phoneNo || !password) {
      alert("All the fields are mandatory");
      return;
    }
    console.log("SignUpForm:", formData);
    setFormData({ Username: "", Email: "", phoneNo: "", password: "" });
    navigate("/login")
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 px-4">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center p-4 mb-6 text-indigo-600">
          Sign Up
        </h1>
        <form className="space-y-4" onSubmit={add}>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="Username"
              placeholder="Username"
              value={formData.Username}
              onChange={(e) =>
                setFormData({ ...formData, Username: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out"
            />
          </div>

          <div className="flex flex-col">
            <label className="block mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={(e) =>
                setFormData({ ...formData, Email: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNo"
              placeholder="Phone Number"
              value={formData.phoneNo}
              onChange={(e) =>
                setFormData({ ...formData, phoneNo: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out"
            />
          </div>
          <button
            className="block w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300"
            type="submit"
          >
            Sign Up
          </button>
          <div className="text-center">
            <h3>
              Already you have an account?{" "}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
            </h3>
            <div className="flex items-center my-6">
                    <hr className="flex-grow border-t border-gray-600" />
                    <span className="mx-4 text-gray-400 text-sm">Or</span>
                    <hr className="flex-grow border-t border-gray-600" />
                    </div>
            <div>
            <button
            type="button"
            className="w-full relative flex justify-center items-center mt-3 my-9 px-5 py-2 gap-3 border border-gray-300 rounded-md shadow-sm transition hover:bg-gray-100 hover:scale-105 transform duration-300"
            >
            <div className="h-6 w-6 object-contain">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt="Google-icon"
            />
            </div>
            <span className="text-gray-700 font-medium">
            Login with Google
            </span>
             </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
