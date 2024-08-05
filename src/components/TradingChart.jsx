import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef, use } from "react";
import axios from "axios";

function generateData(
  numberOfCandles = 500,
  updatesPerCandle = 5,
  startAt = 100
) {
  let randomFactor = 25 + Math.random() * 25;
  const samplePoint = (i) =>
    i *
    (0.5 +
      Math.sin(i / 1) * 0.2 +
      Math.sin(i / 2) * 0.4 +
      Math.sin(i / randomFactor) * 0.8 +
      Math.sin(i / 50) * 0.5 +
      Math.random() * 100);
  const createCandle = (val, time) => ({
    time,
    open: val,
    high: val,
    low: val,
    close: val,
  });
  const updateCandle = (candle, val) => ({
    time: candle.time,
    close: val,
    open: candle.open,
    low: Math.min(candle.low, val),
    high: Math.max(candle.high, val),
  });
  const date = new Date();
  const nuberOfPoints = numberOfCandles * updatesPerCandle;
  const initialData = [];
  const realTimeUpdates = [];
  let lastCandle;
  let previousValue = samplePoint(0);
  for (let i = 0; i < nuberOfPoints; ++i) {
    if (i % updatesPerCandle === 0) {
      date.setUTCDate(date.getUTCDate() + 1);
    }
    const time = date.getTime() / 1000;
    let value = samplePoint(i);
    const diff = (value - previousValue) * Math.random();

    value = previousValue + diff;
    previousValue = value;

    if (i % updatesPerCandle === 0) {
      const candle = createCandle(value, time);
      lastCandle = candle;
      if (i >= startAt) {
        realTimeUpdates.push(candle);
      }
    } else {
      const newCandle = updateCandle(lastCandle, value);
      lastCandle = newCandle;
      if (i >= startAt) {
        realTimeUpdates.push(newCandle);
      } else if ((i + 1) % updatesPerCandle === 0) {
        initialData.push(newCandle);
      }
    }
    date.setTime(date.getTime());
  }
  return { initialData, realTimeUpdates };
}
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
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };
    (async () => {
      chart.timeScale().fitContent();

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });
      const res = await axios.get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=1UEXM3AM6E96BAYO"
      );
      console.log(res);

      const data = {
        "2024-08-02 19:55:00": {
          "1. open": "188.3500",
          "2. high": "188.3600",
          "3. low": "188.3500",
          "4. close": "188.3500",
          "5. volume": "60",
        },
        "2024-08-02 19:40:00": {
          "1. open": "188.5000",
          "2. high": "188.5000",
          "3. low": "188.3500",
          "4. close": "188.3500",
          "5. volume": "13",
        },
        "2024-08-02 19:35:00": {
          "1. open": "188.5000",
          "2. high": "188.5000",
          "3. low": "188.5000",
          "4. close": "188.5000",
          "5. volume": "20",
        },
        "2024-08-02 19:30:00": {
          "1. open": "188.8100",
          "2. high": "188.8100",
          "3. low": "188.8100",
          "4. close": "188.8100",
          "5. volume": "10",
        },
        "2024-08-02 19:05:00": {
          "1. open": "188.3600",
          "2. high": "188.3600",
          "3. low": "188.3500",
          "4. close": "188.3500",
          "5. volume": "51",
        },
        "2024-08-02 19:00:00": {
          "1. open": "189.1200",
          "2. high": "189.1200",
          "3. low": "188.3500",
          "4. close": "188.3500",
          "5. volume": "706293",
        },
        "2024-08-02 18:45:00": {
          "1. open": "188.6500",
          "2. high": "188.6500",
          "3. low": "188.6500",
          "4. close": "188.6500",
          "5. volume": "11",
        },
        "2024-08-02 18:40:00": {
          "1. open": "188.3500",
          "2. high": "188.3500",
          "3. low": "188.3500",
          "4. close": "188.3500",
          "5. volume": "3",
        },
        "2024-08-02 18:35:00": {
          "1. open": "187.6900",
          "2. high": "188.8500",
          "3. low": "187.5900",
          "4. close": "188.4600",
          "5. volume": "490",
        },
        "2024-08-02 18:30:00": {
          "1. open": "189.1200",
          "2. high": "189.1200",
          "3. low": "187.0000",
          "4. close": "188.3700",
          "5. volume": "706619",
        },
        "2024-08-02 18:15:00": {
          "1. open": "188.3500",
          "2. high": "188.8000",
          "3. low": "188.3500",
          "4. close": "188.8000",
          "5. volume": "17",
        },
        "2024-08-02 18:10:00": {
          "1. open": "188.3500",
          "2. high": "188.4000",
          "3. low": "188.3500",
          "4. close": "188.4000",
          "5. volume": "17",
        },
        "2024-08-02 18:05:00": {
          "1. open": "188.3500",
          "2. high": "188.3500",
          "3. low": "188.3500",
          "4. close": "188.3500",
          "5. volume": "6",
        },
        "2024-08-02 18:00:00": {
          "1. open": "188.4000",
          "2. high": "188.4000",
          "3. low": "188.4000",
          "4. close": "188.4000",
          "5. volume": "2",
        },
        "2024-08-02 17:55:00": {
          "1. open": "188.3500",
          "2. high": "188.3500",
          "3. low": "188.3500",
          "4. close": "188.3500",
          "5. volume": "3",
        },
        "2024-08-02 17:50:00": {
          "1. open": "188.3300",
          "2. high": "188.3300",
          "3. low": "188.2500",
          "4. close": "188.2500",
          "5. volume": "35",
        },
        "2024-08-02 17:45:00": {
          "1. open": "188.2500",
          "2. high": "188.2500",
          "3. low": "188.2500",
          "4. close": "188.2500",
          "5. volume": "3",
        },
        "2024-08-02 17:30:00": {
          "1. open": "188.7400",
          "2. high": "188.7400",
          "3. low": "188.7400",
          "4. close": "188.7400",
          "5. volume": "1001",
        },
        "2024-08-02 17:25:00": {
          "1. open": "188.2500",
          "2. high": "188.7300",
          "3. low": "188.2500",
          "4. close": "188.7300",
          "5. volume": "22",
        },
        "2024-08-02 17:15:00": {
          "1. open": "188.3300",
          "2. high": "188.7300",
          "3. low": "188.3300",
          "4. close": "188.7300",
          "5. volume": "52",
        },
        "2024-08-02 17:10:00": {
          "1. open": "188.7400",
          "2. high": "188.7400",
          "3. low": "188.3300",
          "4. close": "188.3300",
          "5. volume": "524",
        },
        "2024-08-02 16:55:00": {
          "1. open": "188.1800",
          "2. high": "188.1800",
          "3. low": "188.1800",
          "4. close": "188.1800",
          "5. volume": "22",
        },
        "2024-08-02 16:50:00": {
          "1. open": "190.4600",
          "2. high": "190.4600",
          "3. low": "190.4600",
          "4. close": "190.4600",
          "5. volume": "1",
        },
        "2024-08-02 16:45:00": {
          "1. open": "188.1500",
          "2. high": "188.1500",
          "3. low": "188.1500",
          "4. close": "188.1500",
          "5. volume": "13",
        },
        "2024-08-02 16:40:00": {
          "1. open": "188.7400",
          "2. high": "188.7400",
          "3. low": "188.7400",
          "4. close": "188.7400",
          "5. volume": "248",
        },
        "2024-08-02 16:35:00": {
          "1. open": "189.0600",
          "2. high": "189.5300",
          "3. low": "188.6300",
          "4. close": "188.6300",
          "5. volume": "541",
        },
        "2024-08-02 16:25:00": {
          "1. open": "189.1200",
          "2. high": "189.9000",
          "3. low": "189.1200",
          "4. close": "189.6800",
          "5. volume": "6262",
        },
        "2024-08-02 16:20:00": {
          "1. open": "189.1200",
          "2. high": "190.0000",
          "3. low": "189.1200",
          "4. close": "189.1200",
          "5. volume": "25544",
        },
        "2024-08-02 16:15:00": {
          "1. open": "189.1200",
          "2. high": "189.1200",
          "3. low": "188.1500",
          "4. close": "189.1200",
          "5. volume": "224",
        },
        "2024-08-02 16:10:00": {
          "1. open": "189.1200",
          "2. high": "189.1200",
          "3. low": "186.0700",
          "4. close": "186.0700",
          "5. volume": "706294",
        },
        "2024-08-02 16:05:00": {
          "1. open": "189.1200",
          "2. high": "189.1200",
          "3. low": "187.9110",
          "4. close": "189.1200",
          "5. volume": "5152",
        },
        "2024-08-02 16:00:00": {
          "1. open": "189.0900",
          "2. high": "189.1200",
          "3. low": "189.0900",
          "4. close": "189.1200",
          "5. volume": "1576077",
        },
        "2024-08-02 15:55:00": {
          "1. open": "188.7300",
          "2. high": "189.2600",
          "3. low": "188.7200",
          "4. close": "189.0900",
          "5. volume": "406664",
        },
        "2024-08-02 15:50:00": {
          "1. open": "187.7100",
          "2. high": "188.7100",
          "3. low": "187.6700",
          "4. close": "188.7090",
          "5. volume": "139746",
        },
        "2024-08-02 15:45:00": {
          "1. open": "187.8400",
          "2. high": "188.0900",
          "3. low": "187.6500",
          "4. close": "187.6900",
          "5. volume": "68651",
        },
        "2024-08-02 15:40:00": {
          "1. open": "188.0250",
          "2. high": "188.0700",
          "3. low": "187.8200",
          "4. close": "187.8600",
          "5. volume": "53120",
        },
        "2024-08-02 15:35:00": {
          "1. open": "188.2600",
          "2. high": "188.3400",
          "3. low": "188.0200",
          "4. close": "188.0300",
          "5. volume": "53974",
        },
        "2024-08-02 15:30:00": {
          "1. open": "188.3800",
          "2. high": "188.4290",
          "3. low": "188.2250",
          "4. close": "188.3000",
          "5. volume": "32734",
        },
        "2024-08-02 15:25:00": {
          "1. open": "188.2600",
          "2. high": "188.3810",
          "3. low": "188.1700",
          "4. close": "188.3300",
          "5. volume": "27838",
        },
        "2024-08-02 15:20:00": {
          "1. open": "188.1300",
          "2. high": "188.2900",
          "3. low": "188.0800",
          "4. close": "188.2250",
          "5. volume": "31272",
        },
        "2024-08-02 15:15:00": {
          "1. open": "188.1400",
          "2. high": "188.1900",
          "3. low": "188.0100",
          "4. close": "188.1200",
          "5. volume": "25900",
        },
        "2024-08-02 15:10:00": {
          "1. open": "188.1450",
          "2. high": "188.1800",
          "3. low": "188.0100",
          "4. close": "188.1800",
          "5. volume": "25935",
        },
        "2024-08-02 15:05:00": {
          "1. open": "188.2800",
          "2. high": "188.2800",
          "3. low": "188.0800",
          "4. close": "188.1400",
          "5. volume": "20714",
        },
        "2024-08-02 15:00:00": {
          "1. open": "188.4000",
          "2. high": "188.4000",
          "3. low": "188.1900",
          "4. close": "188.2800",
          "5. volume": "21808",
        },
        "2024-08-02 14:55:00": {
          "1. open": "188.4200",
          "2. high": "188.6000",
          "3. low": "188.3300",
          "4. close": "188.3400",
          "5. volume": "21147",
        },
        "2024-08-02 14:50:00": {
          "1. open": "188.3950",
          "2. high": "188.4900",
          "3. low": "188.3200",
          "4. close": "188.4000",
          "5. volume": "20027",
        },
        "2024-08-02 14:45:00": {
          "1. open": "188.5000",
          "2. high": "188.6200",
          "3. low": "188.3530",
          "4. close": "188.3950",
          "5. volume": "35282",
        },
        "2024-08-02 14:40:00": {
          "1. open": "188.2650",
          "2. high": "188.5700",
          "3. low": "188.2650",
          "4. close": "188.5000",
          "5. volume": "28900",
        },
        "2024-08-02 14:35:00": {
          "1. open": "188.0200",
          "2. high": "188.4300",
          "3. low": "187.9800",
          "4. close": "188.3000",
          "5. volume": "60557",
        },
        "2024-08-02 14:30:00": {
          "1. open": "187.8700",
          "2. high": "188.1600",
          "3. low": "187.8000",
          "4. close": "188.0300",
          "5. volume": "93298",
        },
        "2024-08-02 14:25:00": {
          "1. open": "187.6400",
          "2. high": "187.8800",
          "3. low": "187.5000",
          "4. close": "187.8800",
          "5. volume": "36016",
        },
        "2024-08-02 14:20:00": {
          "1. open": "187.4400",
          "2. high": "187.7300",
          "3. low": "187.4400",
          "4. close": "187.6500",
          "5. volume": "16542",
        },
        "2024-08-02 14:15:00": {
          "1. open": "187.3850",
          "2. high": "187.5100",
          "3. low": "187.3300",
          "4. close": "187.4400",
          "5. volume": "22088",
        },
        "2024-08-02 14:10:00": {
          "1. open": "186.9960",
          "2. high": "187.4200",
          "3. low": "186.9960",
          "4. close": "187.4200",
          "5. volume": "19282",
        },
        "2024-08-02 14:05:00": {
          "1. open": "187.0900",
          "2. high": "187.1600",
          "3. low": "187.0000",
          "4. close": "187.0100",
          "5. volume": "39405",
        },
        "2024-08-02 14:00:00": {
          "1. open": "187.3300",
          "2. high": "187.3450",
          "3. low": "187.0600",
          "4. close": "187.1200",
          "5. volume": "119552",
        },
        "2024-08-02 13:55:00": {
          "1. open": "187.2500",
          "2. high": "187.4900",
          "3. low": "187.1800",
          "4. close": "187.3800",
          "5. volume": "44445",
        },
        "2024-08-02 13:50:00": {
          "1. open": "187.1350",
          "2. high": "187.3850",
          "3. low": "187.0940",
          "4. close": "187.2400",
          "5. volume": "44100",
        },
        "2024-08-02 13:45:00": {
          "1. open": "187.1300",
          "2. high": "187.1960",
          "3. low": "186.4300",
          "4. close": "187.1350",
          "5. volume": "71547",
        },
        "2024-08-02 13:40:00": {
          "1. open": "187.0300",
          "2. high": "187.2900",
          "3. low": "187.0300",
          "4. close": "187.1400",
          "5. volume": "19184",
        },
        "2024-08-02 13:35:00": {
          "1. open": "186.9350",
          "2. high": "187.2000",
          "3. low": "186.8500",
          "4. close": "187.0200",
          "5. volume": "22888",
        },
        "2024-08-02 13:30:00": {
          "1. open": "186.8100",
          "2. high": "186.9690",
          "3. low": "186.6800",
          "4. close": "186.9690",
          "5. volume": "24512",
        },
        "2024-08-02 13:25:00": {
          "1. open": "186.9800",
          "2. high": "187.0700",
          "3. low": "186.7700",
          "4. close": "186.7800",
          "5. volume": "24920",
        },
        "2024-08-02 13:20:00": {
          "1. open": "187.1050",
          "2. high": "187.1050",
          "3. low": "186.8500",
          "4. close": "186.9650",
          "5. volume": "25864",
        },
        "2024-08-02 13:15:00": {
          "1. open": "187.2000",
          "2. high": "187.2000",
          "3. low": "186.9300",
          "4. close": "187.0900",
          "5. volume": "23386",
        },
        "2024-08-02 13:10:00": {
          "1. open": "186.7900",
          "2. high": "187.1600",
          "3. low": "186.7150",
          "4. close": "187.1600",
          "5. volume": "30752",
        },
        "2024-08-02 13:05:00": {
          "1. open": "186.4400",
          "2. high": "186.7850",
          "3. low": "186.3700",
          "4. close": "186.7850",
          "5. volume": "20173",
        },
        "2024-08-02 13:00:00": {
          "1. open": "186.2500",
          "2. high": "186.5100",
          "3. low": "186.1500",
          "4. close": "186.3900",
          "5. volume": "24523",
        },
        "2024-08-02 12:55:00": {
          "1. open": "186.3500",
          "2. high": "186.3900",
          "3. low": "186.2100",
          "4. close": "186.2900",
          "5. volume": "22821",
        },
        "2024-08-02 12:50:00": {
          "1. open": "186.7470",
          "2. high": "186.8100",
          "3. low": "186.2300",
          "4. close": "186.2600",
          "5. volume": "20581",
        },
        "2024-08-02 12:45:00": {
          "1. open": "187.0950",
          "2. high": "187.0950",
          "3. low": "186.7150",
          "4. close": "186.7800",
          "5. volume": "29599",
        },
        "2024-08-02 12:40:00": {
          "1. open": "187.3600",
          "2. high": "187.3600",
          "3. low": "187.0700",
          "4. close": "187.0950",
          "5. volume": "20556",
        },
        "2024-08-02 12:35:00": {
          "1. open": "187.1100",
          "2. high": "187.4700",
          "3. low": "186.9100",
          "4. close": "187.3800",
          "5. volume": "33157",
        },
        "2024-08-02 12:30:00": {
          "1. open": "187.2900",
          "2. high": "187.4200",
          "3. low": "187.0300",
          "4. close": "187.1250",
          "5. volume": "34106",
        },
        "2024-08-02 12:25:00": {
          "1. open": "187.3150",
          "2. high": "187.4800",
          "3. low": "187.2300",
          "4. close": "187.3300",
          "5. volume": "24936",
        },
        "2024-08-02 12:20:00": {
          "1. open": "187.3800",
          "2. high": "187.6200",
          "3. low": "187.3000",
          "4. close": "187.3200",
          "5. volume": "30062",
        },
        "2024-08-02 12:15:00": {
          "1. open": "186.8950",
          "2. high": "187.3600",
          "3. low": "186.8950",
          "4. close": "187.3600",
          "5. volume": "33566",
        },
        "2024-08-02 12:10:00": {
          "1. open": "187.3610",
          "2. high": "187.4700",
          "3. low": "186.8900",
          "4. close": "186.8950",
          "5. volume": "37175",
        },
        "2024-08-02 12:05:00": {
          "1. open": "187.5000",
          "2. high": "187.5210",
          "3. low": "187.3200",
          "4. close": "187.4150",
          "5. volume": "30926",
        },
        "2024-08-02 12:00:00": {
          "1. open": "187.0900",
          "2. high": "187.5000",
          "3. low": "187.0000",
          "4. close": "187.5000",
          "5. volume": "24552",
        },
        "2024-08-02 11:55:00": {
          "1. open": "186.9600",
          "2. high": "187.3900",
          "3. low": "186.9400",
          "4. close": "187.0900",
          "5. volume": "25658",
        },
        "2024-08-02 11:50:00": {
          "1. open": "186.8700",
          "2. high": "187.0900",
          "3. low": "186.8700",
          "4. close": "186.9600",
          "5. volume": "34425",
        },
        "2024-08-02 11:45:00": {
          "1. open": "186.5550",
          "2. high": "186.9400",
          "3. low": "186.5550",
          "4. close": "186.9200",
          "5. volume": "39455",
        },
        "2024-08-02 11:40:00": {
          "1. open": "186.2350",
          "2. high": "186.6400",
          "3. low": "186.2300",
          "4. close": "186.5550",
          "5. volume": "82275",
        },
        "2024-08-02 11:35:00": {
          "1. open": "186.1750",
          "2. high": "186.5630",
          "3. low": "186.1000",
          "4. close": "186.2350",
          "5. volume": "41545",
        },
        "2024-08-02 11:30:00": {
          "1. open": "186.1300",
          "2. high": "186.2500",
          "3. low": "186.0550",
          "4. close": "186.1750",
          "5. volume": "28457",
        },
        "2024-08-02 11:25:00": {
          "1. open": "186.0490",
          "2. high": "186.1300",
          "3. low": "185.8700",
          "4. close": "186.1200",
          "5. volume": "30518",
        },
        "2024-08-02 11:20:00": {
          "1. open": "186.0350",
          "2. high": "186.1100",
          "3. low": "185.8000",
          "4. close": "186.1100",
          "5. volume": "22584",
        },
        "2024-08-02 11:15:00": {
          "1. open": "185.8100",
          "2. high": "186.1650",
          "3. low": "185.7800",
          "4. close": "186.0350",
          "5. volume": "27244",
        },
        "2024-08-02 11:10:00": {
          "1. open": "185.9560",
          "2. high": "186.2800",
          "3. low": "185.8100",
          "4. close": "185.8100",
          "5. volume": "27891",
        },
        "2024-08-02 11:05:00": {
          "1. open": "185.8800",
          "2. high": "186.0050",
          "3. low": "185.7100",
          "4. close": "185.9550",
          "5. volume": "25580",
        },
        "2024-08-02 11:00:00": {
          "1. open": "186.0400",
          "2. high": "186.0950",
          "3. low": "185.8000",
          "4. close": "185.8800",
          "5. volume": "35169",
        },
        "2024-08-02 10:55:00": {
          "1. open": "185.9700",
          "2. high": "186.1100",
          "3. low": "185.7000",
          "4. close": "185.9800",
          "5. volume": "30723",
        },
        "2024-08-02 10:50:00": {
          "1. open": "186.0000",
          "2. high": "186.2850",
          "3. low": "185.7700",
          "4. close": "185.8900",
          "5. volume": "41992",
        },
        "2024-08-02 10:45:00": {
          "1. open": "186.2650",
          "2. high": "186.3000",
          "3. low": "185.7800",
          "4. close": "186.0100",
          "5. volume": "83239",
        },
        "2024-08-02 10:40:00": {
          "1. open": "186.3950",
          "2. high": "186.6530",
          "3. low": "186.1000",
          "4. close": "186.2250",
          "5. volume": "46153",
        },
        "2024-08-02 10:35:00": {
          "1. open": "186.5250",
          "2. high": "186.7100",
          "3. low": "186.2700",
          "4. close": "186.4100",
          "5. volume": "47353",
        },
        "2024-08-02 10:30:00": {
          "1. open": "186.2300",
          "2. high": "186.8200",
          "3. low": "186.2300",
          "4. close": "186.5100",
          "5. volume": "35594",
        },
        "2024-08-02 10:25:00": {
          "1. open": "186.2800",
          "2. high": "186.4400",
          "3. low": "186.1600",
          "4. close": "186.2600",
          "5. volume": "32577",
        },
        "2024-08-02 10:20:00": {
          "1. open": "186.5900",
          "2. high": "186.7560",
          "3. low": "186.1290",
          "4. close": "186.2800",
          "5. volume": "45359",
        },
      };

      // candlestickSeries.setData(data.initialData);
      chart.timeScale().fitContent();
      chart.timeScale().scrollToPosition(5);

      const dataToShow = Object.keys(data)
        .map((time) => {
          let keys = Object.keys(data[time]);
          return {
            time: new Date(time).getTime(),
            open: +data[time][keys[0]],
            high: +data[time][keys[1]],
            low: +data[time][keys[2]],
            close: +data[time][keys[3]],
            volume: +data[time][keys[4]],
          };
        })
        .sort((a, b) => {
          return a.time > b.time ? 1 : -1;
        });
      console.log({ dataToShow });

      // function* getNextRealtimeUpdate(realtimeData) {
      //   for (const datapoint of realtimeData) {
      //     yield datapoint;
      //   }
      //   return null;
      // }

      // const streamingDataProvider = getNextRealtimeUpdate(data.realTimeUpdates);

      // const interval = setInterval(() => {
      //   const update = streamingDataProvider.next();
      //   if (update.done) {
      //     return clearInterval(interval);
      //   }

      //   candlestickSeries.update(update.value);
      // }, 1000);
      candlestickSeries.setData(dataToShow);
    })();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

  return <div ref={chartContainerRef} />;
}
