import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Modal from "./ui/Modal";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="container pb-4">
          <Outlet />
        </div>
        <div>
          <Modal />
        </div>
      </main>
    </>
  );
}
