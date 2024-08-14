import React from "react";
import TableHeading from "./TableHeading";

export default function Table({ headings, children }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <TableHeading headings={headings} />
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
