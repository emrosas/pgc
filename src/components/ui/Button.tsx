import React from "react";

interface ButtonProps {
  text: string;
  mode?: "primary" | "secondary";
  onClick: (e: any) => void;
}

function Button({ text, onClick, mode = "primary" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`py-2 h-full px-4 font-medium rounded-lg outline outline-transparent hover:outline-dark-3 transition-all duration-300 ${
        mode === "primary"
          ? "bg-brand-2 hover:bg-amber-500"
          : "bg-brand-3 hover:bg-orange-600"
      }`}>
      {text}
    </button>
  );
}

export default Button;
