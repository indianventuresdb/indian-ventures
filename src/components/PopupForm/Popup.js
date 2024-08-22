"use client";
import React, { useState, useEffect } from "react";
import submitPopupForm from "@/actions/submitPopupForm";
import SubmitButton from "@/components/UIElements/submitButton";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    requirement: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    requirement: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let isValid = true;
    const formErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    // Email Validation
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      formErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      formErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    // Organization Validation
    if (!formData.organisation.trim()) {
      formErrors.organisation = "Organization is required";
      isValid = false;
    }

    // Requirement Validation
    if (!formData.requirement.trim()) {
      formErrors.requirement = "Requirement is required";
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      try {
        const response = await submitPopupForm(formData);
        if (response.success) {
          setMessage(response.message);
          setFormData({
            name: "",
            email: "",
            phone: "",
            organisation: "",
            requirement: "",
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

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 manrope text-base">
          <div className="bg-white p-8 rounded-lg w-96 shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={handleClose}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Sign Up & Get Benefits
            </h2>
            <ol className="mb-4 text-green-600 font-semibold text-left list-decimal pl-5">
              <li>Free SEO</li>
              <li>Free Maintenance</li>
              <li>Free Hosting</li>
              <li>Detailed Analytics</li>
            </ol>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Enter your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Enter your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Enter your Phone Number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Organization
                </label>
                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Enter your Organization"
                />
                {errors.organisation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.organisation}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Requirement
                </label>
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                >
                  <option value="" disabled>
                    Select your Requirement
                  </option>
                  <option value="creative-agency">Creative Agency</option>
                  <option value="startup-solutions">Startup Solutions</option>
                  <option value="web-solutions">Web Solutions</option>
                  <option value="mobile-applications">
                    Mobile Applications
                  </option>
                  <option value="digital-marketing">Digital Marketing</option>
                </select>
                {errors.requirement && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.requirement}
                  </p>
                )}
              </div>

              <SubmitButton />
            </form>
            <p className="text-center text-sm text-gray-500 mt-4">
              * Limited time offer, hurry up!
            </p>
            {message && (
              <p className="text-center text-green-500 mt-4">{message}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
