import { routes } from "@/constants";
import Link from "next/link";

export default function Cancel() {
  return (
    <section className="bg-[#5A582F] min-h-screen flex items-center justify-center px-10 text-white">
      <div className="max-w-2xl text-center space-y-8 py-28">
        <div className="text-6xl">❌</div>
        <h1 className="text-5xl font-semibold">Payment Cancelled</h1>
        <p className="text-xl text-gray-200">
          Your payment was cancelled. No charges were made. You can try again anytime.
        </p>

        <div className="flex flex-col">
          <Link
            href={routes.HOME}
            className="inline-block mt-6 cursor-pointer border border-white px-10 py-3 font-semibold text-white hover:bg-white hover:text-[#5A582F] transition"
          >
            Go to Home
          </Link>

          <Link
            href={routes.CLASSES}
            className="inline-block mt-4 cursor-pointer text-white underline hover:text-gray-300"
          >
            Back to Classes
          </Link>
        </div>
      </div>
    </section>
  );
}
