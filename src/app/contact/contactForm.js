"use client";
import React, { useState } from "react";
import submitContact from "@/actions/contactForm";
import SubmitButton from "@/components/UIElements/submitButton";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    organization: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    organization: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = async () => {
    setLoading(true);

    let isValid = true;
    const formErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }
    // phone validation
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      formErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }
    // organization validation
    if (!formData.organization.trim()) {
      formErrors.organization = "Organization is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      formErrors.email = "Please enter a valid email";
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      try {
        const response = await submitContact(formData);
        if (response.success) {
          setMessage(response.message);
          setFormData({
            name: "",
            phone: "",
            organization: "",
            email: "",
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

  return (
    <>
      <div className="border-2 border-[#D9D9D9] py-16 mt-8 px-4 sm:mx-36 mx-2  rounded-2xl shadow-md shadow-black">
        <form
          action={handleSubmit}
          className="max-w-[1000px] mx-auto grid gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 manrope ">
            <div>
              <label htmlFor="name" className="block font-bold uppercase">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`input-field bg-[#D9D9D9] w-full shadow-md shadow-black rounded-sm mt-4 py-2 px-2  font-semibold manrope text-black ${
                  errors.name && "border-red-500"
                }`}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block font-bold">
                Phone:
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input-field bg-[#D9D9D9] w-full shadow-md shadow-black rounded-sm mt-4 py-2 px-2  font-semibold manrope text-black ${
                  errors.phone && "border-red-500"
                }`}
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="org" className="block font-bold">
                Organization:
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className={`input-field bg-[#D9D9D9] w-full shadow-md shadow-black rounded-sm mt-4 py-2 px-2  font-semibold manrope text-black ${
                  errors.organization && "border-red-500"
                }`}
              />
              {errors.organization && (
                <p className="text-red-500">{errors.organization}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-bold">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input-field bg-[#D9D9D9] w-full shadow-md shadow-black rounded-sm mt-4 py-2 px-2  font-semibold manrope text-black ${
                  errors.email && "border-red-500"
                }`}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-bold uppercase manrope"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="input-field bg-[#D9D9D9] w-full shadow-md shadow-black rounded-sm mt-4 py-2 px-2  font-semibold manrope text-black"
            ></textarea>
          </div>
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
    </>
  );
};

export default ContactForm;
