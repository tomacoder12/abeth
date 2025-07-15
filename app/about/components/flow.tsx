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
            Welcome to a space where we share the heart and soul behind our business. Here, you&apos;ll meet the people driving our mission, learn what we do, and discover what makes this site and our services truly unique.

            It&apos;s your chance to dive into our story — from our beginnings to the passion that fuels us today. Whether it&apos;s a signature product or a standout service, this is where we highlight what sets us apart and why we do what we do.

            Our words reflect who we are: authentic, consistent, and committed to delivering value with every interaction. Through this space, we invite you to connect with our brand&apos;s personality and core values, gaining a genuine feel for what makes us different.
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
