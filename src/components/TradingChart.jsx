import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import axios from "axios";

export default function TradingChart() {
  const backgroundColor = "white",
    lineColor = "#2962FF",
    textColor = "black",
    areaTopColor = "#2962FF",
    areaBottomColor = "rgba(41, 98, 255, 0.28)";

  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      timeScale: {
        timeVisible: true,
      },
      width: chartContainerRef.current.clientWidth,
      height: 700,
    });
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };
    (async () => {
      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });
      let res = await axios(
        "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m"
      );
      let data = res.data.map((d) => ({
        time: d[0] / 1000,
        open: +d[1],
        high: +d[2],
        low: +d[3],
        close: +d[4],
      }));
      console.log(data);
      // candlestickSeries.setData(data.initialData);
      chart.timeScale().fitContent();
      chart.timeScale().scrollToPosition(5);

      candlestickSeries.setData(data);
    })();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

  return <div ref={chartContainerRef} />;
}
