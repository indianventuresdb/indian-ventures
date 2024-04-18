"use client";
import { useState } from "react";
import axios from "axios";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    organization: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/cForm", formData);
      if (response.data.success) {
        console.log("Form submitted successfully");
        setPopupMessage(
          "Thank You! for contacting us. We will get back to you soon!"
        );

        setShowPopup(true);
        setFormData({
          name: "",
          phone: "",
          organization: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
        const res = await axios(
          `/api/fbc?path=${process.env.NEXT_PUBLIC_HOST}contact`
        );
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="border-2 border-[#D9D9D9] py-16 mt-8 px-4 sm:mx-36 mx-2  rounded-2xl shadow-md shadow-black">
        <form
          onSubmit={handleSubmit}
          className="max-w-[1000px] mx-auto grid gap-4"
          style={{ fontFamily: "lato" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 manrope uppercase">
            <div>
              <label htmlFor="name" className="block font-bold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field bg-[#D9D9D9] w-full shadow-md shadow-black rounded-sm mt-4 py-2 px-2  font-semibold manrope text-black"
              />
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
                required
                className="input-field bg-[#D9D9D9] w-full shadow-md shadow-black rounded-sm mt-4 py-2 px-2  font-semibold manrope text-black"
              />
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
                required
                className="input-field bg-[#D9D9D9] w-full shadow-md shadow-black rounded-sm mt-4 py-2 px-2  font-semibold manrope text-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field bg-[#D9D9D9] w-full shadow-md shadow-black rounded-sm mt-4 py-2 px-2  font-semibold manrope text-black"
              />
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
              required
              rows="3"
              className="input-field bg-[#D9D9D9] w-full shadow-md shadow-black rounded-sm mt-4 py-2 px-2  font-semibold manrope text-black"
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button className="rounded-xl sm:px-32 px-6 py-2 border-2 border-gray-50 bg-black text-white hover:bg-gray-800 text-lg sm:text-xl uppercase">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
