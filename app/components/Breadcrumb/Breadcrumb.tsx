import React from "react";
import Link from "next/link";

const Breadcrumb = React.memo(() => {
  return (
    <nav
      className="flex flex-col w-full md:flex-row gap-4 items-center justify-between py-4 md:px-6"
      aria-label="Breadcrumb"
    >
      <div className="flex items-center space-x-2 text-sm text-teal-500">
        <Link
          href="/"
          className="hover:underline transition-transform duration-300 ease-in-out transform hover:scale-105"
          aria-current="page"
        >
          Home
        </Link>
        <span className="mx-1">{">"}</span>
        <Link
          href="/livebestand"
          className="hover:underline transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Livebestand
        </Link>
        <span className="mx-1">{">"}</span>
        <span className="text-[#116A6C] font-semibold">Cannabis Blüten</span>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-col w-full md:w-auto items-center space-x-2 justify-between md:justify-center text-center gap-2">
        <span className="text-sm text-teal-500 w-full md:w-[300px]">
          GKV mit Kostenübernahme?
        </span>
        <button className="border-2 border-teal-500 w-full md:w-[300px] text-teal-500 rounded-[20px] rounded-bl-none rounded-tr-none px-4 py-1 text-sm hover:bg-teal-100 transition-transform duration-300 ease-in-out transform hover:scale-105">
          Preisoptionen
        </button>
      </div>
    </nav>
  );
});

export default Breadcrumb;
