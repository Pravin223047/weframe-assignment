"use client";

import React, { useEffect, useRef, useState } from "react";

const RangeEuroSlider: React.FC = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  const inputRef = useRef<HTMLInputElement>(null);
  const thumbLeftRef = useRef<HTMLDivElement>(null);
  const thumbRightRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLDivElement>(null);
  const labelMinRef = useRef<HTMLSpanElement>(null);
  const labelMaxRef = useRef<HTMLSpanElement>(null);

  const updateValues = () => {
    if (
      !inputRef.current ||
      !thumbLeftRef.current ||
      !thumbRightRef.current ||
      !rangeRef.current ||
      !labelMinRef.current ||
      !labelMaxRef.current
    ) {
      return;
    }

    const input = inputRef.current;
    const min = parseInt(input.min);
    const max = parseInt(input.max);
    const value = parseInt(input.value);

    // Update minValue and maxValue based on input
    setMinValue(value);
    setMaxValue(value + 15); // Increased range for better visibility

    // Calculate percentage positions
    const percentStart = ((minValue - min) / (max - min)) * 100;
    const percentEnd = ((maxValue - min) / (max - min)) * 100;

    // Ensure percentEnd does not exceed 100%
    const adjustedPercentEnd = percentEnd > 100 ? 100 : percentEnd;

    // Update thumb and range positions
    if (thumbLeftRef.current) {
      thumbLeftRef.current.style.left = percentStart + "%";
    }
    if (thumbRightRef.current) {
      thumbRightRef.current.style.left = adjustedPercentEnd + "%";
    }
    if (rangeRef.current) {
      rangeRef.current.style.left = percentStart + "%";
      rangeRef.current.style.width = adjustedPercentEnd - percentStart + "%";
    }

    // Update label text
    if (labelMinRef.current) {
      labelMinRef.current.textContent = minValue + " €";
    }
    if (labelMaxRef.current) {
      labelMaxRef.current.textContent = maxValue + " €";
    }
  };

  useEffect(() => {
    updateValues();

    // Update on input change
    const input = inputRef.current;
    if (input) {
      input.addEventListener("input", updateValues);
    }

    // Clean up event listener on component unmount
    return () => {
      if (input) {
        input.removeEventListener("input", updateValues);
      }
    };
  }, [minValue, maxValue]);

  return (
    <div className="py-4 w-full max-w-md mx-auto">
      <div className="relative">
        {/* Background track for the slider */}
        <div
          className="absolute left-0 top-1/2 w-full h-2 bg-teal-200 rounded-lg"
          style={{ transform: "translateY(-50%)" }}
        ></div>

        {/* Range between min and max values */}
        <div
          ref={rangeRef}
          className="absolute top-1/2 h-2 bg-teal-400 rounded-lg"
          style={{
            left: "0%",
            width: "20%", // Default value to be adjusted dynamically
            transform: "translateY(-50%)",
          }}
        ></div>

        {/* Input for range value */}
        <input
          ref={inputRef}
          type="range"
          min="0"
          max="85" // Adjusted max value to allow for increased range
          step="1"
          defaultValue="0"
          className="absolute w-full h-2 bg-transparent appearance-none"
          style={{ zIndex: 2 }}
        />

        {/* Hide default range input styles */}
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 50px;
            height: 20px;
            background: transparent; /* Hides default styling */
            cursor: pointer;
            z-index: 2;
          }

          input[type="range"]::-moz-range-thumb {
            width: 50px;
            height: 20px;
            background: transparent; /* Hides default styling */
            cursor: pointer;
            z-index: 2;
          }

          input[type="range"]::-ms-thumb {
            width: 50px;
            height: 20px;
            background: transparent; /* Hides default styling */
            cursor: pointer;
            z-index: 2;
          }

          input[type="range"] {
            /* Hide the default blue dot */
            outline: none;
          }
        `}</style>

        {/* Handle for minValue */}
        <div
          ref={thumbLeftRef}
          className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
          style={{
            left: "0%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
          }}
        >
          <svg
            width="20"
            height="26"
            viewBox="0 0 20 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20C0 8.95431 8.95431 0 20 0V6C20 17.0457 11.0457 26 0 26V20Z"
              fill="#28E3E9"
            />
          </svg>
        </div>

        {/* Handle for maxValue */}
        <div
          ref={thumbRightRef}
          className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
          style={{
            left: "20%", // Default value to be adjusted dynamically
            transform: "translate(-50%, -50%)",
            zIndex: 3,
          }}
        >
          <svg
            width="20"
            height="26"
            viewBox="0 0 20 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20C0 8.95431 8.95431 0 20 0V6C20 17.0457 11.0457 26 0 26V20Z"
              fill="#28E3E9"
            />
          </svg>
        </div>
      </div>
      {/* Displaying current min and max values */}
      <div className="flex justify-between gap-1 items-center mt-6">
        <span
          ref={labelMinRef}
          className="bg-gray-100 rounded-full w-full px-4 py-1 text-gray-700"
        >
          0 €
        </span>
        <span>-</span>
        <span
          ref={labelMaxRef}
          className="bg-gray-100 rounded-full w-full px-4 py-1 text-gray-700"
        >
          15 €
        </span>
      </div>
    </div>
  );
};

export default RangeEuroSlider;
