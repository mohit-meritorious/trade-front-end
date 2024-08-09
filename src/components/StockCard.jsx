import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

export default function StockCard({
  companyName,
  change,
  changeInPer,
  stockPrice,
  bullish,
}) {
  return (
    <li className="p-4 space-y-3 border rounded-lg">
      <Link to={"/chart"}>
        <div className="w-10 h-10 text-xl leading-10 text-center text-white rounded-lg bg-primary-500">
          {companyName.charAt(0).toUpperCase()}
        </div>
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
