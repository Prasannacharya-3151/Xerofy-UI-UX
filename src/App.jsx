import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Upload from "./components/Pages/Upload";
import Option from "./components/pages/Option";
import EnterEmailAndNumber from "./components/pages/ForgetPassword/EnterEmailAndNumber";
import VerifyOtp from "./components/pages/ForgetPassword/VerifyOtp";


function App() {
 return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/signup" element={<SignUpForm />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/upload" element={<Upload />}/>
        <Route path="/option" element={<Option />}/>
        <Route path="/emailandnumber" element={<EnterEmailAndNumber/>}/>
        <Route path="/verifyotp" element={<VerifyOtp />}/>
       </Routes>
      </BrowserRouter>
)
}
export default App;



