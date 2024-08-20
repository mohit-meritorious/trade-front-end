import React from "react";
import ModalHeader from "./ModalHeader";
import Heading6 from "../Heading6";

const LIST = [
  {
    heading: "Total Put OI",
    description:
      "The total number of open put option contracts of a security for a particular expiry",
  },
  {
    heading: "Total Call OI",
    description:
      "The total number of open call option contracts of a security for a particular expiry",
  },
  {
    heading: "Put:Call Ratio",
    description: "The ratio of a security's total put OI to its total call OI",
  },
];
export default function OpenInterestModal() {
  return (
    <div className="w-full pb-5 space-y-4">
      <ModalHeader heading={"Open Interest"} />

      <ul className="space-y-3">
        {LIST.map((listItem) => (
          <li key={listItem.heading}>
            <Heading6 heading={listItem.heading} />
            <p className="text-xs font-light text-gray-500">
              {listItem.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
