import React from "react";
import StockIndeces from "../components/StockExplore/StockIndeces";
import TopGainer from "../components/TopGainer";

export default function StockExplore() {
  return (
    <div className="mt-10 space-y-4">
      <StockIndeces></StockIndeces>
      <TopGainer></TopGainer>
    </div>
  );
}
