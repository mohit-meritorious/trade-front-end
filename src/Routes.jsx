import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StockExplore from "./pages/StockExplore";
import Home from "./pages/Home";
import StockInvestments from "./pages/StockInvestments";
import AllIndices from "./pages/AllIndices";
import Layout from "./components/Layout";
import TopGainerOrLoser from "./pages/TopGainerOrLoser";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,

      children: [
        { path: "/", Component: Home },
        {
          path: "/stock/explore",
          Component: StockExplore,
        },
        {
          path: "/stock/investments",
          Component: StockInvestments,
        },
        {
          path: "/indices",
          Component: AllIndices,
        },
        {
          path: "/top-gainers-losers",
          Component: TopGainerOrLoser,
        },
      ],
    },
    // add more routes as needed
  ]);
  return <RouterProvider router={router} />;
}
