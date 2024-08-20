import React from "react";
import Heading3 from "../ui/Heading3";
import Table from "../ui/Table";
import { formatNumberWithCommas } from "../../utils/number";
import classNames from "classnames";
const TOP_OPTIONS = {
  NIFTY2482225000CE: {
    type: "LIVE_PRICE",
    symbol: "36804",
    tsInMillis: 1724144817,
    open: 6,
    high: 13.1,
    low: 4.55,
    close: 5.4,
    ltp: 6.05,
    dayChange: 0.6499999999999995,
    dayChangePerc: 12.037037037037027,
    lowPriceRange: 0.05,
    highPriceRange: 217.55,
    volume: 3067601,
    lowTradeRange: 0.05,
    highTradeRange: 26.1,
    totalBuyQty: 1166950,
    totalSellQty: 1563075,
    openInterest: 394199,
    prevOpenInterest: 366958,
    oiDayChange: 6810.25,
    oiDayChangePerc: 7.423465355708283,
    lastTradeQty: 150,
    lastTradeTime: 1724144816,
  },
  NIFTY2482224700PE: {
    type: "LIVE_PRICE",
    symbol: "36775",
    tsInMillis: 1724144817,
    open: 150,
    high: 163.5,
    low: 69,
    close: 181.8,
    ltp: 82.7,
    dayChange: -99.10000000000001,
    dayChangePerc: -54.51045104510451,
    lowPriceRange: 0.05,
    highPriceRange: 582.75,
    volume: 3741259,
    lowTradeRange: 49.95,
    highTradeRange: 116.5,
    totalBuyQty: 537725,
    totalSellQty: 968250,
    openInterest: 222318,
    prevOpenInterest: 21209,
    oiDayChange: 50277.25,
    oiDayChangePerc: 948.2248102220755,
    lastTradeQty: 25,
    lastTradeTime: 1724144817,
  },
  NIFTY2482224750CE: {
    type: "LIVE_PRICE",
    symbol: "36780",
    tsInMillis: 1724144817,
    open: 41.9,
    high: 97.85,
    low: 36.15,
    close: 36.5,
    ltp: 60.15,
    dayChange: 23.65,
    dayChangePerc: 64.7945205479452,
    lowPriceRange: 0.05,
    highPriceRange: 476.55,
    volume: 2747074,
    lowTradeRange: 36,
    highTradeRange: 84,
    totalBuyQty: 310550,
    totalSellQty: 744100,
    openInterest: 142456,
    prevOpenInterest: 114577,
    oiDayChange: 6969.75,
    oiDayChangePerc: 24.33210853836285,
    lastTradeQty: 100,
    lastTradeTime: 1724144817,
  },
  NIFTY2482224700CE: {
    type: "LIVE_PRICE",
    symbol: "36770",
    tsInMillis: 1724144817,
    open: 61,
    high: 127.9,
    low: 52.65,
    close: 51.45,
    ltp: 84.45,
    dayChange: 33,
    dayChangePerc: 64.1399416909621,
    lowPriceRange: 0.05,
    highPriceRange: 542.95,
    volume: 5179565,
    lowTradeRange: 50.35,
    highTradeRange: 117.4,
    totalBuyQty: 1141425,
    totalSellQty: 1075475,
    openInterest: 229319,
    prevOpenInterest: 133540,
    oiDayChange: 23944.75,
    oiDayChangePerc: 71.72307922719784,
    lastTradeQty: 25,
    lastTradeTime: 1724144817,
  },
  NIFTY2482224800CE: {
    type: "LIVE_PRICE",
    symbol: "36788",
    tsInMillis: 1724144817,
    open: 27.8,
    high: 71.75,
    low: 25,
    close: 25.35,
    ltp: 40.7,
    dayChange: 15.350000000000001,
    dayChangePerc: 60.552268244575934,
    lowPriceRange: 0.05,
    highPriceRange: 414.9,
    volume: 3095842,
    lowTradeRange: 20.55,
    highTradeRange: 60.55,
    totalBuyQty: 461425,
    totalSellQty: 814225,
    openInterest: 193450,
    prevOpenInterest: 176373,
    oiDayChange: 4269.25,
    oiDayChangePerc: 9.682320990174233,
    lastTradeQty: 25,
    lastTradeTime: 1724144816,
  },
  NIFTY2482224600CE: {
    type: "LIVE_PRICE",
    symbol: "36764",
    tsInMillis: 1724144817,
    open: 108.5,
    high: 199.2,
    low: 95,
    close: 92.8,
    ltp: 147.4,
    dayChange: 54.60000000000001,
    dayChangePerc: 58.83620689655174,
    lowPriceRange: 0.05,
    highPriceRange: 686.65,
    volume: 2565018,
    lowTradeRange: 87.95,
    highTradeRange: 205.2,
    totalBuyQty: 980275,
    totalSellQty: 411275,
    openInterest: 112942,
    prevOpenInterest: 211149,
    oiDayChange: -24552,
    oiDayChangePerc: -46.511231405310944,
    lastTradeQty: 25,
    lastTradeTime: 1724144816,
  },
  NIFTY2482224500PE: {
    type: "LIVE_PRICE",
    symbol: "36759",
    tsInMillis: 1724144817,
    open: 70,
    high: 70.05,
    low: 21.4,
    close: 78.95,
    ltp: 24.1,
    dayChange: -54.85,
    dayChangePerc: -69.4743508549715,
    lowPriceRange: 0.05,
    highPriceRange: 343.5,
    volume: 2081430,
    lowTradeRange: 4.25,
    highTradeRange: 44.25,
    totalBuyQty: 683550,
    totalSellQty: 1005025,
    openInterest: 259874,
    prevOpenInterest: 202990,
    oiDayChange: 14221,
    oiDayChangePerc: 28.023055322922314,
    lastTradeQty: 25,
    lastTradeTime: 1724144817,
  },
  NIFTY2482224750PE: {
    type: "LIVE_PRICE",
    symbol: "36787",
    tsInMillis: 1724144817,
    open: 197.05,
    high: 197.3,
    low: 91.2,
    close: 216.35,
    ltp: 108.75,
    dayChange: -107.6,
    dayChangePerc: -49.73422694707649,
    lowPriceRange: 0.05,
    highPriceRange: 649.5,
    volume: 1358538,
    lowTradeRange: 65.55,
    highTradeRange: 152.9,
    totalBuyQty: 164100,
    totalSellQty: 244050,
    openInterest: 74280,
    prevOpenInterest: 16074,
    oiDayChange: 14551.5,
    oiDayChangePerc: 362.1127286300859,
    lastTradeQty: 50,
    lastTradeTime: 1724144817,
  },
  NIFTY2482224650PE: {
    type: "LIVE_PRICE",
    symbol: "36769",
    tsInMillis: 1724144817,
    open: 129.9,
    high: 132.65,
    low: 52.45,
    close: 149.95,
    ltp: 62.05,
    dayChange: -87.89999999999999,
    dayChangePerc: -58.619539846615545,
    lowPriceRange: 0.05,
    highPriceRange: 517.35,
    volume: 1921996,
    lowTradeRange: 37.5,
    highTradeRange: 87.5,
    totalBuyQty: 195575,
    totalSellQty: 536300,
    openInterest: 114056,
    prevOpenInterest: 24077,
    oiDayChange: 22494.75,
    oiDayChangePerc: 373.7135025127715,
    lastTradeQty: 250,
    lastTradeTime: 1724144816,
  },
  NIFTY2482224600PE: {
    type: "LIVE_PRICE",
    symbol: "36765",
    tsInMillis: 1724144817,
    open: 95,
    high: 108.25,
    low: 39,
    close: 122.65,
    ltp: 45.5,
    dayChange: -77.15,
    dayChangePerc: -62.902568283734205,
    lowPriceRange: 0.05,
    highPriceRange: 455.75,
    volume: 2868395,
    lowTradeRange: 25.85,
    highTradeRange: 65.85,
    totalBuyQty: 394425,
    totalSellQty: 1141400,
    openInterest: 217400,
    prevOpenInterest: 107126,
    oiDayChange: 27568.5,
    oiDayChangePerc: 102.93859567238579,
    lastTradeQty: 175,
    lastTradeTime: 1724144817,
  },
};
export default function TopOptions() {
  const TABLE_HEADINGS = ["", "Price", "OI", "Volume"];
  return (
    <div>
      <Heading3
        heading={"Top NIFTY 50 Options"}
        className={"p-3 pb-6 border-b border-dashed"}
      />

      <div className="mt-5">
        <Table headings={TABLE_HEADINGS}>
          {Object.keys(TOP_OPTIONS).map((index) => (
            <tr
              className="border-b border-gray-200 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                {/* <Link to={"/stock/" + index.name}> */}
                {index}
                {/* </Link> */}
              </th>
              <td className="px-6 py-4">
                <div>₹{TOP_OPTIONS[index].ltp}</div>
                <div
                  className={classNames("text-xs", {
                    "text-green-500": TOP_OPTIONS[index].dayChangePerc >= 0,
                    "text-red-500": TOP_OPTIONS[index].dayChangePerc < 0,
                  })}
                >
                  {TOP_OPTIONS[index].dayChangePerc.toFixed(2)}%
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <div>
                  {formatNumberWithCommas(
                    TOP_OPTIONS[index].openInterest,
                    false
                  )}
                </div>
                <div
                  className={classNames("text-xs", {
                    "text-green-500": TOP_OPTIONS[index].dayChange >= 0,
                    "text-red-500": TOP_OPTIONS[index].dayChange < 0,
                  })}
                >
                  {(TOP_OPTIONS[index].dayChange >= 0 ? "+" : "") +
                    TOP_OPTIONS[index].dayChange.toFixed(2)}
                  %
                </div>
              </td>
              <td className="px-6 py-4">
                {formatNumberWithCommas(TOP_OPTIONS[index].volume, false)}
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
