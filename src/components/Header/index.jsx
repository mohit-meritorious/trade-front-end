import classNames from "classnames";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  const location = useLocation();

  const MENU_ITEMS = [
    {
      name: "Explore",
      link: "/stock/explore",
      active: function () {
        return location.pathname === this.link;
      },
    },
    {
      name: "Investments",
      link: "/stock/investments",
      active: function () {
        return location.pathname === this.link;
      },
    },
  ];
  return (
    <section className="py-2">
      <div className="container">
        <div className="flex items-center justify-between gap-10">
          <nav>
            <ul className="flex ml-10 space-x-3">
              {MENU_ITEMS.map((menuItem) => (
                <li key={menuItem.link}>
                  <Link
                    className={classNames(
                      "text-lg underline-offset-0 hover:underline  hover:underline-offset-4 duration-300 transition-all",
                      {
                        "text-primary-500": menuItem.active(),
                        "text-gray-700": !menuItem.active(),
                      }
                    )}
                    to={menuItem.link}
                  >
                    {menuItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Search />

          <div className="profile">
            <div className="w-10 h-10 text-xl leading-10 text-center text-white rounded-full bg-primary-500">
              M
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
