import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useParams } from "react-router-dom";
import { firstLetterCapital } from "../utils/string";
import StockDetailChart from "../components/stock/StockDetailChart";
import StockOrder from "../components/stock/StockOrder";
import Tabs from "../components/Tabs";
import OverviewTab from "../components/stock/tabs/OverviewTab";
import News from "../components/stock/tabs/News";
export default function StockDetail() {
  const param = useParams();
  const stockName = param.stock_name
    .split("-")
    .map((stockPart) => firstLetterCapital(stockPart))
    .join(" ");

  const BREADCRUMB = [
    { name: "Home", link: "stock/explore" },
    { name: "Stocks", link: "/stocks/explore" },
    { name: stockName, link: "/stocks/explore" },
  ];
  const [activeTab, setActiveTab] = useState(0);

  const TABS = [
    { name: "Overview", value: "overview" },
    { name: "News", value: "news" },
    // { name: "Events", value: "events" },
    // { name: "F&O", value: "fno" },
  ];
  return (
    <div className="space-y-4">
      <Breadcrumb links={BREADCRUMB} />
      <div className="flex space-y-4">
        <div className="w-2/3">
          <StockDetailChart companyName={stockName} />
          <Tabs
            activeTab={activeTab}
            handleTabChange={setActiveTab}
            tabs={TABS}
          >
            {TABS[activeTab].value === "overview" && <OverviewTab />}
            {TABS[activeTab].value === "news" && <News />}
            {/* {TABS[activeTab].value === "events" && (
              <div>Events Tab Content</div>
            )}
            {TABS[activeTab].value === "fno" && <div>F&O Tab Content</div>} */}
          </Tabs>
        </div>
        <div className="w-1/3">
          <StockOrder />
        </div>
      </div>
    </div>
  );
}
