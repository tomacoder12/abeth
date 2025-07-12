import Image from "next/image";
import React from "react";

const Form = () => {
  return (
    <section className="bg-[#5A582F] py-16 px-10">
      <div className="border border-white flex flex-col md:flex-row overflow-hidden h-full">
        {/* Left Side: Contact Form */}
        <div className="md:w-2/3 p-8 md:p-16 text-white flex flex-col justify-center">
          {/* Optional contact details */}
          <div className="font-light">
            <p className="text-2xl font-semibold">Abeth</p>
            <p className="">500 Terry Francine Street</p>
            <p className="">San Francisco, CA 94158</p>
            <p className="">info@mysite.com</p>
            <p>123-456-7890</p>
          </div>

        <div className="mt-10">
              <h4 className="text-2xl font-semibold mb-6">Contact Us</h4>

          <form className="w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block mb-2">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border-b border-white bg-transparent outline-none py-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block mb-2">
                  Last name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border-b border-white bg-transparent outline-none py-2"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b border-white bg-transparent outline-none py-2"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border-b border-white bg-transparent outline-none py-2"
              />
            </div>

            <button
              type="submit"
              className="border border-white px-10 py-3 font-semibold text-white hover:bg-white hover:text-[#5A582F] transition"
            >
              Submit
            </button>
          </form>
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
