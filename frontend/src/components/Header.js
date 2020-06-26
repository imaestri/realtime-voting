import React from "react";

export default function Header({ children }) {
  return (
    <h3
      style={{
        textAlign: "center",
        fontFamily: "Times New Roman, Times, serif",
      }}
    >
      {children}
    </h3>
  );
}
