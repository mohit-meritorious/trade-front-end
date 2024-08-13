import React from "react";
import Heading3 from "../../../ui/Heading3";
import InfoIcon from "../../../Icon/InfoIcon";
import useModal, { MODAL_TYPES } from "../../../../hooks/store/useModal";

import LowHighIndicator from "./LowHighIndicator";
import { formatNumberWithCommas } from "../../../../utils/number";

const DATA = [
  { name: "Open", value: 2921.5 },
  { name: "Prev. Close", value: 2921.25 },
  { name: "Volume", value: 2048397 },
  { name: "Traded Value", value: "599 Cr" },
  { name: "Upper Circuit", value: 3213.35 },
  { name: "Lower Circuit", value: 2629.15 },
];
export default function Performance() {
  const todayLow = 2918.2;
  const todayHigh = 2938.0;
  const currentPrice = 2933.85;
  const low52 = 2220.3;
  const high52 = 3217.6;
  const { openModal } = useModal();
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-1">
        <Heading3 heading={"Performance"} />
        <button
          onClick={() => {
            openModal(MODAL_TYPES.PERFORMANCE);
          }}
        >
          <InfoIcon />
        </button>
      </div>
      <LowHighIndicator high={todayHigh} low={todayLow} price={currentPrice} />
      <LowHighIndicator
        high={high52}
        low={low52}
        price={currentPrice}
        lowText="52W Low"
        highText="52W High"
      />

      <div className="my-4 border border-dashed"></div>

      <ul className="grid grid-cols-4 gap-4">
        {DATA.map((data) => (
          <li className="text-sm" key={data.name}>
            <p>{data.name}</p>
            <p>
              {typeof data.value === "number"
                ? formatNumberWithCommas(data.value)
                : data.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
