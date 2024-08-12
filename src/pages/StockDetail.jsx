import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useParams } from "react-router-dom";
import { firstLetterCapital } from "../utils/string";
import StockDetailChart from "../components/stock/StockDetailChart";
import StockOrder from "../components/stock/StockOrder";
export default function StockDetail() {
  const param = useParams();
  const stockName = param.stock_name
    .split("-")
    .map((stockPart) => firstLetterCapital(stockPart))
    .join(" ");

  const BREADCRUMB = [
    { name: "Home", link: "stock/explore" },
    { name: "Stocks", link: "/stocks/explore" },
    { name: stockName, link: "/stocks/explore" },
  ];
  return (
    <div className="space-y-4">
      <Breadcrumb links={BREADCRUMB} />
      <div className="flex space-y-4">
        <div className="w-2/3">
          <StockDetailChart />
        </div>
        <div className="w-1/3">
          <StockOrder />
        </div>
      </div>
    </div>
  );
}
