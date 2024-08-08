import classNames from "classnames";
import React, { useState } from "react";
import StockCard from "./StockCard";

export default function TopLosersOrGainer({ heading, data }) {
  const TABS = [
    { name: "Large", value: "large" },
    { name: "Mid", value: "mid" },
    { name: "Small", value: "small" },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-4">
      <h2>{heading}</h2>

      <ul className="flex flex-wrap mt-5 text-sm font-medium text-center text-gray-500 border-b border-gray-100 dark:border-gray-700 dark:text-gray-400">
        {TABS.map((tab, i) => (
          <li
            key={tab.name}
            className={classNames(
              "me-2 border-b  p-3 dark:bg-gray-800 dark:text-primary-500 cursor-pointer",
              {
                "border-primary-500 bg-primary-100 text-primary-500":
                  i === activeTab,
                "border-transparent": i !== activeTab,
              }
            )}
            onClick={() => {
              setActiveTab(i);
            }}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data[TABS[activeTab].value].map((stock) => (
          <StockCard
            key={stock.name}
            companyName={stock.name}
            stockPrice={stock.stockPrice}
            change={stock.change}
            changeInPer={stock.changeInPer}
            bullish={stock.bullish}
          />
        ))}
      </ul>
    </div>
  );
}
