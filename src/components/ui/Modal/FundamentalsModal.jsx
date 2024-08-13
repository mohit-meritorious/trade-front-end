import React from "react";
import ModalHeader from "./ModalHeader";
import Heading6 from "../Heading6";

const LIST = [
  {
    heading: "Market Cap",
    description:
      "Market cap is the total market value of all of a company's outstanding shares.",
  },
  {
    heading: "P/E Ratio(TTM)",
    description:
      "P/E (price-to-earnings) ratio is the ratio of a company's share price to its earnings per share (EPS). P/E ratio is used to determine whether a company is overvalued or undervalued.",
  },
  {
    heading: "P/B Ratio",
    description:
      "P/B (price-to-book) ratio is the ratio of a company's share price to its book value. Any value under 1.0 is considered a good P/B value.",
  },
  {
    heading: "Industry P/E",
    description:
      "The average P/E ratio of all the stocks in any sector. Different sectors consider different P/E ratios as healthy.",
  },
  {
    heading: "Face Value",
    description:
      "The original value of a company's stock as written in its books of accounts and its share certificates. Also known as par value, it is fixed when the stock is first issued.",
  },
  {
    heading: "ROE",
    description:
      "Return on equity (ROE) is a measure of financial performance, calculated by dividing net income by shareholders' equity.",
  },
  {
    heading: "Book Value",
    description:
      "The amount of money that a company's shareholders would earn if it is liquidated and has paid off all liabilities.",
  },
  {
    heading: "Dividend Yield",
    description:
      "Dividend yield percentage is the amount of money a company pays its shareholders for owning a share of its stock divided by its current stock price.",
  },
  {
    heading: "EPS(TTM)",
    description:
      "Earnings per share (EPS) is a company's net profit divided by the number of its common outstanding shares. It indicates how much money a company makes for each share of its stock.",
  },
  {
    heading: "Debt to Equity",
    description:
      "Debt to Equity is the percentage of the total liabilities of a company (debt) to its shareholders' equity. A higher debt to equity means the company is using more debt funds than equity funds, and a lower debt to equity means more equity than debt funds.",
  },
];
export default function FundamentalsMdoal() {
  return (
    <div className="pb-5 space-y-4">
      <ModalHeader
        description={
          "It is financial information that is reported quarterly or annually."
        }
        heading={"FUNDAMENTALS"}
      />
      <ul className="grid grid-cols-2 gap-6">
        {LIST.map((listItem) => (
          <li key={listItem.heading}>
            <Heading6 heading={listItem.heading} />
            <p className="text-xs font-light text-gray-500">
              {listItem.description}
            </p>
          </li>
        ))}
      </ul>
      <p className="text-xs font-light text-gray-500">
        *The above information is sourced from Refinitiv. It is on a
        consolidated balance sheet basis and excludes extraordinary items.
      </p>
    </div>
  );
}
