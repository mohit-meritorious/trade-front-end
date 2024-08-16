import React from "react";
import Performance from "../stock/tabs/OverviewTab/Performance";
import AllIndices from "../../pages/AllIndices";
import Heading3 from "../ui/Heading3";
import IndexStocks from "./IndexStocks";

export default function IndexOverview() {
  return (
    <div className="space-y-6">
      <Performance />

      <IndexStocks />
      <div className="space-y-3">
        <Heading3 heading={"All Indices"} />
        <AllIndices />
      </div>
    </div>
  );
}
