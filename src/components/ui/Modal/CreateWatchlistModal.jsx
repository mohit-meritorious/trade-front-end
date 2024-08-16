import React from "react";
import ModalHeader from "./ModalHeader";
import Input from "../form/Input";

export default function CreateWatchlistModal() {
  return (
    <div className="w-full space-y-10">
      <ModalHeader heading={"Create New Watchlist"} />

      <form className="space-y-10 ">
        <Input placeholder={"Enter Name"} />
        <button className="w-full py-2 text-white rounded-md bg-primary-500">
          CREATE
        </button>
      </form>
    </div>
  );
}
