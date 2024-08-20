import React, { Fragment, useEffect } from "react";
import useModal, { MODAL_TYPES } from "../../../hooks/store/useModal";
import { motion } from "framer-motion";
import SearchModal from "./SearchModal";
import classNames from "classnames";
import ModalOverlay from "./ModalOverlay";
import PerformanceModal from "./PerformanceModal";
import AnalystEstimatesModal from "./AnalystEstimatesModal";
import FundamentalsMdoal from "./FundamentalsModal";
import CreateWatchlistModal from "./CreateWatchlistModal";
import OpenInterestModal from "./OpenInterestModal";

export default function Modal() {
  const { open, type, top, left, right, bottom, width, closeModal } =
    useModal();
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
  } else {
    modalPosition.width = "600px";
  }

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }

      // if()
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", keyDownHandler);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [closeModal, open]);

  return (
    <Fragment>
      {open && (
        <motion.div
          animate={open ? "open" : "closed"}
          variants={variants}
          className={classNames(
            "fixed z-30 bg-white  p-5 max-h-[500px] space-y-4 overflow-y-auto",
            {
              hidden: !open,
              "rounded-b-lg": type === MODAL_TYPES.SEARCH,
              "top-1/2 left-1/2 rounded-lg -translate-y-1/2 -translate-x-1/2 grid place-items-center":
                type !== MODAL_TYPES.SEARCH,
            }
          )}
          style={modalPosition}
        >
          {type === MODAL_TYPES.SEARCH && <SearchModal />}
          {type === MODAL_TYPES.PERFORMANCE && <PerformanceModal />}
          {type === MODAL_TYPES.ANALYST_ESTIMATES && <AnalystEstimatesModal />}
          {type === MODAL_TYPES.FUNDAMENTALS && <FundamentalsMdoal />}
          {type === MODAL_TYPES.CREATE_WATHCLIST && <CreateWatchlistModal />}
          {type === MODAL_TYPES.OPEN_INTEREST && <OpenInterestModal />}
        </motion.div>
      )}
      <ModalOverlay />
    </Fragment>
  );
}
