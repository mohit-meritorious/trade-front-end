import React from "react";
import Heading3 from "../../../../ui/Heading3";
import InfoIcon from "../../../../Icon/InfoIcon";
import useModal, { MODAL_TYPES } from "../../../../../hooks/store/useModal";

export default function AnalystEstimates() {
  const { openModal } = useModal();
  const ANALYST = [
    { name: "Buy", value: 78 },
    { name: "Hold", value: 12 },
    { name: "Sell", value: 9 },
  ];
  return (
    <div className="space-y-4">
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

      <div className="flex space-x-6">
        <div className="shrink">
          <div className="w-32 text-3xl text-primary-500 align-middle rounded-full h-32 bg-primary-100 leading-[128px] text-center">
            <span>78</span>
            <span className="text-base leading-[128px]">%</span>
          </div>
        </div>
        <div className="flex flex-col justify-between grow">
          {ANALYST.map((analyst) => (
            <div className="flex items-center space-x-4" key={analyst.name}>
              <p className="inline-block w-10 text-sm shrink-0">
                {analyst.name}
              </p>
              <span
                className="inline-block h-2  rounded-[2px] bg-primary-500"
                style={{ width: analyst.value + "%" }}
              ></span>
              <span className="text-sm">{analyst.value}%</span>
            </div>
          ))}
          <div class="text-gray-500 text-sm">
            Aggregated by Refinitiv from 32 Analysts
          </div>
        </div>
      </div>
    </div>
  );
}
