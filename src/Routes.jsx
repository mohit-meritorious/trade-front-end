import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StockExplore from "./pages/StockExplore";
import Home from "./pages/Home";
import StockInvestments from "./pages/StockInvestments";

export default function Routes() {
  const router = createBrowserRouter([
    { path: "/", Component: Home },
    {
      path: "/stock/explore",
      Component: StockExplore,
    },
    {
      path: "/stock/investments",
      Component: StockInvestments,
    },
    // add more routes as needed
  ]);
  return <RouterProvider router={router} />;
}
