"use client";
import { useState } from "react";
import { FiSearch, FiList } from "react-icons/fi";
import { Switch } from "@headlessui/react";

export default function SearchBarComponent() {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between xl:justify-end w-full gap-4 p-4 rounded-md">
      {/* Search Input */}
      <div className="flex items-center w-full md:w-[500px] text-teal-700 bg-slate-100 px-4 mb-2 rounded-full md:mb-0">
        <input
          type="text"
          placeholder="Suchen"
          className="w-full p-2 border-none outline-none placeholder-custom1 bg-transparent"
        />
        <FiSearch className="text-teal-500 ml-2 h-5 w-5 cursor-pointer" />
      </div>

      {/* Sorting Dropdown */}
      <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
        <select className="w-full md:w-auto p-2 border text-teal-800 bg-teal-100 rounded-md focus:outline-none focus:border-teal-500">
          <option>Sortieren nach</option>
          <option>Sortieren nach</option>
          <option>Sortieren nach</option>
        </select>
      </div>

      {/* Availability Toggle */}
      <div className="flex flex-row w-full md:w-auto gap-4">
        <div className="flex items-center justify-between w-full md:w-auto px-2 py-2 rounded-md text-teal-800 bg-teal-100">
          <span className="mr-2 text-teal-800">Verfügbarkeit</span>
          <Switch
            checked={isAvailable}
            onChange={setIsAvailable}
            className={`${
              isAvailable ? "bg-teal-500" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                isAvailable ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>

        <div className="flex items-center justify-between md:w-auto px-2 py-2 rounded-md text-teal-700 bg-teal-100">
          <FiList className="text-teal-700 h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
