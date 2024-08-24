import React from "react";

const FooterPage = () => {
  return (
    <footer className="w-full mt-6 bg-[#1A8D91] text-white rounded-3xl md:rounded-tl-[60px] md:rounded-tr-[60px] px-6 py-6">
      <div className="container flex flex-col xl:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col items-start justify-center gap-4 h-[200px] px-4 w-full">
          <a
            href="#"
            className="text-[#8CC6C8] hover:underline transition-colors duration-300 ease-in-out"
          >
            AGB
          </a>
          <a
            href="#"
            className="text-[#8CC6C8] hover:underline transition-colors duration-300 ease-in-out"
          >
            Impressum
          </a>
          <a
            href="#"
            className="text-[#8CC6C8] hover:underline transition-colors duration-300 ease-in-out"
          >
            Datenschutz
          </a>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 h-[200px] px-4 w-full">
          <a
            href="#"
            className="flex items-center justify-start gap-2 text-white font-bold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
          >
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
            Rezept einlösen
          </a>
          <a
            href="#"
            className="flex items-center justify-start gap-2 text-white font-bold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
          >
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
            Live Bestand
          </a>
          <a
            href="#"
            className="flex items-center justify-start gap-2 text-white font-bold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
          >
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
            Videosprechstunde
          </a>
          <a
            href="#"
            className="flex items-center justify-start gap-2 text-white font-bold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
          >
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
            </svg>{" "}
            FAQs
          </a>
          <a
            href="#"
            className="flex items-center justify-start gap-2 text-white font-bold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
          >
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
            Kontakt
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 h-[200px] px-4 w-full">
          <h4 className="text-[#8CC6C8] text-lg">Standort</h4>
          <a
            href="#"
            className="text-white font-bold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Bergstraße 49 - 5769469 Weinheim(3 Glocken Quartier)
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 h-[200px] px-4 w-full">
          <h4 className="text-[#8CC6C8] text-lg">Telefon</h4>
          <a
            href="#"
            className="text-white font-bold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
          >
            0223 545 5250
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 h-[200px] px-4 w-full">
          <h4 className="text-[#8CC6C8] text-lg">Öffnungszeiten</h4>
          <h4 className="text-[#8CC6C8] text-lg">Mo-Fr</h4>
          <a
            href="#"
            className="text-white font-bold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
          >
            09:00 &ndash; 18:00 Uhr
          </a>
          <h4 className="text-[#8CC6C8] text-lg">Sa</h4>
          <a
            href="#"
            className="text-white font-bold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
          >
            09:00 &ndash; 14:00 Uhr
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
