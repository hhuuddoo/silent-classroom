import React from "react";

export default function Panel({ children }) {
  return (
    <div className="panel-container">
      <div className="panel">{children}</div>
    </div>
  );
}
