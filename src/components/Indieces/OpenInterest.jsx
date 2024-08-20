import React from "react";
import Heading3 from "../ui/Heading3";
import useModal, { MODAL_TYPES } from "../../hooks/store/useModal";
import InfoIcon from "../Icon/InfoIcon";

export default function OpenInterest() {
  const { openModal } = useModal();

  return (
    <div className="flex items-center space-x-1">
      <Heading3 heading={"Open Interest (OI)"} />
      <button
        onClick={() => {
          openModal(MODAL_TYPES.OPEN_INTEREST);
        }}
      >
        <InfoIcon />
      </button>
    </div>
  );
}
