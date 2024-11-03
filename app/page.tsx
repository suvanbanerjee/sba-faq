"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import faqData from "@/public/faq.json";

type FAQData = {
  [key: string]: { question: string; answer: string }[];
};
const data: FAQData = faqData;
const allData = Object.values(data).flat();

const DisasterBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...Object.keys(data)];

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = selectedCategory === "All" ? allData : data[selectedCategory as keyof typeof data];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
      <header className="h-[8vh] w-full bg-[#08008f] flex items-center p-1 relative">
        <img src={logo.src} alt="Broseph Foundation Logo" className="h-20 absolute left-10 top-[10px]" />
        <div className="flex justify-center items-center w-full">
          <select className="text-black p-2 rounded-md bg-[#08008f] text-white">
            <option value="bangalore">Bengaluru</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow md:py-8 py-16 md:px-8 px-2">
        <h1 className="text-3xl font-bold mb-4 text-center">HQ Volunteering FAQ</h1>

        {/* Category Selector */}
        <div className="flex justify-center items-center flex-col mb-6 pb-4">
          <p className="mr-4 pb-1 text-sm">Select a Category</p>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="rounded-md border-2 border-[#28306f] px-4 py-2 bg-white text-[#28306f] text-sm font-medium cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* FAQ Content */}
        <div className="md:grid md:grid-cols-1 md:gap-4">
          {filteredData.map((item) => (
            <details key={item.question} className="p-4 border-2 border-[#08008f] rounded-xl mb-2">
              <summary className="text-l font-semibold">{item.question}</summary>
              <p className="text-gray-700 mt-2 ml-4">{item.answer}</p>
            </details>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#08008f] flex flex-col items-center text-white p-3">
        <p className="text-sm">Made with ❤️ by Volunteers at Broseph Foundation</p>
      </footer>

      {/* Styles for animation */}
      <style jsx>{`
        details[open] summary ~ * {
          animation: openAnimation 0.3s ease-in-out;
        }
        details:not([open]) summary ~ * {
          animation: closeAnimation 0.3s ease-in-out;
        }
        @keyframes openAnimation {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes closeAnimation {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default DisasterBoard;