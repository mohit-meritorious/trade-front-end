import classNames from "classnames";
import React, { useState } from "react";
import StockCard from "./StockCard";

export default function TopGainer() {
  const TABS = [
    { name: "Large", value: "large" },
    { name: "Mid", value: "mid" },
    { name: "Small", value: "small" },
  ];
  const [activeTab, setActiveTab] = useState(0);

  const GAINERS = {
    large: [
      {
        name: "Britannia Industries",
        stockPrice: "₹5,880.00",
        change: "182.10",
        changeInPer: "3.20",
        bullish: true,
      },
      {
        name: "JSW Steel",
        stockPrice: "₹889.20",
        change: "25.40",
        changeInPer: "2.94",
        bullish: true,
      },
      {
        name: "Adani Total Gas",
        stockPrice: "₹882.10",
        change: "25.05",
        changeInPer: "2.92",
        bullish: true,
      },
      {
        name: "Avenue Supermarts",
        stockPrice: "₹4950.05",
        change: "132.60",
        changeInPer: "2.75",
        bullish: true,
      },
    ],
    mid: [
      {
        name: "Patanjali Foods",
        stockPrice: "₹1766.00",
        change: "80.25",
        changeInPer: "4.76",
        bullish: true,
      },
      {
        name: "Godrej Properties",
        stockPrice: "₹2,965.45",
        change: "130.20",
        changeInPer: "4.59",
        bullish: true,
      },
      {
        name: "Deepak Nitrite",
        stockPrice: "₹3048.05",
        change: "94.60",
        changeInPer: "3.20",
        bullish: true,
      },
      {
        name: "Supreme Industries",
        stockPrice: "₹5,086.40",
        change: "115.50",
        changeInPer: "2.32",
        bullish: true,
      },
    ],
    small: [
      {
        name: "BLS Intl Serv",
        stockPrice: "₹384.40",
        change: "34.50",
        changeInPer: "9.86",
        bullish: true,
      },
      {
        name: "Triveni Turbine",
        stockPrice: "₹628.10",
        change: "32.45",
        changeInPer: "5.45",
        bullish: true,
      },
      {
        name: "Himadri Spl Chem",
        stockPrice: "₹475.25",
        change: "22.60",
        changeInPer: "4.99",
        bullish: true,
      },
      {
        name: "Firstsource Soln",
        stockPrice: "₹289.05",
        change: "13.50",
        changeInPer: "4.90",
        bullish: true,
      },
    ],
  };
  return (
    <div className="space-y-4">
      <h2>Top Gainer</h2>

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
      <ul className="grid grid-cols-3 gap-4 md:grid-cols-4">
        {GAINERS[TABS[activeTab].value].map((gainer) => (
          <StockCard
            key={gainer.name}
            companyName={gainer.name}
            stockPrice={gainer.stockPrice}
            change={gainer.change}
            changeInPer={gainer.changeInPer}
            bullish={gainer.bullish}
          />
        ))}
      </ul>
    </div>
  );
}
