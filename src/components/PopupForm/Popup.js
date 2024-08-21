"use client";
import React, { useState, useEffect } from "react";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
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
            <p className="mb-4 text-green-600 font-semibold text-center">
              Free SEO • Free Maintenance • Free Hosting • Detailed Analytics •
              Get a Coupon of 20% Off!
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Enter your Organization"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Requirement
                </label>
                <select
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  required
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
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Choose Your Free Benefit
                </label>
                <select
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="" disabled>
                    Select your Benefit
                  </option>
                  <option value="free-seo">Free SEO</option>
                  <option value="free-maintenance">Free Maintenance</option>
                  <option value="free-hosting">Free Hosting</option>
                  <option value="detailed-analytics">Detailed Analytics</option>
                  <option value="20-off-coupon">20% Off Coupon</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-mblack text-white w-full py-1 px-2 rounded hover:bg-blue-700 transition-all duration-300"
              >
                Claim Your Offer
              </button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-4">
              * Limited time offer, hurry up!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
