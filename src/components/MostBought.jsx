import React from "react";
import StockCard from "./StockCard";

const MOST_BAUGHT = [
  {
    name: "Triveni Turbine",
    stockPrice: "₹628.10",
    change: "32.45",
    changeInPer: "5.45",
    bullish: true,
  },
  {
    name: "Firstsource Soln",
    stockPrice: "₹289.05",
    change: "13.50",
    changeInPer: "4.90",
    bullish: true,
  },
  {
    name: "Patanjali Foods",
    stockPrice: "₹1766.00",
    change: "80.25",
    changeInPer: "4.76",
    bullish: true,
  },
  {
    name: "Adani Total Gas",
    stockPrice: "₹882.10",
    change: "25.05",
    changeInPer: "2.92",
    bullish: true,
  },
];
export default function MostBought() {
  return (
    <div className="space-y-4">
      <h2>Most Bought</h2>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {MOST_BAUGHT.map((stock) => (
          <StockCard
            key={stock.name}
            companyName={stock.name}
            stockPrice={stock.stockPrice}
            change={stock.change}
            changeInPer={stock.changeInPer}
            bullish={stock.bullish}
          />
        ))}
      </ul>
    </div>
  );
}
