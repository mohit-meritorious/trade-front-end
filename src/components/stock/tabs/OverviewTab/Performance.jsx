import React from "react";
import Heading3 from "../../../ui/Heading3";
import InfoIcon from "../../../Icon/InfoIcon";
import useModal, { MODAL_TYPES } from "../../../../hooks/store/useModal";

import LowHighIndicator from "./LowHighIndicator";

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
    </div>
  );
}
