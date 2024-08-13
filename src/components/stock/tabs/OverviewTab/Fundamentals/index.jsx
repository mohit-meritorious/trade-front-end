import React from "react";
import Heading3 from "../../../../ui/Heading3";

import classNames from "classnames";
import InfoIcon from "../../../../Icon/InfoIcon";
import useModal, { MODAL_TYPES } from "../../../../../hooks/store/useModal";

const DATA = [
  { name: "Market Cap", value: "₹19,76,632Cr" },
  { name: "P/E Ratio(TTM)", value: 28.75 },
  { name: "P/B Ratio", value: 2.49 },
  { name: "Debt to Equity", value: 0.44 },
  { name: "ROE", value: 8.77 },
  { name: "EPS(TTM)", value: 101.61 },
  { name: "Dividend Yield", value: 0.34 },
  { name: "Book Value", value: 1172.78 },
  { name: "Face Value", value: 10 },
];
export default function Fundamentals() {
  const { openModal } = useModal();
  return (
    <div className="space-y-4">
      <Heading3 heading={"Fundamentals"} />

      <ul className="grid grid-cols-2 ">
        {DATA.map((listItem, index) => (
          <li
            key={listItem.name}
            className={classNames("flex px-5 py-2", {
              "border-r border-dashed": index % 2 === 0,
            })}
          >
            <p
              className="text-sm text-gray-500 grow"
              children={listItem.name}
            />
            <p className="text-sm font-semibold shrink-0">{listItem.value}</p>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-2 text-sm text-gray-500 grow">
        <span>Understand Fundamentals</span>
        <button
          onClick={() => {
            openModal(MODAL_TYPES.FUNDAMENTALS);
          }}
        >
          <InfoIcon />
        </button>
      </div>
    </div>
  );
}
