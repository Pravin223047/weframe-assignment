"use client";
import React, { useState, useEffect } from "react";
import RangeEuroSlider from "../RangeSlider/RangeEuroSlider";
import RangePerSlider from "../RangeSlider/RangePerSlider";
import RangePerSlider2 from "../RangeSlider/RangePerSlider2";

const Filter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsFilterVisible(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleFilterVisibility = () => setIsFilterVisible((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div className="p-4 h-full">
      <button
        className="w-full text-[#116A6C] text-lg bg-[#EDF6F5] px-2 py-2 transition-colors duration-300 ease-in-out hover:bg-[#d7f0ef]"
        onClick={toggleFilterVisibility}
      >
        Filter
      </button>
      {isFilterVisible && (
        <div className="transition-transform duration-500 ease-in-out transform">
          <div className="py-6 flex flex-col items-center text-left">
            <div className="w-full flex flex-col items-center">
              <p className="mb-4 text-teal-800 font-bold">Preis</p>
              <RangeEuroSlider />
            </div>
            <hr className="w-full bg-teal-600" />
            <div className="w-full mb-2">
              <button
                className="w-full p-2 text-teal-800 hover:text-teal-600 transition-colors duration-300 ease-in-out"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
                aria-controls="dropdown-content"
              >
                Hersteller
              </button>
              {isDropdownOpen && (
                <div
                  id="dropdown-content"
                  className="flex flex-col w-full gap-2 mt-2 mb-4 text-teal-800"
                >
                  {[
                    "ADREXpharma",
                    "Aurora",
                    "Avaay",
                    "Bedrocan",
                    "Cannamedical",
                  ].map((brand) => (
                    <label key={brand} className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#064E3B]" />
                      {brand}
                    </label>
                  ))}
                </div>
              )}
            </div>
            <button className="mt-2 mb-6 px-5 w-full border-[#ECFEAA] border-2 text-[#116A6C] py-2 rounded-[30px] rounded-bl-none rounded-tr-none hover:bg-[#d7f0ef] transition-all duration-300 ease-in-out">
              mehr anzeigen
            </button>
            <hr className="w-full bg-teal-600" />
            <div className="w-full flex flex-col mt-6 mb-6 items-center">
              <p className="mb-4 text-teal-800 font-bold">THC Gehalt</p>
              <RangePerSlider />
            </div>
            <hr className="w-full bg-teal-600" />
            <div className="w-full flex flex-col mt-6 mb-6 items-center">
              <p className="mb-4 text-teal-800 font-bold">CBD Gehalt</p>
              <RangePerSlider2 />
            </div>
            <hr className="w-full bg-teal-600" />
            <div className="w-full flex flex-col mt-6 items-center">
              <p className="mb-4 text-teal-800 font-bold">THC Gehalt</p>
            </div>
            <div className="w-full mt-2 mb-6 flex gap-1">
              {["Indica", "Sativa", "Hybrid"].map((type) => (
                <button
                  key={type}
                  className={`rounded-md text-sm px-2 py-1 w-full transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                    type === "Indica"
                      ? "bg-[#62C3C6] text-teal-50"
                      : "bg-[#CEEBEA] text-teal-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <hr className="w-full bg-teal-600" />
            <div className="w-full flex flex-col mt-6 items-center">
              <p className="mb-4 text-teal-800 font-bold">Bestrahltung</p>
              <div className="w-full mt-2 mb-6 flex gap-1">
                {["bestrahlt", "nicht bestrahlt"].map((type) => (
                  <button
                    key={type}
                    className={`rounded-md text-sm px-2 py-1 w-full transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                      type === "bestrahlt"
                        ? "bg-[#62C3C6] text-teal-50"
                        : "bg-[#CEEBEA] text-teal-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full mb-2">
              <button
                className="w-full p-2 text-teal-800 hover:text-teal-600 transition-colors duration-300 ease-in-out"
                onClick={toggleDropdown}
                aria-expanded={!isDropdownOpen}
                aria-controls="terpene-content"
              >
                Terpene
              </button>
              {!isDropdownOpen && (
                <div
                  id="terpene-content"
                  className="flex flex-col w-full gap-2 mt-2 mb-4 text-teal-800"
                >
                  {["Terpene", "Terpene", "Terpene", "Terpene", "Terpene"].map(
                    (terpene, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-[#064E3B]" />
                        {terpene}
                      </label>
                    )
                  )}
                </div>
              )}
            </div>
            <hr className="w-full mt-6 mb-6 bg-teal-600" />
            <p className="text-sm mb-6 w-full text-center hover:opacity-75 transition-opacity duration-300 ease-in-out">
              <span className="text-[#28E3E9] transition-transform duration-300 ease-in-out transform hover:rotate-180">
                x
              </span>{" "}
              alle Filter zurücksetzen
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
