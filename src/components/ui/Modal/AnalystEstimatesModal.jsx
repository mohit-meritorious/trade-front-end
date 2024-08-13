import React from "react";
import ModalHeader from "./ModalHeader";
import Heading6 from "../Heading6";

export default function AnalystEstimatesModal() {
  return (
    <div className="space-y-4">
      <ModalHeader
        description={
          "The Institutional Brokers Estimate System (I/B/E/S) is a database of estimates made by stock analysts regarding the future earnings of publicly traded companies. It provides analyst forecasts on company performance expressed via various consensus measures, including earnings per share, sales, and net income."
        }
        heading={"I/B/E/S Data Estimates"}
      />
      <Heading6 heading={"*Disclaimer"} />
      <p className="text-xs text-gray-500">
        These estimates are aggregated by Refinitiv using it's Institutional
        Brokers' Estimate System and displayed by us on “AS IS” basis. The
        estimates that are displayed should not be construed to be investment
        recommendation/advice or an offer or solicitation of an offer to
        buy/sell any securities by Groww Invest Tech Pvt. Ltd. (Formerly known
        as Nextbillion Technology Pvt. Ltd) (Groww). Investors should not solely
        rely on the information displayed herein and must make investment
        decisions based on their own investment objectives, judgment, risk
        profile, and financial position. Past performance should not be taken as
        an indication or guarantee of future performance. Kindly note that
        investment in securities markets is subject to market risks, read all
        the related documents carefully before investing.
      </p>
    </div>
  );
}
