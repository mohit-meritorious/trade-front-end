import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "./Icon/ChevronRightIcon";

export default function Breadcrumb({ links }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {links.map((link, index) => (
          <li key={link.name}>
            <div className="flex items-center">
              {index !== 0 && <ChevronRightIcon className={"h-5 w-5"} />}
              <Link
                to={link.link}
                className="text-sm font-medium text-gray-700 transition-all duration-300 ms-1 hover:text-primary-500 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {link.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
