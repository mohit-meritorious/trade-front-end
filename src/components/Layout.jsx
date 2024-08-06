import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
