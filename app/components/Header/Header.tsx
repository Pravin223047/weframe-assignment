"use client";

import { Search, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import MobileSideBar from "../MobileSidebar/MobileSidebar";

const HeaderComponent = () => {
  const [activeLink, setActiveLink] = useState<number | null>(0); // Set the first link as active by default
  const [cartItemCount, setCartItemCount] = useState<number>(5); // Example count, replace with actual state if needed

  const handleMouseEnter = (index: number) => {
    setActiveLink(index);
  };

  const handleMouseLeave = () => {
    // Do nothing to keep the active state of the link
  };

  return (
    <header className="flex items-center justify-between bg-white shadow-md">
      <MobileSideBar />
      <div className="container mx-auto px-4 py-2 flex items-center justify-end xl:justify-between">
        {/* Search Bar */}
        <div className="hidden xl:flex bg-[#EEF7F7] text-[#34E4EA] p-2 pr-4 rounded-full items-center space-x-4 w-full h-[40px] max-w-md">
          <input
            type="text"
            placeholder="Suchen"
            className="px-4 py-1.5 border bg-transparent rounded-full text-[#34E4EA] focus:outline-none border-none focus:ring-[#3fffff] placeholder-custom w-full transition-transform duration-300 ease-in-out"
          />
          <button
            aria-label="Search"
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Search className="w-5 h-5 text-[#34E4EA]" />
          </button>
        </div>
        {/* Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6">
          {[
            { label: "Rezept einlösen" },
            { label: "Live Bestand" },
            { label: "Videosprechstunde" },
            { label: "FAQs" },
            { label: "Kontakt" },
          ].map((item, index) => (
            <a
              href="/"
              key={item.label}
              className={`nav-link flex items-center ${
                activeLink === index ? "text-teal-700" : "text-teal-600"
              } hover:text-teal-800`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              aria-label={item.label}
            >
              {activeLink === index ? (
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20C0 8.95431 8.95431 0 20 0V6C20 17.0457 11.0457 26 0 26V20Z"
                    fill="#28E3E9"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
                    fill="#62C3C6"
                    fillOpacity="0.3"
                  />
                </svg>
              )}
              <span className="ml-2">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Cart and Sign In */}
        <div className="flex items-center ml-4 gap-4 space-x-4">
          <button
            aria-label="Cart"
            className={`relative text-teal-600 cart-icon ${
              cartItemCount > 0 ? "has-items" : ""
            }`}
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute top-[-10px] right-[-10px] bg-[#EEF7F7] text-teal-400 text-xs font-bold px-2 py-1 rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>
          <button className="bg-yellow-200 text-teal-600 px-3 py-1 rounded-[20px] rounded-bl-none rounded-tr-none">
            Anmelden
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
