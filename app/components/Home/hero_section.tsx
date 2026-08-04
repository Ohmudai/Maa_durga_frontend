"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const stocks = [
    {
      name: "Samsung Galaxy S21",
      one_word_desc:
        "Flagship smartphone with sleek design and powerful performance.",
      status: "In stock",
    },
    {
      name: "Apple MacBook Pro",
      one_word_desc: "High-performance laptop for professionals and creatives.",
      status: "In stock",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row items-center justify-between flex-2 pt-16 gap-x-32 ">
      {/* left section */}
      <div className="w-[50%] ">
        <p className="flex justify-start items-center text-xs font-semibold text-secondary gap-x-1 ">
          <span className="text-xl">&bull;</span> OPEN NOW AT MILAN CHOWK, MID
          BANESHWOR, KATHMANDU
        </p>
        <h1 className="text-5xl font-bold text-primary mt-2">
          Everything Electric,{" "}
          <span className="underline decoration-secondary">
            all in one place
          </span>
        </h1>
        <p className="text-sm text-black/40 mt-6">
          We are a leading electronics store in Kathmandu, Nepal, offering a
          wide range of high-quality electronic products and accessories. Our
          mission is to provide our customers with the best shopping experience
          and the latest technology at competitive prices.
        </p>
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 justify-end items-center mt-6">
          <button
            className=" flex justify-center items-center gap-x-1 cursor-pointer bg-primary text-white px-6 py-2 rounded-md mt-4 transition-colors duration-300"
            onClick={() =>
              window.open(
                "https://wa.me/917349206895?text=Hi%20I%20want%20to%20know%20about%20your%20products.",
                "_blank",
              )
            }
          >
            <FaWhatsapp className="text-green-500 text-2xl" />
            WhatsApp Us
          </button>
          <button className="flex justify-center items-center gap-x-1 cursor-pointer bg-primary text-white px-6 py-2 rounded-md mt-4 transition-colors duration-300">
            <FaLocationDot className="text-red-600 text-sm" />
            Visit Us
          </button>
        </div>
      </div>
      {/* Right Section  */}
      <div className=" w-[50%] bg-primary rounded-xl p-8">
        <div className="flex justify-between items-center  px-4 py-2">
          <div>
            <small className="text-white font-light">Featured this week</small>
            <p className="text-lg font-semibold text-white">New Arrivals</p>
          </div>
          <div className="bg-secondary text-white px-4  rounded-2xl">
            {stocks.length} New
          </div>
        </div>
        {/* cards */}

        <div className="flex flex-col gap-y-4">
          {stocks.map((stock, index) => {
            return (
              <div
                key={index}
                className="p-4 border-2 border-gray-400 flex justify-between  items-center rounded-lg"
              >
                <div>
                  <div>
                    <p className="text-white">{stock.name}</p>
                  </div>
                  <small className="font-light text-white/60">
                    {stock.one_word_desc}
                  </small>
                </div>
                <div className="bg-secondary px-3 rounded-xl">
                  <p className="text-white">{stock.status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
