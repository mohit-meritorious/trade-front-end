import classNames from "classnames";
import React, { useState } from "react";

export default function Tabs({ tabs, handleTabChange }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ul className="flex flex-wrap mt-5 text-sm font-medium text-center text-gray-500 border-b border-gray-100 dark:border-gray-700 dark:text-gray-400">
      {tabs.map((tab, i) => (
        <li
          key={tab.name}
          className={classNames(
            "me-2 border-b transition-all duration-300 p-3 dark:bg-gray-800 dark:text-primary-500 cursor-pointer",
            {
              "border-primary-500 bg-primary-100 text-primary-500":
                i === activeTab,
              "border-transparent": i !== activeTab,
            }
          )}
          onClick={() => {
            setActiveTab(i);
            handleTabChange(i);
          }}
        >
          {tab.name}
        </li>
      ))}
    </ul>
  );
}
