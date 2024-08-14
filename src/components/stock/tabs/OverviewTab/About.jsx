import React, { useState } from "react";
import Heading3 from "../../../ui/Heading3";
import classNames from "classnames";
import { motion } from "framer-motion";

export default function About() {
  const IMAGES = [
    "https://assets-netstorage.groww.in/stock-assets/brand_logo/INE002A01018/Reliance%20Retail/4.%2014457373_2124614317764681_8029853135952480294_n.png",
    "https://assets-netstorage.groww.in/stock-assets/brand_logo/INE002A01018/Jio/2.%201200px-reliance_jio_logo__28october_2015_29.svg.png",
    "https://assets-netstorage.groww.in/stock-assets/brand_logo/INE002A01018/Reliance_fresh.png",
    "https://assets-netstorage.groww.in/stock-assets/brand_logo/INE002A01018/Jio.png",
    "https://assets-netstorage.groww.in/stock-assets/brand_logo/INE002A01018/Reliance_Industries.png",
    "https://assets-netstorage.groww.in/stock-assets/brand_logo/INE002A01018/Reliance%20Petrochemicals/1.%201200px-reliance_industries_logo.svg.png",
  ];
  const DATA = [
    { name: "Parent Organisation", value: "Reliance Industries" },
    { name: "Managing Director", value: "Shri Mukesh Ambani" },
    { name: "NSE Symbol", value: "RELIANCE" },
  ];
  const [showMore, setShowMore] = useState(false);
  const variants = {
    open: { height: "auto", duration: 300 },
    closed: { height: "56px", duration: 300 },
  };
  return (
    <div className="space-y-4">
      <Heading3 heading={"About Relience Industries"} />
      <motion.p
        animate={showMore ? "open" : "closed"}
        variants={variants}
        className="text-sm text-gray-500 truncate text-wrap h-14"
      >
        Reliance Industries Limited is an India-based company, which is engaged
        in the activities of hydrocarbon exploration and production, petroleum
        refining and marketing, petrochemicals, advanced materials and
        composites, renewables (solar and hydrogen), retail and digital
        services. The Company's segments include Oil to Chemicals (O2C), Oil and
        Gas, Retail and Digital Services. O2C segment includes refining,
        petrochemicals, fuel retailing, aviation fuel and bulk wholesale
        marketing, and also includes transportation fuels, polymers, polyesters
        and elastomers. O2C business assets include aromatics, gasification,
        multi-feed and gas crackers along with downstream manufacturing
        facilities, logistics and supply-chain infrastructure. Oil and Gas
        segment is engaged in exploration, development and production of crude
        oil and natural gas. Retail segment includes consumer retail and a range
        of related services. Digital Services segment is engaged in the
        provision of a range of digital services.
      </motion.p>
      <button onClick={() => setShowMore((prevValue) => !prevValue)}>
        Read {showMore ? "Less" : "More"}
      </button>
      <ul className="grid grid-cols-2 ">
        {DATA.map((listItem, index) => (
          <li
            key={listItem.name}
            className={classNames("flex px-5 py-2", {
              "border-r border-dashed": index % 2 === 0,
            })}
          >
            <p
              className="text-sm text-gray-500 grow"
              children={listItem.name}
            />
            <p className="text-sm font-semibold shrink-0">{listItem.value}</p>
          </li>
        ))}
      </ul>

      <div className="space-x-4">
        {IMAGES.map((image) => (
          <img
            className="inline-block object-contain w-16 h-16 border border-gray-200 rounded"
            alt="company logo"
            src={image}
          />
        ))}
      </div>
    </div>
  );
}
