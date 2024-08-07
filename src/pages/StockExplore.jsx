import React from "react";
import StockIndeces from "../components/StockExplore/StockIndeces";

import TopLosersOrGainer from "../components/TopLosersOrGainer";
import WatchLists from "../components/WatchLists";

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
const LOSERS = {
  large: GAINERS.small.map((stock) => ({ ...stock, bullish: !stock.bullish })),
  mid: GAINERS.large.map((stock) => ({ ...stock, bullish: !stock.bullish })),
  small: GAINERS.mid.map((stock) => ({ ...stock, bullish: !stock.bullish })),
};
export default function StockExplore() {
  return (
    <div className="flex gap-3 mt-10">
      <div className="space-y-4">
        <StockIndeces></StockIndeces>
        <TopLosersOrGainer
          heading={"Top Gainer"}
          data={GAINERS}
        ></TopLosersOrGainer>
        <TopLosersOrGainer
          heading={"Top Losers"}
          data={LOSERS}
        ></TopLosersOrGainer>
      </div>
      <div className="w-5/12 p-10 ">
        <WatchLists />
      </div>
    </div>
  );
}
