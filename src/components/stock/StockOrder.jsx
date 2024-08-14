import React, { useState } from "react";
import Heading6 from "../ui/Heading6";
import Tabs from "../Tabs";
import { formatNumberWithCommas } from "../../utils/number";
import ChevronRightIcon from "../Icon/ChevronRightIcon";

export default function StockOrder() {
  const TABS = [
    { name: "BUY", value: "buy" },
    { name: "SELL", value: "sell" },
  ];
  const [isLimit, setIsLimit] = useState(false);
  const [price, setPrice] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="py-3 space-y-1 border-2 border-gray-200 divide-y rounded">
      <div className="px-3 space-y-1 ">
        {" "}
        <Heading6 heading={"Reliance Industries"} />
        <p className="text-xs text-gray-400">₹2,923.70 (-0.12%)</p>
      </div>
      <Tabs tabs={TABS} handleTabChange={setActiveTab} activeTab={activeTab} />
      <div className="h-[500px] flex flex-col justify-between p-4  space-y-2">
        <div className="space-y-3">
          <div className="flex justify-between">
            <div className="text-sm">Qty</div>
            <input
              type="number"
              className="w-32 p-1 border rounded appearance-none focus-visible:outline-none"
            />
          </div>
          <div className="flex justify-between">
            <div className="text-sm">
              Price{" "}
              <button
                className="inline-flex items-end"
                onClick={() => setIsLimit((prev) => !prev)}
              >
                <span> {isLimit ? "Limit" : "Market"}</span>{" "}
                <ChevronRightIcon className={"size-4 rotate-90"} />
              </button>
            </div>
            {isLimit ? (
              <input
                type="number"
                className="w-32 p-1 border rounded appearance-none focus-visible:outline-none"
                value={price}
                onChange={(e) => {
                  if (+e.target.value < 999999999) {
                    setPrice(e.target.value);
                  }
                }}
                max={999999999}
              />
            ) : (
              <div className="w-32 p-1 bg-gray-100 border rounded">
                At Market
              </div>
            )}
          </div>
        </div>
        <div className="space-y-2">
          {" "}
          <div className="text-sm text-center">
            Order will be executed at ₹{formatNumberWithCommas(+price)} or lower
            price
          </div>
          <div className="flex items-center justify-between pt-3 text-xs text-gray-500 border-t">
            <div>
              Balance <span>₹{formatNumberWithCommas(2872)}</span>
            </div>
            <div>
              Approx Req. <span>₹{formatNumberWithCommas(0, false)}</span>
            </div>
          </div>
          <button className="w-full py-2 text-white rounded-md bg-primary-500">
            {TABS[activeTab].name}
          </button>
        </div>
      </div>
    </div>
  );
}
