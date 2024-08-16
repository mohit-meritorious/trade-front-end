import React from "react";
import StockIndeces from "../components/StockExplore/StockIndeces";
import Investments from "../components/Investments";

import StockOrder from "../components/stock/StockOrder";

export default function StockInvestments() {
  return (
    <div className="flex gap-8 mt-10">
      <div className="w-7/12 space-y-4">
        <StockIndeces></StockIndeces>
        <Investments />
      </div>
      <div>
        <StockOrder></StockOrder>
      </div>
    </div>
  );
}
