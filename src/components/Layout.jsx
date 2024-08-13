import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Modal from "./ui/Modal";
import classNames from "classnames";
import useModal from "../hooks/store/useModal";

export default function Layout() {
  const { open } = useModal();

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
