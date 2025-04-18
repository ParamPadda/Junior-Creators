import React, { useState,useEffect } from "react";
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
import NewPassword from "../components/NewPassword";
import { message } from "antd";

const Welcome = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [forgetOpen, setForgetOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false);

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
  const handleChangePassword =async(values)=>{

    const email = localStorage.getItem("signupEmail");

    if(values.confirmPassword !== values.newPassword){
      console.log("Check your password again.");
      message.error("Passwords do not match!");
    }
   
    else{
      try{
        const response = await axios.post("http://localhost:8080/api/auth/update-password", {
          email,
          newPassword: values.newPassword,
        });
    
        message.success("Password updated successfully!");
        console.log("Your Updated Password",values.confirmPassword);
    
        setTimeout(() => {
          setNewOpen(false);
          setLoginOpen(true); // Show login modal after password update
        }, 1000);
      }catch(error){
        console.error("Password update failed:", error);
       message.error("Failed to update password.");
      }
     
      
    }

  };
  // const handleOtpVerify = (otp) => {
  //   console.log("Verified OTP:", otp);
  //  email get krsakde from localStorage

  //   setOtpOpen(false);
  //   setLoginOpen(true); // after OTP, go to login modal
  // };
  const handleOtpVerify = async (otp) => {
    const email = localStorage.getItem("signupEmail"); //  Get email from localStorage
  
    try {
      const response = await axios.post( "http://localhost:8080/api/email/verify-otp", { email, otp });
  
      if (response.data.success) {
        console.log("Success:", response.data);
        // localStorage.removeItem("signupEmail"); //remove email
        setOtpOpen(false);
         setNewOpen(true); // after OTP, go to login modal
      } else {
       console.log("Invalid Otp");
      }
    } catch (error) {
      console.log("Error verifying OTP");
    }
  };
  

  // const handleForget= (values)=>{
  //   console.log("Given Email for Verification:",values);

  //   setForgetOpen(false);
  //   setOtpOpen(true); // open otp modal to verfiy otp send by backend
    
  // };
  const handleForget =async (values) => {
    try {
      console.log("Given Email for Verification:",values);
      localStorage.setItem("signupEmail", values.email);
      const response = await axios.post(
        "http://localhost:8080/api/email/send-verification",
        values
      );
      // notify();
      message.success("email sent successfully!");
      console.log("✅ Success:", response.data);
      setForgetOpen(false);
     setOtpOpen(true); // open otp modal to verfiy otp send by backend
     
    } catch (error) {
      if (error.response) {
        console.error("🚨 Email not received:", error.response.data); // Logs exact error from backend
      } else {
        console.error("❌ Network error:", error.message);
      }
    }
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
        <NewPassword
          open={newOpen}
          onCancel={() => setNewOpen(false)}
          onUpdate={handleChangePassword}
        />
      </div>
    </>
  );
};

export default Welcome;
