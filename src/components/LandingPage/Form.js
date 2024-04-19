"use client";
import React, { useState } from "react";
// import Popup from "@/components/Popup";
import axios from "axios";
import { api } from "@/app/api/form/route";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  // State variables to manage form data, input validations, and popup visibility

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isValidName, setIsValidName] = useState(true);
  const [isValidBrand, setIsValidBrand] = useState(true);
  const [isValidService, setIsValidService] = useState(true);
  const [isValidBudget, setIsValidBudget] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for empty input fields and invalid data
    if (data.name == "") {
      setIsValidName(false);
      toast.error("Please enter the Name", {
        className: "bg-red-500 text-white ",
        autoClose: 1800,
      });
    } else if (data.brand == "") {
      setIsValidBrand(false);
      toast.error("Please enter the Brand", {
        className: "bg-red-500 text-white ",
        autoClose: 1800,
      });
    } else if (data.email == "") {
      setIsValidEmail(false);
      toast.error("Please enter the Email", {
        className: "bg-red-500 text-white ",
        autoClose: 1800,
      });
    } else if (!validateEmail(emailInput)) {
      setIsValidEmail(false);
      toast.error("Please enter valid Email", {
        className: "bg-red-500 text-white ",
        autoClose: 1800,
      });
    } else if (!validatePhoneNumber(phoneNumberInput)) {
      setIsValidPhone(false);
      toast.error("Please enter 10 or 11 digit number", {
        className: "bg-red-500 text-white ",
        autoClose: 1800,
      });
      //to check right details are filled in all input boxes
    } else if (data.service == "") {
      setIsValidService(false);
      toast.error("Please enter the Service", {
        className: "bg-red-500 text-white ",
        autoClose: 1800,
      });
    } else if (data.budget == "") {
      setIsValidBudget(false);
      toast.error("Please enter the Budget", {
        className: "bg-red-500 text-white ",
        autoClose: 1800,
      });
    }

    try {
      // Send a POST request to the backend API endpoint with form data
      const response = await api("/api/contact", { data });

      if (response) {
        // Form submitted successfully
        console.log("Form submitted successfully");

        setPopupMessage(
          "Thank You! for contacting us. We will get back to you soon!"
        ); // Set the popup message

        setShowPopup(true);

        // Reset the form data
        setData({
          name: "",
          email: "",
          brand: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });

        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
        const res = await axios(
          `/api/fbc?path=${process.env.NEXT_PUBLIC_HOST}`
        );
      } else {
        // Handle errors, such as validation errors or server errors
        console.error("Form submission failed");
      }
    } catch (e) {
      console.error("Error:");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    if (name === "phone") {
      setPhoneNumberInput(value);
    }

    if (name === "email") {
      setEmailInput(value);
    }

    if (name === "name" && isValidName === false) {
      setIsValidName(true);
    } else if (name === "brand" && isValidBrand === false) {
      setIsValidBrand(true);
      console.log("Please enter the brand!");
    } else if (name === "service" && isValidService === false) {
      setIsValidService(true);
      console.log("Please enter the service!");
    } else if (name === "budget" && isValidBudget === false) {
      setIsValidBudget(true);
      console.log("Please select the budget!");
    }
  };

  // phone number validate
  const validatePhoneNumber = (phone) => {
    // remove any non -digit character
    const phoneNumber = phone.replace(/\D/g, "");
    // check if the phone number has exaclty 10 or 11 digits

    return /^\d{10,11}$/.test(phoneNumber);
  };

  // validate email using regex
  const validateEmail = (email) => {
    console.log("Validating email:", email);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailRegex.test(email);
    console.log("Is valid email?", isValid);
    return isValid;
  };

  return (
    <div className="manrope py-5 sm:mx-28 mx-2">
      <h3 className="text-center font-bold text-lg sm:text-2xl">
        PARTNER WITH US FOR YOUR BUSSINESS GROWTH AND BEYOND
      </h3>
      <div className="bg-[#D9D9D9] py-10 mt-8  px-4">
        <form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="top-0 z-20 w-full max-w-[75rem] mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 text-lg sm:text-xl  gap-4  mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`px-2 py-2 bg-white text-gray-500  ${
                !isValidName ? "border-2 border-red-500" : ""
              }`}
              value={data.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand Name/Company Name"
              className={`px-2 py-2 bg-white text-gray-500 ${
                !isValidBrand ? "border-2 border-red-500" : ""
              }`}
              value={data.brand}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 text-lg sm:text-xl  gap-4  mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`px-2 py-2 bg-white text-gray-500 ${
                !isValidEmail ? "border-2 border-red-500" : ""
              }`}
              value={data.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone No"
              className={`px-2 py-2 bg-white text-gray-500 ${
                !isValidPhone
                  ? "border-2 border-red-500"
                  : "Please enter a valid 10 or 11-digit phone number. "
              }`}
              value={phoneNumberInput}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 text-lg sm:text-xl">
            <div className=" lg:gap-1 lg:w-auto  ">
              <label htmlFor="" className="text-black font-bold text-lg mb-2">
                What kind of Services are you looking for?
              </label>
              <select
                name="service"
                className={`w-full py-2 bg-white text-gray-500 ${
                  !isValidService ? "border-2 border-red-500" : ""
                }`}
                onChange={handleInputChange}
              >
                <option value="Select Service">Select Service</option>
                <option value="Web design & Development">
                  Web design & Development
                </option>
                <option value="Planning For a Startup">
                  Planning For a Startup
                </option>
                <option value="Mobile Application Design">
                  Mobile Application Design
                </option>
                <option value="UI/UX Designing">UI/UX Designing</option>
                <option value="Creative Agency">Creative Agency</option>
              </select>
            </div>

            <div className=" lg:gap-3 lg:w-auto">
              <label htmlFor="" className="text-black font-bold text-lg mb-2">
                What's your budget ?
              </label>
              <select
                name="budget"
                className={`w-full py-2 bg-white text-gray-500  text-lg sm:text-xl${
                  !isValidBudget ? "border-2 border-red-500" : ""
                }`}
                onChange={handleInputChange}
              >
                <option value="Your Budget">Your Budget</option>
                <option value="15K - 25K">15K - 25K</option>
                <option value="25K - 50K">25K - 50K</option>
                <option value="50K - 100K">50K - 100K</option>
                <option value="100K - 250K">100K - 250K</option>
                <option value="250K - more">250K - more</option>
              </select>
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Describe Your Services in few words"
            rows="5"
            className="text-lg sm:text-xl w-full px-2 py-2 bg-white text-gray-500"
            value={data.message}
            onChange={handleInputChange}
          />
          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className=" flex items-center justify-center text-lg sm:text-xl rounded-xl px-8 py-1 font-semibold hover:scale-105 transition-all text-white bg-black hover:bg-white hover:text-black "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
