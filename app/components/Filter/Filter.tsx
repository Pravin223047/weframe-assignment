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
      if (window.innerWidth < 768) {
        setIsFilterVisible(false);
      } else {
        setIsFilterVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-4 h-full">
      <button
        className="w-full text-[#116A6C] text-lg bg-[#EDF6F5] px-2 py-2 transition-colors duration-300 ease-in-out hover:bg-[#d7f0ef]"
        onClick={toggleFilterVisibility}
      >
        Filter
      </button>
      {isFilterVisible && (
        <div className="transition-all duration-500 ease-in-out transform">
          <div className="py-6 flex flex-col items-center justify-center text-center">
            <div className="flex w-full flex-col items-center justify-center text-left">
              <p className="mb-4 text-teal-800 text-bold">Preis</p>
              <RangeEuroSlider />
            </div>
            <hr className="w-full bg-teal-600 transition-all duration-500 ease-in-out" />
            <div className="flex items-center text-left w-full mb-2 md:mb-0">
              <button
                className="w-full p-2 text-teal-800 transition-colors duration-300 ease-in-out hover:text-teal-600"
                onClick={toggleDropdown}
              >
                Hersteller
              </button>
            </div>
            {isDropdownOpen && (
              <div
                className="flex flex-col text-left w-full gap-2 mt-2 mb-4 text-teal-800 transition-opacity duration-300 ease-in-out opacity-100"
                style={{ backgroundColor: "transparent" }}
              >
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#064E3B]" />
                  ADREXpharma
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#064E3B]" />
                  Aurora
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#064E3B]" />
                  Avaay
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#064E3B]" />
                  Bedrocan
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#064E3B]" />
                  Cannamedical
                </label>
              </div>
            )}
            <button className="mt-2 mb-6 px-5 w-full border-[#ECFEAA] border-2 text-[#116A6C] py-2 rounded-[30px] rounded-bl-none rounded-tr-none transition-all duration-300 ease-in-out hover:bg-[#d7f0ef]">
              mehr anzeigen
            </button>
            <hr className="w-full bg-teal-600 transition-all duration-500 ease-in-out" />
            <div className="flex w-full flex-col mt-6 mb-6 items-center justify-center text-left">
              <p className="mb-4 text-teal-800 text-bold">THC Gehalt</p>
              <RangePerSlider />
            </div>
            <hr className="w-full bg-teal-600 transition-all duration-500 ease-in-out" />
            <div className="flex w-full flex-col mt-6 mb-6 items-center justify-center text-left">
              <p className="mb-4 text-teal-800 text-bold">CBD Gehalt</p>
              <RangePerSlider2 />
            </div>
          </div>
          <hr className="w-full bg-teal-600 transition-all duration-500 ease-in-out" />
          <div className="flex w-full flex-col mt-6 items-center justify-center text-left">
            <p className="mb-4 text-teal-800 text-bold">THC Gehalt</p>
          </div>
          <div className="w-full mt-2 mb-6 flex items-center justify-center gap-1">
            <button className="bg-[#62C3C6] rounded-md text-sm text-teal-50 px-2 py-1 w-full transition-all duration-300 ease-in-out transform hover:scale-105">
              Indica
            </button>
            <button className="bg-[#CEEBEA] rounded-md text-sm text-teal-700 px-2 py-1 w-full transition-all duration-300 ease-in-out transform hover:scale-105">
              Sativa
            </button>
            <button className="bg-[#CEEBEA] rounded-md text-sm text-teal-700 px-2 py-1 w-full transition-all duration-300 ease-in-out transform hover:scale-105">
              Hybrid
            </button>
          </div>
          <hr className="w-full bg-teal-600 transition-all duration-500 ease-in-out" />
          <div className="flex w-full flex-col mt-6 items-center justify-center text-left">
            <p className="mb-4 text-teal-800 text-bold">Bestrahltung</p>
          </div>
          <div className="w-full mt-2 mb-6 flex items-center justify-center gap-1">
            <button className="bg-[#62C3C6] rounded-md text-sm text-teal-50 px-2 py-1 w-full transition-all duration-300 ease-in-out transform hover:scale-105">
              bestrahlt
            </button>
            <button className="bg-[#CEEBEA] rounded-md text-teal-700 text-sm px-2 py-1 w-full transition-all duration-300 ease-in-out transform hover:scale-105">
              nicht bestrahlt
            </button>
          </div>
          <div className="flex items-center text-left w-full mb-2 md:mb-0">
            <button
              className="w-full p-2 text-teal-800 transition-colors duration-300 ease-in-out hover:text-teal-600"
              onClick={toggleDropdown}
            >
              Terpene
            </button>
          </div>
          {!isDropdownOpen && (
            <div
              className="flex flex-col text-left w-full gap-2 mt-2 mb-4 text-teal-800 transition-opacity duration-300 ease-in-out opacity-0"
              style={{ backgroundColor: "transparent" }}
            >
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#064E3B]" />
                Terpene
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#064E3B]" />
                Terpene
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#064E3B]" />
                Terpene
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#064E3B]" />
                Terpene
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#064E3B]" />
                Terpene
              </label>
            </div>
          )}
          <hr className="w-full mt-6 mb-6 bg-teal-600 transition-all duration-500 ease-in-out" />
          <p className="text-sm mb-6 w-full text-center transition-opacity duration-300 ease-in-out hover:opacity-75">
            <span className="text-[#28E3E9] transition-transform duration-300 ease-in-out transform hover:rotate-180">
              x
            </span>{" "}
            alle Filter zurücksetzen
          </p>
        </div>
      )}
    </div>
  );
};

export default Filter;
