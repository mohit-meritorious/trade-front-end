import classNames from "classnames";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  const location = useLocation();
  console.log(location);

  const MENU_ITEMS = [
    {
      name: "Explore",
      link: "/explore",
      active: function () {
        return location.pathname === this.link;
      },
    },
    {
      name: "Investments",
      link: "/investments",
      active: function () {
        return location.pathname === this.link;
      },
    },
  ];
  return (
    <section className="py-2">
      <div className="container">
        <div className="flex justify-between gap-10 items-center">
          <nav>
            <ul className="flex space-x-3 ml-10">
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
        </div>
      </div>
    </section>
  );
}
