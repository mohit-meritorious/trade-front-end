import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import IndexCard from "../IndexCard";
import ChevronRightIcon from "../Icon/ChevronRightIcon";

export default function StockIndeces() {
  const INDICES = [
    {
      name: "NIFTY",
      symbol: "nifty",
      value: "24241.30",
      change: "+185.70",
      percentChange: "0.77",
      bullish: true,
    },
    {
      name: "SENSEX",
      symbol: "sensex",
      value: "79378.31",
      change: "+618.91",
      percentChange: "0.79",
      bullish: true,
    },
    {
      name: "BANKNIFTY",
      symbol: "bank-nifty",
      value: "50158.25",
      change: "+66.15",
      percentChange: "0.13",
      bullish: true,
    },
    {
      name: "FINNIFTY",
      symbol: "fin-nifty",
      value: "22743.40",
      change: "-19.30",
      percentChange: "0.08",
      bullish: false,
    },
    {
      name: "MIDCPNIFTY",
      symbol: "mid-cap-nifty",
      value: "12436.25",
      change: "+141.90",
      percentChange: "1.15",
      bullish: true,
    },
    {
      name: "BANKEX",
      symbol: "bank-ex",
      value: "57038.34",
      change: "+96.77",
      percentChange: "0.17",
      bullish: true,
    },
  ];
  const indicesContainerRef = useRef();
  const [showScrollIndicator, setShowScrollIndicator] = useState({
    left: false,
    right: false,
  });

  useEffect(() => {
    if (indicesContainerRef.current) {
      if (
        indicesContainerRef.current.scrollWidth >
        indicesContainerRef.current.clientWidth
      ) {
        setShowScrollIndicator({ left: false, right: true });
      }
    }
  }, []);
  return (
    <div className="space-y-2">
      <div className="flex gap-2 heading">
        <h2 className="grow ">Index</h2>
        <Link
          to={"/indices"}
          className="text-sm transition-all duration-300 text-primary-500 shrink-0 underline-offset-0 hover:underline hover:underline-offset-4"
        >
          All indices
        </Link>
      </div>
      <div className="relative h-full">
        <ul
          ref={indicesContainerRef}
          className="flex space-x-2 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none" }}
          onScroll={(e) => {
            const element = e.target;
            if (
              element.scrollLeft + element.clientWidth + 1 >=
              element.scrollWidth
            ) {
              setShowScrollIndicator((prev) => ({ ...prev, right: false }));
            } else {
              setShowScrollIndicator((prev) => ({ ...prev, right: true }));
            }
            if (element.scrollLeft === 0) {
              setShowScrollIndicator((prev) => ({ ...prev, left: false }));
            } else {
              setShowScrollIndicator((prev) => ({ ...prev, left: true }));
            }
          }}
        >
          {INDICES.map((index) => (
            <IndexCard
              key={index.name}
              name={index.name}
              bullish={index.bullish}
              change={index.change}
              percentChange={index.percentChange}
              value={index.value}
              symbol={index.symbol}
            />
          ))}
        </ul>
        {showScrollIndicator.left && (
          <button
            onClick={() => {
              let element = indicesContainerRef.current;
              if (element) {
                if (element.scrollWidth > element.clientWidth) {
                  setShowScrollIndicator((prev) => ({
                    ...prev,
                    right: true,
                  }));
                }
                element.scrollLeft -= element.clientWidth;
                if (element.scrollLeft - element.clientWidth <= 0) {
                  setShowScrollIndicator((prev) => ({ ...prev, left: false }));
                }
              }
            }}
            className="absolute left-0 grid w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full top-1/2 place-items-center"
          >
            <ChevronRightIcon className={"size-4 rotate-180"} />
          </button>
        )}
        {showScrollIndicator.right && (
          <button
            onClick={() => {
              let element = indicesContainerRef.current;
              if (element) {
                if (element.scrollWidth > element.clientWidth) {
                  setShowScrollIndicator((prev) => ({
                    ...prev,
                    left: true,
                  }));
                }
                element.scrollLeft += element.clientWidth;
                if (
                  element.scrollLeft + element.clientWidth * 2 >=
                  element.scrollWidth
                ) {
                  setShowScrollIndicator((prev) => ({ ...prev, right: false }));
                }
              }
            }}
            className="absolute right-0 grid w-10 h-10 translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full top-1/2 place-items-center"
          >
            <ChevronRightIcon className={"size-4"} />
          </button>
        )}
      </div>
    </div>
  );
}
