"use client";

import { useSearchParams } from "next/navigation";
import { Checkout } from "../components";
import { Suspense } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  // Extract booking details from URL query params
  const serviceName = searchParams.get("service") || "Unknown Service";
  const price = searchParams.get("price") || "0";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";

  return (
    <Suspense fallback={<>loading...</>}>
        <Checkout 
      serviceName={serviceName} 
      price={Number(price)} 
      date={date} 
      time={time} 
    />
    </Suspense>
  );
}
