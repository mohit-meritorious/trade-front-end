import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import StockProfile from "./StockProfile";

export default function StockCard({
  companyName,
  change,
  changeInPer,
  stockPrice,
  bullish,
  symbol,
}) {
  return (
    <li className="p-4 space-y-3 border rounded-lg">
      <Link to={"/stocks/" + symbol}>
        <StockProfile companyName={companyName} />
        <h4 className="text-sm">{companyName}</h4>
        <div className="text-xs">{stockPrice}</div>
        <div
          className={classNames("text-xs", {
            "text-green-500": bullish,
            "text-red-500": !bullish,
          })}
        >
          {change} ({changeInPer} %)
        </div>
      </Link>
    </li>
  );
}
