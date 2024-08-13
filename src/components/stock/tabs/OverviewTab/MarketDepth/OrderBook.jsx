import React from "react";
import AskBidList from "./AskBidList";

const ASK = [
  { price: 2926.25, qty: 185 },
  { price: 2926.2, qty: 30 },
  { price: 2926, qty: 87 },
  { price: 2925.9, qty: 92 },
  { price: 2925.8, qty: 24 },
];
const BID = [
  { price: 2926.85, qty: 81 },
  { price: 2926.95, qty: 29 },
  { price: 2927, qty: 30 },
  { price: 2927.05, qty: 30 },
  { price: 2927.1, qty: 26 },
];
export default function OrderBook() {
  return (
    <div className="grid grid-cols-2 border rounded-md">
      <AskBidList data={BID} total={177452} type="bid" />
      <AskBidList data={ASK} total={228072} type="ask" />
    </div>
  );
}
