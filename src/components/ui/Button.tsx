import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-brand-2 py-2 px-4 rounded-lg outline outline-transparent hover:bg-yellow-400 hover:outline-dark-3 transition-all duration-300">
      {text}
    </button>
  );
}

export default Button;
