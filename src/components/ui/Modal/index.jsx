import React, { Fragment, useEffect } from "react";
import useModal from "../../../hooks/store/useModal";
import { motion } from "framer-motion";
import SearchModal from "./SearchModal";
import classNames from "classnames";
import ModalOverlay from "./ModalOverlay";

export default function Modal() {
  const { open, type, top, left, right, bottom, width } = useModal();
  const variants = {
    open: { opacity: 1, duration: 300 },
    closed: { opacity: 0, duration: 300 },
  };
  const modalPosition = {};
  if (top !== undefined) {
    modalPosition.top = top + "px";
  }
  if (left !== undefined) {
    modalPosition.left = left + "px";
  }
  if (right !== undefined) {
    modalPosition.right = right + "px";
  }
  if (bottom !== undefined) {
    modalPosition.bottom = bottom + "px";
  }
  if (width !== undefined) {
    modalPosition.width = width + "px";
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <Fragment>
      {open && (
        <motion.div
          animate={open ? "open" : "closed"}
          variants={variants}
          className={classNames(
            "bg-white p-4 max-h-[500px] space-y-4 fixed z-20 overflow-y-auto rounded-b-lg",
            {
              hidden: !open,
            }
          )}
          style={modalPosition}
        >
          {type === "search" && <SearchModal />}
        </motion.div>
      )}
      <ModalOverlay />
    </Fragment>
  );
}
