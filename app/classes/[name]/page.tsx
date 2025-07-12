"use client"

import React from "react"
import { useParams } from "next/navigation"
import { Booking } from "./components"
import { classAvailability } from "@/constants/data"

const Page = () => {
  const params = useParams()
  const rawName = params.name?.toString().toUpperCase() || ""

  const isValidClass = rawName in classAvailability

  return (
    <div>
      <Booking classNameParam={isValidClass ? rawName : ""} />
    </div>
  )
}

export default Page
