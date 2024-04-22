"use client";
import React, { useState } from "react";
import submitForm from "@/actions/form";
import SubmitButton from "../UIElements/submitButton";
const Form = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    service: "",
    budget: "",
    message: "",
  });

  // State to manage input validation
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    service: "",
    budget: "",
  });

  const handleSubmit = async () => {
    setLoading(true);

    let isValid = true;
    const formErrors = {};
    if (!data.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }
    if (!data.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email.trim())
    ) {
      formErrors.email = "Please enter a valid email";
      isValid = false;
    }
    if (!data.phone.trim()) {
      formErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(data.phone.trim())) {
      formErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }
    // brand validation
    if (!data.brand.trim()) {
      formErrors.brand = "Brand is required";
      isValid = false;
    }
    if (!data.service.trim()) {
      formErrors.service = "Service is required";
      isValid = false;
    }
    if (!data.budget.trim()) {
      formErrors.budget = "Budget is required";
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      try {
        const response = await submitForm(data);
        if (response.success) {
          setMessage(response.message);
          setData({
            name: "",
            email: "",
            phone: "",
            brand: "",
            service: "",
            budget: "",
            message: "",
          });

          setTimeout(() => setMessage(""), 3000);
        } else {
          setMessage(response.message);
        }
      } catch (error) {
        setMessage("An error occurred while submitting the form.");
        console.error("Error occurred:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return (
    <div className="manrope py-5 sm:mx-28 mx-2">
      <h3 className="text-center font-bold text-lg sm:text-2xl">
        PARTNER WITH US FOR YOUR BUSSINESS GROWTH AND BEYOND
      </h3>
      <div className="bg-[#D9D9D9] py-10 mt-8  px-4">
        <form
          action={handleSubmit}
          className="top-0 z-20 w-full max-w-[75rem] mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 text-lg sm:text-xl  gap-4  mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={data.name}
              onChange={handleChange}
              className={`px-2 py-2 bg-white text-gray-500${
                errors.name && "border-2 border-red-500"
              }`}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <input
              type="text"
              name="brand"
              placeholder="Brand Name/Company Name"
              className={`px-2 py-2 bg-white text-gray-500 ${
                errors.brand && "border-2 border-red-500"
              }`}
              value={data.brand}
              onChange={handleChange}
            />
            {errors.brand && <p className="text-red-500">{errors.brand}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 text-lg sm:text-xl  gap-4  mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`px-2 py-2 bg-white text-gray-500 ${
                errors.email && "border-2 border-red-500"
              }`}
              value={data.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="text"
              name="phone"
              placeholder="Your Phone No"
              className={`px-2 py-2 bg-white text-gray-500 ${
                errors.phone && "border-2 border-red-500"
              }`}
              value={data.phoneNumberInput}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 text-lg sm:text-xl">
            <div className=" lg:gap-1 lg:w-auto  ">
              <label htmlFor="" className="text-black font-bold text-lg mb-2">
                What kind of Services are you looking for?
              </label>
              <select
                name="service"
                className={`w-full py-2 bg-white text-gray-500 ${
                  errors.service && "border-2 border-red-500"
                }`}
                onChange={handleChange}
              >
                {errors.service && (
                  <p className="text-red-500">{errors.service}</p>
                )}
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
                  errors.brand && "border-2 border-red-500"
                }`}
                onChange={handleChange}
              >
                {errors.budget && (
                  <p className="text-red-500">{errors.budget}</p>
                )}
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
          <SubmitButton />
          {message && (
            <p
              className={`text-${
                message.includes("Error") ? "red" : "green"
              }-400 text-xl text-center mt-4 font-bold`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
