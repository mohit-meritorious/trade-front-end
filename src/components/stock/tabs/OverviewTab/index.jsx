import React from "react";
import Performance from "./Performance";
import MarketDepth from "./MarketDepth";

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      <Performance />
      <MarketDepth />
    </div>
  );
}
