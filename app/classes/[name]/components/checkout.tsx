import { routes } from "@/constants";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

type CheckoutProps = {
  serviceName: string;
  price: number;
  date?: string; // format: YYYY-MM-DD
  time?: string; // format: HH:MM
};

export default function Checkout({
  serviceName,
  price,
  date,
  time,
}: CheckoutProps) {
  const [quantity, setQuantity] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const isFormValid =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    quantity >= 1;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (val >= 1) setQuantity(val);
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMsg("");

  if (!isFormValid) {
    setErrorMsg("Please fill in all required fields.");
    return;
  }

  if (!date || !time) {
    setErrorMsg("Date and time are required.");
    return;
  }

  setLoading(true);

  try {
    const bookedDateTime = new Date(`${date}T${time}:00`);

    if (isNaN(bookedDateTime.getTime())) {
      setErrorMsg("Invalid date or time.");
      setLoading(false);
      return;
    }

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        quantity,
        serviceName,
        price,
        bookedTime: bookedDateTime.toISOString(),
        successUrl: window.location.origin + "/success",
        cancelUrl: window.location.origin + "/cancel",
      }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      setErrorMsg(data.error || "Failed to start checkout.");
    }
  } catch (error) {
    console.log(error);
    setErrorMsg("An unexpected error occurred.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="bg-[#5A582F] py-16 px-10 min-h-screen text-white">
      <div className="container mx-auto py-28 space-y-8 max-w-7xl flex gap-16">
        {/* Form */}
        <div className="flex-1 max-w-2xl">
          <div className="space-y-8 mb-12">
            <div className="flex items-center space-x-3">
              <IoIosArrowBack />
              <Link href={routes.CLASSES} className="text-white">
                Back
              </Link>
            </div>
            <h1 className="font-semibold text-5xl mb-2">Checkout Form</h1>
            <p className="text-gray-200 text-xl">Client Details</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block mb-2">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border-b border-white bg-transparent outline-none py-2"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-white bg-transparent outline-none py-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-b border-white bg-transparent outline-none py-2"
                  required
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6 max-w-xs">
              <label htmlFor="quantity" className="block mb-2">
                Quantity*
              </label>
              <input
                type="number"
                id="quantity"
                min={1}
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full border-b border-white bg-transparent outline-none py-2"
                required
              />
            </div>

            {errorMsg && (
              <p className="mb-4 text-red-400 font-semibold">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={loading || !isFormValid}
              className="cursor-pointer border border-white px-10 py-3 font-semibold text-white transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:text-[#5A582F] disabled:hover:bg-transparent disabled:hover:text-white"
            >
              {loading ? "Processing..." : "Pay"}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="w-96 text-white">
          <div className="border-b border-white mb-6">
            <p className="text-lg pb-2">Service Details</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-xl">{serviceName}</p>
            <p>Price: ${price.toFixed(2)}</p>

            {date && time && (
              <p>
                {new Date(date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}{" "}
                at {time}
              </p>
            )}

            <p>
              Total Price:{" "}
              <span className="font-bold">${(price * quantity).toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}