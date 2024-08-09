import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

export default function AllIndices() {
  const INDICES = [
    {
      name: "NIFTY 50",
      value: "24,241.30",
      change: "+185.70",
      percentChange: "0.77",
      bullish: true,
      high: "24,382.60",
      low: "24,131.00",
      open: "24,302.85",
      prevClose: "24,055.60",
    },
    {
      name: "BSE SENSEX",
      value: "79,378.31",
      change: "+618.91",
      percentChange: "0.79",
      bullish: true,
      high: "79,852.08",
      low: "78,981.97",
      open: "78,981.97",
      prevClose: "78,759.40",
    },
    {
      name: "NIFTY Bank",
      value: "50,158.25",
      change: "+66.15",
      percentChange: "0.13",
      bullish: true,
      high: "50,688.80",
      low: "49,907.60",
      open: "50,436.90",
      prevClose: "50,092.10",
    },
    {
      name: "FINNIFTY",
      value: "22,743.40",
      change: "-19.30",
      percentChange: "0.08",
      bullish: false,
      high: "23,078.90",
      low: "22,649.15",
      open: "22,917.85",
      prevClose: "22,762.70",
    },
    {
      name: "Nifty Midcap Select",
      value: "12,436.25",
      change: "+141.90",
      percentChange: "1.15",
      bullish: true,
      high: "12,531.60",
      low: "12,360.90",
      open: "12,362.65",
      prevClose: "12,294.35",
    },
    {
      name: "Bse Bankex",
      value: "57,038.34",
      change: "+96.77",
      percentChange: "0.17",
      bullish: true,
      high: "57,671.10",
      low: "56,742.77",
      open: "57,160.66",
      prevClose: "56,941.47",
    },
    {
      name: "India Vix",
      value: "17.92",
      change: "-2.45",
      percentChange: "12.03",
      bullish: false,
      high: "23.15",
      low: "14.87",
      open: "14.32",
      prevClose: "20.37",
    },
    {
      name: "Nifty Total Market",
      value: "12,819.65",
      change: "+126.05",
      percentChange: "0.99",
      bullish: true,
      high: "12,903.90",
      low: "12,758.40",
      open: "12,782.35",
      prevClose: "12,693.60",
    },
    {
      name: "NIFTY Next 50",
      value: "71,826.45",
      change: "+889.55",
      percentChange: "1.25",
      bullish: true,
      high: "72,456.65",
      low: "71,410.55",
      open: "71,496.40",
      prevClose: "70,936.90",
    },
    {
      name: "NIFTY 100",
      value: "25,255.45",
      change: "+212.40",
      percentChange: "0.85",
      bullish: true,
      high: "25,427.35",
      low: "25,043.05",
      open: "25,199.20",
      prevClose: "25,139.75",
    },
  ];
  const TABLE_HEADINGS = [
    "Name",
    "value",
    "Day Channge",
    "High",
    "Low",
    "Open",
    "Prev Close",
  ];
  return (
    <div className="mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
            {INDICES.map((index) => (
              <tr
                className="border-b border-gray-200 dark:border-gray-700"
                key={index.name}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  <Link to={"/chart"}>{index.name}</Link>
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
                <td className="px-6 py-4">{index.high}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  {index.low}
                </td>
                <td className="px-6 py-4">{index.open}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  {index.prevClose}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
