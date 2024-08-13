import axios from "axios";
import { createChart } from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import StockProfile from "./StockProfile";
import classNames from "classnames";
import useModal from "../../hooks/store/useModal";

export default function StockDetailChart({ companyName }) {
  const { open } = useModal();
  const chartContainerRef = useRef(null);
  useEffect(() => {
    if (!chartContainerRef.current) {
      return;
    }

    const chart = createChart(chartContainerRef.current, {
      layout: {
        textColor: "black",
        background: { type: "solid", color: "white" },
      },
    });
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };
    (async function () {
      let res = await axios(
        "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=4h"
      );
      let data = res.data.map((d) => ({
        time: d[0] / 1000,
        open: +d[1],
        high: +d[2],
        low: +d[3],
        close: +d[4],
      }));

      const areaSeries = chart.addAreaSeries({
        lineColor: true ? "red" : "green",
        topColor: "transparent",
        // bottomColor: "rgba(41, 98, 255, 0.28)",
      });
      areaSeries.setData(
        data.map((data) => ({ time: data.time, value: data.close }))
      );
    })();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <StockProfile companyName={companyName} />
        <h1 className="text-xl">{companyName}</h1>
        <div className="flex items-end gap-2">
          <div className="text-base">
            <span>₹</span>
            <span>2933.85</span>
          </div>
          <div
            className={classNames("text-xs", {
              "text-red-500": true,
              "text-green-500": false,
            })}
          >
            -27.35 (0.93%) <span>1D</span>
          </div>
        </div>
      </div>
      <div
        ref={chartContainerRef}
        className={classNames("relative w-full h-96", { "-z-10": open })}
      ></div>
    </div>
  );
}
