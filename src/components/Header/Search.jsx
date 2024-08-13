import React, { useEffect, useRef } from "react";
import SearchIcon from "../Icon/SearchIcon";
import classNames from "classnames";
import useModal from "../../hooks/store/useModal";

export default function Search({ headerRef }) {
  const { openModal, type, open } = useModal();
  const searchRef = useRef();
  const headerHeight = headerRef?.current?.clientHeight || 42;

  useEffect(() => {
    if (!searchRef.current) {
      return;
    }
    const handleResize = () => {
      if (!open) {
        return;
      }
      openModal(
        "search",
        {
          top: headerHeight,
          right: 0,
          left: searchRef?.current?.getBoundingClientRect()?.left || 0,
        },
        searchRef?.current?.getBoundingClientRect()?.width || 825
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [headerHeight, open, openModal]);
  console.log(headerHeight);

  return (
    <>
      <div
        className={classNames(
          "relative z-20 flex items-center w-full px-4 py-2 text-base bg-white border transition-all duration-300 global-search border-gray-150",
          { "rounded-t-lg": type === "search", "rounded-lg": type !== "search" }
        )}
        ref={searchRef}
      >
        <div className="flex items-center justify-center mr-3 icon">
          <SearchIcon className={"size-4"} />
        </div>
        <div className="input-wrapper grow">
          <input
            placeholder="What are you looking for today?"
            onFocus={() => {
              openModal(
                "search",
                {
                  top: headerHeight,
                  right: 0,
                  left: searchRef?.current?.getBoundingClientRect()?.left || 0,
                },
                searchRef?.current?.getBoundingClientRect()?.width || 825
              );
            }}
            className="w-full text-sm text-gray-700 bg-white caret-primary-500 focus-visible:outline-none"
          />
        </div>
      </div>
    </>
  );
}
