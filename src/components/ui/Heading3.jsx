import classNames from "classnames";
import React from "react";

export default function Heading3({ heading, className }) {
  return (
    <h3 className={classNames("text-base font-semibold", className)}>
      {heading}
    </h3>
  );
}
