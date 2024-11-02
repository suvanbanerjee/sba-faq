"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from './logo.jpg'

const data = {
  "Contact Information": [
    {
    "question": "Who to contact for coordination?",
    "answer": "You can contact Sreejesh (+91 8431980514) or Broseph (+91 6363799599) for coordination."
    }
  ],
  "Timings and Attendance": [
    {
    "question": "What will the timings be?",
    "answer": "The volunteering timings are from 10am to 8pm."
    },
    {
    "question": "Can I come for X number of hours?",
    "answer": "The minimum time commitment is 4 hours. Full-day commitments are preferred but not mandatory."
    },
    {
    "question": "Can I come between X and X timing?",
    "answer": "You can come for any 4 hours or more between 10am to 8pm. However, it's best to come in at 10am, Noon, 2pm, or 4pm."
    },
    {
    "question": "Will I get a reminder to come?",
    "answer": "Someone from our office will be contacting you one day before your scheduled visit. Regardless, you're expected to show up on your committed day even without reminders."
    }
  ],
  "Work Details and Task Assignment": [
    {
    "question": "What will the work be?",
    "answer": "Including but not limited to manual tasks, office/library management, city beautification, civic issues documentation, tree plantation, data verification, occasional government office or police station visits, graphics designing, video production, content writing, volunteering tasks planning, etc. Tasks are optional as per your convenience."
    },
    {
    "question": "I have X skill, can I only do that work?",
    "answer": "For the first few weeks, you'll be given general volunteering tasks which may or may not be as per your skills. After you show up consistently for a few weeks, you will be added to a team where your skills will be more useful. This is a part of the volunteering process."
    }
  ],
  "Volunteer Community": [
    {
    "question": "How many other volunteers will be there?",
    "answer": "At least 5-10 volunteers apart from you will be there."
    }
  ],
  "Certification and Payment": [
    {
    "question": "Will I get a certificate?",
    "answer": "After 2 months or 10 days of consistent volunteering (whichever happens first), you'll be eligible for a volunteering certificate."
    },
    {
    "question": "Is there any payment for this?",
    "answer": "There is no payment for volunteering work. However, if you are interested in interning with SBA, let us know and we can discuss a stipend."
    },
    {
    "question": "Can I do an internship?",
    "answer": "We have internships available. Please let us know, and we'll get in touch with you."
    }
  ],
  "Location and Logistics": [
    {
    "question": "Can I do this from home?",
    "answer": "HQ Volunteering initiative is only for volunteers who can come to the HQ physically."
    },
    {
    "question": "Where will the volunteering be?",
    "answer": "Most of the volunteering work will happen indoors at the HQ. Occasionally, outdoor volunteering around the HQ might also happen. Optionally, you might sometimes be asked to accompany other volunteers to government offices and police stations."
    },
    {
    "question": "Will there be parking?",
    "answer": "Parking is available outside the HQ and in the adjoining CV Raman Hospital premises for 2-wheelers as well as 4-wheelers."
    },
    {
    "question": "What is the HQ Location?",
    "answer": "The Google Maps location for the St. Broseph HQ is broseph.in/hq."
    }
  ],
  "Facilities": [
    {
    "question": "Will I get food?",
    "answer": "Lunch (at 1pm), Tea (at 4pm), and Dinner (at 8pm) are prepared for all volunteers."
    }
  ],
  "Personal Arrangements": [
    {
    "question": "Can I bring my friend?",
    "answer": "Yes. But please ask them to fill out the HQ Volunteering form as well."
    },
    {
    "question": "What should I bring with me?",
    "answer": "Your personal laptop and a water bottle (in case outdoor volunteering happens)."
    },
    {
    "question": "Can I bring my pet?",
    "answer": "If you plan to bring a pet, please check with us in advance."
    },
    {
    "question": "Can I do my work / my office work while I'm there?",
    "answer": "Yes, we encourage volunteers to do their own work or their office work from the HQ itself, as long as they are able to commit a few hours of quality time to volunteering in between."
    }
  ],
  'All': [{
    "question": "Can I do my work / my office work while I'm there? ",
    "answer": "Yes, we encourage volunteers to do their own work or their office work from the HQ itself, as long as they are able to commit a few hours of quality time to volunteering in between."
    }]
};
data.All = Object.values(data).flat();

const DisasterBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = Object.keys(data);

  const handleCategoryClick = (category: string) => {   
    setSelectedCategory(category);
  };
  

  return (
    <>
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="h-[8vh] w-full bg-[#08008f] flex items-center p-1 relative">
        <img src={logo.src} alt="Broseph Foundation Logo" className="h-20 mr-2 absolute left-10 top-[10px]" />        {/* <h2 className="text-xl text-white font-bold">Broseph Foundation</h2> */}
        <div className="flex justify-center items-center w-full">
          <select className="text-black p-2 rounded-md"
          style={{backgroundColor: "#08008f", color: "white"}}>
            <option value="banglore">Benglauru</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:py-8 py-16 md:px-8 px-2">
        <h1 className="text-3xl font-bold mb-4 text-center">HQ Volunteering FAQ</h1>

        {/* Category Selector and Heading */}
        <div className="flex justify-center items-center flex-col">

          {/* Category Selector */}
          <div className="w-full md:w-auto flex justify-center md:justify-end mb-6 pb-4 md:mb-0">
            <div className="flex flex-col items-center text-center gap-2">
            <p className="mr-4 text-sm">Select a Category</p>
            <details className="relative inline-block text-left w-full md:w-auto">
              <summary className="inline-flex justify-center w-full md:w-auto rounded-md border-2 border-[#28306f] px-4 py-2 bg-white text-[#28306f] text-sm font-medium hover:border-[#1c1f4a] focus:outline-none cursor-pointer">
                {selectedCategory}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1 max-h-48 overflow-y-auto"> 
                  <button
                      key={'all'}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        selectedCategory === 'all'
                          ? "bg-gray-200 text-black font-bold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => handleCategoryClick("All")}>
                      {'All'}
                      </button>
                  {categories.map((category) => (
                  
                    <button
                      key={category}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        selectedCategory === category
                          ? "bg-gray-200 text-black font-bold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </details>
            </div>
          </div>
        </div>
        {/* FAQ Content */}
        <div className="">
          <div className="md:grid md:grid-cols-1 md:gap-4">
            {data[selectedCategory as keyof typeof data]?.map((item) => (
                <details
                key={item.question}
                className="p-4 border-2 border-[#08008f] rounded-xl hover:bg-gray-50 transition-all transform cursor-pointer mb-2"
                >
                <summary className="text-l font-semibold">{item.question}</summary>
                <p className="text-gray-700 mt-2 ml-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-[#08008f] flex flex-col items-center justify-center text-white">
      <div className="w-full bg-[#08008f] flex flex-col items-center justify-center text-white">
        <p className="text-sm">Powered by Broseph Foundation</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
      </div>
      </footer>
    </>
  );
};

export default DisasterBoard;
