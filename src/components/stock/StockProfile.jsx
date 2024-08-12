import React from "react";

export default function StockProfile({ companyName }) {
  return (
    <div className="w-10 h-10 text-xl leading-10 text-center text-white rounded-lg bg-primary-500">
      {companyName.charAt(0).toUpperCase()}
    </div>
  );
}
