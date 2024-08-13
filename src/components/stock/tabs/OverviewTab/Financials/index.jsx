import React, { useState } from "react";
import Heading3 from "../../../../ui/Heading3";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
import { formatNumberWithCommas } from "../../../../../utils/number";
import classNames from "classnames";
import { firstLetterCapital } from "../../../../../utils/string";
const TABS = [
  { name: "Yearly", value: "yearly" }, // value must match with result keys
  { name: "Quarterly", value: "quarterly" }, // value must match with result keys
];
const HEADING_TABS = [
  { name: "Revenue", value: "revenue" },
  { name: "Profit", value: "profit" },
  { name: "Net Worth", value: "net_worth" },
];
export default function Financials() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeHeadingTab, setActiveHedingTab] = useState(0);

  const DATA = {
    revenue: {
      quarterly: [
        { name: "Jun '23", value: 234945 },
        { name: "Sep '23", value: 259837 },
        { name: "Dec '23", value: 252029 },
        { name: "Mar '24", value: 269368 },
        { name: "Jun '24", value: 261806 },
      ],
      yearly: [
        { name: 2020, value: 610699 },
        { name: 2021, value: 483251 },
        { name: 2022, value: 710906 },
        { name: 2023, value: 889569 },
        { name: 2024, value: 917121 },
      ],
    },
    profit: {
      quarterly: [
        { name: "Jun '23", value: 18182 },
        { name: "Sep '23", value: 19878 },
        { name: "Dec '23", value: 19641 },
        { name: "Mar '24", value: 21143 },
        { name: "Jun '24", value: 17448 },
      ],
      yearly: [
        { name: 2020, value: 39880 },
        { name: 2021, value: 53739 },
        { name: 2022, value: 66184 },
        { name: 2023, value: 73670 },
        { name: 2024, value: 79020 },
      ],
    },
    net_worth: {
      yearly: [
        { name: 2020, value: 461347 },
        { name: 2021, value: 799432 },
        { name: 2022, value: 888984 },
        { name: 2023, value: 828881 },
        { name: 2024, value: 925788 },
      ],
    },
  };

  const chartData =
    DATA[HEADING_TABS[activeHeadingTab].value][TABS[activeTab].value];

  return (
    <div className="space-y-4">
      <Heading3 heading={"Financials"} />
      <ul className="flex space-x-4">
        {HEADING_TABS.map((tab, tabIndex) => (
          <li
            key={tab.name}
            onClick={() => {
              setActiveHedingTab(tabIndex);
              setActiveTab(0);
            }}
            className={classNames(
              "px-4 py-1 text-xs  rounded-full border cursor-pointer",
              {
                "text-primary-500 border-primary-500":
                  activeHeadingTab === tabIndex,
                "text-gray-500 border-gray-150": activeHeadingTab !== tabIndex,
              }
            )}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <VictoryChart domainPadding={20}>
        {" "}
        <VictoryAxis
          tickValues={chartData.map((data) => data.name)}
          tickFormat={chartData.map((data) => data.name)}
          style={{
            tickLabels: {
              fill: "#333", // Label text color
              fontSize: 12, // Font size (like text-base)
              fontFamily: "sans-serif", // Font family (like font-sans)
            },
          }}
        />
        <VictoryBar
          data={chartData}
          // data accessor for x values
          x="name"
          // data accessor for y values
          y="value"
          style={{
            data: { fill: "#ffad60" }, // Optional: Customize bar color
            labels: { fill: "#000", fontSize: 12, fontFamily: "sans-serif" },
          }}
          barWidth={10}
          labels={({ datum }) => {
            return formatNumberWithCommas(datum.value, false);
          }} // Format labels as desired
          labelComponent={<VictoryLabel dy={-10} />} // Position labels above bars
        />
      </VictoryChart>

      <ul className="flex space-x-4">
        {Object.keys(DATA[HEADING_TABS[activeHeadingTab].value]).map(
          (tab, tabIndex) => (
            <li
              key={tab}
              onClick={() => {
                setActiveTab(tabIndex);
              }}
              className={classNames(
                "px-4 py-1 text-xs  rounded-full border cursor-pointer",
                {
                  "text-primary-500 border-primary-500": activeTab === tabIndex,
                  "text-gray-500 border-gray-150": activeTab !== tabIndex,
                }
              )}
            >
              {firstLetterCapital(tab)}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
