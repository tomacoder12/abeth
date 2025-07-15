import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  serviceName: string;
  price: number | string;
  date?: string;
  time?: string;
  location?: string;
  instructor?: string;
  duration?: string;
  description?: string;
  type?: string;
  tags?: string[];
  capacity?: number;
};

export default function Details({
  serviceName,
  price,
  date,
  time,
  location,
  instructor,
  duration,
  description,
  type,
  tags,
  capacity,
}: Props) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="w-96 text-white">
      {/* Title with matching border */}
      <div className="border-b border-white mb-6">
        <p className="text-lg pb-2">Service Details</p>
      </div>

      <div className="space-y-2">
        <p className="font-semibold text-xl">{serviceName}</p>
        <p>${price}</p>

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

        {location && <p>{location}</p>}
        {instructor && <p>{instructor}</p>}
        {duration && <p>{duration}</p>}

        {/* More details toggle */}
        <div className="mt-2">
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="flex items-center space-x-1 text-sm"
          >
            <span>{showDetails ? "Less details" : "More details"}</span>
            <span
              className={`transform transition-transform cursor-pointer ${
                showDetails ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoIosArrowDown />
            </span>
          </button>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-2 space-y-1 text-sm text-gray-300"
              >
                {description && <p>{description}</p>}
                {type && <p>Class type: {type}</p>}
                {tags && tags.length > 0 && (
                  <p>Tags: {tags.join(", ")}</p>
                )}
                {capacity && <p>Capacity: {capacity} people</p>}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
