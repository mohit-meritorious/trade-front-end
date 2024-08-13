import React from "react";
import Heading3 from "../../../ui/Heading3";
import InfoIcon from "../../../Icon/InfoIcon";

export default function Performance() {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-1">
        <Heading3 heading={"Performance"} />
        <button>
          <InfoIcon />
        </button>
      </div>
    </div>
  );
}
