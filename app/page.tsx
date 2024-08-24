import React from "react";
import HeaderComponent from "./components/Header/Header";
import SearchBarComponent from "./components/SearchBarComponent/SearchBarComponent";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Filter from "./components/Filter/Filter";
import ProductCard from "./components/ProductCard/ProductCard";
import FooterPage from "./components/Footer/footer";
import ProductCard2 from "./components/ProductCard/ProductCard2";

const HomePage = () => {
  return (
    <main>
      {/* Header */}
      <HeaderComponent />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 my-4">
        <Breadcrumb />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 my-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <h1 className="hidden xl:flex items-center gap-4 text-3xl font-bold text-[#116A6C]">
          <svg
            width="25"
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
          Blüten
        </h1>
        <SearchBarComponent />
      </div>

      {/* Filter and Product Grid */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
        {/* Sidebar Filter */}
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <Filter />
        </aside>

        {/* Product Grid */}
        <div className="w-full md:w-3/4 lg:w-4/5">
          {/* Horizontal Scroll Container */}
          <div className="flex flex-col gap-4 overflow-x-auto space-x-4">
            {/* Multiple ProductCards */}
            <ProductCard2 />
            <ProductCard />
            <ProductCard2 />
          </div>
          <div className="w-full flex items-center justify-end gap-2 mt-4 mb-4">
            <button className="text-[#116A6C]">←</button>
            <button className="text-[#116A6C] text-bold">1</button>
            <button className="text-[#116A6C] text-bold">2</button>
            <button className="text-[#116A6C] text-bold">3</button>
            <p>• • •</p>
            <button className="text-[#116A6C] text-bold">12</button>

            <button className="text-[#116A6C]">→</button>
          </div>
        </div>
      </div>
      <FooterPage />
    </main>
  );
};

export default HomePage;
