"use client";

import Image from "next/image";
import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false); // reset message on input change
  };

  const handleSubmit = () => {
    const { firstName, lastName, email } = form;

    if (!firstName || !lastName || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#5A582F] py-16 px-10">
      <div className="border border-white flex flex-col md:flex-row overflow-hidden h-full">
        {/* Left Side: Contact Info + Form */}
        <div className="md:w-2/3 p-8 md:p-16 text-white flex flex-col justify-center">
          <div className="font-light">
            <p className="text-2xl font-semibold">Abeth</p>
            <p>17 W ST Orange</p>
            <p>MA 01364-1143</p>
            <p>admin@abeth.org</p>
            <p>+1 (978) 728-2042</p>
          </div>

          <div className="mt-10">
            <h4 className="text-2xl font-semibold mb-6">Contact Us</h4>

            <div className="w-full max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2">First name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full border-b border-white bg-transparent outline-none py-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Last name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full border-b border-white bg-transparent outline-none py-2"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-b border-white bg-transparent outline-none py-2"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border-b border-white bg-transparent outline-none py-2"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="border border-white px-10 py-3 font-semibold text-white hover:bg-white hover:text-[#5A582F] transition"
              >
                Submit
              </button>

              {submitted && (
                <p className="mt-4 text-white font-semibold">
                  Submitted successfully!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-white flex items-center justify-center">
          <div className="w-full max-w-lg p-4">
            <Image
              src="/contact.avif"
              alt="Feel the Flow"
              width={500}
              height={500}
              className="rounded-[50px] object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
