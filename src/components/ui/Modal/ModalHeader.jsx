import React from "react";
import Heading3 from "../Heading3";
import CloseIcon from "../../Icon/CloseIcon";
import useModal from "../../../hooks/store/useModal";

export default function ModalHeader({ heading, description }) {
  const { closeModal } = useModal();
  return (
    <div className="space-y-3">
      <div className="flex">
        <Heading3 heading={heading} className={"grow"} />
        <button onClick={closeModal}>
          <CloseIcon className="transition-all duration-300 size-5 hover:rotate-90" />
        </button>
      </div>
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
  );
}
