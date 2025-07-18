"use client";

import { routes } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const animatedLink =
    "transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-[#8C7C62]";

  const handleSubscribe = async () => {
    setLoading(true);
    setMessage("");

    if (!email || !subscribed) {
      setMessage("Please enter your email and agree to subscribe.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("You're successfully subscribed! 🎉");
        setEmail("");
        setSubscribed(false);
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#F7F4EF] text-[#4C4A2F] px-10 py-10 text-sm"
    >
      <div className="mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-3">Socials</h3>
            <div className="space-y-1 flex flex-col text-2xl md:text-4xl lg:text-6xl font-bold tracking-wide">
              {/* <Link href={"/fb"} className={animatedLink}>FACEBOOK</Link> */}
              <Link target="_blank" href={"https://www.linkedin.com/in/elizabeth-cox-51b181375"} className={animatedLink}>LINKEDIN</Link>
              {/* <Link href={"/ig"} className={animatedLink}>INSTAGRAM</Link> */}
            </div>
          </div>

          {/* The Studio */}
          <div>
            <h3 className="font-semibold mb-3">The Studio</h3>
            <div className="space-y-1 flex flex-col text-2xl md:text-4xl lg:text-6xl font-bold tracking-wide">
              <Link href={routes.ABOUT} className={animatedLink}>ABOUT</Link>
              <Link href={routes.CONTACT} className={animatedLink}>CONTACT</Link>
            </div>
          </div>

          {/* Join */}
          <div>
            <h3 className="font-semibold mb-3">Join</h3>
            <div className="space-y-1 flex flex-col text-2xl md:text-4xl lg:text-6xl font-bold tracking-wide">
              <Link className={animatedLink} href={routes.CLASSES}>CLASSES</Link>
              <Link className={animatedLink} href={routes.BOOK_CLASS}>BOOK A CLASS</Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-10">
          <h4 className="text-xl font-semibold mb-4">Begin Your Journey with Us</h4>
          <label htmlFor="email" className="block mb-2">
            Enter Your Email *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-[#4C4A2F] bg-transparent outline-none py-2 mb-4"
          />

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="subscribe"
              checked={subscribed}
              onChange={(e) => setSubscribed(e.target.checked)}
              className="mr-2 w-4 h-4 border border-[#4C4A2F]"
            />
            <label htmlFor="subscribe">
              Yes, subscribe me to your newsletter. *
            </label>
          </div>

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="border border-[#4C4A2F] px-10 py-3 font-semibold text-[#4C4A2F] hover:bg-[#4C4A2F] hover:text-[#F7F4EF] transition disabled:opacity-50"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>

          {message && (
            <p className="mt-4 text-sm text-[#4C4A2F]">{message}</p>
          )}
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#4C4A2F] pt-4 flex flex-col md:flex-row justify-between text-xs text-[#1F1F1F]">
          <p>© {new Date().getFullYear()} Abeth LLC. All Rights Reserved</p>
        </div>
      </div>
    </motion.footer>
  );
}
