import React from "react";

export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-gradient-to-r from-[#0EA5E9] to-[#84CC16] text-[#1E1E2F] rounded-lg hover:scale-105 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
