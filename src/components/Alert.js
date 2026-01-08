import React from "react";

export default function Alert({ type = "info", children }) {
  const styles = {
    info: "border-blue-300 bg-blue-50 text-blue-800",
    warning: "border-yellow-300 bg-yellow-50 text-yellow-800",
    success: "border-green-300 bg-green-50 text-green-800",
    danger: "border-red-300 bg-red-50 text-red-800",
  };

  return (
    <div
      className={`border-l-4 p-3 my-4 rounded-md ${styles[type] || styles.info}`}
    >
      {children}
    </div>
  );
}
