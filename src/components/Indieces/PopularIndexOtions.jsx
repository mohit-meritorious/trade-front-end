import React from "react";
import Heading3 from "../ui/Heading3";
import classNames from "classnames";

const OPTIONS = [
  { name: "NIFTY 24400 Call", value: 218.45, change: 188.76, bullish: true },
  { name: "NIFTY 24500 Call", value: 154.3, change: 219.46, bullish: true },
  { name: "NIFTY 24300 Put", value: 62.05, change: 74.54, bullish: false },
  { name: "NIFTY 24300 Call", value: 292.4, change: 157.51, bullish: true },
  { name: "NIFTY 24400 Put", value: 88.3, change: 71.09, bullish: false },
  { name: "NIFTY 25000 Call", value: 8.75, change: 121.52, bullish: true },
  { name: "NIFTY 24200 Put", value: 43.85, change: 76.9, bullish: false },
];
export default function PopularIndexOtions() {
  return (
    <div className="sticky border border-gray-200 rounded-md top-4">
      <Heading3
        heading={"Top NIFTY 50 Options"}
        className={"p-3 pb-6 border-b border-dashed"}
      />
      <ul className="divide-y">
        {OPTIONS.map((option) => (
          <li className="flex justify-between p-4 text-sm" key={option.name}>
            <div>{option.name}</div>
            <div>
              <div>{option.value}</div>
              <div
                className={classNames("text-xs", {
                  "text-green-500": option.bullish,
                  "text-red-500": !option.bullish,
                })}
              >
                {option.change}%
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
