import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import StockDetailChart from "../components/stock/StockDetailChart";
import Tabs from "../components/Tabs";
import IndexOverview from "../components/Indieces/IndexOverview";
export default function IndexDetail() {
  const param = useParams();

  const indexName = param.index_name.toUpperCase();
  const BREADCRUMB = [
    { name: "Home", link: "stock/explore" },
    { name: "Stocks", link: "/stock/explore" },
    { name: indexName, link: "/stocks/explore" },
  ];
  const TABS = [
    { name: "Overview", value: "overview" },
    // { name: "News", value: "news" },
    // { name: "Events", value: "events" },
    { name: "F&O", value: "fno" },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-4">
      <Breadcrumb links={BREADCRUMB} />
      <div className="flex gap-10 space-y-4">
        <div className="w-3/4 ">
          <StockDetailChart companyName={indexName} />
          <Tabs
            activeTab={activeTab}
            handleTabChange={setActiveTab}
            tabs={TABS}
          >
            {TABS[activeTab].value === "overview" && <IndexOverview />}
            {TABS[activeTab].value === "fno" && <> FNO</>}
          </Tabs>
        </div>
        <div></div>
      </div>
    </div>
  );
}
