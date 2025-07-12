import Image from "next/image";
import React from "react";

const Flow = () => {
  return (
    <section className="bg-[#5A582F] py-16 px-10 md:h-screen">
      <div className="border border-white flex flex-col md:flex-row overflow-hidden h-full">
        {/* Left Side: Text Content */}
        <div className="md:w-2/3 p-8 md:p-16 text-white flex flex-col justify-center">
          <p className="text-2xl font-semibold mb-10 tracking-wider uppercase">
            Feel the Flow
          </p>

          <p className="text-lg font-light leading-relaxed max-w-3xl">
            This is a space to share more about the business: who's behind it,
            what it does and what this site has to offer. It’s an opportunity to
            tell the story behind the business or describe a special service or
            product it offers. You can use this section to share the company
            history or highlight a particular feature that sets it apart from
            competitors. Let the writing speak for itself. Keep a consistent
            tone and voice throughout the website to stay true to the brand
            image and give visitors a taste of the company’s values and
            personality.
          </p>
        </div>

        {/* Right Side: Image with Left Border */}
        <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-white flex items-center justify-center p-6">
          <div className="w-full max-w-lg">
            <Image
              src="/flow.avif"
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

export default Flow;
