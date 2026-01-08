import React from "react";

export function Card({ children }) {
  return (
    <div className="border border-gray-200 shadow-sm rounded-xl my-4">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div className="p-4">
      {children}
    </div>
  );
}
