import React from "react";
import Performance from "./Performance";
import MarketDepth from "./MarketDepth";
import AnalystEstimates from "./AnalystEstimates";
import Fundamentals from "./Fundamentals";

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      <Performance />
      <MarketDepth />
      <AnalystEstimates />
      <Fundamentals />
    </div>
  );
}
