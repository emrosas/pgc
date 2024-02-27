import React from "react";
import Extras from "../assets/extras.svg";
import Cancel from "../assets/cancel.svg";
import ModalWrapper from "./ui/ModalWrapper";
import ModalAddPoints from "./ModalAddPoints";
import ModalRandomPicker from "./ModalRandomPicker";

function GameModals() {
  return (
    <aside className="col-span-2 rounded-xl flex py-page">
      <div className="flex flex-col flex-grow gap-4">
        <ModalWrapper children={<ModalAddPoints />} />
        <ModalWrapper children={<ModalRandomPicker />} />
        {/* <ModalWrapper children={<div />} /> */}
      </div>
    </aside>
  );
}

export default GameModals;
