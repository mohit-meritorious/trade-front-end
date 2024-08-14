import React from "react";
import Heading3 from "../../../ui/Heading3";
import Table from "../../../ui/Table";
import { Link } from "react-router-dom";
import classNames from "classnames";

const DATA = [
  {
    company: "Indian Oil Corporation",
    symbol: "indian-oil-corpotation",
    price: 163.73,
    change: 0.24,
    bullish: false,
    peRation: 7.52,
  },
  {
    company: "Bharat Petroleum Corporation",
    symbol: "bharat-petroleum-corpotation",
    price: 325.7,
    change: 1.24,
    bullish: true,
    peRation: 7.33,
  },
  {
    company: "Hindustan Petroleum Corporation",
    symbol: "hindustan-petroleum-corporation",
    price: 374.2,
    change: 0.77,
    bullish: true,
    peRation: 7.99,
  },
  {
    company: "Mangalore Refinery & Petrochemicals",
    symbol: "mangalore-refinery-and-petrochemicals",
    price: 204.52,
    change: 0.24,
    bullish: true,
    peRation: 13.47,
  },
];
const TABLE_HEADING = ["COMPANY", "MARKET PRICE", "P/E RATIO"];
export default function SimiliarStocks() {
  return (
    <div className="space-y-4">
      <Heading3 heading={"Similiar Stocks"} />
      <Table headings={TABLE_HEADING}>
        {DATA.map((stock) => (
          <tr
            className="border-b border-gray-200 dark:border-gray-700"
            key={stock.company}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              <Link to={"/stocks/" + stock.symbol}>{stock.company}</Link>
            </th>
            <td className="px-6 py-4">
              <div>₹{stock.price}</div>
              <div
                className={classNames({
                  "text-green-500": stock.bullish,
                  "text-red-500": !stock.bullish,
                })}
              >
                ({stock.bullish ? "" : "-"}
                {stock.change}%)
              </div>
            </td>
            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
              {stock.peRation}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
