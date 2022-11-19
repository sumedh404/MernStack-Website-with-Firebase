import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import About from "./About";
import Home from "./Home";
import ChangePassword from "./ChangePassword";
import Enquiry from "./Enquiry";
import Success from "./Success";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useEffect} from "react";
//import {initializeApp} from "firebase/app";

/*
import { initializeApp } from "firebase/app";
//import {getDatabase} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSB2-OiUkENlCq-RN8WNKO_I3FWWBwFNU",
  authDomain: "reactproject-2facf.firebaseapp.com",
  projectId: "reactproject-2facf",
  storageBucket: "reactproject-2facf.appspot.com",
  messagingSenderId: "1045393194606",
  appId: "1:1045393194606:web:08a567381c6d6889b9b07f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/
function App() {
  return (
    <div className="App">
          <BrowserRouter>
                  <Routes>
                        
                         <Route path="/login" element={<Login/>} />
                          <Route path="/" element={<Home/>} />
                         <Route path="/signup" element={<SignUp/>} />
                         <Route path="/about" element={<About/>} />
                         <Route path="/cp" element={<ChangePassword/>} />
                         <Route path="/fp" element={<ForgotPassword/>} />
                         <Route path="/eq" element={<Enquiry/>} />
                         <Route path="/ss" element={<Success/>} />
                         <Route path="*" element={<Navigate to="/"/>} />
                  </Routes>
          </BrowserRouter>         
    </div>
  );
}

export default App;
