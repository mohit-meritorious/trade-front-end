import React from "react";
import StockIndeces from "../components/StockExplore/StockIndeces";

import TopLosersOrGainer from "../components/TopLosersOrGainer";
import WatchLists from "../components/WatchLists";
import MostBought from "../components/MostBought";
import { Link } from "react-router-dom";
import { formatNumberWithCommas } from "../utils/number";

const GAINERS = {
  large: [
    {
      name: "Britannia Industries",
      symbol: "britannia-industries",
      stockPrice: "₹5,880.00",
      change: "182.10",
      changeInPer: "3.20",
      bullish: true,
    },
    {
      name: "JSW Steel",
      symbol: "jsw-steel",
      stockPrice: "₹889.20",
      change: "25.40",
      changeInPer: "2.94",
      bullish: true,
    },
    {
      name: "Adani Total Gas",
      symbol: "adani-total-gas",
      stockPrice: "₹882.10",
      change: "25.05",
      changeInPer: "2.92",
      bullish: true,
    },
    {
      name: "Avenue Supermarts",
      symbol: "avenue-supermarts",
      stockPrice: "₹4950.05",
      change: "132.60",
      changeInPer: "2.75",
      bullish: true,
    },
  ],
  mid: [
    {
      name: "Patanjali Foods",
      symbol: "patanjali-foods",
      stockPrice: "₹1766.00",
      change: "80.25",
      changeInPer: "4.76",
      bullish: true,
    },
    {
      name: "Godrej Properties",
      symbol: "godrej-properties",
      stockPrice: "₹2,965.45",
      change: "130.20",
      changeInPer: "4.59",
      bullish: true,
    },
    {
      name: "Deepak Nitrite",
      symbol: "deepak-nitrite",
      stockPrice: "₹3048.05",
      change: "94.60",
      changeInPer: "3.20",
      bullish: true,
    },
    {
      name: "Supreme Industries",
      symbol: "supreme-industries",
      stockPrice: "₹5,086.40",
      change: "115.50",
      changeInPer: "2.32",
      bullish: true,
    },
  ],
  small: [
    {
      name: "BLS Intl Serv",
      symbol: "bls-intl-serv",
      stockPrice: "₹384.40",
      change: "34.50",
      changeInPer: "9.86",
      bullish: true,
    },
    {
      name: "Triveni Turbine",
      symbol: "triveni-turbine",
      stockPrice: "₹628.10",
      change: "32.45",
      changeInPer: "5.45",
      bullish: true,
    },
    {
      name: "Himadri Spl Chem",
      symbol: "himadri-spl-chem",
      stockPrice: "₹475.25",
      change: "22.60",
      changeInPer: "4.99",
      bullish: true,
    },
    {
      name: "Firstsource Soln",
      symbol: "firstsource-soln",
      stockPrice: "₹289.05",
      change: "13.50",
      changeInPer: "4.90",
      bullish: true,
    },
  ],
};
const LOSERS = {
  large: GAINERS.small.map((stock) => ({ ...stock, bullish: !stock.bullish })),
  mid: GAINERS.large.map((stock) => ({ ...stock, bullish: !stock.bullish })),
  small: GAINERS.mid.map((stock) => ({ ...stock, bullish: !stock.bullish })),
};
export default function StockExplore() {
  return (
    <div className="flex gap-3 mt-10">
      <div className="w-7/12 space-y-4">
        <StockIndeces></StockIndeces>
        <MostBought />
        <TopLosersOrGainer
          heading={"Top Gainer"}
          data={GAINERS}
        ></TopLosersOrGainer>
        <TopLosersOrGainer
          heading={"Top Losers"}
          data={LOSERS}
        ></TopLosersOrGainer>
      </div>
      <div className="w-5/12 p-10 space-y-4 ">
        <div className="space-y-3">
          <div className="flex">
            <h2 className="grow">Your Investment</h2>
            <Link
              to={"/stock/investments"}
              className="text-sm transition-all duration-300 text-primary-500 underline-offset-0 hover:underline hover:underline-offset-4"
            >
              Dashboard
            </Link>
          </div>
          <Link
            to={"/stock/investments"}
            className="flex justify-between p-4 border border-gray-200 rounded-md"
          >
            <div className="space-y-2 ">
              <div className="text-green-500">
                + ₹ {formatNumberWithCommas(1802)}
              </div>
              <div className="text-xs text-gray-500">Total Reaturns</div>
            </div>
            <div className="space-y-2 text-right">
              <div>₹{formatNumberWithCommas(18002)}</div>
              <div className="text-xs text-gray-500">Curren Value</div>
            </div>
          </Link>
        </div>
        <WatchLists />
      </div>
    </div>
  );
}
