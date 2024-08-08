import classNames from "classnames";
import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import AccordionChevronIcon from "./Icon/AccordionChevronIcon";

export default function WatchLists() {
  const [openWatchlist, setOpenWatchlist] = useState(-1);
  const variants = {
    open: { opacity: 1, duration: 300, height: "auto", visibility: "visible" },
    closed: { opacity: 0, duration: 300, height: 0, visibility: "hidden" },
  };
  const WATCHLISTS = {
    watchlist1: {
      name: "My Watchlist",
      list: [
        {
          name: "IRFC",
          value: "₹181.91",
          change: "5.55",
          changePer: "3.15",
          bullish: true,
        },
        {
          name: "Tata Steel",
          value: "₹153.72",
          change: "3.40",
          changePer: "2.26",
          bullish: true,
        },
        {
          name: "Bharat Electronics",
          value: "₹299.85",
          change: "12.60",
          changePer: "4.39",
          bullish: true,
        },
        {
          name: "Samvardhana Motherson",
          value: "₹180.27",
          change: "4.92",
          changePer: "2.81",
          bullish: false,
        },
        {
          name: "Zomato",
          value: "₹264.81",
          change: "15.73",
          changePer: "6.32",
          bullish: true,
        },
      ],
    },
    watchlist2: {
      name: "My Watchlist 2",
      list: [
        {
          name: "IRFC",
          value: "₹181.91",
          change: "5.55",
          changePer: "3.15",
          bullish: true,
        },
        {
          name: "Tata Steel",
          value: "₹153.72",
          change: "3.40",
          changePer: "2.26",
          bullish: true,
        },
        {
          name: "Bharat Electronics",
          value: "₹299.85",
          change: "12.60",
          changePer: "4.39",
          bullish: true,
        },
        {
          name: "Samvardhana Motherson",
          value: "₹180.27",
          change: "4.92",
          changePer: "2.81",
          bullish: false,
        },
        {
          name: "Zomato",
          value: "₹264.81",
          change: "15.73",
          changePer: "6.32",
          bullish: true,
        },
      ],
    },
    watchlist3: {
      name: "My Watchlist 3",
      list: [
        {
          name: "IRFC",
          value: "₹181.91",
          change: "5.55",
          changePer: "3.15",
          bullish: true,
        },
        {
          name: "Tata Steel",
          value: "₹153.72",
          change: "3.40",
          changePer: "2.26",
          bullish: true,
        },
        {
          name: "Bharat Electronics",
          value: "₹299.85",
          change: "12.60",
          changePer: "4.39",
          bullish: true,
        },
        {
          name: "Samvardhana Motherson",
          value: "₹180.27",
          change: "4.92",
          changePer: "2.81",
          bullish: false,
        },
        {
          name: "Zomato",
          value: "₹264.81",
          change: "15.73",
          changePer: "6.32",
          bullish: true,
        },
      ],
    },
  };
  const handleAccordionClick = (acordionNumber) => {
    if (openWatchlist === acordionNumber) {
      return setOpenWatchlist(-1);
    }
    return setOpenWatchlist(acordionNumber);
  };

  return (
    <div className="space-y-4">
      <h2>All Watchlist</h2>

      <div id="accordion-collapse" data-accordion="collapse">
        {Object.keys(WATCHLISTS).map((watchlist, i) => (
          <Fragment key={watchlist}>
            <h3
              onClick={() => {
                handleAccordionClick(i);
              }}
              id="accordion-collapse-heading-1"
            >
              <button
                type="button"
                className={classNames(
                  "flex items-center text-sm lg:text-base justify-between transition-all duration-300 w-full gap-3 p-5 font-medium text-gray-500 border border-gray-200 rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800",
                  {
                    "rounded-t-xl": i === 0,
                    "border-b-0": i + 1 !== Object.keys(WATCHLISTS).length,
                    "rounded-b-xl":
                      i + 1 === Object.keys(WATCHLISTS).length &&
                      openWatchlist !== i,
                  }
                )}
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>{WATCHLISTS[watchlist].name}</span>

                <AccordionChevronIcon
                  className={classNames(
                    "w-3 h-3 transition-all duration-300 shrink-0",
                    {
                      "rotate-180": openWatchlist === i,
                    }
                  )}
                />
              </button>
            </h3>
            <motion.div
              id="accordion-collapse-body-1"
              animate={openWatchlist !== i ? "closed" : "open"}
              variants={variants}
              className={"h-0"}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <ul
                className={classNames(
                  "divide-y border border-gray-200  divide-gray-200 dark:divide-gray-700",
                  {
                    "border-b-0 ": i + 1 !== Object.keys(WATCHLISTS).length,
                    "rounded-b-xl border-t-0":
                      i + 1 === Object.keys(WATCHLISTS).length &&
                      openWatchlist === i,
                  }
                )}
              >
                {WATCHLISTS[watchlist].list.map((stock) => (
                  <li
                    key={stock.name}
                    className="flex items-center p-1 px-4 space-x-4 rtl:space-x-reverse"
                  >
                    <p className="text-xs text-gray-500 truncate grow dark:text-white">
                      {stock.name}
                    </p>
                    <div className="text-right">
                      <p className="items-center text-sm text-gray-900 dark:text-white">
                        {stock.value}
                      </p>
                      <p
                        className={classNames("text-xs", {
                          "text-red-500": !stock.bullish,
                          "text-green-500": stock.bullish,
                        })}
                      >
                        {stock.change} ({stock.changePer}%)
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
