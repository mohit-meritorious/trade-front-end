import React, { Fragment } from "react";
import { formatNumberWithCommas } from "../../../../../utils/number";
import classNames from "classnames";

export default function AskBidList({ type, data = [], total }) {
  const max = Math.max(...data.map((data) => data.qty));

  return (
    <div className="grid grid-cols-2 gap-3 p-5 text-sm border-r border-daspeer-aria-hidden:">
      <div>{type === "bid" ? "Bid" : "Ask"} Price</div>
      <div className="text-right">Qty</div>
      {data.map((data) => (
        <Fragment key={data.price}>
          <div> {formatNumberWithCommas(data.price)}</div>
          <div className="text-right">
            <span
              className={classNames("inline-block", {
                "bg-red-100": type === "ask",
                "bg-green-100": type === "bid",
              })}
              style={{ width: (data.qty / max) * 100 + "%" }}
            >
              {" "}
              {formatNumberWithCommas(data.qty, false)}
            </span>
          </div>
        </Fragment>
      ))}

      <div className="font-bold">{type === "bid" ? "Bid" : "Ask"} Total</div>
      <div className="font-bold text-right">
        {formatNumberWithCommas(total, false)}
      </div>
    </div>
  );
}
