import classNames from "classnames";
import React from "react";

export default function IndexCard({
  name,
  value,
  bullish,
  change,
  percentChange,
}) {
  return (
    <li className="flex-shrink-0 px-4 py-2 border rounded-lg shadow border-gray-150">
      <h3 className="text-sm">{name}</h3>
      <div className="text-xs text-gray-500">
        {value}{" "}
        <span
          className={classNames({
            "text-green-500": bullish,
            "text-red-500": !bullish,
          })}
        >
          ({change} | {percentChange}%)
        </span>
      </div>
    </li>
  );
}
