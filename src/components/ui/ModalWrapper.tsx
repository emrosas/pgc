import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ModalWrapper({ children }: Props) {
  return (
    <div className="flex flex-col flex-grow justify-center px-8 py-4 bg-light-3 rounded-xl border border-dark-3 border-opacity-25">
      {children}
    </div>
  );
}

export default ModalWrapper;
