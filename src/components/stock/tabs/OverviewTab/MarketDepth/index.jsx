import React from "react";
import Heading3 from "../../../../ui/Heading3";
import { formatNumberWithCommas } from "../../../../../utils/number";
import OrderBook from "./OrderBook";

export default function MarketDepth() {
  const BUY_PER = 42.6;
  const SELL_PER = 100 - 42.6;
  return (
    <div className="space-y-4">
      <Heading3 heading={"Market Depth"} />
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <div>Buy Order Quantity</div>
          <div>Sell Order Quantity</div>
        </div>
        <div className="flex items-center space-x-4 text-sm font-semibold">
          <div className="shrink-0">{formatNumberWithCommas(BUY_PER)}%</div>
          <div className="flex overflow-hidden rounded-full grow">
            <div
              className={`bg-green-500 h-1`}
              style={{ width: BUY_PER + "%" }}
            ></div>
            <div
              className={`bg-red-500 h-1`}
              style={{ width: SELL_PER + "%" }}
            ></div>
          </div>
          <div className="shrink-0">{formatNumberWithCommas(SELL_PER)}%</div>
        </div>
      </div>
      <OrderBook />
    </div>
  );
}
