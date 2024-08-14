import classNames from "classnames";
import React from "react";

export default function TableHeading({ headings }) {
  return (
    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
      <tr className="border-b border-gray-200 dark:border-gray-700">
        {headings.map((heading, i) => (
          <th
            scope="col"
            key={heading}
            className={classNames("px-6 py-4", {
              "bg-gray-50 dark:bg-gray-800": i % 2 === 0,
            })}
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
}
