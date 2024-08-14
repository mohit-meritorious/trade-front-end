import React, { useState } from "react";
import Heading3 from "../../../ui/Heading3";
import classNames from "classnames";
import Heading6 from "../../../ui/Heading6";
import { formatNumberWithCommas } from "../../../../utils/number";
const DATA = {
  "Jun '24": [
    { name: "Promoters", value: 50.33 },
    { name: "Foreign Institutions", value: 21.75 },
    { name: "Retail And Others", value: 10.52 },
    { name: "Other Domestic Institutions", value: 9.57 },
    { name: "Mutual Funds", value: 7.84 },
  ],
  "Mar '24": [
    { name: "Promoters", value: 50.3 },
    { name: "Foreign Institutions", value: 22.14 },
    { name: "Retail And Others", value: 10.89 },
    { name: "Other Domestic Institutions", value: 9.71 },
    { name: "Mutual Funds", value: 6.97 },
  ],
  "Sep '23": [
    { name: "Promoters", value: 50.27 },
    { name: "Foreign Institutions", value: 22.6 },
    { name: "Retail And Others", value: 11.06 },
    { name: "Other Domestic Institutions", value: 9.52 },
    { name: "Mutual Funds", value: 6.56 },
  ],
  "Jun '23": [
    { name: "Promoters", value: 50.39 },
    { name: "Foreign Institutions", value: 22.55 },
    { name: "Retail And Others", value: 10.84 },
    { name: "Other Domestic Institutions", value: 9.77 },
    { name: "Mutual Funds", value: 6.45 },
  ],
};
export default function ShareHoldingPattern() {
  const [activeTab, setActiveTab] = useState(Object.keys(DATA)[0]);

  return (
    <div className="space-y-4">
      <Heading3 heading={"Share Holding Pattern"} />
      <div className="p-4 space-y-4 border border-gray-200 rounded">
        <ul className="flex space-x-4">
          {Object.keys(DATA)
            .reverse()
            .map((tab) => (
              <li
                key={tab.name}
                onClick={() => {
                  setActiveTab(tab);
                }}
                className={classNames(
                  "px-4 py-1 text-xs  rounded-full border cursor-pointer",
                  {
                    "text-primary-500 border-primary-500": activeTab === tab,
                    "text-gray-500 border-gray-150": activeTab !== tab,
                  }
                )}
              >
                {tab}
              </li>
            ))}
        </ul>
        <div className="space-y-5">
          {DATA[activeTab].map((data) => (
            <div key={data.name}>
              <p className="text-sm" children={data.name} />
              <div className="flex justify-between">
                <div className="flex items-center w-[85%]">
                  <span
                    className="inline-block h-2 transition-all duration-300 rounded bg-primary-500"
                    style={{ width: data.value + "%" }}
                  ></span>
                  <span
                    className="inline-block h-[1px] rounded bg-gray-200 transition-all duration-300"
                    style={{ width: 100 - data.value + "%" }}
                  ></span>
                </div>
                <div className="text-sm shrink">
                  {formatNumberWithCommas(data.value)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
