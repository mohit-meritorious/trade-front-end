import React from "react";
import { formatNumberWithCommas } from "../../../../utils/number";

export default function LowHighIndicator({
  low,
  price,
  high,
  lowText = "Today's Low",
  highText = "Today's High",
}) {
  return (
    <div className="flex items-center justify-around gap-5">
      <div className="text-xs shrink-0">
        <p>{lowText}</p>
        <p>{formatNumberWithCommas(low)}</p>
      </div>
      <div className="text-xs w-[600px]">
        <div className="w-full h-1 rounded-full bg-primary-500"></div>
        <div className="relative">
          <span
            className="absolute inline-block w-0 h-0 transition-all duration-300 -translate-x-2 border-b-8 border-l-8 border-r-8 border-l-transparent border-b-gray-500 border-r-transparent"
            style={{
              left: ((price - low) / (high - low)) * 100 + "%",
            }}
          ></span>
        </div>
      </div>
      <div className="text-xs shrink-0">
        <p>{highText}</p>
        <p>{formatNumberWithCommas(high)}</p>
      </div>
    </div>
  );
}
