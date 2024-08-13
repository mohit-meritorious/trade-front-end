import React from "react";
import Performance from "./Performance";
import MarketDepth from "./MarketDepth";
import AnalystEstimates from "./AnalystEstimates";

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      <Performance />
      <MarketDepth />
      <AnalystEstimates />
    </div>
  );
}
