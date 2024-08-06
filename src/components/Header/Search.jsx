import React, { useState } from "react";
import SearchIcon from "../Icon/SearchIcon";
import classNames from "classnames";

export default function Search() {
  const TABS = [
    { name: "All", value: "all" }, // value must match with result keys
    { name: "Stocks", value: "stocks" }, // value must match with result keys
    { name: "MF", value: "mf" }, // value must match with result keys
    { name: "F&O", value: "fno" }, // value must match with result keys
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [showSuggetions, setShowSuggetions] = useState(false);
  const result = {
    recent: [
      { name: "Zomato Ltd", type: "stock" },
      { name: "NIFTY 08 Aug 24800 Call", type: "fno" },
      { name: "Parag Parikh Flexi Cap Fund", type: "mf" },
      {
        name: "Indian Railway Finance Corporation Ltd.",
        type: "stock",
      },
    ],
    all: [
      { name: "Zomato Ltd", result: "trend" },
      { name: "Suzlon Energy Ltd", result: "trend" },
      { name: "GTL Infrastructure Ltd", result: "trend" },
      {
        name: "Indian Railway Finance Corporation Ltd.",
        result: "trend",
      },
      { name: "Tata Motors Ltd.", result: "trend" },
    ],
    stocks: [
      { name: "Zomato Ltd", result: "trend" },
      { name: "Suzlon Energy Ltd", result: "trend" },
      { name: "GTL Infrastructure Ltd", result: "trend" },
      {
        name: "Indian Railway Finance Corporation Ltd.",
        result: "trend",
      },
      { name: "Tata Motors Ltd.", result: "trend" },
    ],
    mf: [
      { name: "Aditya Birla Sun Life PSU Equity Fund", result: "trend" },
      { name: "Motilal Oswal Midcap Fund", result: "trend" },
      { name: "Quant Small Cap Fund", result: "trend" },
      { name: "SBI PSU Fund", result: "trend" },
      { name: "Nippon India Small Cap Fund", result: "trend" },
      { name: "Parag Parikh Flexi Cap Fund", result: "trend" },
    ],
    fno: [
      { name: "NIFTY 08 Aug 24800 Put", result: "trend" },
      { name: "NIFTY 08 Aug 24800 Call", result: "trend" },
      { name: "BANKNIFTY 07 Aug 51500 Call", result: "trend" },
      { name: "NIFTY 08 Aug 24750 Put", result: "trend" },
      { name: "NIFTY 08 Aug 24700 Put", result: "trend" },
      { name: "BANKNIFTY 07 Aug 51400 Call", result: "trend" },
    ],
  };

  return (
    <>
      <div
        className={classNames(
          "relative z-20 flex items-center w-full px-4 py-2 text-base bg-white border  global-search border-gray-150",
          { "rounded-t-lg": showSuggetions, "rounded-lg": !showSuggetions }
        )}
      >
        <div className="flex items-center justify-center mr-3 icon">
          <SearchIcon className={"size-4"} />
        </div>
        <div className="input-wrapper grow">
          <input
            placeholder="What are you looking for today?"
            onFocus={() => {
              setShowSuggetions(true);
            }}
            className="w-full text-sm text-gray-700 bg-white caret-primary-500 focus-visible:outline-none"
          />
        </div>
        {showSuggetions && (
          <div className="bg-white p-4 max-h-[500px] space-y-4 absolute top-full overflow-y-auto -right-px -left-px rounded-b-lg">
            <div className="p-4 border-b border-b-gray-400">
              <ul className="flex space-x-4">
                {TABS.map((tab, tabIndex) => (
                  <li
                    key={tab.name}
                    onClick={() => {
                      setActiveTab(tabIndex);
                    }}
                    className={classNames(
                      "px-4 py-1 text-xs  rounded-full border cursor-pointer",
                      {
                        "text-primary-500 border-green-500":
                          activeTab === tabIndex,
                        "text-gray-500 border-gray-150": activeTab !== tabIndex,
                      }
                    )}
                  >
                    {tab.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="px-4 py-2 text-base font-medium text-gray-800">
                Recent Search
              </h2>
              <ul>
                {result.recent.map((stock) => (
                  <li
                    key={stock.name}
                    className="px-4 py-2 pl-6 text-sm text-gray-500"
                  >
                    {stock.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="px-4 py-2 text-base font-medium text-gray-800">
                {activeTab === 0
                  ? "Trending"
                  : TABS[activeTab].name + " in trend"}
              </h2>
              <ul>
                {result[TABS[activeTab].value].map((stock) => (
                  <li
                    key={stock.name}
                    className="px-4 py-2 pl-6 text-sm text-gray-500"
                  >
                    {stock.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      {showSuggetions && (
        <div
          onClick={() => {
            setShowSuggetions(false);
          }}
          className="bg-[rgba(0,0,0,0.5)] inset-0 fixed"
        ></div>
      )}
    </>
  );
}
