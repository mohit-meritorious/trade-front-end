import React from "react";
import TableHeading from "./TableHeading";
import RightArrowIcon from "../../Icon/RightArrowIcon";

export default function Table({
  headings,
  children,
  pagination = false,
  setPage,
  max,
  page,
}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <TableHeading headings={headings} />
        <tbody>{children}</tbody>
      </table>
      {pagination && (
        <div className="flex justify-between p-4">
          <button
            disabled={page === 1}
            onClick={() => {
              setPage((page) => {
                if (page === 1) {
                  return 1;
                }
                return page - 1;
              });
            }}
            className="flex items-center justify-center h-10 px-4 space-x-2 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg disabled:bg-gray-100 hover:bg-gray-100 hover:text-gray-700 disabled:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:disabled:bg-gray-700 disabled:opacity-80 disabled:cursor-not-allowed dark:disabled:text-white dark:hover:text-white"
          >
            <RightArrowIcon className={"size-4"} />
            <span>Previous</span>
          </button>
          <button
            disabled={page === max}
            onClick={() => {
              setPage((page) => {
                if (page === max) {
                  return max;
                }
                return page + 1;
              });
            }}
            className="flex items-center justify-center h-10 px-4 space-x-2 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg disabled:bg-gray-100 hover:bg-gray-100 hover:text-gray-700 disabled:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:disabled:bg-gray-700 disabled:opacity-80 disabled:cursor-not-allowed dark:disabled:text-white dark:hover:text-white"
          >
            <span>Next</span>
            <RightArrowIcon className={"size-4 rotate-180"} />
          </button>
        </div>
      )}
    </div>
  );
}
