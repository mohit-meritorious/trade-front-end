import React from "react";
import SearchIcon from "../Icon/SearchIcon";

export default function Search() {
  return (
    <div className="global-search border-gray-150 border rounded-lg py-2 px-4 text-base flex items-center w-full">
      <div className="icon flex items-center justify-center mr-3">
        <SearchIcon className={"size-4"} />
      </div>
      <div className="input-wrapper grow">
        <input
          placeholder="What are you looking for today?"
          className="bg-white caret-primary-500 text-gray-700 text-sm w-full focus-visible:outline-none"
        />
      </div>
    </div>
  );
}
