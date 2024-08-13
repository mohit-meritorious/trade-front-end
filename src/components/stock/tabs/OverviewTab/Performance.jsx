import React from "react";
import Heading3 from "../../../ui/Heading3";
import InfoIcon from "../../../Icon/InfoIcon";
import useModal, { MODAL_TYPES } from "../../../../hooks/store/useModal";

export default function Performance() {
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
    </div>
  );
}
