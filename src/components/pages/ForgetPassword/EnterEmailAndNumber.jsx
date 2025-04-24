import React, {useState} from "react";
import { useNavigate, Link} from "react-router-dom"
import search from "../../../assets/search.png"

function EnterEmailAndNumber(){

    const [email, setEmail]=useState("")

    const navigate = useNavigate();
    
    const add = (e) => {
        e.preventDefault();
        if(email === ""){
            alert("Please enter a valid email address.");
            return
        }
        console.log("email", email)
        navigate("/verifyotp");
    }

   



    return(
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 px-4">
            <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <img src={search} alt="search icon" className="h-20 w-20 mx-auto mb-4"></img>
                <h1 className="text-2xl font-md text-indigo-600 mb-2">
                    Find your account
                </h1>
                <p className="text-sm text-gray-500">Enter your email address or username.</p>
                <p className="text-sm text-gray-500">Can't reset your password?</p>
                <form className="space-y-1" onSubmit={add}>
                    <div>
                        <label className="block mb-1 text-gray-700 mt-5">Email</label>
                            <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
                            />
                       </div>
                       <p className="text-xs px-1 text-gray-500">you may receive Email notifications from us for security and login purpose.</p>
                       <button 
                type="submit"
                className="w-full py-2 px-4 bg-purple-600 rounded-lg hover:bg-purple-700 text-white font-semibold transition duration-300 mt-10"
                >
                    Continue
                </button>
                </form>
                
                </div>
                </div>


        </div>
    )
}

export default EnterEmailAndNumber;