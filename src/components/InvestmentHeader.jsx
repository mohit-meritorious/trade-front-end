import React from "react";
import { formatNumberWithCommas } from "../utils/number";
import classNames from "classnames";

export default function InvestmentHeader({ holdings }) {
  const currentMarketPrice = holdings.reduce((accum, stock) => {
    accum += stock.price * stock.qty;
    return accum;
  }, 0);
  const investedValue = holdings.reduce((accum, stock) => {
    accum += stock.buyPrice * stock.qty;
    return accum;
  }, 0);
  const totalReturn = holdings.reduce((accum, stock) => {
    accum += (stock.price - stock.buyPrice) * stock.qty;
    return accum;
  }, 0);
  const oneDayReturns = holdings.reduce((accum, stock) => {
    accum += stock.dayChange * stock.qty;
    return accum;
  }, 0);
  return (
    <>
      <h2>Holdings ({holdings.length})</h2>
      <div className="mt-2 overflow-hidden border border-gray-200 rounded-lg">
        <div className="flex p-4 bg-primary-100 ">
          <div className="w-1/2 border-r border-gray-200">
            <h3>₹{formatNumberWithCommas(currentMarketPrice)}</h3>
            <span className="text-xs text-gray-500">Current Value</span>
          </div>
          <div className="p-2">
            <ul>
              <li className="text-sm text-gray-500">
                <span className="mr-2">Invested Value</span>
                <span>₹{formatNumberWithCommas(Math.ceil(investedValue))}</span>
              </li>
              <li className="text-sm text-gray-500">
                <span className="mr-2">Total Returns</span>
                <span
                  className={classNames({
                    "text-red-500": totalReturn < 0,
                    "text-green-500": totalReturn > 0,
                  })}
                >
                  {totalReturn < 0 ? "-" : ""} ₹
                  {formatNumberWithCommas(Math.abs(Math.ceil(totalReturn)))} (
                  {((totalReturn / investedValue) * 100).toFixed(2)}%)
                </span>
              </li>
              <li className="text-sm text-gray-500">
                <span className="mr-2">1D Returns</span>
                <span
                  className={classNames({
                    "text-red-500": oneDayReturns < 0,
                    "text-green-500": oneDayReturns > 0,
                  })}
                >
                  {oneDayReturns < 0 ? "-" : ""} ₹
                  {formatNumberWithCommas(Math.abs(Math.ceil(oneDayReturns)))} (
                  {((oneDayReturns / investedValue) * 100).toFixed(2)}%)
                </span>
              </li>
            </ul>
          </div>
          {/* <div>
            <button>View All Orders</button>
          </div> */}
        </div>
      </div>
    </>
  );
}
