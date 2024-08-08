import classNames from "classnames";
import React, { useState } from "react";

const STOCKS = {
  gainers: [
    {
      name: "Trent",
      value: "₹5,661.25",
      change: "188.80",
      percentChange: "3.45",
      bullish: true,
      "52whigh": "₹5,919.30",
      "52wlow": "₹1,674.40",
    },
    {
      name: "ABB India",
      value: "₹8,063.30",
      change: "192.90 ",
      percentChange: "2.45",
      bullish: true,
      "52whigh": "₹9,149.95",
      "52wlow": "₹3,850.00",
    },
    {
      name: "Tata Motors",
      value: "₹1,047.80",
      change: "22.50",
      percentChange: "2.19",
      bullish: true,
      "52wlow": "₹593.30",
      "52whigh": "₹1,179.00",
    },
    {
      name: "Tata Motors - DVR Ordinary",
      value: "₹722.75",
      change: "13.10",
      percentChange: "1.85",
      bullish: true,
      "52wlow": "₹392.95",
      "52whigh": "₹804.30",
    },
    {
      name: "Power Finance Corporation",
      value: "₹501.45",
      change: "9.00",
      percentChange: "1.83%",
      bullish: true,
      "52wlow": "₹200.44",
      "52whigh": "₹580.00",
    },
    {
      name: "HDFC Bank",
      value: "₹1,652.20",
      change: "28.70",
      percentChange: "1.77",
      bullish: true,
      "52wlow": "₹1,363.55",
      "52whigh": "₹1,794.00",
    },
    {
      name: "Zydus Lifesciences",
      value: "₹1,295.10",
      change: "22.25",
      percentChange: "1.75",
      bullish: true,
      "52wlow": "₹567.75",
      "52whigh": "₹1,299.70",
    },
    {
      name: "Bajaj Holdings & Investment",
      value: "₹9,503.20",
      change: "155.40",
      percentChange: "1.66",
      bullish: true,
      "52wlow": "₹6,627.90",
      "52whigh": "₹10,075.00",
    },
    {
      name: "ICICI Lombard General Insurance Company",
      value: "₹1,966.95",
      change: "31.90",
      percentChange: "1.65",
      bullish: true,
      "52wlow": "₹1,266.00",
      "52whigh": "₹2,031.00",
    },
    {
      name: "Bharti Airtel",
      value: "₹1,463.15",
      change: "21.40",
      percentChange: "1.48",
      bullish: true,
      "52wlow": "₹847.05",
      "52whigh": "₹1,536.25",
    },
  ],
  losers: [
    {
      name: "Shree Cement",
      value: "₹24,345.45",
      change: "-753.15",
      percentChange: "3.00",
      bullish: false,
      "52whigh": "₹30,737.75",
      "52wlow": "₹23,451.00",
    },
    {
      name: "Godrej Consumer Products",
      value: "₹1,460.00",
      change: "-43.80",
      percentChange: "2.91",
      bullish: false,
      "52whigh": "₹1,525.00",
      "52wlow": "₹959.80",
    },
    {
      name: "Asian Paints",
      value: "₹3,030.00",
      change: "-71.45",
      percentChange: "2.30",
      bullish: false,
      "52wlow": "₹2,670.10",
      "52whigh": "₹3,422.95",
    },
    {
      name: "Jindal Steel & Power",
      value: "₹927.00",
      change: "19.40",
      percentChange: "2.05",
      bullish: false,
      "52wlow": "₹581.60",
      "52whigh": "₹1,097.00",
    },
    {
      name: "Tata Power Company",
      value: "₹422.25",
      change: "-8.05",
      percentChange: "1.87",
      bullish: false,
      "52wlow": "₹228.05",
      "52whigh": "₹471.00",
    },
    {
      name: "Varun Beverages",
      value: "₹1,493.30",
      change: "-26.55",
      percentChange: "1.75",
      bullish: false,
      "52wlow": "₹802.65",
      "52whigh": "₹1,702.80",
    },
    {
      name: "TVS Motor Company",
      value: "₹2,531.70",
      change: "-42.85",
      percentChange: "1.66",
      bullish: false,
      "52wlow": "₹1,317.00",
      "52whigh": "₹2,618.65",
    },
    {
      name: "Berger Paints India",
      value: "₹524.90",
      change: "-8.85",
      percentChange: "1.66",
      bullish: false,
      "52wlow": "₹439.00",
      "52whigh": "₹679.75",
    },
    {
      name: "LTIMindtree",
      value: "₹5,476.00",
      change: "-91.50",
      percentChange: "1.64",
      bullish: false,
      "52whigh": "₹6,442.00",
      "52wlow": "₹4,513.55",
    },
    {
      name: "Bosch",
      value: "₹31,900.00",
      change: "-530.85",
      percentChange: "1.64",
      bullish: false,
      "52wlow": "₹17,931.15",
      "52whigh": "₹36,678.00",
    },
  ],
};
export default function TopGainerOrLoser() {
  const TABS = [
    { name: "Gainers", value: "gainers" },
    { name: "Losers", value: "losers" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const TABLE_HEADINGS = [
    "Name",
    "value",
    "Day Channge",
    "52W Low",
    "52W High",
  ];
  return (
    <div className="mt-10">
      {/* <Tabs tabs={TABS} handleTabChange={() => {}} /> */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <ul className="flex flex-wrap mt-5 text-sm font-medium text-center text-gray-500 border-b border-gray-100 dark:border-gray-700 dark:text-gray-400">
          {TABS.map((tab, i) => (
            <li
              key={tab.name}
              className={classNames(
                "me-2 border-b  p-3 dark:bg-gray-800 transition-all duration-300 dark:text-primary-500 cursor-pointer",
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
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              {TABLE_HEADINGS.map((heading, i) => (
                <th
                  scope="col"
                  key={heading}
                  className={classNames("px-6 py-4", {
                    "bg-gray-50 dark:bg-gray-800": i % 2 === 0,
                  })}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {STOCKS[TABS[activeTab].value].map((index) => (
              <tr
                className="border-b border-gray-200 dark:border-gray-700"
                key={index.name}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {index.name}
                </th>

                <td className="px-6 py-4">{index.value}</td>
                <td
                  className={classNames(
                    "px-6 py-4 bg-gray-50 dark:bg-gray-800",
                    {
                      "text-green-500": index.bullish,
                      "text-red-500": !index.bullish,
                    }
                  )}
                >
                  {index.change} <span>({index.percentChange}%)</span>
                </td>
                <td className="px-6 py-4">{index["52wlow"]}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  {index["52wlow"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
