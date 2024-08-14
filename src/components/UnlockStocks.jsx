import React from "react";
import UnlockStockIcon from "./Icon/UnlockStockIcon";
import Heading3 from "./ui/Heading3";

export default function UnlockStocks() {
  return (
    <div className="p-5 space-y-4 border-2 border-gray-200 rounded">
      <div className="grid place-items-center">
        <UnlockStockIcon />
      </div>
      <Heading3
        heading={"Looking to invest in Stocks?"}
        className={"text-center"}
      />

      <p className="text-xs text-center text-gray-400">
        Create your demat account on Platform in 2 minutes
      </p>
      <button className="w-full py-2 text-white rounded-md bg-primary-500">
        UNLOCK STOCKS
      </button>
    </div>
  );
}
