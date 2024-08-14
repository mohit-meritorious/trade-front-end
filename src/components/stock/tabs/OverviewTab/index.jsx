import React from "react";
import Performance from "./Performance";
import MarketDepth from "./MarketDepth";
import AnalystEstimates from "./AnalystEstimates";
import Fundamentals from "./Fundamentals";
import Financials from "./Financials";
import About from "./About";
import ShareHoldingPattern from "./ShareHoldingPattern";

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      <Performance />
      <MarketDepth />
      <AnalystEstimates />
      <Fundamentals />
      <Financials />
      <About />
      <ShareHoldingPattern />
    </div>
  );
}
