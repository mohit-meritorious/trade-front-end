import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
const NEWS = [
  {
    title:
      "Tesla Engineer Clears The Air On Only Foundation Series Cybertruck Being Available For Order, Says It Is Aimed At Simplifying Ordering Process 'Based On What We Are Producing Today' - Tesla  ( NASDAQ:TSLA ) ",
    url: "https://www.benzinga.com/news/24/08/40358429/tesla-engineer-clears-the-air-on-only-foundation-series-cybertruck-being-available-for-order-says-it",
    source: "Benzinga",
    time: "20240814T064428",
  },
  {
    title:
      "JLT Mobile Computers AB  ( publ )  publishes interim report for January-June 2024",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929803/0/en/JLT-Mobile-Computers-AB-publ-publishes-interim-report-for-January-June-2024.html",
    source: "GlobeNewswire",
    time: "20240814T063900",
  },
  {
    title: "44,767 Orion Corporation A shares converted into B shares",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929801/0/en/44-767-Orion-Corporation-A-shares-converted-into-B-shares.html",
    source: "GlobeNewswire",
    time: "20240814T063000",
  },
  {
    title:
      "Gujarat govt helping Adani Ports 'secure monopoly', JPC essential: Congress",
    url: "https://www.business-standard.com/politics/gujarat-govt-helping-adani-ports-secure-monopoly-jpc-essential-congress-124081400674_1.html",
    source: "Business Standard",
    time: "20240814T062600",
  },
  {
    title: "Piramal Enterprises stock tumbles 10% post June quarter results",
    url: "https://www.business-standard.com/markets/news/piramal-enterprises-stock-tumbles-10-post-june-quarter-results-124081400669_1.html",
    source: "Business Standard",
    time: "20240814T062350",
  },
  {
    title:
      "UK inflation rose to 2.2% in July, after two months at the Bank of England's 2% target",
    url: "https://www.cnbc.com/2024/08/14/uk-inflation-july-2024.html",
    source: "CNBC",
    time: "20240814T062237",
  },
  {
    title:
      "IDEX Biometrics and TaluCard bring inclusive biometric payment solutions to market in Europe",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929799/0/en/IDEX-Biometrics-and-TaluCard-bring-inclusive-biometric-payment-solutions-to-market-in-Europe.html",
    source: "GlobeNewswire",
    time: "20240814T061500",
  },
  {
    title:
      "IDEX Biometrics and TaluCard bring inclusive biometric payment solutions to market in Europe",
    url: "https://www.benzinga.com/pressreleases/24/08/g40358107/idex-biometrics-and-talucard-bring-inclusive-biometric-payment-solutions-to-market-in-europe",
    source: "Benzinga",
    time: "20240814T061500",
  },
  {
    title: "Nykaa gains as Q1 PAT soars to Rs 14 cr",
    url: "https://www.business-standard.com/markets/capital-market-news/nykaa-gains-as-q1-pat-soars-to-rs-14-cr-124081400688_1.html",
    source: "Business Standard",
    time: "20240814T061200",
  },
  {
    title:
      "Binance Executive Tigran Gambaryan's Family Raises Alarm Over Rapidly Worsening Health, Pleads For Release From Nigerian Prison",
    url: "https://www.benzinga.com/markets/cryptocurrency/24/08/40358028/binance-executive-tigran-gambaryans-family-raises-alarm-over-rapidly-worsening-health-plea",
    source: "Benzinga",
    time: "20240814T060656",
  },
  {
    title:
      "Brinker International, Cisco And 3 Stocks To Watch Heading Into Wednesday - Brinker International  ( NYSE:EAT ) ",
    url: "https://www.benzinga.com/news/earnings/24/08/40357992/brinker-international-cisco-and-3-stocks-to-watch-heading-into-wednesday",
    source: "Benzinga",
    time: "20240814T060530",
  },
  {
    title:
      "Tesla CEO Elon Musk Details Purported Benefits Of Proposed Government Efficiency Committee In Second Trump Administration: 'Tremendous Amount Of Growth And Opportunity...' - Tesla  ( NASDAQ:TSLA ) ",
    url: "https://www.benzinga.com/news/24/08/40357984/tesla-ceo-elon-musk-details-purported-benefits-of-proposed-government-efficiency-committee-in-second",
    source: "Benzinga",
    time: "20240814T060420",
  },
  {
    title: "Broader market underperforms; metal shares slide",
    url: "https://www.business-standard.com/markets/capital-market-news/broader-market-underperforms-metal-shares-slide-124081400689_1.html",
    source: "Business Standard",
    time: "20240814T060300",
  },
  {
    title:
      "MSMEs to get Rs 15,000-crore subsidy to boost recycling, efficiency",
    url: "https://www.business-standard.com/industry/news/msmes-to-get-rs-15-000-crore-subsidy-to-boost-recycling-efficiency-124081400664_1.html",
    source: "Business Standard",
    time: "20240814T060050",
  },
  {
    title:
      "Half-Yearly Financial Report for the six months to 30 June 2024 and interim dividend",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929792/0/en/Half-Yearly-Financial-Report-for-the-six-months-to-30-June-2024-and-interim-dividend.html",
    source: "GlobeNewswire",
    time: "20240814T060000",
  },
  {
    title: "Transaction in own shares",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929797/0/en/Transaction-in-own-shares.html",
    source: "GlobeNewswire",
    time: "20240814T060000",
  },
  {
    title:
      "VAALCO Energy, Inc. Announces Participation in EnerCom Denver Conference - VAALCO Energy  ( NYSE:EGY ) ",
    url: "https://www.benzinga.com/pressreleases/24/08/g40357925/vaalco-energy-inc-announces-participation-in-enercom-denver-conference",
    source: "Benzinga",
    time: "20240814T060000",
  },
  {
    title: "Q2 2024 Financial Results",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929796/0/en/Q2-2024-Financial-Results.html",
    source: "GlobeNewswire",
    time: "20240814T060000",
  },
  {
    title: "Transaction in Own Shares",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929794/0/en/Transaction-in-Own-Shares.html",
    source: "GlobeNewswire",
    time: "20240814T060000",
  },
  {
    title:
      "Aditya Tibrewala appointed as Chief Executive Officer, Sompo Thailand",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929788/0/en/Aditya-Tibrewala-appointed-as-Chief-Executive-Officer-Sompo-Thailand.html",
    source: "GlobeNewswire",
    time: "20240814T060000",
  },
  {
    title: "Transaction in Own Shares",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929791/0/en/Transaction-in-Own-Shares.html",
    source: "GlobeNewswire",
    time: "20240814T060000",
  },
  {
    title:
      "First six months 2024 interim report: strategy delivery with three Green Capacities projects reaching COD and 2024 guidance upgrade",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929795/0/en/First-six-months-2024-interim-report-strategy-delivery-with-three-Green-Capacities-projects-reaching-COD-and-2024-guidance-upgrade.html",
    source: "GlobeNewswire",
    time: "20240814T060000",
  },
  {
    title:
      "VAALCO Energy, Inc. Announces Participation in EnerCom Denver Conference",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929790/0/en/VAALCO-Energy-Inc-Announces-Participation-in-EnerCom-Denver-Conference.html",
    source: "GlobeNewswire",
    time: "20240814T060000",
  },
  {
    title:
      "First six months 2024 interim report: strategy delivery with three Green Capacities projects reaching COD and 2024 guidance upgrade",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929793/0/en/First-six-months-2024-interim-report-strategy-delivery-with-three-Green-Capacities-projects-reaching-COD-and-2024-guidance-upgrade.html",
    source: "GlobeNewswire",
    time: "20240814T060000",
  },
  {
    title:
      "Core Scientific drops 10% after $400 million convertible senior note offer",
    url: "https://cointelegraph.com/news/core-scientific-drops-10-after-400-million-convertible-senior-note-offer",
    source: "Cointelegraph",
    time: "20240814T055907",
  },
  {
    title: "HSCC  ( India )  secures order of Rs 528.21 cr",
    url: "https://www.business-standard.com/markets/capital-market-news/hscc-india-secures-order-of-rs-528-21-cr-124081400691_1.html",
    source: "Business Standard",
    time: "20240814T055800",
  },
  {
    title:
      "Stablecoin issuance could be key to the next Bitcoin rally: 10x Research",
    url: "https://cointelegraph.com/news/stablecoin-issuance-could-be-key-bitcoin-next-rally-10x-research",
    source: "Cointelegraph",
    time: "20240814T055739",
  },
  {
    title:
      "Google Co-Founder Eric Schmidt Blames Work From Home, Flexible Hours for Falling Behind OpenAI, Praises Elon Musk's Leadership: 'Look At What He Gets Out Of People'",
    url: "https://www.benzinga.com/news/24/08/40357903/google-co-founder-eric-schmidt-blames-work-from-home-flexible-hours-for-falling-behind-openai-praise",
    source: "Benzinga",
    time: "20240814T055521",
  },
  {
    title:
      "Cardinal Health Gears Up For Q4 Print; Here Are The Recent Forecast Changes From Wall Street's Most Accurate Analysts - Cardinal Health  ( NYSE:CAH ) ",
    url: "https://www.benzinga.com/news/earnings/24/08/40357895/cardinal-health-gears-up-for-q4-print-here-are-the-recent-forecast-changes-from-wall-streets-most-a",
    source: "Benzinga",
    time: "20240814T055442",
  },
  {
    title: "Pump.fun daily revenue outpaces the next 24 protocols combined",
    url: "https://cointelegraph.com/news/pump-fun-daily-revenue-outpaces-the-next-24-protocols-combined",
    source: "Cointelegraph",
    time: "20240814T055428",
  },
  {
    title:
      "Gensol, Matrix Gas win Rs 450 cr PLI scheme for hydrogen electrolyser mfg",
    url: "https://www.business-standard.com/companies/news/gensol-matrix-gas-win-rs-450-cr-pli-scheme-for-hydrogen-electrolyser-mfg-124081400642_1.html",
    source: "Business Standard",
    time: "20240814T054847",
  },
  {
    title:
      "iPhones boost Apple's India operations surge to Rs 2 trillion in FY24",
    url: "https://www.business-standard.com/companies/news/iphones-boost-apple-s-india-operations-surge-to-rs-2-trillion-in-fy24-124081400640_1.html",
    source: "Business Standard",
    time: "20240814T054349",
  },
  {
    title: "JULY VOLUMES: FREIGHT UP 9%",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929783/0/en/JULY-VOLUMES-FREIGHT-UP-9.html",
    source: "GlobeNewswire",
    time: "20240814T054000",
  },
  {
    title: "JULY VOLUMES: FREIGHT UP 9%",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929784/0/en/JULY-VOLUMES-FREIGHT-UP-9.html",
    source: "GlobeNewswire",
    time: "20240814T054000",
  },
  {
    title:
      "Ashoka Buildcon records PAT of nearly Rs 41 crore in Q1; EBITDA margin at 7.6%",
    url: "https://www.business-standard.com/markets/capital-market-news/ashoka-buildcon-records-pat-of-nearly-rs-41-crore-in-q1-ebitda-margin-at-7-6-124081400668_1.html",
    source: "Business Standard",
    time: "20240814T053800",
  },
  {
    title:
      "Ashoka Buildcon Q1 net soars 148%, order book at Rs 10K cr; stock trades up",
    url: "https://www.business-standard.com/markets/news/ashoka-buildcon-q1-net-soars-148-order-book-at-rs-10k-cr-stock-trades-up-124081400632_1.html",
    source: "Business Standard",
    time: "20240814T053704",
  },
  {
    title: "Before you continue",
    url: "https://consent.google.com/m",
    source: "Business Standard",
    time: "20240814T053641",
  },
  {
    title:
      "This Deepfake Tool Turning Images Into Livestreams is Topping the GitHub Charts",
    url: "https://decrypt.co/244565/this-deepfake-tool-turning-images-into-livestreams-is-topping-the-github-charts",
    source: "Decrypt.co",
    time: "20240814T053438",
  },
  {
    title: "Netcompany - Launch of share buyback programme",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929782/0/en/Netcompany-Launch-of-share-buyback-programme.html",
    source: "GlobeNewswire",
    time: "20240814T053200",
  },
  {
    title: "Rupee rises 7 paise to 83.90 as US dollar retreats in early trade",
    url: "https://www.business-standard.com/finance/news/rupee-rises-7-paise-to-83-90-as-us-dollar-retreats-in-early-trade-124081400531_1.html",
    source: "Business Standard",
    time: "20240814T053054",
  },
  {
    title:
      "Medigene AG Reports Half-Year 2024 Financial Results and Provides Corporate Update",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929776/0/en/Medigene-AG-Reports-Half-Year-2024-Financial-Results-and-Provides-Corporate-Update.html",
    source: "GlobeNewswire",
    time: "20240814T053000",
  },
  {
    title: "BGHL  ( GBP ) : NAV ( s ) ",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929774/0/en/BGHL-GBP-NAV-s.html",
    source: "GlobeNewswire",
    time: "20240814T053000",
  },
  {
    title: "DFDS Q2 2024 INTERIM REPORT - NAVIGATING CHALLENGING MARKETS",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929777/0/en/DFDS-Q2-2024-INTERIM-REPORT-NAVIGATING-CHALLENGING-MARKETS.html",
    source: "GlobeNewswire",
    time: "20240814T053000",
  },
  {
    title: "Sampo plc's share buybacks 13 August 2024",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929775/0/en/Sampo-plc-s-share-buybacks-13-August-2024.html",
    source: "GlobeNewswire",
    time: "20240814T053000",
  },
  {
    title: "Nykredit Realkredit A/S H1 Interim Reports 2024",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929779/0/en/Nykredit-Realkredit-A-S-H1-Interim-Reports-2024.html",
    source: "GlobeNewswire",
    time: "20240814T053000",
  },
  {
    title: "Netcompany - Interim report for the six months ended 30 June 2024",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929781/0/en/Netcompany-Interim-report-for-the-six-months-ended-30-June-2024.html",
    source: "GlobeNewswire",
    time: "20240814T053000",
  },
  {
    title: "Volumes spurt at Max Financial Services Ltd counter",
    url: "https://www.business-standard.com/markets/capital-market-news/volumes-spurt-at-max-financial-services-ltd-counter-124081400667_1.html",
    source: "Business Standard",
    time: "20240814T053000",
  },
  {
    title: "BGHL  ( EUR ) : NAV ( s ) ",
    url: "https://www.globenewswire.com/news-release/2024/08/14/2929773/0/en/BGHL-EUR-NAV-s.html",
    source: "GlobeNewswire",
    time: "20240814T053000",
  },
  {
    title:
      "India bond yields marginally lower as traders await US inflation data",
    url: "https://www.business-standard.com/markets/news/india-bond-yields-marginally-lower-as-traders-await-us-inflation-data-124081400621_1.html",
    source: "Business Standard",
    time: "20240814T052956",
  },
  {
    title: "Before you continue",
    url: "https://consent.google.com/m",
    source: "Business Standard",
    time: "20240814T052822",
  },
];
dayjs.extend(relativeTime);

export default function News() {
  return (
    <ul className="py-4 space-y-4 border border-gray-200 divide-y rounded">
      {NEWS.map((news) => (
        <li key={news.title} className="px-4 py-2 space-y-3">
          <div className="text-xs text-gray-300">
            {news.source} . {dayjs(news.time).fromNow()}
          </div>
          <Link target="_blank" to={news.url} className="inline-block text-sm">
            {news.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
