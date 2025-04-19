import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom"

function LoginForm(){
    const[userProfile, setUserProfile]=useState({
        Email:"",
        Password:"",
    })

    const navigate = useNavigate();

    const add=(e)=>{
        e.preventDefault();
        const { Email, Password} =userProfile;
        if(Email==="" || Password===""){
            alert("All the fields are manditory")
            return
        }

        console.log("LoginForm:", userProfile)
        setUserProfile({Email:"", Password:""})
        navigate("/upload")
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 px-4">
            <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-indigo-600">
                    Login
                </h1>
                <p className="text-lg text-center mb-6 text-gray-500">
                Welcome back!
                </p>
                <form onSubmit={add} className="space-y-6">
                    <div>
                        <label className="block mb-1 text-gray-700">Email</label>
                        <input
                            type="email"
                            name="Email"
                            placeholder="Enter your email"
                            value={userProfile.Email}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, Email: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700">Password</label>
                        <input
                            type="password"
                            name="Password"
                            placeholder="Enter your password"
                            value={userProfile.Password}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, Password: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
                        />
                    </div>
                    <div className="text-right text-sm">
                    <a href="#" className="text-indigo-500 hover:underline font-medium">
                    Forgot Password?
                    </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                    <div className="text-center">
                        <h3>
                    Don’t have an account?{""} {""}
                    <Link to="/signup" className="text-indigo-600 hover:underline">
                    Sign up
                    </Link>
                    </h3>
                    </div>
                    <div className="flex items-center my-6">
                    <hr className="flex-grow border-t border-gray-600" />
                    <span className="mx-4 text-gray-400 text-sm">Or</span>
                    <hr className="flex-grow border-t border-gray-600" />
                    </div>
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
                    
                </form>
            </div>
        </div>
    );
}

export default LoginForm;