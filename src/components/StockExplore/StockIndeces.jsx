import React from "react";
import { Link } from "react-router-dom";
import IndexCard from "../IndexCard";

export default function StockIndeces() {
  const INDICES = [
    {
      name: "NIFTY",
      value: "24241.30",
      change: "+185.70",
      percentChange: "0.77",
      bullish: true,
    },
    {
      name: "SENSEX",
      value: "79378.31",
      change: "+618.91",
      percentChange: "0.79",
      bullish: true,
    },
    {
      name: "BANKNIFTY",
      value: "50158.25",
      change: "+66.15",
      percentChange: "0.13",
      bullish: true,
    },
    {
      name: "FINNIFTY",
      value: "22743.40",
      change: "-19.30",
      percentChange: "0.08",
      bullish: false,
    },
    {
      name: "MIDCPNIFTY",
      value: "12436.25",
      change: "+141.90",
      percentChange: "1.15",
      bullish: true,
    },
    {
      name: "BANKEX",
      value: "57038.34",
      change: "+96.77",
      percentChange: "0.17",
      bullish: true,
    },
  ];
  return (
    <div className="space-y-2">
      <div className="flex gap-2 heading">
        <h2 className="grow ">Index</h2>
        <Link
          to={"/indices"}
          className="text-sm transition-all duration-300 text-primary-500 shrink-0 underline-offset-0 hover:underline hover:underline-offset-4"
        >
          All indices
        </Link>
      </div>
      <ul
        className="flex space-x-2 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {INDICES.map((index) => (
          <IndexCard
            key={index.name}
            name={index.name}
            bullish={index.bullish}
            change={index.change}
            percentChange={index.percentChange}
            value={index.value}
          />
        ))}
      </ul>
    </div>
  );
}
