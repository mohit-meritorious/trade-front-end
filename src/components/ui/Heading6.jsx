import React from "react";
import classNames from "classnames";
export default function Heading6({ heading, className }) {
  return (
    <h6 className={classNames(className, "text-xs font-semibold")}>
      {heading}
    </h6>
  );
}
