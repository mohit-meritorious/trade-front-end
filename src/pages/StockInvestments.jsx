import React from "react";
import StockIndeces from "../components/StockExplore/StockIndeces";
import Investments from "../components/Investments";
import Wallet from "../components/Wallet";

export default function StockInvestments() {
  return (
    <div className="flex gap-3 mt-10">
      <div className="w-7/12 space-y-4">
        <StockIndeces></StockIndeces>
        <Investments />
      </div>
      <Wallet />
    </div>
  );
}
