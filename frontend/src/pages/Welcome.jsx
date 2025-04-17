import React, { useState } from "react";
import axios from "axios";
import instance from "../../AxiosInstance";
import img4 from "../assets/side.png";
import Login from "../components/Login";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Modal,
  Checkbox,
  Form,
  Input,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import SignUp from "../components/SignUp";
import OtpModal from "../components/OtpModal";
import ForgetPassword from "../components/ForgetPassword";

const Welcome = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [forgetOpen, setForgetOpen] = useState(false);

  const navigate = useNavigate();

  // const handleLogin = (values) => {
  //   console.log("Login Data:", values);
  //   setLoginOpen(false);

  //   navigate("/home");
  // };

  // const handleRegister = (values) => {
  //   console.log("Register Data:", values);
  //   setRegisterOpen(false);
  //   setOtpOpen(true); // it helps me to show  OTP modal
  // };
  const handleLogin = async (values) => {
    try {
      console.log("📤 Sending login  data:", values);
      const response = await instance.post("/auth/login", values);
      // notify();
      console.log("✅  login Success:", response.data);
      // console.log(response.data.jwtToken);
      localStorage.setItem("jwtToken", response.data.jwtToken);
      setLoginOpen(false);

      navigate("/home");
    } catch (error) {
      if (error.response) {
        console.error("🚨 Login failed:", error.response.data); // Logs exact error from backend
      } else {
        console.error("❌ Network error:", error.message);
      }
    }
  };

  const handleRegister = async (values) => {
    try {
      console.log("📤 Sending data:", values);
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        values
      );
      // notify();
      console.log("✅ Success:", response.data);
      setRegisterOpen(false);
      setLoginOpen(true); //it helps me to show  login modal
     
    } catch (error) {
      if (error.response) {
        console.error("🚨 Signup failed:", error.response.data); // Logs exact error from backend
      } else {
        console.error("❌ Network error:", error.message);
      }
    }
  };

  const handleOtpVerify = (otp) => {
    console.log("Verified OTP:", otp);
    setOtpOpen(false);
    setLoginOpen(true); // after OTP, go to login modal
  };

  const handleForget= (values)=>{
    console.log("Given Email for Verification:",values);
    setForgetOpen(false);
    setOtpOpen(true); // open otp modal to verfiy otp send by backend
  };
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${img4})`,
          backgroundBlendMode: "darken",
        }}
      >
        {/* Content */}
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Junior Creator
          </h1>
          <p className="text-2xl md:text-4xl  mb-6">
            "Big ideas start with small stories — write yours today."
          </p>
          <div className="flex  flex-col justify-center  items-center gap-4">
            <button
              onClick={() => setLoginOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow-lg cursor-pointer "
            >
              Log In
            </button>

            <button
              onClick={() => setRegisterOpen(true)}
              className="bg-white hover:bg-gray-200 text-blue-500 px-6 py-2 rounded-xl shadow-lg cursor-pointer border-1 border-blue-500"
            >
              Sign Up
            </button>
          </div>
        </div>
        {/* modals /pop up dialog box ---- better than pasting modal below  */}
        <Login
          open={loginOpen}
          onCancel={() => setLoginOpen(false)}
          onLogin={handleLogin}
          switchToSignup={() => {
            setLoginOpen(false);
            setRegisterOpen(true);
          }}
          switchToForget={() => {
            setLoginOpen(false);
            setForgetOpen(true);
          }}
        />
        <SignUp
          open={registerOpen}
          onCancel={() => setRegisterOpen(false)}
          onRegister={handleRegister}
          switchToLogin={() => {
            // this funx is for below login link
            setRegisterOpen(false);
            setLoginOpen(true);
          }}
        />
        <ForgetPassword
          open={forgetOpen}
          onCancel={() => setForgetOpen(false)}
          onForget={handleForget}
          switchToLogin={() => {
            // this funx is for below login link
            
            setForgetOpen(false);
            setLoginOpen(true);
          }}
        
        />
        <OtpModal
          open={otpOpen}
          onCancel={() => setOtpOpen(false)}
          onVerify={handleOtpVerify}
        />
      </div>
    </>
  );
};

export default Welcome;
