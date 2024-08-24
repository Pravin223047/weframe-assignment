import Image from "next/image";

// components/ProductCard2.js
const ProductCard2 = () => {
  // Static product data
  const products = [
    {
      id: 1,
      availability: "• nicht lieferbar",
      image: "/medicine.webp",
      brand: "Canify",
      thc: "THC 25%",
      cbd: "CBD &lt;1%",
      icon: "/circledot.webp",
      title: "Cannabis Flos 18/1 PT Mango",
      description: "Ku-Kush Kush Cake Canify",
      cultivar: "Kultivar",
      genetic: "Hybrid",
      price: "11,66",
      currency: "€",
      pricePer: "pro Gramm",
      buttonText: "In den Warenkorb",
    },
    {
      id: 2,
      availability: "• nicht lieferbar",
      image: "/medicine.webp",
      brand: "Canify",
      thc: "THC 25%",
      cbd: "CBD &lt;1%",
      icon: "/circledot.webp",
      title: "Cannabis Flos 18/1 PT Mango",
      description: "Ku-Kush Kush Cake Canify",
      cultivar: "Kultivar",
      genetic: "Hybrid",
      price: "11,66",
      currency: "€",
      pricePer: "pro Gramm",
      buttonText: "In den Warenkorb",
    },
    {
      id: 3,
      availability: "• nicht lieferbar",
      image: "/medicine.webp",
      brand: "Canify",
      thc: "THC 25%",
      cbd: "CBD &lt;1%",
      icon: "/circledot.webp",
      title: "Cannabis Flos 18/1 PT Mango",
      description: "Ku-Kush Kush Cake Canify",
      cultivar: "Kultivar",
      genetic: "Hybrid",
      price: "11,66",
      currency: "€",
      pricePer: "pro Gramm",
      buttonText: "In den Warenkorb",
    },
    // Add more products if needed
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-200 md:border-none pt-2 w-full max-w-full sm:max-w-[310px] xl:max-w-[330px] h-auto overflow-hidden shadow-lg hover:shadow-xl rounded-[30px] rounded-bl-none rounded-tr-none"
        >
          <div className="w-full flex items-center justify-between px-4 py-4">
            <span className="px-4 py-2 bg-[#FAF3F3] rounded-full text-[#B13737] text-sm">
              {product.availability}
            </span>
          </div>
          <div className="w-full h-48 relative">
            <Image
              src={product.image}
              alt={product.title} // Use product title for better alt text
              layout="fill"
              objectFit="contain"
              className="pb-4"
              priority // Load images with high priority if they are above the fold
            />
          </div>
          <div className="p-4 bg-[#D0EDEE] px-5 py-5">
            <span className="bg-[#AFE0E2] px-4 py-2 rounded-md text-sm">
              {product.brand}
            </span>
            <div className="flex flex-wrap items-center justify-between gap-1 py-3">
              <span className="bg-white px-4 py-2 rounded-md text-xs">
                {product.thc}
              </span>
              <span className="bg-[#AFE0E2] px-4 py-2 rounded-md text-xs">
                {product.cbd}
              </span>
              <span className="bg-transparent px-2 py-2 rounded-md">
                <Image
                  src={product.icon}
                  alt="Circledot Icon"
                  width={45}
                  height={45}
                />
              </span>
            </div>
            <h2 className="text-lg font-bold text-[#116A6C] truncate">
              {product.title}
            </h2>
            <p className="text-lg font-bold text-[#116A6C] truncate">
              {product.description}
            </p>
            <div className="flex flex-wrap justify-between items-center w-full pt-4 pb-1">
              <span className="text-lg text-[#116A6C]">{product.cultivar}</span>
              <span className="text-lg text-[#116A6C]">{product.genetic}</span>
            </div>
            <div className="flex flex-wrap justify-between items-center pb-4 w-full">
              <span className="text-lg text-[#116A6C]">Genetik</span>
              <span className="text-lg text-[#116A6C]">Pink Kush</span>
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-3 mt-2">
              <span className="text-lg font-bold flex flex-col text-[#137697]">
                <p className="flex items-center justify-center text-2xl">
                  <span className="text-[#62C3C6] text-xl">
                    {product.currency}{" "}
                  </span>{" "}
                  {product.price} <sup className="text-sm">1</sup>
                </p>
                <span className="text-[#137697] text-sm">
                  {product.pricePer}
                </span>
              </span>
              <button className="mt-2 px-5 bg-[#ECFEAA] text-[#116A6C] py-2 rounded-[30px] rounded-bl-none rounded-tr-none">
                {product.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard2;
