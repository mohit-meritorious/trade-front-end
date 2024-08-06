import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StockExplore from "./pages/StockExplore";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: StockExplore,
    },
    // add more routes as needed
  ]);
  return <RouterProvider router={router} />;
}
