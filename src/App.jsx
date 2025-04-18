import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Upload from "./components/Pages/Upload";


function App() {
 return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/signup" element={<SignUpForm />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/upload" element={<Upload />}/>
       </Routes>
      </BrowserRouter>
)
}
export default App;



