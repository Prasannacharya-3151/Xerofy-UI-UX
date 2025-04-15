import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Upload from "./components/Pages/Upload";


function App() {
 return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Upload/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
        <Route path="/signin" element={<LoginForm/>}/>
        <Route path="/upload" element={<Upload/>}/>
       </Routes>
      </BrowserRouter>
)
}
export default App;



