import React from "react";
import Heading3 from "../../../../ui/Heading3";
import InfoIcon from "../../../../Icon/InfoIcon";
import useModal, { MODAL_TYPES } from "../../../../../hooks/store/useModal";

export default function AnalystEstimates() {
  const { openModal } = useModal();
  return (
    <div>
      <div className="flex items-center space-x-1">
        <Heading3 heading={"Analyst Estimates"} />
        <button
          onClick={() => {
            openModal(MODAL_TYPES.ANALYST_ESTIMATES);
          }}
        >
          <InfoIcon />
        </button>
      </div>
    </div>
  );
}
