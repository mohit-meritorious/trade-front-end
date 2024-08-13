import React from "react";
import ModalHeader from "./ModalHeader";
import Heading6 from "../Heading6";

const LIST = [
  {
    heading: "Today's High",
    description:
      "Today's High is the highest price at which the Stock has been traded that day",
  },
  {
    heading: "Today's Low",
    description:
      "Today's Low is the lowest price at which the Stock has been traded that day",
  },
  {
    heading: "52W High",
    description:
      "52W High is the highest price at which the Stock has been traded in the last 52 weeks",
  },
  {
    heading: "Volume",
    description:
      "Volume or Trading Volume is the total number of an Stock traded, both bought and sold, on the exchange for the day",
  },
  {
    heading: "Opening Price",
    description:
      "Today's High is the highest price at which the Stock  has been traded that day",
  },
  {
    heading: "Prev. Close",
    description:
      "Closing Price is the price at which the Stock ends trading when the exchange closes",
  },
  {
    heading: "52W Low",
    description:
      "52W Low is the lowest price at which the Stock has been traded in the last 52 weeks",
  },
  {
    heading: "Value",
    description:
      "Value is the total value of an Stock traded, both bought and sold, on the exchange for the day",
  },
];
export default function PerformanceModal() {
  return (
    <div className="space-y-4">
      <ModalHeader
        description={
          "Performance has numbers that shows how the Stock is performing. These numbers change on a daily basis"
        }
        heading={"Performance"}
      />
      <ul className="grid grid-cols-2 gap-4">
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
