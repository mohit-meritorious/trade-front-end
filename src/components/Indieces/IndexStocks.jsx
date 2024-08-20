import React, { useState } from "react";
import Table from "../ui/Table";
import { Link } from "react-router-dom";
import Heading3 from "../ui/Heading3";
import classNames from "classnames";

const DATA = [
  {
    name: "WIPRO",
    price: 516.25,
    dayChange: 21.100000000000023,
    dayChangePerc: 4.261334949005357,
  },
  {
    name: "POWERGRID",
    price: 338.6,
    dayChange: 5.100000000000023,
    dayChangePerc: 1.5292353823088525,
  },
  {
    name: "BAJAJ-AUTO",
    price: 9888.15,
    dayChange: 138.54999999999927,
    dayChangePerc: 1.4210839419053014,
  },
  {
    name: "NESTLEIND",
    price: 2525.45,
    dayChange: 50.84999999999991,
    dayChangePerc: 2.054877555968638,
  },
  {
    name: "ASIANPAINT",
    price: 3048.15,
    dayChange: 22.300000000000182,
    dayChangePerc: 0.7369829965133824,
  },
  {
    name: "TITAN",
    price: 3444.75,
    dayChange: 42.59999999999991,
    dayChangePerc: 1.2521493761297975,
  },
  {
    name: "BAJAJFINSV",
    price: 1549.9,
    dayChange: 20.75,
    dayChangePerc: 1.356963018670503,
  },
  {
    name: "JSWSTEEL",
    price: 908.45,
    dayChange: 18.15000000000009,
    dayChangePerc: 2.0386386611254737,
  },
  {
    name: "GRASIM",
    price: 2600.35,
    dayChange: 87.94999999999982,
    dayChangePerc: 3.5006368412673066,
  },
  {
    name: "TECHM",
    price: 1585.3,
    dayChange: 60.899999999999864,
    dayChangePerc: 3.9950144319076264,
  },
  {
    name: "LTIM",
    price: 5563.75,
    dayChange: 136.19999999999982,
    dayChangePerc: 2.5094195355178637,
  },
  {
    name: "HINDALCO",
    price: 634.15,
    dayChange: 12.699999999999932,
    dayChangePerc: 2.0436076916887815,
  },
  {
    name: "BPCL",
    price: 332.5,
    dayChange: 7.449999999999989,
    dayChangePerc: 2.291955083833253,
  },
  {
    name: "TATASTEEL",
    price: 149.52,
    dayChange: 3.3500000000000227,
    dayChangePerc: 2.2918519532051875,
  },
  {
    name: "HDFCLIFE",
    price: 689.4,
    dayChange: 3.0499999999999545,
    dayChangePerc: 0.4443796896627019,
  },
  {
    name: "SBILIFE",
    price: 1688.9,
    dayChange: -3.199999999999818,
    dayChangePerc: -0.18911411855090232,
  },
  {
    name: "EICHERMOT",
    price: 4818,
    dayChange: 84.75,
    dayChangePerc: 1.7905244810648073,
  },
  {
    name: "CIPLA",
    price: 1576.1,
    dayChange: 12.299999999999955,
    dayChangePerc: 0.7865455940657344,
  },
  {
    name: "SHRIRAMFIN",
    price: 2981.5,
    dayChange: 86.40000000000009,
    dayChangePerc: 2.9843528720942314,
  },
  {
    name: "DIVISLAB",
    price: 4633.9,
    dayChange: -28.100000000000364,
    dayChangePerc: -0.6027456027456105,
  },
  {
    name: "TATACONSUM",
    price: 1187.75,
    dayChange: 20.200000000000045,
    dayChangePerc: 1.7301186244700482,
  },
  {
    name: "BRITANNIA",
    price: 5729.65,
    dayChange: 70.5,
    dayChangePerc: 1.24577012448866,
  },
  {
    name: "DRREDDY",
    price: 6793.6,
    dayChange: -7.449999999999818,
    dayChangePerc: -0.10954190896993578,
  },
  {
    name: "INDUSINDBK",
    price: 1364.15,
    dayChange: 26.050000000000182,
    dayChangePerc: 1.9467902249458324,
  },
  {
    name: "HEROMOTOCO",
    price: 5128.1,
    dayChange: 55.650000000000546,
    dayChangePerc: 1.0971029778509507,
  },
  {
    name: "APOLLOHOSP",
    price: 6686.9,
    dayChange: 181.04999999999927,
    dayChangePerc: 2.782880023363577,
  },
  {
    name: "TCS",
    price: 4416.05,
    dayChange: 120.80000000000018,
    dayChangePerc: 2.8124090565159228,
  },
  {
    name: "INFY",
    price: 1858.95,
    dayChange: 35.700000000000045,
    dayChangePerc: 1.9580419580419606,
  },
  {
    name: "BHARTIARTL",
    price: 1483.55,
    dayChange: 11.849999999999909,
    dayChangePerc: 0.8051912753957946,
  },
  {
    name: "ICICIBANK",
    price: 1187.25,
    dayChange: 25.59999999999991,
    dayChangePerc: 2.2037618904144884,
  },
  {
    name: "RELIANCE",
    price: 2956.4,
    dayChange: 32.70000000000027,
    dayChangePerc: 1.1184458049731598,
  },
  {
    name: "HINDUNILVR",
    price: 2748.25,
    dayChange: 26.199999999999818,
    dayChangePerc: 0.9625098730735958,
  },
  {
    name: "HDFCBANK",
    price: 1632.1,
    dayChange: 24.299999999999955,
    dayChangePerc: 1.5113820126881425,
  },
  {
    name: "SBIN",
    price: 812.1,
    dayChange: 9.100000000000023,
    dayChangePerc: 1.133250311332506,
  },
  {
    name: "M&M",
    price: 2840.45,
    dayChange: 95.19999999999982,
    dayChangePerc: 3.4678080320553617,
  },
  {
    name: "ULTRACEMCO",
    price: 11295.7,
    dayChange: 293.10000000000036,
    dayChangePerc: 2.6639158017195967,
  },
  {
    name: "ADANIENT",
    price: 3108.8,
    dayChange: 68.70000000000027,
    dayChangePerc: 2.2597940857208734,
  },
  {
    name: "AXISBANK",
    price: 1166.85,
    dayChange: 13.75,
    dayChangePerc: 1.1924377764287575,
  },
  {
    name: "ADANIPORTS",
    price: 1493.45,
    dayChange: 31.5,
    dayChangePerc: 2.1546564519990423,
  },
  {
    name: "COALINDIA",
    price: 512.3,
    dayChange: 12.599999999999966,
    dayChangePerc: 2.52151290774464,
  },
  {
    name: "KOTAKBANK",
    price: 1777.3,
    dayChange: 29.399999999999864,
    dayChangePerc: 1.68201842210652,
  },
  {
    name: "MARUTI",
    price: 12213.3,
    dayChange: 7.649999999999636,
    dayChangePerc: 0.06267589190251757,
  },
  {
    name: "SUNPHARMA",
    price: 1742.75,
    dayChange: 1.099999999999909,
    dayChangePerc: 0.06315849912438831,
  },
  {
    name: "LT",
    price: 3568.35,
    dayChange: 23.15000000000009,
    dayChangePerc: 0.6529955996840825,
  },
  {
    name: "ITC",
    price: 502.65,
    dayChange: 10.449999999999989,
    dayChangePerc: 2.1231206826493274,
  },
  {
    name: "HCLTECH",
    price: 1668.25,
    dayChange: 42.09999999999991,
    dayChangePerc: 2.5889370599268156,
  },
  {
    name: "ONGC",
    price: 329.6,
    dayChange: 1.4500000000000455,
    dayChangePerc: 0.4418710955355921,
  },
  {
    name: "TATAMOTORS",
    price: 1098.35,
    dayChange: 36,
    dayChangePerc: 3.388713700757754,
  },
  {
    name: "BAJFINANCE",
    price: 6590.9,
    dayChange: 132.39999999999964,
    dayChangePerc: 2.05001161260354,
  },
  {
    name: "NTPC",
    price: 398.05,
    dayChange: 1.6999999999999886,
    dayChangePerc: 0.42891383877885414,
  },
];
const TABLE_HEADINGS = [
  "Name",
  "value",
  "Day Channge",
  //   "High",
  //   "Low",
  //   "Open",
  //   "Prev Close",
];
export default function IndexStocks() {
  const [page, setPage] = useState(2);
  const limit = 10;

  const start = (page - 1) * limit;

  return (
    <div>
      <Heading3 heading={"NIFTY 50 Companies"} />
      <div className="mt-10">
        <Table
          headings={TABLE_HEADINGS}
          pagination
          max={DATA.length / limit}
          setPage={setPage}
          page={page}
        >
          {DATA.slice(start, start + limit).map((index) => (
            <tr
              className="border-b border-gray-200 dark:border-gray-700"
              key={index.name}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                <Link to={"/stock/" + index.name}>{index.name}</Link>
              </th>
              <td className="px-6 py-4">₹{index.price}</td>
              <td
                className={classNames(
                  "px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800",
                  {
                    "text-green-500": index.dayChange >= 0,
                    "text-red-500": index.dayChange < 0,
                  }
                )}
              >
                <div className="text-sm">₹{index.dayChange.toFixed(2)}</div>
                <div className="text-xs">
                  ({index.dayChangePerc.toFixed(2)}%)
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
