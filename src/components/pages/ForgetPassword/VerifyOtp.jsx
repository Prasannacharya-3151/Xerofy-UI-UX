import React, {useState} from "react"
import Navbar from "../../Header/Navbar"
import Email from "../../../assets/Email.png";

function VerifyOtp(){

    const [code, setCode] = useState("");

    const add = (e) => {
        const input = e.target.value;
        // Only allow numbers and max 6 digits
        if (/^\d{0,6}$/.test(input)) {
          setCode(input);
        }
      };

      console.log("code", code);


    return(

        <div> 
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-md text-indigo-600 mb-2">Check your Email</h1>
                <p className="text-sm text-gray-500">We sent a code via Email. Enter that code to confirm your account.</p>
                <p className="text-sm text-gray-500">Can't confirm account?</p>
                <img src={Email} alt="email icon" className="h-60 w-100 rounded-lg mt-2">
                </img>

                <form onChange={add}className="space-y-1">
                <div>
                    <label className="block mb-1 text-gray-700 mt-10">OTP code</label>
                        <input
                        type="text"
                        placeholder="Enter a 6-digit code"
                        value={code}
                        onChange={add}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
                        />
                    
                </div>
                <div className="text-center mt-3 text-gray-500">
                    <h3>
                        Didn't get the otp?{" "}
                        <a href="#" className="text-indigo-600 hover:underline">Resend</a>
                    </h3>
                </div>
                <button 
                type="submit"
                className="w-full py-2 px-4 bg-purple-600 rounded-lg hover:bg-purple-700 text-white font-semibold transition duration-300 mt-5"
                >
                    Verify
                </button>
                </form>
                </div>
                </div>
                
        </div>
    )
}

export default VerifyOtp;