import React from "react";
import InvestmentHeader from "./InvestmentHeader";
import HoldingDetail from "./HoldingDetail";

const HOLDINGS = [
  {
    name: "Tata Power",
    qty: 110,
    buyPrice: 402.2,
    price: 419.45,
    dayChange: -11.3,
    perChange: -2.57,
    bullish: false,
  },
  {
    name: "Blue Star",
    qty: 50,
    buyPrice: 1639.4,
    price: 1612.45,
    dayChange: -10.3,
    perChange: -0.62,
    bullish: false,
  },
  {
    name: "PNB",
    qty: 500,
    price: 114.4,
    buyPrice: 116.6,
    dayChange: -1.32,
    perChange: -1.4,
    bullish: false,
  },
  {
    name: "Tata Steel",
    qty: 350,
    price: 150.74,
    buyPrice: 170.5,
    dayChange: -3.11,
    perChange: -2.04,
    bullish: false,
  },
];
export default function Investments() {
  return (
    <div>
      <InvestmentHeader holdings={HOLDINGS} />
      <HoldingDetail holdings={HOLDINGS} />
    </div>
  );
}
