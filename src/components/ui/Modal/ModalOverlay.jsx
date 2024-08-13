import React from "react";
import { motion } from "framer-motion";
import useModal from "../../../hooks/store/useModal";
import classNames from "classnames";

export default function ModalOverlay() {
  const { open, closeModal } = useModal();
  const variants = {
    open: { opacity: 1, duration: 300 },
    closed: { opacity: 0, duration: 300 },
  };
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      variants={variants}
      onClick={() => {
        closeModal();
      }}
      className={classNames("bg-[rgba(0,0,0,0.5)] inset-0 fixed", {
        hidden: !open,
      })}
    ></motion.div>
  );
}
