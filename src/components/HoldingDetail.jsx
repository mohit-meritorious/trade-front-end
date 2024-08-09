import classNames from "classnames";
import React from "react";

export default function HoldingDetail({ holdings }) {
  const TABLE_HEADINGS = ["COMPANY", "MKT PRICE", "RETURNS(%)", "CURRENT"];
  return (
    <div className="relative overflow-x-auto shadow-md">
      <table className="w-full text-sm text-right text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr className="border-b border-gray-200 dark:border-gray-700">
            {TABLE_HEADINGS.map((heading, i) => (
              <th
                scope="col"
                key={heading}
                className={classNames("px-6 text-left py-4", {
                  "bg-gray-50 dark:bg-gray-800": i % 2 === 0,
                })}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {holdings.map((stock) => (
            <tr
              className="border-b border-gray-200 dark:border-gray-700"
              key={stock.name}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-left text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                {stock.name}
                <div className="text-xs text-gray-500">
                  {stock.qty} shares . Avg. ₹{stock.buyPrice}
                </div>
              </th>

              <td className="px-6 py-4 ">
                ₹{stock.price}{" "}
                <div
                  className={classNames("text-xs", {
                    "text-green-500": stock.bullish,
                    "text-red-500": !stock.bullish,
                  })}
                >
                  {stock.dayChange} <span>({stock.perChange}%)</span>{" "}
                </div>
              </td>
              <td className="px-6 py-4 text-right bg-gray-50 dark:bg-gray-800">
                {stock.price > stock.buyPrice ? "+" : ""}
                {((stock.price - stock.buyPrice) * stock.qty).toFixed(2)}
                <div
                  className={classNames("text-xs", {
                    "text-green-500": stock.price > stock.buyPrice,
                    "text-red-500": stock.price < stock.buyPrice,
                  })}
                >
                  {((stock.price / stock.buyPrice) * 100 - 100).toFixed(2)}%
                </div>
              </td>
              <td className={classNames("px-6 py-4 ", {})}>
                ₹{stock.qty * stock.price}
                <div className="text-xs">₹{stock.qty * stock.buyPrice}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
