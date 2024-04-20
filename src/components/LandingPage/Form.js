"use client";
import React, { useState } from "react";
const Form = () => {
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
  const [phoneNumberInput, setPhoneNumberInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", data);

    if (data.name == "") {
      setIsValidName(false);
    } else if (data.brand == "") {
      setIsValidBrand(false);
    } else if (data.email == "") {
      setIsValidEmail(false);
    } else if (!validateEmail(emailInput)) {
      setIsValidEmail(false);
    } else if (!validatePhoneNumber(phoneNumberInput)) {
      setIsValidPhone(false);
    } else if (data.service == "") {
      setIsValidService(false);
    } else if (data.budget == "") {
      setIsValidBudget(false);
    }

    setData({
      name: "",
      email: "",
      brand: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (e) => {
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

  const validatePhoneNumber = (phone) => {
    const phoneNumber = phone.replace(/\D/g, "");

    return /^\d{10,11}$/.test(phoneNumber);
  };

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
          // onSubmit={handleSubmit}
          action={handleSubmit}
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
              onChange={handleChange}
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand Name/Company Name"
              className={`px-2 py-2 bg-white text-gray-500 ${
                !isValidBrand ? "border-2 border-red-500" : ""
              }`}
              value={data.brand}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
            onChange={handleChange}
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
