import { useState } from "react";
import Extras from "../assets/extras.svg";
import Cancel from "../assets/cancel.svg";
import ModalWrapper from "./ui/ModalWrapper";
import ModalAddPoints from "./ModalAddPoints";
import ModalTimer from "./ModalTimer";
import ModalRandomPicker from "./ModalRandomPicker";

function GameModals() {
  const [showModal, setShowModal] = useState(false);
  const modalClasses =
    "fixed inset-0 bg-dark-1 px-page bg-opacity-75 flex items-center pb-20";

  return (
    <>
      <aside
        className={`${
          showModal ? modalClasses : "hidden"
        } lg:relative lg:flex col-span-2 lg:rounded-xl py-page`}>
        <div className="flex flex-col flex-grow gap-4">
          <ModalWrapper children={<ModalAddPoints />} />
          <ModalWrapper children={<ModalRandomPicker />} />
          <ModalWrapper children={<ModalTimer />} />
        </div>
      </aside>
      <button
        className={`${
          showModal ? "bg-brand-3" : "bg-brand-2"
        } fixed right-page bottom-page p-2 border border-dark-3 border-opacity-50 rounded-lg lg:hidden`}
        onClick={() => setShowModal(!showModal)}>
        <img src={showModal ? Cancel : Extras} alt="Extras" />
      </button>
    </>
  );
}

export default GameModals;
