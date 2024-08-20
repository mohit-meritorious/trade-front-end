import React from "react";
import Heading3 from "../ui/Heading3";
import useModal, { MODAL_TYPES } from "../../hooks/store/useModal";
import InfoIcon from "../Icon/InfoIcon";
import { formatNumberWithCommas } from "../../utils/number";

export default function OpenInterest() {
  const { openModal } = useModal();

  return (
    <div className="space-y-4 ">
      <div className="flex space-x-2">
        <Heading3 heading={"Open Interest (OI)"} />

        <button
          onClick={() => {
            openModal(MODAL_TYPES.OPEN_INTEREST);
          }}
        >
          <InfoIcon />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="space-y-2">
          <div className="text-xs">Total Put OI</div>
          <div className="font-semibold ">
            {formatNumberWithCommas(4032140, false)}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-xs">Put:Call ratio</div>
          <div className="font-semibold ">{1.16}</div>
        </div>
        <div className="space-y-2">
          <div className="text-xs">Total Call OI</div>
          <div className="font-semibold ">
            {formatNumberWithCommas(3467426, false)}
          </div>
        </div>
      </div>
    </div>
  );
}
